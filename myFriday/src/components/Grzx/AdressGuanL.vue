<template>
  <div class="duihuan">
    <div class="top">
      <span>地址管理</span>
      <div><router-link to="/newadress">添加新地址</router-link></div>
    </div>
    <div class="mid">
      <ul class="midCon">
        <li class="liOne">
          <p>收货人</p>
          <div></div>
        </li>
        <li class="liTwo">
          <p>所在区域</p>
          <div></div>
        </li>
        <li class="liThr">
          <p>街道地址</p>
          <div></div>
        </li>
        <li class="liFour">
          <p>联系电话</p>
          <div></div>
        </li>
        <li class="liFive">
          <p>备注</p>
          <div></div>
        </li>
        <li class="liSix">
          <p>操作</p>
          <div></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "AdressGuanL"
    }
</script>

<style scoped>
  .liOne{
    width: 105px;
  }
  .liTwo{
    width: 155px;
  }
  .liThr{
    width: 300px;
  }
  .liFour{
    width: 125px;
  }
  .liFive{
    width: 110px;
  }
  .liSix{
    width: 200px;
  }
  .midCon{
    width: 1040px;
    background: aqua;
  }
  .midCon>li{
    float: left;
  }
  .midCon>li>p{
    height: 45px;
    background: #f2f2f2;
    line-height: 45px;
    text-align: center;
  }
  .top{
    width: 1035px;
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

  a{
    color: #ffffff;
  }
</style>
