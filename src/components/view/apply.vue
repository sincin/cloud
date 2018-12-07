<template>
    <div class="apply">
      <view-box ref="viewBox">
	      <x-header title="极速申请" :left-options="{backText: '微信'}"></x-header>
	      <img src="../../assets/img/apply_03.png" width="100%">
        <group class="apply-form">
          <h1>一分钟快速申请</h1>
          <cell is-link >
            <div slot="title">实名认证</div>
           <!--  <div slot="value">超高通过率</div> -->
           <x-button mini type="primary">
            已认证
            <x-icon type="ios-checkmark-empty" size="30"></x-icon>
           </x-button>
          </cell>
          <cell is-link >
            <div slot="title">运营商认证</div>
            <div slot="value">挑战更高额度</div>
           
          </cell>
          <cell is-link>
            <div slot="title">添加联系人</div>
            <div slot="value">挑战更高额度</div>
           
          </cell>
          <check-icon :value.sync="agree">同意<router-link to="">《用户须知》</router-link></check-icon>
        </group>
        <x-button  type="primary">提交</x-button>
      </view-box>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell, XDialog,  Datetime, CheckIcon } from 'vux'
    export default {
        name: "apply",
         data () {
          return {
            agree:false
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
          Datetime,
          CheckIcon
        }
    }
</script>

<style lang="less">
.apply{
  height: 100%;
  padding-top: 46px;
  background: #F4F5F6;
  .apply-form{
    width:;
    border:;
    border-radius:;
  }
}
</style>
