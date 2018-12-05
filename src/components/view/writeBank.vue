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
               <div @click="showbankType = !showbankType"><span>{{bankType}}</span><img src="../../assets/img/icon-xiala@2x.png"></div>
               <ul v-if="showbankType">
                 <li v-for="(item,index) in bankTypes" :key="index" @click="selectBankType(item,index)" :class="index === bankTypeIndex ? 'active' : ' '">{{item}}</li>
               </ul>
             </div>
           </cell>
            <cell   primary >
              <span slot="title" class="title">发卡银行</span> 
              <div slot class="select">
               <div @click="showBankName = ! showBankName"><span>{{bankName}}</span><img src="../../assets/img/icon-xiala@2x.png"></div>
               <ul v-if="showBankName">
                 <li v-for="(item,index) in bankNames" :key="index" @click="selecBankName(item,index)" :class="index === bankNameIndex ? 'active' : ' '">{{item}}</li>
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
      <x-dialog v-model="success" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}" >
        <p style="color:#fff;text-align:center;" @click="success = false">
          <div class="bank-scucess">
            <img src="../../assets/img/right.png">
            <p>绑定成功</p>
            <x-button type="primary" class="sure-btn">确定</x-button>
         </div>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
      <x-dialog v-model="fail" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}" >
        <p style="color:#fff;text-align:center;" @click="fail = false">
          <div class="bank-fail">
            <img src="../../assets/img/fail.png">
            <p class="fail-warn">绑定失败</p>
            <p class="fail-check">请检查是否有误</p>
            <x-button type="primary" class="sure-btn">确定</x-button>
         </div>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell, XDialog } from 'vux'
    export default {
        name: "getMoney",
         data () {
          return {
            list:[],
            showbankType:false,
            showBankName:false,
            bankTypes:['储蓄卡','信用卡'],
            bankNames:['中国银行','招商银行'],
            bankTypeIndex:0,
            bankNameIndex:0,
            bankType:'请选择',
            bankName:'请选择',
            showDialogStyle:true,
            success:false,
            fail:true
          }
        },
        methods:{
          selectBankType(item,index){
            this.bankTypeIndex = index;
            this.bankType = item;
            this.showbankType = false;
          },
          selecBankName(item,index){
            this.bankNameIndex = index;
            this.bankName = item;
            this.showBankName = false;
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
          Cell,
          XDialog
        }
    }
</script>

<style scoped lang="less">
.writeBank{
  height: 100%;
  padding-top: 46px;
  background: #F4F5F6;
  .bank-form{
    background: #fff;
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
    a {
      color: #7390EE
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
      top:34px;
      left:0;
      background:#FFF;
      border:solid 1px #D9D9D9;
      z-index:1;
      li{
        line-height:40px;
        width:1.65rem;
        text-align:center;
      }
      .active{
        color: #fff;
        background: #5B83E4;
      }
    }
  }
  .bank-scucess{
    width: 5.78rem;
    margin: 0 auto;
    background: #fff;
    border-radius:10px;
    padding:0.53rem 0;
    img{
      width:56px;
      height:66px
    }
    p{
      color:#404040;
      font-size:0.32rem;
      text-align:center;
    }
    .sure-btn{
      width:4rem;
      margin:0 auto;
      background: linear-gradient(to right, #9BDF74 , #6CCA4E);
      color:#fff;
      margin-top:0.3rem;
    }
  }
  .bank-fail{
    width: 5.78rem;
    margin: 0 auto;
    background: #fff;
    border-radius:10px;
    padding:0.53rem 0;
    img{
      width:56px;
      height:66px
    }
    .fail-warn{
      color:#404040;
      font-size:0.32rem;
      line-height:20px;
    }
    .fail-check{
      color:404040;
      font-size:0.28rem;
      line-height:30px;
      margin-top:0.23rem;
    }
    .sure-btn{
      background: linear-gradient(to right, #FBA502 , #FF6C1C);
      color:#fff;
      width:4rem;
      margin:0 auto;
      margin-top:0.3rem;
    }
  }
}
</style>
