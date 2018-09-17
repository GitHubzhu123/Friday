<template>
  <div class="duihuan">
    <div class="top">
      <div class="topLef">
        <div class="topLefCon">
          <img src="../../../static/imgM/头像大图背景.png" alt="">
          <img src="../../../static/imgM/头像大图.png" alt="">
        </div>
        <span>您好,<span class="redSpan">12345678</span></span>
      </div>
      <ul class="topRig">
        <li>
          <p>当前积分</p>
          <span>124</span>
        </li>
        <li>
          <p>我的钱包</p>
          <span>¥1220.0</span>
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
  export default {
    name: "WdZhangH",
    methods:{
      aa(){
        window.location.href='/#/adress'
      }
    }
  }
</script>

<style scoped>
  .thrLi>a{
    color: #f08200;
  }

  .top{
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
  .redSpan{
    color: #e85e35;
    margin-left: 5px;
  }
  .chognzhi{
    color: #6da961;
    margin-left: -20px;
  }
  .topRig>li>span{
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
  .topLef{
    width: 315px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
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

  .bottom{
    width: 1090px;
    height: 386px;
    border-top: 1px solid #e2e2e2;
    position: relative;
    background: lightseagreen;
    border-top: 1px solid #e2e2e2;
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
    top: 1px;
    left: 2.5px;
  }

</style>
