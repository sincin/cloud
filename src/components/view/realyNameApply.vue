<template>
    <div class="realyName">
     
	      <x-header title="实名认证" :left-options="{backText: '微信'}"></x-header>
        <ul class="apply-step">
          <li>
            <img src="static//applayPerson.png" style="width: 0.71rem">
            <p class="active"><a>实名认证</a></p>
            <img :src="applyStep > 0 ? 'static/triangle2.png' : 'static/triangle1.png'" class="triangle">
          </li>
          <li>
            <img :src="applyStep >= 1 ? 'static/applayCompany.png' : 'static/applyCompnay.png'" style="width: 0.53rem">
            <p :class="applyStep >= 1 ? 'active' : ''"><a>运营商认证</a></p>
            <img :src="applyStep > 1 ? 'static/triangle2.png' : 'static/triangle1.png'" class="triangle">
          </li>
          <li>
            <img :src="applyStep >2 ? '/static/applyTel.png' : 'static/applyTel2.png'" style="width: 0.61rem">
            <p :class="applyStep >2 ? 'active' : ''"><a>添加联系人</a></p>
          </li>
        </ul>
        
        <div v-if="applyStep < 1">
          <h1 class="idCard-item">请提交身份证信息，便于通过审核</h1>
          <ul class="idCard">
            <li>
              <div :class="idCardZ ? 'active' : ''">
                <img :src="idCardZ ? 'static/icon-shenfenzheng.png':'static/icon-shenfenzheng1.png'">
                <p v-if="!idCardZ">点击上传</p>
                <p v-if="idCardZ">已上传/重新上传</p>
              </div>
              <p class="idCard-tab">身份证姓名面</p>
            </li>
            <li>
               <div :class="idCardF ? 'active' : ''">
                 <img :src="idCardF ? 'static/icon-shenfengzhengfan.png' : 'static/icon-shenfengzhengfan1.png'">
                 <p v-if="!idCardF">点击上传</p>
                 <p v-if="idCardF">已上传/重新上传</p>
              </div>
              <p class="idCard-tab">身份证国徽面</p>
            </li>
          </ul>
          <group>
            <x-input placeholder="请输入姓名" class="idCard-input">
              <label slot="label" class="label">姓名</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
            <x-input placeholder="请输入身份证号码" class="idCard-input">
              <label slot="label" class="label">身份证号码</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
          </group>
          <div class="check-clause">
            查看
            <router-link to="" class="clause-link">《服务及授权条款》</router-link>
          </div>
          <x-button mini type="primary" class="agren-submit">同意条款并提交</x-button>
       </div>
       <div v-if="applyStep >1 && applyStep < 3" class="operator-apply">
        <group>
            <x-input placeholder="请输入手机号码" class="idCard-input">
              <label slot="label" class="label">手机号码</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
            <x-input placeholder="请输入服务密码" class="idCard-input">
              <label slot="label" class="label">服务密码</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
        </group>
        <div class="check-clause clearfix">
            <span>查看</span>
            <router-link to="" class="clause-link fl">《服务及授权条款》</router-link>
            <router-link to="/resetPsw" class="clause-link fr">忘记密码</router-link>
        </div>
        <div class="reminder">
          <h1>温馨提示：</h1>
          <p>1.请输入正确的运营商服务密码，如若忘记可通过拨打运营商服务电话或者登录网上营业厅找回密码；</p>
          <p>2.授权期间将收到运营商的通知短信，这是正常现象，无需担心</p>
        </div>
         <x-button mini type="primary" class="agren-submit">同意条款并提交</x-button>
      </div>
      <div v-if="applyStep >2" class="add-contacts">
        <h1>紧急联系人1</h1>
        <div class="contacts-select">
          <x-input placeholder="请选择" class="idCard-input" @click="selectContact('contactsShow2')">
            <label slot="label" class="label">关系</label>
            <img class="border-right-empty" slot="right" src="static/down.png" />
          </x-input>
          <ul class="contacts" v-show="contactsShow">
            <li v-for="(item,index) in contacts" :key="index">{{item}}</li>
          </ul>
        </div>
        <x-input placeholder="请输入姓名" class="idCard-input">
              <label slot="label" class="label">姓名</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
        <x-input placeholder="请输入手机号码" class="idCard-input" style="margin-bottom: 0">
          <label slot="label" class="label">手机号码</label>
          <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
        </x-input>
        <h1>紧急联系人2</h1>
        <div class="contacts-select">
          <x-input placeholder="请选择" class="idCard-input" @click="selectContact('contactsShow2')">
            <label slot="label" class="label">关系</label>
            <img class="border-right-empty" slot="right" src="static/down.png" />
          </x-input>
          <ul class="contacts" v-show="contactsShow2">
            <li v-for="(item,index) in contacts" :key="index">{{item}}</li>
          </ul>
        </div>
        <x-input placeholder="请输入姓名" class="idCard-input">
              <label slot="label" class="label">姓名</label>
              <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
            </x-input>
        <x-input placeholder="请输入手机号码" class="idCard-input" >
          <label slot="label" class="label">手机号码</label>
          <img class="border-right-empty" slot="right" src="static/trangleRight.png" />
        </x-input>
         <x-button mini type="primary" class="agren-submit">同意条款并提交</x-button>
      </div>
    </div>
</template>

<script>
  import {  ViewBox, XHeader, XImg, Group, XInput, XButton, Card, Cell, XDialog,  Datetime, CheckIcon, Tab, TabItem } from 'vux'
    export default {
        name: "realyName",
         data () {
          return {
            idCardZ:true,
            idCardF:false,
            applyStep:3,
            demo:'实名认证',
            index:0,
            contacts:['父亲','母亲','配偶','同事','朋友'],
            contactsShow1:false,
            contactsShow2:false,
          }
        },
        methods:{
          selectContact(type){
             if(type === 'contactsShow1'){
              this.contactsShow1 = ! this.contactsShow1;
             }else{
              this.contactsShow2= ! this.contactsShow2;
             }
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
          XDialog,
          Datetime,
          CheckIcon,
          Tab,
          TabItem
        }
    }
</script>

<style lang="less">
.realyName{
  width:7.5rem;
  height: 100%;
  padding-top: 46px;
  background: #fff;
  .apply-step{
    display:flex;
    padding:0.5rem 0 10px;
    li{
      flex:1;
      text-align:center;
      position:relative;
      .triangle{
        position:absolute;
        right:0;
        width:0.22rem;
        top:40%;
      }
      p{
        font-size:0.3rem;
        color:#B9B8B8;
        position:relative;
        a{
          padding:5px 10px; 
        }
      }
      .active a{
        border-bottom:solid 1px #5B83E4;
        color:#5B83E4;
      }
      .active:after{
        content:'';
        position:absolute;
        bottom:-10px;
        left:50%;
        width: 0;
        height: 0;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 5px solid #5B83E4;
      }
    }
  }
  .idCard-item{
    line-height:1.53rem;
    color:#5B83E4;
    font-size:0.26rem;
  }
  .idCard{
    display:flex;
    margin:0 0.45rem 0.72rem;
    justify-content:space-between;
    li{
      width:2.97rem;
      text-align:center;
      div{
        border:solid 1px #E9E9E9;
        padding:0.18rem 0;
        img{
          width:1.15rem;
        }
        p{
          color:#A1A1A1;
          font-size:0.28rem;
          line-height:30px;
        }
      }
      .active{
        border:solid 1px #5B83E4;
        p{
          color:#5B83E4
        }
      }
      .idCard-tab{
        color:#404040;
        font-size:0.26rem;
        line-height:30px;
        padding:5px 0;
      }  
    }
    
  }
  .idCard-input{
    width:6.98rem;
    margin:15px auto;
    font-size:0.3rem;
    color:#595959;
    border:solid 1px #3C85E7;
    border-radius:10px;
    border-left:none;
    box-sizing:border-box;
    padding:0;
    .label{
      line-height:0.81rem;
      display:inline-block;
      width:1.91rem;
      text-align:center;
      background:#3C85E7;
      color:#fff;
      font-size:0.3rem;
      border-radius:10px 0px 0px 10px;
      box-sizing:border-box;
      margin-right:0.17rem;
    }
    .border-right-empty{
      width:0.15rem;
      margin-right:0.26rem;
    }
  }
  .agren-submit{
    width:6.34rem;
    text-align:center;
    line-height:0.94rem;
    border-radius:0.47rem;
    margin: 0 auto;
    background: linear-gradient(to right, #5F6ADE , #5694E7);
    color:#fff;
  }
  .check-clause{
    text-align:left;
    color:#404040;
    font-size:0.24rem;
    padding:0 0.25rem ;
    .clause-link{
      color:#5B83E4;
    }
  }
  .reminder{
      width:6.98rem;
      margin:0.85rem auto 0.3rem;
    h1{
      color:#404040;
      font-size:0.26rem;
      line-height:30px;
      text-align:left;
    }
    p{
      color:#A1A1A1;
      font-size:0.26rem;
      line-height:30px;
      text-align:left;
      padding-left:20px;
      margin-bottom:0.2rem;
    }
  }
  .operator-apply{
    margin-top:0.52rem;
  }
  .add-contacts{
    h1{
      font-size:0.28rem;
      color:#A1A1A1;
      text-align:left;
      line-height:40px;
      padding:0 0.24rem;
    }
    .contacts-select{
      width:6.98rem;
      margin:0 auto;
      position:relative;
      .contacts{
        position:absolute;
        z-indez:10;
        bottom:-340%;
        right:0;
        background:#fff;
        border:solid 1px #598AE5;
        color:#595959;
        li{
          width:5.08rem;
          line-height:0.56rem;
          text-align:left;
          padding-left:10px;
          font-size:0.3rem;
        }
        .active{
          color:#fff;
          background:#5B83E4;
        }
      }
    }
  }
  
}
</style>
