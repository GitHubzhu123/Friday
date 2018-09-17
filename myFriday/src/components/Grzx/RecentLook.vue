<template>
  <div class="duihuan">
    <div class="top">
      <span>最近浏览</span>
    </div>
    <ul class="bottom">
      <li>
        <div class="sp">
          <img src="../../../static/imgM/桃子.png" alt="">
        </div>
        <span class="oneS">新西兰佳沛黄金奇异果</span>
        <p class="oneP">花蜜般的甘甜百吃不厌</p>
        <div class="gouwuche">
          <span class="twoS">¥28.80</span>
          <span class="thrS">¥40.00</span>
          <img class="gouc" src="../../../static/imgM/购物车失效.png" alt="">
        </div>
        <div class="cha">×</div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "RecentLook"
  }
</script>

<style scoped>
  .cha{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    position: absolute;
    background: #4b943d;
    right: 10px;
    top: 10px;
  }

  .top{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .top>div{
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -15px;
    width: 90px;
    height: 30px;
    background: #498e3d;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  .top>span{
    margin-left: 20px;
  }
  .bottom{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
  }
  .bottom>li{
    width: 305px;
    height: 430px;
    float: left;
    margin: 40px 0 0 40px;
    position: relative;
    border: 1px solid #e2e2e2;
  }

  .oneS{
    font-size: 20px;
    color: #5c5c5c;
    position: absolute;
    bottom: 95px;
    left: 20px;
  }
  .oneP{
    font-size: 14px;
    color: #929292;
    position: absolute;
    bottom: 65px;
    left: 20px;
  }
  .twoS{
    font-size: 22px;
    color: #ff5757;
    position: absolute;
    left: 0;
  }
  .thrS{
    font-size: 16px;
    color: #929292;
    text-decoration: line-through;
    position: absolute;
    left: 110px;
  }
  .sp{
    width: 261px;
    height: 253px;
    position: absolute;
    left: 20px;
    bottom: 135px;
  }
  .gouc{
    position: absolute;
    right: 40px;
  }
  .gouwuche{
    position: absolute;
    bottom: 25px;
    left: 20px;
    width: 305px;
    height: 35px;
    line-height: 35px;
  }


</style>
