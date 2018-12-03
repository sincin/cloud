<template>
  <div class="my">
   
      <x-header title="个人中心" :left-options="{backText: '微信'}"></x-header>
      <card class="my-card">
        <p slot="header" class="card-header">会员说明？</p>
        <div slot="content">
          <div class="my-pic">
            <img src="" width="100%" height="100% ">
          </div>
          <p class="my-name">云贝</p>
          <p class="my-tel">18365266810</p>
        </div>
      </card>
      <group class="my-list">
        <cell title="账户余额：" value="888" primary >
          <img slot="icon"  src="../../assets/img/my_06.png" width="30px">
          <x-button mini type="primary" class="get-money-btn" slot="child">提现</x-button>
        </cell>
        <cell title="待还余额：" value="888" primary >
          <img slot="icon"  src="../../assets/img/waitPay_03.png" width="30px">
          <x-button mini type="primary" class="return-money-btn" slot="child">还款</x-button>
        </cell>
        <cell is-link align-items="left" primary>
          <img slot="icon"  src="../../assets/img/my_09.png" width="30px">
          <p slot="title" class="title">借款记录</p>
        </cell>
        <cell is-link align-items="left" primary>
          <img slot="icon"  src="../../assets/img/my_11.png" width="30px">
          <p slot="title" class="title">我的银行卡</p>
        </cell>
        <cell is-link align-items="left" primary>
          <img slot="icon"  src="../../assets/img/my_13.png" width="30px">
          <p slot="title" class="title">我的优惠券</p>
        </cell>
        <cell is-link align-items="left" primary link="/resetPsw">
          <img slot="icon"  src="../../assets/img/my_15.png" width="30px">
          <p slot="title" class="title">修改密码</p>
        </cell>
      </group>
   
  </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell } from 'vux'
    export default {
        name: "my",
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
  .my{
    background: #F4F5F6;
    height: 100%;
    padding-top:33px;
    .my-card{
      background: url("../../assets/img/my_02.png");
      background-size: 100% 100%;
      height: 160px;
      
      .card-header{
        color: #fff;
        font-size: 12px;
        text-align: right;
        margin-top:10px;
      }
      .my-pic{
        width: 84px;
        height: 84px;
        border-radius: 84px;
        background: #000;
        margin: 0 auto;
      }
      .my-name{
        color: #fff;
        font-size: 18px;
        line-height: 20px;
        margin-top: 10px;
      }
      .my-tel{
        color: #fff;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .my-card:before{
      height: 0px !important;
      border: none !important;
    }
    .my-list{
      background: #fff;
      .weui-cell_access .weui-cell__ft:after{
        border: @cell-default-arrow-width;
      }
      .weui-cell{
        padding: 18px 15px;
      }
      img{
        vertical-align: middle;
      }
      .get-money-btn,.return-money-btn{
        position: absolute;
        right: 15px;
        top: 18px;
        background: #5B83E4;
      }
      .title{
        width: 6rem;
        text-align: left;
      }
    }
  }

</style>
