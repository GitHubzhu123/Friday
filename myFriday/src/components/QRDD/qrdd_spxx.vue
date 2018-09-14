<template>
    <div class="spxx">
      <p class="st">商品信息</p>
      <div class="sd_kp" v-for="item in [0,1]">

      <div class="shangdian">
        <div class="sd_tit">
          <span class="gou gou1" ></span>
          <span class="zi1">爱果果水果店</span>
          <span class="zi2">规格</span>
          <span class="zi2">单价</span>
          <span class="zi2">数量</span>
          <span class="zi2">金额</span>
        </div>
        <div class="sp" v-for="(item,j) in sparr">
          <span class="gou" :class="splength[j]?'gou1':'gou2'" @click="gou(j)"></span>
          <div class="sp_div">
            <img :src="src[j]" alt="" class="sp_img">
            <span>{{spname[j]}}</span>
          </div>
          <span class="zi3 hui">{{guige[j]}}</span>
          <span class="zi3 hui">{{money[j]}}</span>
          <div class="num_box">
            <div class="jian_box" @click="jian">
              <img src="static/f/jian.png" alt="">
            </div>
            <span >{{num[j]}}</span>
            <div class="jia_box" @click="jia">
              <img src="static/f/jia.png" alt="">
            </div>
          </div>
          <span class="zi3">￥{{money[j]*num[j]}}</span>
        </div>
        <p class="je_p">
          <span class="hei">运费</span><span class="hong">￥5.0</span>
          <span class="hei">商品金额</span><span class="hong">￥108.0</span>
          <span class="hei">商家合计</span><span class="hong">￥113.0</span>
        </p>
      </div>
        <hr>
        <p class="st">开票信息</p>
        <p class="xuan">
          <span class="dian"></span><span class="zi">不需要</span>
          <span class="dian"></span><span class="zi">个人</span>
          <span class="dian"></span><span class="zi">单位</span>
        </p>
        <span>发票抬头：</span><input class="tt" type="text">
        <span style="color: red">*</span><span>请填写后认真核对发票信息</span>
        <hr>
        <p class="st">添加订单备注</p>
        <input type="text" class="bz">
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "qrdd_spxx",
      data(){
        return{
          sp:[],
          src:[],
          spname:[],
          guige:[],
          money:[],
          num:[],
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

        },
        jian(){

        },
        jia(){

        },
        qrdd(){
          localStorage.huang=1;
          window.location.href="/#/querendingdan"

        }
      },
      mounted(){
        // var a=[1,2,3]
        // this.sparr=a;
        for(var i=0;i<this.sparr.length;i++){
          this.splength.push(false)
        };
        var usid=Number(localStorage.userid)
        axios.get('/api/vuephp/gwc.php?type=21&userid=1').then(res=>{
          this.sparr=res.data;
          var that = this;

          for (var i=0;i<this.sparr.length;i++){
            Vue.set(that.num,i,that.sparr[i].num);
            (function(i,that){
              axios.get('/api/vuephp/gwc.php?type=2&id='+that.sparr[i].spID).then(res=>{
                that.sp[i]=res.data[0];
                Vue.set(that.src,i,that.sp[i].src);
                Vue.set(that.spname,i,that.sp[i].name);
                Vue.set(that.guige,i,that.sp[i].guiGe);
                Vue.set(that.money,i,that.sp[i].money);
              })
            })(i,that);
          }
        })
      }
    }
</script>

<style scoped>
  .st{
    font-size: 20px;
    margin-top: 20px;
    /*line-height: 60px;*/
  }
  .shangdian{
    margin-top: 20px;
    border: 1px solid rgb(211,211,211);
    margin-bottom: 30px;
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
  .je_p{
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    text-align: right;
  }
  .hong{
    margin-left: 20px;
    margin-right: 40px;
    color: rgb(255,87,87);
  }
  hr{
    margin-top: 20px;
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
  .xuan{
    line-height: 60px;
    font-size: 15px;
  }
  .dian{
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(190,190,190);
    border-radius: 50%;
    position: relative;
    top: 2px;
    margin-right: 10px;
    background: url('/../static/f/JingLing.png') -418px 3px;
  }
  .zi{
    margin-left: 10px;
    margin-right: 30px;
  }
  .tt{
    width: 370px;
    height: 35px;
    margin-right: 10px;
  }
  .bz{
    width: 630px;
    height: 35px;
    margin-top: 20px;
  }
</style>
