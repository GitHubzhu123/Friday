<template>
    <div class="spxq_dh">
      <div class="dh_gwc">
        <img src="static/f/图层 293.png" alt="">
        加入购物车
      </div>
      <div class="xiangqing" v-for="item in [0,1]">
        <p class="sp_name">男士短衬衫</p>
        <p>明水礼盒十分优秀，是送朋友，送亲人的不二选择。<br>
          什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。<br>
          完成交易，如有剩余库存，从新上架产品
        </p>
        <img src="static/f/sp/图层 113.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "spxq_dh"
    }
</script>

<style scoped>
  .spxq_dh{
    position: relative;
  }
  .dh_gwc{
    width: 180px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: rgb(240,130,0);
    position: absolute;
    top: -91px;
    right: -40px;
    color: white;
  }
  .dh_gwc img{
    margin-right: 20px;
    position: relative;
    top: 5px;
  }
  .xiangqing{
    margin-top: 40px;
    line-height: 30px;
    font-size: 15px;
  }
  .sp_name{
    font-size: 20px;
    color: rgb(255,174,79);
  }
  .xiangqing img{
    margin-top: 20px;
  }
</style>
