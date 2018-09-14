<template>
  <div class="duihuan">
    <div class="top">
      <span>充值卡兑换</span>
      <div>查看账单</div>
    </div>
    <div class="bottom">
      <input type="text" placeholder="请输入充值卡兑换码进行充值">
      <div>充值</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DuiHuan"
    }
</script>

<style scoped>
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
  .bottom>input{
    width: 475px;
    height: 55px;
    position: absolute;
    top: 53px;
    left: 33px;
    font-size: 20px;
    color: #a0a0a0;
    text-indent: 20px;
  }
  .bottom>div{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 210px;
    left: 33px;
  }
</style>
