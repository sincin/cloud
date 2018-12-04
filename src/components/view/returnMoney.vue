<template>
    <div class="returnMoney">
      <view-box ref="viewBox">
	      <x-header title="还款" :left-options="{backText: '微信'}"></x-header>
        <img  class="return-logo" src="../../assets/img/return_02.png"/>
        <card class="return-card">
          <div slot="header" class="return-item">还款信息</div>
          <div slot="content" class="card-padding">
           <cell title="账户余额：" value="2345435646554" primary class="balance">
             <span slot="after-title" class="updata-btn">修改</span>
           </cell>
           <cell title="所属银行：" value="招商银行" primary class="bank">
           </cell>
          </div>
        </card>
        <x-button type="primary" class="return-money-btn">立即还款</x-button>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell } from 'vux'
    export default {
        name: "getMoney",
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
.returnMoney{
  height: 100%;
  padding-top:46px;
  background: #F4F5F6;
  .return-logo{
    height:237px;
  }
  .return-card{
    width:6.92rem;
    margin:-70px auto 0;
    background:#fff;
    border:solid 1px #D9D9D9;
    border-radius:15px;
    .return-item{
      line-height:59px;
      text-align:center;
      color:#474747;
      font-size:0.36rem;
      border-bottom:solid 1px #D9D9D9;
    }
  }
  .return-money-btn{
    width:5.37rem;
    color:#fff;
    background:#5B83E4;
    margin-top:30px;
    font-size:0.36rem;
  }
  .balance{
    position:relative;
    font-size:0.34rem;
    border-raduis:15px;
    padding:18px 15px;
    span{
      font-size:0.26rem;
      color:#2A75E9;

    }
  }
  .updata-btn{
    position:absolute;
    right:15px;
    top:23px;
  }
  .bank{
    font-size:0.34rem;
    padding:18px 15px;
    .weui-cell:before{
      height:0 !important;
      border:none !important;
    }
  }
}
</style>

