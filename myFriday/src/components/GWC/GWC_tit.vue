<template>
    <div id="gwc_tit" class="zhong">
      <img class="logo" src="static/f/logo.png" alt="">
      <div class="right">
        <span class="zi" @click="to_gwc">我的购物车</span>
        <span class="tu"></span>
        <span class="zi" @click="gwc_tit2">确认订单信息</span>
        <span class="tu"></span>
        <span class="zi" @click="gwc_tit3">订单提交成功</span>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "GWC_tit",
      data(){
        return{
          userid:localStorage.userid,
        }
      },
      methods:{
        to_gwc(){
          if (localStorage.huang>0){
          axios.get('/api/vuephp/gwc.php?type=21&userid='+this.userid).then(res=> {
            // console.log(res.data)
            localStorage.huang=0
            if(res.data==''){
              window.location.href="/#/kong"
            }else {
              window.location.href="/#/gwc_you"
            }
            // this.sparr = res.data;
            // var that = this;
          })
          }
      },
        gwc_tit2(){
          if (localStorage.huang>1) {
            localStorage.huang = 1
            window.location.href = "/#/querendingdan"
          }
        },
        gwc_tit3(){
          // localStorage.huang=2
          // window.location.href="/#/dingdantijiao"
        },
      },
      mounted(){
          // localStorage.huang=0
          var huang=localStorage.huang
          // $(".zi").css({
          //   color:'rgb(0,0,0)'
          // });
          $(".zi").eq(huang).css({
            color:'rgb(240,130,0)'
          })

      }
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
