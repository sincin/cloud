<template>
    <div class="login">
      <view-box ref="viewBox">
        <x-header title="登录" :left-options="{backText: '微信'}"></x-header>
        <group  class="tel-code" >
          <x-input title="手机号" name="tel" placeholder="" is-type="china-mobile" class="tel"></x-input>
          <x-input title="登录密码" type="text" placeholder="" class="pass"></x-input>
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
    margin:0 auto;
    background: #fff;
    line-height: 46px;
    border-radius: 23px;
    color: #5C77E1;
    border-color: #fff;
  }
}
</style>
