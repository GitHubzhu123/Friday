<template>
  <div class="duihuan">
    <div class="top">
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
        <ul class="botConBot">
          <li>
            <div class="botLiTop">
              <span class="oneS">订单号 : <span>123456787</span></span>
              <span class="twoS">下单日期 : <span></span></span>
              <span class="thrS">爱果果水果店</span>
              <span class="fourS">订单状态 :</span>
              <span class="fiveS">关闭</span>
            </div>
            <ul class="botLiCon">
              <li class="botLiOne">
                <div class="botLiOneLeft">
                  <div>
                    <img src="../../../static/imgM/苹果.png" alt="">
                  </div>
                  <span class="span1">云南昭通苹果</span>
                  <span class="span2">6个装</span>
                  <span class="span3">¥35.0x1</span>
                </div>
                <div class="botLiOneLeft">
                  <div>
                    <img src="../../../static/imgM/苹果.png" alt="">
                  </div>
                  <span class="span1">云南昭通苹果</span>
                  <span class="span2">6个装</span>
                  <span class="span3">¥35.0x1</span>
                </div>
              </li>
              <li class="botLiTwo">
                <p>
                  <span>店铺合计:¥</span>
                  <span>105.5</span>
                </p>
                <p>
                  (含运费 : 8.0元)
                </p>
              </li>
              <li class="botLiThr">
                <router-link to="/dingdanxq">查看详情</router-link>
                <div>删除订单</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WdDingDan2"
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
  .top>span{
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
  .botLiTop{
    height: 50px;
    background: #f2f2f2;
    line-height: 50px;
    position: relative;
  }
  .botLiTop>span{
    position: absolute;
  }
  .oneS{
    left: 20px;
  }
  .twoS{
    left: 255px;
  }
  .thrS{
    left: 550px;
    color: #4b943d;
  }
  .fourS{
    right: 70px;
  }
  .fiveS{
    right: 30px;
    color: #f08200;
  }
  .botLiOne img{
    float: left;
  }
  .botLiOneLeft{
    height: 120px;
    line-height: 120px;
    position: relative;
    border-bottom: 1px solid #e2e2e2;
  }
  .botLiOneLeft>div{
    border: 1px solid #e2e2e2;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .botLiOneLeft>span{
    position: absolute;
  }
  .span1{
    left: 120px;
    color: #707070;
  }
  .span2{
    left: 370px;
    color: #a7a7a7;
  }
  .span3{
    left: 610px;
    color: #999999;
  }

  .botLiOne{
    width: 700px;
    /*background: lightseagreen;*/
    position: relative;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
  }
  .botLiThr{
    width: 138px;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
  }
  .botLiThr>div{
    width: 90px;
    height: 30px;
    background: #f08200;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin-top: 15px;
  }
  .botLiCon>li{
    float: left;
    height: 240px;
    font-size: 14px;
  }
  .botLiTwo{
    width: 208px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
  }


</style>
