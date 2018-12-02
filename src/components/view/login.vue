<template>
    <div class="login">
      <view-box ref="viewBox">
        <x-header title="登录" :left-options="{backText: '微信'}"></x-header>
        <group  class="tel-code" title-color="rgba(255,255,255,0)">
          <x-input title="手机号" name="tel" placeholder="" is-type="china-mobile" class="tel"></x-input>
          <x-input title="登录密码" type="text" placeholder="" class="pass"></x-input>
          <router-link to="" class="forget-pwd">忘记密码</router-link>
        </group>
        <x-button class="login-btn" plain type="primary">登录</x-button>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton } from 'vux'
    export default {
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      components: {
        XHeader,
        ViewBox,
        XImg,
        Group,
        XInput,
        XButton
      }
    }
</script>

<style scoped lang="less">

.login{

  height: 100%;
  background: url("../../assets/img/loginBanner.png");
  background-size: 100% 100%;
  .weui-cell:before{
    height: 0px;
    border: none;
  }
  .weui-cell:after {
    height: 0px;
    border: none;
  }
  .login-btn{
    width: 5.2rem;
    margin:74px auto 0;
    background: #fff;
    line-height: 46px;
    border-radius: 23px;
    color: #5C77E1;
    border-color: #fff;
  }
  .tel-code{
    color: #D9D9D9;
    margin-top: 115px;
  }
  .tel:after,.pass:after{
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    border-bottom: solid 1px #D9D9D9;
    width: 6rem;
    left: 0.5rem;
  }
  .forget-pwd{
    color: #D9D9D9;
    font-size: 12px;
    text-align: right;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin: 10px 1rem;
  }
}
</style>
