<template>
    <div class="spxq_dh">

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
        name: "spxq_dh",
      methods:{

      },
      mounted(){

      }
    }
</script>

<style scoped>
  .spxq_dh{
    position: relative;
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
