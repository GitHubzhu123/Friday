<template>
  <div class="duihuan">
    <div class="top">
      <span>积分订单</span>
      <p>
        <span>当前积分 : </span>
        <router-link to="/wodejifen"><span>240分</span></router-link>
      </p>
    </div>
    <div class="bottom">
      <div class="botCon">
        <ul class="botConBot">
          <li>
            <div class="botLiTop">
              <span class="oneS">订单号 : <span>123456787</span></span>
              <span class="twoS">下单日期 : <span></span></span>
              <span class="fourS">订单状态 : </span>
              <span class="fiveS">已完成</span>
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
              </li>
              <li class="botLiTwo">
                <p>
                  <span>积分 : </span>
                  <span>58</span>
                </p>
              </li>
              <li class="botLiThr">
                <router-link to="/jifendingdanxq">查看详情</router-link>
                <div>删除订单</div>
              </li>
            </ul>
          </li>
          <!---->
          <li>
            <div class="botLiTop">
              <span class="oneS">订单号 : <span>123456787</span></span>
              <span class="twoS">下单日期 : <span></span></span>
              <span class="fourS">订单状态 : </span>
              <span class="fiveS">已完成</span>
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
              </li>
              <li class="botLiTwo">
                <p>
                  <span>积分 : </span>
                  <span>58</span>
                </p>
              </li>
              <li class="botLiThr">
                <router-link to="/jifendingdanxq">查看详情</router-link>
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
    name: "JifenDingdan"
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
    position: absolute;
    left: 20px;
  }
  .top>p{
    position: absolute;
    right: 20px;
  }
  .top>p>a{
    color: #f08200;
  }
  .bottom{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
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

  .fourS{
    right: 80px;
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
  .botConBot>li{
    margin: 20px 0;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
  }
  .botLiThr>a{
    color: #4b943d;
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
    height: 120px;
    font-size: 14px;
    /*margin: 20px 0;*/
  }
  .botLiCon::after{
    content: '';
    display: block;
    clear: both;
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
