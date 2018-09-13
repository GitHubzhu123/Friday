<template>
  <div id="kong">
    <img src="static/f/bigche.png" alt="">
    <div class="right">
      <p class="zi">您的购物车是空的</p>
      <p class="btn">去首页看看</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "kong"
    }
</script>

<style scoped>
#kong{
  margin: 185px auto;
  width: 320px;
  height: 120px;
}
#kong>img{
  margin-top: 10px;
}
.right{
  font-size: 17px;
  float: right;
  width: 170px;
  height: 100%;
  text-align: center;
}
  .zi{
    height: 75px;
    line-height: 75px;
  }
  .btn{
    height: 45px;
    line-height: 45px;
    color: white;
    background: rgb(236,106,23);
    border-radius: 5px;
  }
</style>
