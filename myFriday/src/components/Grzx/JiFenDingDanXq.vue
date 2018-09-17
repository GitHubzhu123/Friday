<template>
  <div class="duihuan">
    <div class="top">
      <div class="oneD">
        <span>订单编号 :</span>
        <span>1233455555666</span>
      </div>
      <div class="twoD">
        <span>订单状态 :</span>
        <span>待兑换</span>
      </div>
      <div class="thrD">立即兑换</div>
      <div class="fourD">取消订单</div>
    </div>
    <div class="bottom">
      <div class="botCon">
        <ul class="botConCon">
          <li><span>支付方式</span><span>积分</span></li>
          <li><span>支付流水号</span><span>555588588855</span></li>
          <li><span>下单时间</span><span>2014-04-05 15:23:11</span></li>
          <li><span>支付时间</span><span></span></li>
          <li><span>发货时间</span><span></span></li>
          <li><span>收货时间</span><span></span></li>
          <li><span>取消时间</span><span></span></li>
          <li><span>申请退款时间</span><span></span></li>
          <li><span>退款原因</span><span></span></li>
          <li><span>退款时间</span><span></span></li>
          <li><span>订单备注</span><span>希望包装好一点</span></li>
        </ul>
        <div class="menu">收货人信息</div>
        <ul class="botConCon">
          <li><span>收货人姓名</span><span>阿三</span></li>
          <li><span>地址</span><span>北京</span></li>
          <li><span>联系方式</span><span>手机 : 18530969636/固定电话 : 1234568</span></li>
        </ul>
        <div class="menu">物流信息</div>
        <ul class="botConCon">
          <li>联系人 :<span>张小哥</span></li>
          <li>联系方式 : <span>13598535415</span></li>
        </ul>

        <!---->
        <div class="lastNav">
          <span class="oneS">爱果果水果店</span>
          <span class="twoS">规格</span>
          <span class="thrS">单价</span>
          <span class="fourS">数量</span>
          <span class="fiveS">金额</span>
        </div>

        <ul class="spDingdan">
          <li class="botLiOne">
            <div class="botLiOneLeft">
              <div>
                <img src="../../../static/imgM/苹果.png" alt="">
              </div>
              <span class="span1">云南昭通苹果</span>
              <span class="span2">6个装</span>
              <span class="span3">¥35.0</span>
              <span class="span4">1</span>
              <span class="span5">50积分</span>
            </div>
          </li>
        </ul>
        <div class="jiesuan">
          <span>积分 :&nbsp;</span>
          <span>500</span>
        </div>
        <div class="qxDd">取消订单</div>
        <div class="ljZf">立即兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JiFenDingDanXq"
  }
</script>

<style scoped>

  .top{
    width: 1090px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
    position: relative;
    line-height: 58px;
    font-size: 18px;
  }
  .top>div{
    position: absolute;
  }
  .twoD>span:last-child{
    color: #f08200;
  }
  .oneD{
    left: 20px;
  }
  .twoD{
    left: 485px;
  }
  .thrD{
    right: 150px;
    top: 14px;
    width: 90px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #498e3d;
    border-radius: 5px;
  }
  .fourD{
    top: 14px;
    right: 20px;
    width: 90px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #999999;
    border-radius: 5px;
  }
  .bottom{
    width: 1090px;
    position: relative;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 40px;
  }
  .botCon{
    width: 1050px;
    margin: 20px 0 0 20px;
    position: relative;
  }
  .botConCon{
    padding-left: 20px;
    background: #f9f9f9;
    overflow: hidden;
    border: 1px solid #e2e2e2;
  }
  .menu{
    height: 55px;
    line-height: 55px;
    color: #46bb31;
  }
  .botConCon>li{
    height: 20px;
    margin: 16px 0;
    position: relative;
  }
  .botConCon>li>span{
    position: absolute;
  }
  .botConCon>li>span:nth-child(2){
    left: 120px;
  }

  .lastNav{
    height: 45px;
    line-height: 45px;
    background: #f9f9f9;
    border: 1px solid #e2e2e2;
  }
  .lastNav>span{
    /*position: absolute;*/
  }
  .oneS{
    margin-left: 20px;
  }
  .twoS{
    margin-left: 315px;
  }
  .thrS,.fourS,.fiveS{
    margin-left: 145px;
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
    font-size: 14px;
  }
  .span1{
    left: 120px;
    color: #707070;
  }
  .span2{
    left: 433px;
    color: #a7a7a7;
  }
  .span3{
    left: 615px;
    color: #999999;
  }
  .span4{
    left: 810px;
  }
  .span5{
    right: 35px;
  }
  .botLiOne{
    position: relative;
    border: 1px solid #e2e2e2;
    border-top: 0;
  }
  .jiesuan{
    margin: 35px 0 35px 920px;
  }
  .jiesuan>span:nth-child(2){
    font-size: 20px;
    color: #ff5757;
  }
  .qxDd,.ljZf{
    background: #999999;
    color: #ffffff;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    margin-left: 710px;
  }
  .ljZf{
    background: #f08200;
    margin-left: 900px;
    margin-top: -50px;
  }

</style>
