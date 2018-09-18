<template>
  <div>
    <div class="tit">
      <span>您的当前位置：</span><a href="###">首页</a><span>></span><a href="###">专题</a>
    </div>
  <div class="top">
    <div class="topB">
    <div class="topA">
      <p>礼拜五</p><span>新鲜美食限量抢</span>
    </div>
    </div>
  </div>
    <div class="cont">
      <span>积分商城抢好礼</span>
    </div>
    <div class="btm">
      <span>新鲜美味限量抢</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Zt"
    }
</script>

<style scoped>
  .tit{
    width: 1280px;
    height: 54px;
    background: #f4f4f4;
    margin: 20px auto;
    line-height: 54px;
    font-size: 14px;
    color: #666;
  }
  .tit a{
    color: #666;
  }
  .tit>span:nth-of-type(1){
    margin-left: 20px;
  }
  .tit>span:nth-of-type(2){
    margin:0 10px;
  }
  .top{
    width: 1280px;
    height: 500px;
    margin: 0 auto;
    background: url("./../../static/z/主页/lbt.png") 0 0/1500px 500px;
    position: relative;
  }
  .topB{
    width: 490px;
    height: 220px;
    border: 2px solid white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .topA{
    width: 470px;
    height: 200px;
    border: 2px solid white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px #999;
  }
  .topA>p{
    font-size: 72px;
    margin-top: 20px;
  }
  .topA>span{
    font-size: 36px;
    letter-spacing: 7px;
  }
  .cont{
    width: 1280px;
    height: 500px;
    margin: 20px auto;
    line-height: 500px;
    text-align: center;
    background: url("./../../static/z/积分/ztbg.png");
    font-size: 72px;
    color: white;
    text-shadow: 2px 2px 3px #adadad;
    font-weight: 200;
  }
  .btm{
    width: 1280px;
    height: 500px;
    margin: 0px auto;
    line-height: 500px;
    text-align: center;
    background: url("./../../static/z/积分/ztbg1.png");
    font-size: 72px;
    color: white;
    text-shadow: 1px 1px 3px #adadad;
  }
</style>
