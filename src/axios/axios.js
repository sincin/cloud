import Axios from 'axios';
import Vue from 'vue';
import router from './router';
let oAuth = new OAuth();
export const axios = Axios.create({
    baseURL: process.env.API_ROOT,
});
let axiosMethod = '';
let last = null;
axios.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = oAuth.getAuthHeader();
    axiosMethod = config.method;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function(config) {
    return config;
}, function(error) {
    let code = error.response.status;
    if(code === 401) {
        clearTimeout(last);
        last = setTimeout(function() {
            alert("登录已超时");
            Vue.prototype.$oauth.logout();
            router.replace({
                    path: 'login',
                    query: {redirect: router.currentRoute.fullPath}
            });
        }, 500);
    } else if(code === 403) {
        if(axiosMethod === 'post'|| axiosMethod === 'put' || axiosMethod === 'patch') {
            clearTimeout(last);
            last = setTimeout(function() {
                alert("很抱歉，您没有权限");
            }, 500);
        } else if(axiosMethod === 'get') {
            clearTimeout(last);
            last = setTimeout(function() {
                alert("很抱歉，您没有权限");
                //window.location.href = '/login';
            }, 500);
        }
    }
    return Promise.reject(error);
});