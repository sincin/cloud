<template>
  <div class="register">
    <view-box ref="viewBox">
       <x-header title="小云贝" :left-options="{backText: '微信'}"></x-header>
       <img  class="register-logo" src="../../assets/img/registerBanner.png"/>
      <div class="register-form">
       <group  class="tel-code" gutter="0">
          <x-input title="手机号" name="tel" placeholder="请输入手机号" is-type="china-mobile" class="tel"></x-input>
          <x-input title="验证码" class="weui-vcode" placeholder="请输入验证码" >
           <x-button slot="right" type="primary" mini class="send-code">获取验证码</x-button>
          </x-input>
       </group>
        <group gutter="0" class="set-password">
          <x-input title="设置登录密码" type="text" placeholder="请输入6-18位数字+字母" ></x-input>
          <x-input title="确认登录密码" type="text" placeholder="请再次输入秘密" :equal-with="password"></x-input>
        </group>
        <x-button slot="right" type="primary"  class="register-btn">登录并注册</x-button>
      </div>
    </view-box>
  </div>
</template>

<script>
import {  ViewBox, XHeader, XImg, Group, XInput, XButton } from 'vux'
export default {
  name: 'register',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .weui-cells{
    border-radius: 15px;
  }

.register{
  background: #F4F5F6;
  position: relative;
  height: 100%;
  .register-logo{
    width: 100%;
    height: 220px;
    background-color: aqua;
  }

  .register-form{
    position: absolute;
    top:175px;
    width: 6.8rem;
    left: 0.35rem;
    .weui-cell{
      padding: 20px 15px;
    }
    .send-code{
      background: #5B84E5;
      width: 2rem;
      padding: 0;
      height: 24px;
      border-radius:8px;
      line-height: 24px
    ;
    }
    .tel-code{
      margin-top: 11px;
      background: #fff;
      border-radius: 15px;
      border: solid 1px #D9D9D9;

    }
    .set-password{
      margin-top: 11px;
      background: #fff;
      border-radius: 15px;
      border: solid 1px #D9D9D9;
    }
    .register-btn{
      background: #5B83E4;
      border-radius: 48px;
      border-radius: 24px;
      margin-top: 20px;
    }

  }
}
</style>
