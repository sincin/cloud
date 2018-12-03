<template>
    <div class="resetpsw">
      <view-box ref="viewBox">
        <x-header title="修改密码" :left-options="{backText: '微信'}"></x-header>

        <group class="form-input">
          <x-input title="必须输入2333"  placeholder="请输入短信验证码">
            <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/reset_03.png" width="24" height="24">
            <x-button slot="right" type="default" mini plain class="get-code" >获取验证码</x-button>
          </x-input>
        </group>
        <group class="form-input">
          <x-input title="必须输入2333"  placeholder="请输入您的新密码">
            <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/reset_08.png" width="24" height="24">
          </x-input>
        </group>
        <group class="form-input">
          <x-input title="必须输入2333"  placeholder="87878787">
            <img slot="label" style="padding-right:10px;display:block;" src="../../assets/img/reset_08.png" width="24" height="24">
          </x-input>
        </group>
        <x-button type="primary" class="update-btn">
          确认修改
        </x-button>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton } from 'vux'
    export default {
      name: "resetPsw",
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
.resetpsw{
  background: #F4F5F6;
  height: 100%;
  padding-top:33px;
  .get-code{
    background: #fff;
    color: #5B83E4;
    border: none;
  }
  .update-btn{
    width: 5.37rem;
    margin-top: 80px;
    line-height: 49px;
    background: #5B83E4;
  }
  .form-input{
    background: #fff;
    width: 7rem;
    margin: 25px auto;
    img{
      width: 30px;
      height: auto;
    }
  }
}
</style>
