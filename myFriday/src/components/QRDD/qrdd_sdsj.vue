<template>
  <div class="sj">
    <p class="cirida lv" >次日达·礼拜五专享</p>
    <p class="time">
    <span>选择送达时间：   2016年9月18日12:00~3:00  </span>
    <span class="rili"></span><span class="lv">点击修改</span>
    </p>
    <hr>
    <p class="zhifu">实付金额：<span class="red">￥2977</span></p>
    <p class="zhifu">订单完成后可获得积分：<span class="huang">300积分</span></p>
    <p class="zhifu"><span class="btn" @click="tj">提交订单</span></p>
  </div>
</template>

<script>
    export default {
        name: "qrdd_sdsj",

      methods:{
          tj(){
            localStorage.huang=2;
            window.location.href="/#/dingdantijiao"
          }
      },
    }
</script>

<style scoped>
  hr{
    margin-top: 20px;
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
  .lv{
    color: rgb(107,165,97);
  }
  .red{
    color: rgb(255,87,87);
    font-size: 25px;
  }
  .huang{
    color: rgb(240,130,0);
  }
  .zhifu{
    font-size: 15px;
    margin-top: 20px;
    text-align: right;
  }
  .btn{
    display: inline-block;
    width: 150px;
    height: 50px;
    font-size: 20px;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    background: rgb(240,130,0);
  }
  .cirida{
    line-height: 60px;
  }
.time{
  line-height: 40px;;
}
  .rili{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('/../static/f/JingLing.png') -440px 0px;
    position: relative;
    top: 5px;
    margin-left:30px ;
    margin-right: 10px;
  }
</style>
