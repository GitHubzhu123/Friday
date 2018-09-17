<template>
  <div class="spxq_pj">
    <div class="pj_box" v-for="item in [1,2,3,4]">
      <div class="user">
        <img class="tx" src="static/f/图层 285.png" alt="">
        <p>158****0203</p>
      </div>
      <div class="pj_cont">
        <p class="xing">
          <img src="static/f/形状 13 拷贝 9.png" alt="">
          <img src="static/f/形状 13 拷贝 9.png" alt="">
          <img src="static/f/形状 13 拷贝 9.png" alt="">
          <img src="static/f/形状 13 拷贝 9.png" alt="">
          <img src="static/f/形状 13 拷贝 10.png" alt="">
        </p>
        <p class="zi">
          帮同事买的，很不错，性价比高
        </p>
        <p class="tu">
          <img src="static/f/图层 116 拷贝.png" alt="">
          <img src="static/f/图层 116 拷贝 3.png" alt="">
          <img src="static/f/图层 116 拷贝 3.png" alt="">
          <img src="static/f/图层 116 拷贝 3.png" alt="">
          <img src="static/f/图层 116 拷贝 3.png" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "spxq_pj"
    }
</script>

<style scoped>
  .pj_box{
    border-bottom: 1px solid rgb(220,220,220);
    padding-bottom: 10px;
    margin-top: 20px;
  }
  .user{
    width: 90px;
    height: 120px;
    /*border: 1px solid;*/
    float: left;
    margin-right: 20px;
  }
  .user p{
    line-height: 30px;
  }
  .pj_cont{
    /*height: 200px;*/
    line-height: 30px;
  }
  .tu{
    margin-top: 20px;
  }
</style>
