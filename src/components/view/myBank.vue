<template>
    <div class="MyBank">
      <view-box ref="viewBox">
	      <x-header title="我的银行卡" :left-options="{backText: '微信'}"></x-header>
	      <card class="red-card card">
          <div slot="content" class="clearfix">
            <div class="bank-logo fl">
              <img  src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
            </div>
            <div class="card-padding fl">
              <p class="bank-name">招商银行</p>
              <p class="bank">储蓄卡</p>
            </div>
          </div>
          <div class="bankNo" slot="footer">234323245644343543</div>
        </card>
        <x-button type="primary" class="add-bank-btn"> <span class="icon">+</span>添加银行卡</x-button>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell} from 'vux'
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
.MyBank{
  height: 100%;
  padding-top: 46px;
  background: #F4F5F6;
  .red-card{
     background:#E04855;
  }
  .card{
    box-shadow:0px 8px 8px #ddd;
    padding:15px 0.3rem;
    width:6.95rem;
    margin:13px auto;
    border-radius:20px;
    .bank-logo{
      width:38px;
      height:38px;
      border-radius:19px;
      background:#fff;
    }
    .card-padding{
      text-align:left;
      padding-left:0.3rem;
      color:#fff;
      .bank-name{
        font-size:0.32rem;
        line-height:20px;
      }
      .bank{
        font-size:0.28rem;
        line-height:20px;
      }
    }
    .bankNo{
      color:#fff;
      font-size:0.3rem;
      text-align:right;
      padding-top:56px;
    }
  }
  .add-bank-btn{
    width:3.3rem;
    margin:0 auto;
    background:#5B83E4;
    color:#fff;
    line-height:48px;
    border-radius:24px;
    font-size:0.3rem;
    .icon{
      display:inline-block;
      color:#fff;
      width:18px;
      line-height:18px;
      border-radius:9px;
      border:solid 1px #fff;
      font-size:14px;
      margin-right:5px;
    }
  }
 }

</style>

