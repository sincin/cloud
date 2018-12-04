<template>
    <div class="getMoney">
      <view-box ref="viewBox">
      <x-header title="提现" :left-options="{backText: '微信'}"></x-header>
        <group>
        <card class="flex bank-info">
          <div slot="header" class="bank-logo">
            <img  src="http://placeholder.qiniudn.com/640x300" width="100%" height="100%">
          </div>
          <div slot="content" class="card-padding">
            <p class="bank-name">招商银行</p>
            <p class="bankNo">787799847777666686666699999</p>
          </div>
        </card>
        <cell title="可提现金额余额：" value="888元" primary class="get-use">
          <x-button mini type="primary" class="get-money-btn" slot="child">全部提现</x-button>
        </cell>
          <cell title="提现金额：" value="888元" primary class="get-use">
            <span class="">元</span>
          </cell>
        </group>
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
}
</style>