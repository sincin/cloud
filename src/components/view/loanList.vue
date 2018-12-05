<template>
    <div class="loanList">
      <view-box ref="viewBox">
	      <x-header title="借款记录" :left-options="{backText: '微信'}"></x-header>
	      <card class="data-check clearfix" v-if="loanShow">
         
         <!-- <span  slot="title" class="title ">日期选择</span> 
         <div  slot >
           <datetime v-model="startTime" class="start-time"></datetime>
           <datetime v-model="endTime" class="end-time"></datetime>
         </div>
         <x-button mini type="primary"  slot="child" class="check-btn ">查询</x-button> -->
         <span slot="header" class="title ">日期选择</span>
         <div  slot="content" class="content">
           <datetime v-model="startTime" class="start-time"  ></datetime>
           <datetime v-model="endTime" class="end-time"></datetime>
         </div>
         <x-button slot="footer"  mini type="primary" class="check-btn ">查询</x-button>
        </card>
        <group class="loan-list" v-if="loanShow">
         <cell is-link class="loan-item complete-bg"   primary >
           <p slot="title" class="loan-money">借款800.00元</p>
           <span slot="value" class="loan-satus">还款中</span>
           <p slot="inline-desc" class="loan-data">2018-09-01</p>
         </cell>
       </group>
       <div class="loan-empty" v-if="!loanShow">
         <img src="../../assets/img/loanEmpty.png" class="loan-empty-logo">
         <x-button mini type="primary" class="apply-loan">去申请借款</x-button>
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
           loanShow:false,
           startTime:'2018-12-05',
           endTime:'2018-12-05',
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
.loanList{
  height: 100%;
  padding-top: 46px;
  background: #F4F5F6;
  .data-check{
    position:fixed;
    width:7.5rem;
    top:46px;
    background:#c6d3f1;
    display:flex;
    margin:0;
    align-items:center;
    padding:25px 10px;
    .title{
      font-size:0.3rem;
      color:#5B83E4;
      text-align:left;
    }
    .content{
      line-height:20px;
      .start-time{
        font-size:0.3rem;
        display:inline-block;
        padding:5px;
        vertical-align:middle;
        background:#fff;
      }
      .end-time{
        font-size:0.3rem;
        background:#fff;
        color:#5B83E4;
        display:inline-block;
        padding:5px;
        vertical-align:middle;
        .weui-cell__ft{
          padding-right:5px;
        }
      }
      .end-time:before{
        height:0 !important;
        border:none !important;
      }
      .vux-cell-value{
        background:#fff;
        padding:3px 5px;
        border-radius:3px;
        color:#5B83E4;
        font-size:0.3rem;
      }
      .weui-cell_access .weui-cell__ft:after{
        display:none;
      }
      .weui-cell_access .weui-cell__ft{
        padding-right:0
      }
    }
    
    .check-btn{
      background:#5B83E4;
      color:#fff;
      position:absolute;
      right:10px;
    }
  }
  .loan-empty{
    margin-top:80px;
    .loan-empty-logo{
      width:3.93rem;
      margin:0 auto;
      display:block;
    }
    .apply-loan{
      background:#fff;
      color:#5B83E4;
      font-size:0.3rem;
      padding:0px 0.34rem;
      border:solid 1px #5B83E4
    }
  }
  .loan-list{
    margin-top:164px;
    .complete-bg{
      background:url('../../assets/img/loanComplete.png') no-repeat center center;
      background-size:82px 72px;
    }
    .loan-item{
      padding:0.2rem 0.15rem;
      border-bottom:solid 1px #D9D9D9;
    }
    .loan-money{
      text-align:left;
      width:6rem;
      color:#252729;
      font-size:0.32rem;
      line-height:30px;
    }
    .loan-data{
      text-align:left;
      font-size:0.3rem;
      color:#A7A9AB;
      line-height:30px;
    }
    .loan-satus{
      font-size:0.3rem;
      color:#252729;
    }
  }
}
</style>
