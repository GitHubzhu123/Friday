<template>
  <div class="ddtj">
    <top_xiao></top_xiao>
    <gwc_tit></gwc_tit>
    <hr>
    <div class="ddtj_cont zhong">
      <div class="tjok">
        <img src="static/f/形状 1.png" alt="">
        <p>订单已提交，请于24小时内完成支付<span>（逾期订单将被取消）</span></p>
      </div>
      <p class="dizi">
        <span class="dw"></span><span>送货至：  </span>
        <span>但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589</span>
      </p>
      <p class="jin">
        <span>应付金额：</span>
        <span class="hong">165.90</span>
        <span>（在线支付）</span>
        <span class="bianhao">订单编号：425954156947</span>
      </p>
      <p class="zfpt">支付平台</p>
      <hr>
      <div class="zffs">
        <span class="dian"></span>
        <div class="zf">
          <img src="static/f/支付宝.png" alt="">
        </div>
        <span class="dian"></span>
        <div class="zf">
          <img src="static/f/微信支付.png" alt="">
        </div>
        <span class="dian"></span>
        <div class="zf">
          <img src="static/f/银联.png" alt=""><span>银联支付</span>
        </div>
        <span class="dian"></span>
        <div class="zf">
          <img src="static/f/余额支付.png" alt=""><span>余额支付（￥500）</span>
        </div>
      </div>
      <div class="shaoma">
        <div class="dnzf">
          <p>使用电脑支付</p>
          <img class="k" src="static/f/FRONT.png" alt="">
          <div class="logo2_di">
            <img  class="logo2" src="static/f/logo 拷贝 2.png" alt="">
          </div>
          <p class="lj">立即支付</p>
        </div>
        <span class="huo">或</span>
        <div class="zfbma">
          <p>使用支付宝钱包扫一扫付款</p>
          <img src="static/f/支付码.png" alt="">
        </div>
      </div>
      <div class="shaoma">
        <img class="shouji" src="static/f/图层 85.png" alt="">
        <div class="wxma">
          <p>使用微信扫一扫付款</p>
          <img src="static/f/支付码.png" alt="">
        </div>
      </div>
    </div>
    <btm></btm>
  </div>
</template>

<script>
  import Top_Xiao from '@/components/Top_Xiao'
  import GWC_tit from '@/components/GWC/GWC_tit'
  import Btm from '@/components/Btm'
    export default {
        name: "DingDanTiJiao",
      components:{
        gwc_tit:GWC_tit,
        top_xiao:Top_Xiao,
        btm:Btm,
      }
    }
</script>

<style scoped>
  hr{
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
  .tjok{
    text-align: center;
  }
  .tjok img{
    width: 80px;
    margin-top: 80px;
  }
  .tjok p{
    line-height: 160px;
    font-size: 20px;
    color: rgb(150,150,150);
  }
  .tjok span{
    color: rgb(240,130,0);
  }
  .dizi{
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border: 1px solid rgb(190,190,190);
    background: rgb(244,255,242);
  }
  .dw{
    display: inline-block;
    width: 20px;
    height: 25px;
    background: url('/../static/f/JingLing.png') -480px 3px;
    position: relative;
    top: 3px;
    margin: 0 10px;
  }
  .jin{
    line-height: 100px;
  }
  .hong{
    color: rgb(255,87,87);
    font-size: 25px;
  }
  .bianhao{
    float: right;
  }
  .zfpt{
    margin-bottom:20px ;
  }
  .zffs{
    margin-top: 40px;
  }
  .dian{
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(29,118,199);
    border-radius: 50%;
    position: relative;
    top: -5px;
    margin-right: 10px;
    margin-left: 40px;
    background: url('/../static/f/JingLing.png') -418px -11px;
  }
  .zf{
    display: inline-block;
    border: 1px solid;
    height: 26px;
    padding: 7px 10px;
  }
  .zf img{
    height: 26px;
  }
  .zf span{
    margin-left: 10px;
    position: relative;
    top: -5px;
  }
  .shaoma{
    margin-top:40px;
    border: 1px solid;
    padding: 60px ;
    position: relative;
  }
  .dnzf{
    width: 170px;
    margin-left: 300px;
    position: relative;
    text-align: center;
    display: inline-block;
  }
  .k{
    margin: 40px 0;
  }
  .logo2_di{
    width: 130px;
    height: 40px;
    padding-top: 20px;
    background: white;
    position: absolute;
    top: 80px;
    left: 20px;
  }
  .lj{
    width: 170px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    background: rgb(240,130,0);
  }
  .huo{
    display: inline-block;
    position: relative;
    top: -130px;
    margin: 0 140px;
  }
  .zfbma{
    display: inline-block;
    width: 220px;
    text-align: center;
  }
  .zfbma img{
    margin-top: 40px;
    margin-bottom: -10px;
  }
  .shouji{
    margin-left: 220px;
    margin-right: 235px;
  }
  .wxma{
    display: inline-block;
    width: 220px;
    text-align: center;
  }
  .wxma img{
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>
