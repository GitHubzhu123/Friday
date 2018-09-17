<template>
  <div class="duihuan">
    <div class="top">
      <span>换绑手机</span>
    </div>
    <div class="mid">
      <div class="midCon">
        <!--路由-->
        <div class="luyou">
          <div class="oneDiv">
            <span>1.验证新手机号</span>
            <img src="../../../static/imgM/验证原手机1.png" alt="">
            <!--<img src="../../../static/imgM/验证原手机2.png" alt="">-->
          </div>
          <div class="twoDiv">
            <span>2.验证新手机号</span>
            <img src="../../../static/imgM/验证新手机1.png" alt="">
            <!--<img src="../../../static/imgM/验证新手机2.png" alt="">-->
          </div>
          <div class="thrDiv">
            <span>3.换绑成功</span>
            <img src="../../../static/imgM/换绑成功2.png" alt="">
            <!--<img src="../../../static/imgM/换绑成功2.png" alt="">-->
          </div>
        </div>
        <!--组件展示-->
        <div class="zujian">
          <div class="success">
            <div>
              <img src="../../../static/imgM/绑定成功.png" alt="">
              <span>恭喜您成功修改</span>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "GengHuanPhone3"
    }
</script>

<style scoped>
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
  .mid{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    font-size: 20px;
  }
  .midCon{
    position: relative;
    margin: 40px 0 0 40px;
  }
  .luyou{
    /*width: 800px;*/
    height: 42px;
    /*background: #007aff;*/
  }
  .luyou>div{
    height: 42px;
    float: left;
    position: relative;
    line-height: 42px;
  }
  .luyou>div>img{
    float: left;
  }
  .luyou>div>span{
    margin-left: -190px;
  }
  .luyou>.thrDiv>span{
    margin-left: -170px;
  }
  a{
    color: #000;
  }

  .zujian{
    margin-top: 40px;
    position: relative;
    /*overflow: hidden;*/
  }
  .success>div{
    width: 220px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 240px;
    top: 160px;
    color: #f08200;
  }
</style>
