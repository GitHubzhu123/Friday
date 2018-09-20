<template>
<div>
  <div class="btm">
  <div class="btmT">
    <ul>
      <li><img src="./../../static/z/主页/btm1.png" alt="">优鲜保障</li>
      <li><img src="./../../static/z/主页/btm2.png" alt="">全程监控</li>
      <li><img src="./../../static/z/主页/btm3.png" alt="">礼拜五特惠</li>
      <li><img src="./../../static/z/主页/btm4.png" alt="">基地直供</li>
      <li><img src="./../../static/z/主页/btm5.png" alt="">准时送达</li>
    </ul>
  </div>
  </div>
  <div class="btm1">
    <div class="btm1_1">
      <div class="btm1_l">
        <img src="./../../static/z/主页/logo.png" alt=""><br/>
        <span>服务时间：08：00-22：00</span>
        <a><img src="./../../static/z/主页/phone.png" alt="">400-800-8820</a>
      </div>
      <div class="ewm">
        <img src="./../../static/z/主页/ewm.png" alt=""><br/>
        <span>礼拜五官方微信</span>
      </div>
      <div class="ewm">
        <img src="./../../static/z/主页/ewm.png" alt=""><br/>
        <span>礼拜五APP</span>
      </div>
      <ul class="ul">
        <li>关于礼拜五</li>
        <li>新用户注册</li>
        <li>在线下单</li>
        <li>支付方式</li>
      </ul>
      <ul class="ul">
        <li>配送说明</li>
        <li>运费说明</li>
        <li>配送方式</li>
        <li>发票说明</li>
      </ul>
      <ul class="ul">
        <li>售后服务</li>
        <li>退换货说明</li>
        <li>服务保障承诺</li>
        <li>验货与签收</li>
      </ul>
      <ul class="ul">
        <li>加盟礼拜五</li>
        <li>加盟条款</li>
        <li>公司简介</li>
        <li>服务协议</li>
      </ul>
    </div>
  </div>
  <div>
    <p class="p1">版权所有 @ 礼拜五 保留所有权利|沪ICP12042163</p>
    <p class="p2">礼拜五 纵享品质</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "Btm"
    }
</script>

<style scoped>
  .btm{
    margin-top: 30px;
    clear: both;
  }
  .btmT{
    clear: both;
    width: 1280px;
    height: 105px;
    margin: 0 auto;
    /*border: 1px solid red;*/
  }
  .btmT>ul>li{
    list-style: none;
    float: left;
    height: 60px;
    margin: 23px 0;
    line-height: 60px;
    width: 20%;
    text-align: center;
    box-sizing: border-box;
    border-left: 1px solid #ddd;
    color: #333;
  }
  .btmT>ul>li:first-child{
    border: 0;
     }
  .btmT>ul>li>img{
    margin-right: 10px;
    vertical-align: middle;
    transition: 2s;
  }
  .btmT>ul>li>img:hover{
    transform: rotate(360deg) scale(1.3);
  }
  .btm{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .btm1{
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  .btm1_1{
    width: 1280px;
    margin: 0 auto;
    height: 200px;
    /*background: palegoldenrod;*/
  }
  .btm1_l{
    font-size: 16px;
  }
  .btm1_l>span{
    color: #8c8c8c;
  }
  .btm1_l>img{
    margin: 30px 0;
  }
  .btm1_l>a{
    padding-left: 25px;
    color: #f08200;
  }
  .btm1_l>a>img{
    margin-right: 5px;
    position: relative;
    top: 2.5px;
     }
  .btm1_1>div{
    float: left;
  }
  .ewm{
    width: 130px;
    height: 130px;
    text-align: center;
    margin: 18px 0 0 30px;
    color: #a0a0a0;
    font-size: 16px;
  }
  .ul{
    float: left;
    list-style: none;
    width: 100px;
    color: #b3b3b3;
    font-size: 14px;
    margin-top: 25px;
    margin-right: 35px;
  }
  .ul:nth-of-type(1){
    margin-left: 40px;
  }
  .ul>li{
    margin: 6px 0;
  }
  .ul>li:nth-of-type(1){
    font-size: 16px;
    color: #404040;
    margin-bottom: 20px;
  }
  .p1,.p2{
    text-align: center;
    font-size: 14px;
  }
  .p1{
    color: #8c8c8c;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .p2{
    color: #f08200;
    margin-bottom: 20px;
  }
</style>
