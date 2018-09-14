<template>
    <div id="gwc_you">
      <span class="smallche"></span>
      <span>购物车</span>
      <div class="shangdian" v-for="(item,i) in sdarr">
        <div class="sd_tit">
          <span class="gou gou1" ></span>
          <span class="zi1">爱果果水果店</span>
          <span class="zi2">规格</span>
          <span class="zi2">单价</span>
          <span class="zi2">数量</span>
          <span class="zi2">金额</span>
          <span class="zi2">操作</span>
        </div>
        <div class="sp" v-for="(item,j) in sparr">
          <span class="gou" :class="splength[j]?'gou1':'gou2'" @click="gou(j)"></span>
          <div class="sp_div">
            <img src="static/f/sp/图层 275.png" alt="" class="sp_img">
            <span>云南蒙自石榴 8个装</span>
          </div>
          <span class="zi3 hui">8个装 </span>
          <span class="zi3 hui">￥569</span>
          <div class="num_box">
            <div class="jian_box">
              <img src="static/f/jian.png" alt="">
            </div>
            <span >1</span>
            <div class="jia_box">
              <img src="static/f/jia.png" alt="">
            </div>
          </div>
          <span class="zi3">￥569</span>
          <span class="shan">删除</span>
        </div>
        <p class="je_p">商品金额<span class="je_span">￥108.0</span></p>
      </div>
      <div class="foot">
        <span class="left">全选</span>
        <span class="left">批量删除</span>
        <span>商品总计:</span>
        <span class="zongjia">￥2977</span>
        <span class="ljgm">立即购买</span>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "GWC_you",
      data(){
        return{
          sp:[],
          sdarr:[0],
          sparr:[],
          splength:[]
        }
      },
      methods:{
          gou(j){
            // if (this.splength[j]){
            //
              this.$set(this.splength,j,!this.splength[j])
            // }

            // console.log(this.splength[j])
            // $($event.target).removeClass("gou2")
            // $($event.target).addClass("gou1")
          }
      },
      mounted(){
        var a=[1,2,3]
        this.sparr=a;
        for(var i=0;i<this.sparr.length;i++){
          this.splength.push(false)
        };
        var usid=Number(localStorage.userid)
        axios.get('/api/vuephp/gwc.php?type=21&userid=1').then(res=>{
          // console.log(usid,res.data)
          this.sparr=res.data;
          var that = this;
          // for (var i=0;i<1;i++){
          //   Vue.set(that.src,i,that.sp[i].src);
          //   Vue.set(that.spName,i,that.sp[i].name);
          //   Vue.set(that.moneyX,i,that.sp[i].money);
          //   Vue.set(that.moneyY,i,that.sp[i].moneyY);
          //   Vue.set(that.jieshao,i,that.sp[i].jieShao);
          // }
        })

      }
    }
</script>

<style scoped>
  #gwc_you{
    margin: 20px 0;
  }
  #gwc_you>span{
    font-size: 18px;
  }
  .smallche{
    display: inline-block;
    width: 22px;
    height: 20px;
    position: relative;
    top: 2px;
    background: url('/../static/f/JingLing.png') -20px 0px;
    margin-right: 10px;
  }
  .shangdian{
    margin-top: 20px;
    border: 1px solid rgb(211,211,211);
  }
  .sd_tit{

    height: 50px;
    background: rgb(242,242,242);
    line-height: 50px;
  }
  .zi1{
    margin-right: 295px;
  }
  .zi2{
    margin-right: 145px;
  }
  .gou{
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(211,211,211);
    position: relative;
    top: 2px;
    margin: 0 20px;
  }
  .gou1{
    background: url('/../static/f/JingLing.png') -42px -2px;
  }
  .gou2{
    background: url('/../static/f/JingLing.png') -60px -2px;
  }
  .sp{
    height: 120px;
    line-height: 120px;
    border-bottom:1px solid rgb(211,211,211);
  }
  .sp_div{
    width: 360px;
    display: inline-block;
    /*background: #666666;*/
  }
  .sp_img{
    width: 80px;
    height: 80px;
    vertical-align:middle;
    margin-right: 20px;
  }
  .num_box{
    display: inline-block;
    vertical-align:middle;
    width: 100px;
    height: 30px;
    border: 1px solid rgb(211,211,211);
    margin-left: -0px;
    margin-right: 70px;
    line-height: 30px;
    text-align: center;
  }
  .jian_box,.jia_box{
    width: 30px;
    height: 30px;
    background: rgb(242,242,242);
    position: relative;
  }
  .jian_box{
    float: left;
    border-right: 1px solid rgb(211,211,211);
  }
  .jia_box{
    float: right;
    border-left: 1px solid rgb(211,211,211);
  }
  .num_box img{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .zi3{
    display: inline-block;
    width: 100px;
    text-align: center;
    margin-right: 80px;
  }
  .hui{
    color: rgb(150,150,150);
  }
  .shan{
    display: inline-block;
    width: 90px;
    text-align: center;
    color: rgb(73,142,61);
  }
  .je_p{
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    text-align: right;
    padding-right: 40px;
  }
  .je_span{
    margin-left: 20px;
    color: rgb(255,87,87);
  }
  .foot{
    height: 130px;
    line-height: 130px;
    text-align: right;
  }
  .left{
    float: left;
    margin: 0 20px;
    color: rgb(73,142,61);
  }
  .zongjia{
    font-size: 20px;
    color: rgb(255,87,87);
    margin-right: 30px;
  }
  .ljgm{
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgb(240,130,0);
    border-radius: 5px;
  }
</style>
