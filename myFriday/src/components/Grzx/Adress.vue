<template>
  <div class="duihuan">
    <div class="top">
      <span>地址管理</span>
      <div><router-link to="/newadress">添加新地址</router-link></div>
    </div>
    <div class="mid">
      <div class="midCon">
        <img src="../../../static/imgM/write.png" alt="">
        <span>暂无收获地址,请点击</span>
        <div><router-link to="/newadress">添加新地址</router-link></div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Adress"
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
  .mid{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    text-align: center;
  }
  .midCon{
    width: 300px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999999;
  }
  .midCon>div{
    width: 90px;
    height: 30px;
    background: #498e3d;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  a{
    color: #ffffff;
  }
</style>
