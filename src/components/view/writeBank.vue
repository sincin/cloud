<template>
    <div class="writeBank">
      <view-box ref="viewBox">
	      <x-header title="我的银行卡" :left-options="{backText: '微信'}"></x-header>
	      <group  class="bank-form">
          <h1 slot="title" class="bank-form-item">请输入您的银行卡信息</h1>
	        <x-input  placeholder="请输入银行卡号">
           <span slot="label" class="title">银行卡号</span> 
          </x-input>
           <cell   primary >
            <span slot="title" class="title">卡类型</span> 
             <div slot class="select">
               <span>请选择</span><img src="../../assets/img/icon-xiala@2x.png">
               <ul>
                 <li>储蓄卡</li>
                 <li>信用卡</li>
               </ul>
             </div>
           </cell>
            <cell   primary >
              <span slot="title" class="title">发卡银行</span> 
              <div slot class="select">
               <span>请选择</span><img src="../../assets/img/icon-xiala@2x.png">
               <ul>
                 <li>招商银行</li>
                 <li>中国银行</li>
               </ul>
             </div>
           </cell>
           <x-input  placeholder="请输入预留手机号">
             <span slot="label" class="title">银行预留手机号</span>
           </x-input>
           <x-input   placeholder="请输入验证码">
             <span slot="label" class="title">短信验证</span>
             <span slot="right" class="send-code">获取验证码</span>
           </x-input>
	      </group>
        <x-button type="primary" class="submit-btn">提交</x-button>
        <p class="agreement">
          提交即视为同意
          <router-link  to="">《用户授权服务协议》</router-link>
        </p>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell } from 'vux'
    export default {
        name: "getMoney",
         data () {
          return {
            list:[]
          }
        },
        components: {
          XHeader,
          ViewBox,
          XImg,
          Group,
          XInput,
          XButton,
          Card,
          Cell
        }
    }
</script>

<style scoped lang="less">
.writeBank{
  height: 100%;
  padding-top: 46px;
  background: #F4F5F6;
  .bank-form{
     .bank-form-item{
        color:#5B83E4;
        font-size:0.28rem;
        text-align:left;
        line-height:38px;
        padding:0 15px;
        border-bottom:solid 1px #D9D9D9;
     }
    .weui-cell:before {
      height:0px !important;
      border:none !important;
    }
    .title{
      width:3rem;
      text-align: left;
      display:inline-block;
      font-size:0.34rem
    }
  }
  .submit-btn{
    width:5.37rem;
    margin:24px auto 0;
    background:#5B83E4;
    color:#FFF;
  }
  .send-code{
    color:#7695E6;
    padding-left:5px;
    border-left:solid 1px #A1A1A1;
    font-size:0.3rem;
  }
  .agreement{
    font-size:0.28rem;
    text-align:center;
    line-height:40px;
    a{
      color:#7390EE
    }
    
  }
  .select{
    position:relative;
    img{
      width:12px;
      height:7px;
      margin-left:7px;
      vertical-align:middle;
    }
    ul{
      position:absolute;
      top:0px;
      left:0;
      background:#FFF;
      border:solid 1px #D9D9D9;
      z-index:1;
      li{
        line-height:40px;
        width:1.65rem;
        text-align:center;
      }
    }
  }
}
</style>

