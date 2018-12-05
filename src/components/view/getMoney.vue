<template>
    <div class="getMoney">
      <view-box ref="viewBox">
	      <x-header title="提现" :left-options="{backText: '微信'}"></x-header>
	      <group>
	        <card class="flex bank-info">
	          <div slot="header" class="bank-logo">
	            <img  src="" width="100%" height="100%">
	          </div>
	          <div slot="content" class="card-padding">
	            <p class="bank-name">招商银行</p>
	            <p class="bankNo">787799847777666686666699999</p>
	          </div>
	        </card>
	        <cell title=" 可提现金额余额：" value="888元" primary class="get-use">
	          <x-button mini type="primary" class="get-money-btn" slot="child">全部提现</x-button>
	        </cell>
	        <x-input  title="提现金额：" class="get-money-input" placeholder="请输入提现金额" >
	           <span slot="right">元</span>
	        </x-input>
	        <div class="poundage">手续费：<span>10</span>元</div>
	        <x-button type="primary" class="cash">提现</x-button>
	      </group>
      </view-box>
      <x-dialog v-model="vip" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}" >
        <p style="color:#fff;text-align:center;" @click="vip = false">
          <div class="vip-box">
            <img src="../../assets/img/buyVip.png" width="100%">
            <x-button type="primary" class="buy-use">购买并使用</x-button>
            <span class="vip-des" @click="showDes = true">会员说明</span>
            <div class="des-detail" v-if="showDes">
              <p>1、会员等级根据用户购买次数进行升级；</p>
              <p>2、用户每购买一次会员奖励50经验点;</p>
              <p>3、会员等级是系统优先发放优惠券的唯一 标准；</p>
            </div>
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
            vip:true,
            showDes:false
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
.getMoney{
  height: 100%;
  padding-top: 55px;
  background: #F4F5F6;
  .bank-info{
    padding: 20px 15px;
  }
  .get-use{
      padding: 18px 15px;
      .weui-cell__ft{
        color: @cell-value-color;
      }
      .get-money-btn{
        background: #F4F5F6;
        color: #5B83E4;
        border:solid 1px #5B83E4;
      }
  }
  .card-padding{
    padding-left: 0.64rem;
  }
  .bank-logo{
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: #000;
  }
  .bank-name{
    color: #404040;
    font-size: 0.32rem;
    text-align: left;
    line-height: 30px;
  }
  .bankNo{
    color: #A1A1A1;
    font-size: 14px;
    text-align: left;
    line-height: 0.3rem;
  }
  .get-money-btn{
    position: absolute;
    right: 15px;
    top:25%
  }
  .get-money-input{
  	background:#fff;
  	padding: 18px 15px;
  }
  .poundage{
  	padding:0px 15px;
  	text-align:right;
     color:#404040;
     font-size:16px;
     span{
     	color:#5B83E4;
     }
  }
  .cash{
  	margin-top:30px;
  	width:5.37rem;
  	color:#fff;
  	background:#5B83E4
  }
  .vip-box{
    width:5.12rem;
    margin:0 auto;
    background:#fff;
    .buy-use{
      background: linear-gradient(to right, #D6B16D , #D6B16C);
      width:4rem;
      line-height:42px;
      border-radius:21px;
      font-size:0.32rem;
    }
    .vip-des{
      text-align:center;
      color:#A1A1A1;
      font-size:0.28rem;
    }
    .des-detail{
      padding:0 0.3rem 0.4rem;
      p{
        color:#A1A1A1;
        font-size:0.24rem;
        line-height:30px;
        text-align:left
      }
    }
  }

}
</style>

