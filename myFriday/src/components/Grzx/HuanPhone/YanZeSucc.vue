<template>
  <div class="success">
    <div>
      <img src="../../../../static/imgM/绑定成功.png" alt="">
      <span>恭喜您成功修改</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "YanZeSucc"
    }
</script>

<style scoped>
  .success{
    /*width: 460px;*/
    /*height: 185px;*/
    /*background: #d9d9d9;*/
    /*border-radius: 20px;*/
    /*position: absolute;*/
    /*top: 163px;*/
    /*right: 90px;*/
    /*font-size: 20px;*/
    /*color: #f08200;*/
    /*text-align: center;*/
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
