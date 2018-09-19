<template>
    <div id="gwc_you">
      <span class="smallche"></span>
      <span>购物车</span>
      <div class="shangdian" v-for="(item,i) in sdarr">
        <div class="sd_tit">
          <span class="gou" :class="goubol[i].sdgou?'gou1':'gou2'" @click="sdgouchange(i)"></span>
          <span class="zi1">{{item}}</span>
          <span class="zi2">规格</span>
          <span class="zi2">单价</span>
          <span class="zi2">数量</span>
          <span class="zi2">金额</span>
          <span class="zi2">操作</span>
        </div>
        <div class="sp" v-for="(jj,j) in spARR[i]">
          <span class="gou" :class="goubol[i].spgou[j]?'gou1':'gou2'" @click="spgouchange(i,j)"></span>
          <div class="sp_div">
            <img :src="jj.src" alt="" class="sp_img">
            <span>{{jj.name}}</span>
          </div>
          <span class="zi3 hui">{{jj.guiGe}}</span>
          <span class="zi3 hui">{{jj.money}}</span>
          <div class="numdiv">
            <div class="num_box">
              <div class="jian_box" @click="jian">
                <img src="static/f/jian.png" alt="">
              </div>
              <span >{{num[i][j]}}</span>
              <div class="jia_box" @click="jia">
                <img src="static/f/jia.png" alt="">
              </div>
            </div>
          </div>

          <span class="zi3">￥{{jj.money*num[i][j]}}</span>
          <span class="shan" @click="gwc_sc">删除</span>
        </div>
        <p class="je_p">商品金额<span class="je_span">￥108.0</span></p>
      </div>
      <div class="foot">
        <span class="left">全选</span>
        <span class="left">批量删除</span>
        <span>商品总计:</span>
        <span class="zongjia">￥2977</span>
        <span class="ljgm" @click="qrdd">立即购买</span>
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
          // src:[],
          // spname:[],
          // guige:[],
          // money:[],
          shangdian:[],
          sdarr:[],
          sparr:[],
          splength:[],
          spARR:[[],[]],
          gwc:[],
          num:[[],[]],
          goubol:[],
        }
      },
      methods:{
        sdgouchange(i){
          console.log(this.goubol[i].sdgou,i)
          this.goubol[i].sdgou=!this.goubol[i].sdgou
          if(this.goubol[i].sdgou){
            for(var a=0;a<this.goubol[i].spgou.length;a++){
              this.$set(this.goubol[i].spgou,a,true)
            }
          }else {
            for(var a=0;a<this.goubol[i].spgou.length;a++){
              this.$set(this.goubol[i].spgou,a,false)
            }
          }
        },
          spgouchange(i,j){
            // console.log(this.goubol[i].spgou[j],i,j)
            this.$set(this.goubol[i].spgou,j,!this.goubol[i].spgou[j])
          },
        jian(){

        },
        jia(){

        },
        qrdd(){
            localStorage.huang=1;
            window.location.href="/#/querendingdan"

        },
        gwc_sc(){

        }
      },
      mounted(){
        // var a=[1,2,3]
        // this.sparr=a;
        for(var i=0;i<this.sparr.length;i++){
          this.splength.push(false)
        };
        var usid=Number(localStorage.userid)
        // 购买商品
        // axios.get('/api/vuephp/gwc.php?type=22&userid='+usid).then(res=>{
        //   console.log(res.data)
        // })

        // axios.get('/api/vuephp/gwc.php?type=21&userid='+usid).then(res=>{
        //   console.log(res.data)
        //   var that = this;
        //   //分类商店
        //   for(var i=0;i<res.data.length;i++){
        //     Vue.set(that.shangdian,i,res.data[i].shangDian);
        //     // Vue.set(that.num,i,res.data[i].num);
        //   }
        //   for (var i = 0; i < that.shangdian.length; i++) {
        //     if (that.sdarr.indexOf(that.shangdian[i]) < 0) {
        //       that.sdarr.push(that.shangdian[i]);
        //     }
        //   }
        //   // console.log(that.sdarr,that.num)
        // })

        axios.get('/api/vuephp/gwc.php?type=21&userid='+usid).then(res=>{
          // console.log(res.data)
          this.gwc=res.data
        })

        axios.get('/api/vuephp/gwc.php?type=22&userid='+usid).then(res=>{
          // console.log(res.data)
          this.sp=res.data;
          var that = this;
          for(var i=0;i<res.data.length;i++){
            Vue.set(that.shangdian,i,res.data[i].shangDian);
            // Vue.set(that.num,i,res.data[i].num);
           }
          for (var i = 0; i < that.shangdian.length; i++) {
            if (that.sdarr.indexOf(that.shangdian[i]) < 0) {
              that.sdarr.push(that.shangdian[i]);

            }
          }
          for(var i=0;i<that.sdarr.length;i++){
            //打钩
            that.goubol.push({sdgou:true,spgou:[]})
            that.goubol[i].sdgou=false;
            for(var j=0;j<that.sp.length;j++){
              if(that.sp[j].shangDian==that.sdarr[i]){
                that.spARR[i].push(that.sp[j])//将商品加入对应商店
                that.goubol[i].spgou.push(false)//给商品绑定勾的状态
                for (var n=0;n<that.gwc.length;n++){
                  if(that.gwc[n].spID==that.sp[j].id){
                    that.num[i].push(that.gwc[n].num)//给商品对应数量
                  }
                }
              }
            }
          }
          // console.log(that.goubol)

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
    display: inline-block;
    width: 400px;
    /*margin-right: 295px;*/
  }
  .zi2{
    display: inline-block;
    text-align: center;
    width: 155px;
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
    width: 400px;
    display: inline-block;
    /*background: #666666;*/
  }
  .sp_img{
    width: 80px;
    height: 80px;
    vertical-align:middle;
    margin-right: 20px;
  }
  .numdiv{
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .num_box{

    vertical-align:middle;
    /*width: 130px;*/
    height: 30px;
    border: 1px solid rgb(211,211,211);
    margin-left: -0px;
    line-height: 30px;

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
    margin-right: 10px;
  }
  .jia_box{
    float: right;
    border-left: 1px solid rgb(211,211,211);
    margin-left: 10px;
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
    width: 155px;
    text-align: center;
    /*margin-right: 80px;*/
  }
  .hui{
    color: rgb(150,150,150);
  }
  .shan{
    display: inline-block;
    width: 155px;
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
    color: white;
  }
</style>
