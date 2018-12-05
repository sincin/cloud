<template>
    <div class="downLoad">
     
	      <x-header title="小云贝" :left-options="{backText: '微信'}"></x-header>
        <div class="view-box">
           <img src="../../assets/img/download.png" width="100%">
        </div>
       
        <div class="content">
          <p>如果您对贷款有任何疑问，可咨询我们在线客服</p>
          <img src="../../assets/img/downloadbtn_03.png"/>
        </div>
      
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XButton} from 'vux'
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
          XButton
        }
    }
</script>

<style lang="less">
.view-box{
  height:100%;
  overflow:hidden;
}
.downLoad{
  height: 100%;
  overfolw:hidden;
  position:relative;
  .content{
    position:absolute;
    bottom:0;
    width:100%;
    p{
      font-size:0.3rem;
      line-height:30px;
      color:#ddd;
    }
    img{
      width:4.82rem;
      margin:20px auto 30px;
    }
  }
}
</style>
