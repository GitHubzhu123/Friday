<template>
  <div class="duihuan">
    <div class="toP">
      <div class="topLef">
        <div class="topLefCon">
          <img src="../../../static/imgM/头像大图背景.png" alt="">
          <img src="../../../static/imgM/头像大图.png" alt="">
        </div>
        <span class="redSpan">您好 , &nbsp;</span>
        <router-link to="/grziliao"><span>{{nicheng}}</span></router-link>
      </div>
      <ul class="topRig">
        <li>
          <p>当前积分</p>
          <router-link to="/wodejifen"><span>{{jifen}}</span></router-link>
        </li>
        <li>
          <p>我的钱包</p>
          <router-link to="/wodemoney"><span>¥{{money}}</span></router-link>
        </li>
        <li class="thrLi">
          <p class="chognzhi" @click="aa">充值有礼>></p>
          <router-link to="/duihuan"><span>充值卡兑换>></span></router-link>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <img src="../../../static/imgM/大背景图.png" alt="">
      <div class="botOneDiv"></div>
      <div class="botTwoDiv"></div>
      <div class="botThrDiv">
        <span>新人福利享不停</span>
        <p>充值有好礼</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  export default {
    name: "WdZhangH",
    data(){
      return{
        nicheng:'',
        jifen:'',
        money:'',
        headimg:''
      }
    },
    methods:{
      aa(){
        window.location.href='/#/wodemoney'
      }
    },
    mounted(){
      // localStorage.userid=1
      axios.get('/api/PHP/Day04/mfriday.php?type=3&id='+localStorage.userid).then(res=>{
        console.log(localStorage.userid)
        console.log(res.data[0].nicheng)
        if(res.data[0].nicheng==""){
          this.nicheng=res.data[0].phone;
        }else {
          this.nicheng=res.data[0].nicheng;
        }

        this.jifen=res.data[0].jifen;
        this.money=res.data[0].money;
        this.headimg=res.data[0].headImg;
      })
    },
  }
</script>

<style scoped>


  .toP{
    width: 1090px;
    height: 220px;
    background: #f4fff2;
    position: relative;
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topLef{
    width: 430px;
    height: 150px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 40px;
  }
  .redSpan{
    margin-left: 35px;
  }
  .topLef>a{
    color: #e85e35;
    margin-left: 5px;
  }
  .topLefCon{
    position: relative;
    width: 140px;
    height: 140px;
  }
  .topLefCon>img{
    position: absolute;
  }
  .topLefCon>img:last-child{
    top: 4px;
    left: 5px;
  }

  .chognzhi{
    color: #6da961;
    margin-left: -20px;
  }
  .topRig>li>a{
    color: #f08200;
  }
  .topRig>li>p{
    margin-bottom: 25px;
  }

  .topRig{
    width: 430px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-right: 60px;
  }


  .bottom{
    width: 1090px;
    height: 384px;
    /*border-top: 1px solid #e2e2e2;*/
    position: relative;
    /*border-top: 1px solid #e2e2e2;*/
  }
  .botThrDiv>span{
    font-size: 50px;
  }
  .botThrDiv>p{
    font-size: 40px;
    width: 425px;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    padding: 12px 0 20px 0;
  }
  .botThrDiv{
    position: absolute;
    width: 425px;
    /*background: #007aff;*/
    left: 50%;
    margin-left: -212.5px;
    text-align: center;
    height: 150px;
    top: 50%;
    margin-top: -75px;
    color: #fff;
  }
  .botOneDiv{
    width: 540px;
    height: 236px;
    background: #fff;
    opacity: 0.4;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -270px;
    margin-top: -118px;
  }
  .botTwoDiv{
    width: 520px;
    height: 216px;
    background: #fff;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -260px;
    margin-top: -108px;
  }
  .bottom>img{
    position: absolute;
    top: 0;
    left: 2.5px;
  }
  .thrLi>a{
    color: #f08200;
  }

</style>
