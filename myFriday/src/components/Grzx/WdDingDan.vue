<template>
  <div class="duihuan">
    <div class="toP">
      <span>我的订单</span>
    </div>
    <div class="bottom">
      <div class="botCon">
        <div class="botConNav">
          <ul class="left">
            <li class="li1">
              <span>全部</span>
              <div></div>
            </li>
            <li class="li2">
              <span>待付款</span>
              <div></div>
            </li>
            <li class="li3">
              <span>待发货</span>
              <div></div>
            </li>
            <li class="li4">
              <span>待收货</span>
              <div></div>
            </li>
            <li class="li5">
              <span>待评价</span>
              <div></div>
            </li>
            <li class="li6">
              <span>退款/售后</span>
              <div></div>
            </li>
            <li class="li7">
              <span>已完成/关闭</span>
            </li>
          </ul>
          <a href="###">订单回收站</a>
        </div>
        <div class="botConBot">
          <img src="../../../static/imgM/笔记本样子.png" alt="">
          <div>
            <span>您还没有订单哦!</span>
            <div>去首页看看</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WdDingDan",
      mounted(){
          $('.left>li>span').click(function () {
            $('.left>li>span').css({
              background:'#fff',
              color:'#000'
            });
            $(this).css({
              background:'#f08200',
              color:'#fff'
            })
          })
      }
    }
</script>

<style scoped>


  .toP{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .toP>span{
    margin-left: 20px;
  }
  .bottom{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
  }
  .left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 860px;
    height: 70px;
  }
  .left>li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 30px;
  }
  .left>li>div{
    width: 1px;
    height: 16px;
    background: #e2e2e2;
  }
  .left>li>span{
    /*margin: 0 20px;*/
    margin-right: 20px;
    padding: 0 15px;
  }
  .botConNav{
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .botCon{
    width: 1050px;
    height: 565px;
    margin: auto;
    position: relative;
  }
  .botConBot{
    font-size: 20px;
    height: 100px;
    display: flex;
    position: absolute;
    left: 385px;
    top: 245px;
  }
  .botConBot>div{
    margin-left: 40px;
    height: 100px;
    text-align: center;

  }
  .botConBot>div>div{
    width: 175px;
    height: 45px;
    background: #f08200;
    font-size: 18px;
    line-height: 45px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    margin-top: 25px;
  }
</style>
