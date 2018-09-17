<template>
  <div id="spxq_cont" class="zhong">
    <div class="lujing">
        您的当前位置： 首页  >  全部商品  >  苹果  >  阿克苏
    </div>
    <div class="sp_div">
      <div class="imgdiv">
        <img class="bigimg" :src="src[0]" alt="">
        <div class="smallbox">
          <span class="left"></span>
          <div class="small_window">
            <div class="smallbox_tiao">
              <img class="smallimg" :src="src[0]" alt="">
              <img class="smallimg" :src="src[0]" alt="">
              <img class="smallimg" :src="src[0]" alt="">
              <img class="smallimg" :src="src[0]" alt="">
              <img class="smallimg" :src="src[0]" alt="">
            </div>
          </div>
          <span class="right"></span>
        </div>
      </div>
      <div class="jieshao_div">
        <p class="sp_name">{{spName[0]}} </p>
        <span class="lei  lei1">全国</span>
        <span class="lei  lei2">礼拜五</span>
        <span class="lei  lei3">次日达</span>
        <span class="lei  lei4">自营</span>
        <div class="jieshao1_div">
          <img src="static/f/组 15.png" alt="">
          <p>{{jieshao[0]}}</p>
        </div>
        <p class="sp_money">现价：￥{{moneyX[0]}}<span>原价：￥{{moneyY[0]}}</span></p>
        <p class="guige">请选择规格<span>500g</span><span>500g</span></p>
        <p class="guige">请选择规格<span>500g</span><span>500g</span></p>
        <div class="jiaru">

          <span>数 量:</span>
          <div class="num_box">
            <div class="jian_box" @click="jian()">
              <img src="static/f/jian.png" alt="">
            </div>
            <span>{{num}}</span>
            <div class="jia_box" @click="jia()">
              <img src="static/f/jia.png" alt="">
            </div>
          </div>
          <span>件</span>

          <span class="jrgwc" @click="jrgwc()">加入购物车</span>
          <span class="ljgm">立即购买</span>
        </div>
        <div class="tb_box">
          <span class="tubiao tb1"></span>
          <span>收藏此商品 </span>
          <span class="fx">分享到：</span>
          <span class="tubiao tb2"></span>
          <span class="tubiao tb3"></span>
          <span class="tubiao tb4"></span>
          <span class="tubiao tb5"></span>
          <span class="tubiao tb6"></span>
        </div>
      </div>
    </div>
    <div class="dh_pj">
      <div class="dh_pj_tit">
        <span>商品详情</span>
        <span>商品评价</span>
      </div>
      <div class="dh">
        <spxq_dh></spxq_dh>
      </div>
      <div class="pj">
        <spxq_pj></spxq_pj>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import spxq_dh from '@/components/SPXQ/spxq_dh'
  import spxq_pj from '@/components/SPXQ/spxq_pj'
    export default {
        name: "SPXQ_cont",
      components:{
        spxq_dh:spxq_dh,
        spxq_pj:spxq_pj,
      },
      data(){
        return{
          num:1,
          id:2,
          sp:'',
          src:[],
          spName:[],
          moneyX:[],
          moneyY:[],
          jieshao:[],
        }
      },
      methods:{
        jian(){
          this.num--;
          if(this.num<1){
            this.num=1;
          }
        },
        jia(){
          this.num++;
        },
        jrgwc(){
          axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.sp[0].id+'&num='+this.num).then(res=> {
            console.log('aa')
          })
        },
      },
      mounted(){
        localStorage.userid=1;
        axios.get('/api/vuephp/gwc.php?type=2&id='+this.id).then(res=>{
          console.log(res.data)
          this.sp=res.data;
          var that = this;
          for (var i=0;i<1;i++){
            Vue.set(that.src,i,that.sp[i].src);
            Vue.set(that.spName,i,that.sp[i].name);
            Vue.set(that.moneyX,i,that.sp[i].money);
            Vue.set(that.moneyY,i,that.sp[i].moneyY);
            Vue.set(that.jieshao,i,that.sp[i].jieShao);
          }
        })
      }
    }
</script>

<style scoped>
  .lujing{
    height: 55px;
    padding-left: 20px;
    margin: 20px 0;
    font-size: 13px;
    background: rgb(244,244,244);
    line-height: 55px;
    color: rgb(150,150,150);
  }
  .sp_div{
    /*border: 1px solid;*/
  }
  .imgdiv{
    width: 500px;
    display: inline-block;
  }
  .bigimg{
    width: 500px;
    height: 500px;
  }
  .smallbox{
    width: 500px;
    height: 92px;
    margin:40px 0;
    position: relative;
  }
  .left{
    float: left;
    margin-top: 15px;
    margin-right: 10px;
    display: inline-block;
    width: 30px;
    height: 60px;
    background: url('/../static/f/JingLing.png') 0px -20px;

  }
  .right{
    float: right;
    margin-top: 15px;
    display: inline-block;
    width: 30px;
    height: 60px;
    background: url('/../static/f/JingLing.png') -24px -20px;
  }
  .small_window{
    float: left;
    width: 420px;
    overflow: hidden;
  }
  .smallbox_tiao{
    display: inline-block;
    width: 550px;

  }
  .smallimg{
    width: 90px;
    height: 90px;
    margin-right: 20px;
    float: left;
    /*border: 1px solid rgb();*/
  }
  .jieshao_div{
    float: right;
    width: 740px;
    padding-left: 35px;
  }
  .sp_name{
    font-size: 25px;
    line-height: 65px;
  }
  .lei{
    padding: 0 15px;
    display: inline-block;
    line-height: 25px;
    margin-right: 20px;
    font-size: 16px;
    color: white;
  }
  .lei1,.lei3,.lei4{
    background: rgb(73,142,61);
  }
  .lei2{
    background: rgb(240,130,0);
  }
  .jieshao1_div{
    margin: 25px 0;
    padding: 20px 0;
    height: 140px;
    border-top: 1px solid rgb(200,200,200);
    border-bottom: 1px solid rgb(200,200,200);
  }
  .jieshao1_div img{
    float: left;
    margin-right: 40px;
  }
  .jieshao1_div p{
    font-size: 16px;
    line-height: 30px;
  }
  .sp_money{
    font-size: 30px;
    color: rgb(255,87,87);
  }
  .sp_money span{
    font-size: 20px;
    margin-left: 35px;
    color: rgb(150,150,150);
    text-decoration:line-through
  }
  .guige{
    margin-top: 25px;
    font-size: 18px;

  }
  .guige span{
    display: inline-block;
    width: 85px;
    height: 35px;
    border: 1px solid rgb(200,200,200);
    line-height: 35px;
    text-align: center;
    margin-left: 20px;
  }
  .jiaru{
    margin-top: 30px;
  }
  .num_box{
    display: inline-block;
    vertical-align:middle;
    width: 100px;
    height: 30px;
    border: 1px solid rgb(211,211,211);
    margin-left: -0px;
    /*margin-right: 70px;*/
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
  .jrgwc,.ljgm{
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
  }
  .jrgwc{
    background: rgb(255,174,79);
  }
  .ljgm{
    background: rgb(240,130,0);
  }
  .tb_box{
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
  }
  .tb_box span{

  }
  .tubiao{
    display: inline-block;
    width: 30px;
    height: 30px;
    position: relative;
    top: 12px;
  }
  .tb1{
    background: url('/../static/f/JingLing.png') -120px -0px;
  }
  .fx{
    margin-left: 40px;
  }
  .tb2{
    background: url('/../static/f/JingLing.png') -180px -0px;
  }
  .tb3{
    background: url('/../static/f/JingLing.png') -220px -0px;
  }
  .tb4{
    background: url('/../static/f/JingLing.png') -260px -0px;
  }
  .tb5{
    background: url('/../static/f/JingLing.png') -300px -0px;
  }
  .tb6{
    background: url('/../static/f/JingLing.png') -340px -0px;
  }
  .dh_pj{
    /*height: 500px;*/
    border: 1px solid rgb(220,220,220);
  }
  .dh_pj_tit{
    height: 50px;
    background: rgb(244,244,244);
    line-height: 50px;
    border-bottom: 1px solid rgb(220,220,220);
  }
  .dh_pj_tit>span{
    display: inline-block;
    height: 50px;
    padding: 0 25px;
  }
  /*.titchange{*/
    /*background: white;*/
    /*border-right: 1px solid rgb(220,220,220);*/
    /*border-top: 3px solid rgb(73,142,61);*/
  /*}*/
  .dh{
    padding: 0 40px 30px 40px;
    /*display: none;*/
  }
  .pj{
    padding: 0 40px 30px 40px;
    display: none;
  }
</style>
