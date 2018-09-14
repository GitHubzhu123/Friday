<template>
    <div id="gwc_tit" class="zhong">
      <img class="logo" src="static/f/logo.png" alt="">
      <div class="right">
        <span class="zi">我的购物车</span>
        <span class="tu"></span>
        <span class="zi">确认订单信息</span>
        <span class="tu"></span>
        <span class="zi">订单提交成功</span>
      </div>
    </div>
</template>

<script>

    export default {
        name: "GWC_tit"
    }
</script>

<style scoped>
#gwc_tit{
  height: 130px;
  /*margin-top: 20px;*/
}
  .logo{
    margin-top: 25px;
    height: 70px;
  }
  .right{
    height: 25px;
    float: right;
    margin-top:70px;
    font-size: 17px;
  }
  .tu{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 40px;
    position: relative;
    top: 3px;
    background: url('/../static/f/JingLing.png') 2px 2px;

  }

</style>
