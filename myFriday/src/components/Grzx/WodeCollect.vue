<template>
  <div class="duihuan">
    <div class="top">
      <span>我的收藏</span>
    </div>
    <ul class="bottom">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "WodeCollect"
    }
</script>

<style scoped>
  .bottom>li{
    width: 305px;
    height: 480px;
    background: lightcyan;
  }
  .top{
    width: 1090px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
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
</style>
