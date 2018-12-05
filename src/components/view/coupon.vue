<template>
    <div class="couponList">
      <view-box ref="viewBox">
	      <x-header title="我的优惠券" :left-options="{backText: '微信'}"></x-header>
	      <div v-if="couponShow">
          <card class="coupon ">
            <img src="../../assets/img/interest-free-use.png" width="100%" slot="header">
            <div slot="content" class="coupon-detail">
              <div class="coupon-content fl" >
                <p class="coupon-data ">7天免息期</p>
                <p class="coupon-use">购买会员自动使用</p>
              </div>
              <div class="coupon-status use-status fr">未使用</div>
            </div>
          </card>
           <card class="coupon interest-free-used clearfix">
            <img src="../../assets/img/interest-free-used.png" width="100%" slot="header">
            <div slot="content" class="coupon-detail">
              <div class="coupon-content fl" >
                <p class="coupon-data">7天免息期</p>
                <p class="coupon-use">购买会员自动使用</p>
              </div>
              <div class="coupon-status used-status fr" >已使用</div>
            </div>
          </card>
          <card class="coupon over-rate-used clearfix">
            <img src="../../assets/img/lower-rate-used.png" width="100%" slot="header">
            <div slot="content" class="coupon-detail">
              <div class="coupon-content fl" >
                <p class="coupon-data">7天免息期</p>
                <p class="coupon-use">购买会员自动使用</p>
              </div>
              <div class="coupon-status used-status fr" >已过期</div>
            </div>
          </card>
          <card class="coupon lower-rate-use clearfix">
            <img src="../../assets/img/lower-rate-use.png" width="100%" slot="header">
            <div slot="content" class="coupon-detail">
              <div class="coupon-content fl" >
                <p class="coupon-data">7天免息期</p>
                <p class="coupon-use">购买会员自动使用</p>
              </div>
              <div class="coupon-status use-status fr" >未使用</div>
            </div>
          </card>
        </div>
         <div v-if="!couponShow">
             <img src="../../assets/img/coupon-empty_03.png" class="coupon-empty">
         </div>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell, XDialog,  Datetime } from 'vux'
    export default {
        name: "loanList",
         data () {
          return {
             couponShow:false
          }
        },
        methods:{
         
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
          XDialog,
          Datetime
        }
    }
</script>

<style lang="less">
.couponList{
  height: 100%;
  padding-top: 70px;
  background: #F4F5F6;
  .interest-free-use{
     -background:url('../../assets/img/interest-free-use.png') no-repeat;
     -background-size:100% 100%;
  }
  .coupon{
    width:7.23rem;
    margin:12px auto;
    position:relative;
    .coupon-detail{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        padding:15px 15px 0;
    }
    .coupon-content{
      text-align:left;
      padding-left:2.79rem;
      .coupon-data{
        color:#252729;
        font-size:0.32rem;
        line-height:30px;
      }
      .coupon-use{
        font-size:0.3rem;
        color:#A7A9AB;
        line-height:30px;
      }
    }
    .coupon-status{
      width:16px;
      font-size:0.28rem;
      font-size:0.28rem;
    }
    .use-status{
      color:#428CED;
    }
    .used-status{
      color:#F95252;
    }
  }
  .coupon-empty{
    width:4.2rem;
    margin:40px auto;
  }
}
</style>
