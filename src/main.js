// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import FastClick from 'fastclick'
Vue.use(Vuex)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false;

(function (doc, win) {
	var docEl = doc.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function () {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        if(clientWidth>=640){
	            docEl.style.fontSize = '100px';
	        }else{
	            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
	        }
	    };

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)
//FastClick
if ('addEventListener' in document) {     
  document.addEventListener('DOMContentLoaded', function() {         
    FastClick.attach(document.body);      }, false);
 }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
