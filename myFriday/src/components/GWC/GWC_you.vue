<template>
    <div id="gwc_you">
      <span class="smallche"></span>
      <span>购物车</span>
      <!--商店-->
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
        <!--单条商品-->
        <div class="sp" v-for="(jj,j) in spARR[i]">
          <span class="gou" :class="goubol[i].spgou[j]?'gou1':'gou2'" @click="spgouchange(i,j)"></span>
          <div class="sp_div">
            <img :src="jj.src" alt="" class="sp_img">
            <span>{{jj.name}}</span>
          </div>
          <span class="zi3 hui">{{jj.guiGe}}</span>
          <span class="zi3 hui">{{jj.money}}</span>
          <!--数量-->
          <div class="numdiv">
            <div class="num_box">
              <div class="jian_box" @click="jian(i,j)">
                <img src="static/f/jian.png" alt="">
              </div>
              <!--<span >{{num[i][j]}}</span>-->
              <input type="text" :value="num[i][j]" class="inp" @blur="inputnum(i,j,$event)">
              <div class="jia_box" @click="jia(i,j)">
                <img src="static/f/jia.png" alt="">
              </div>
            </div>
          </div>

          <span class="zi3">￥{{spzje[i][j]}}</span>
          <span class="shan" @click="shanchu_sp(i,j)">删除</span>
        </div>
        <p class="je_p">商品金额<span class="je_span">￥{{sdzje[i]}}</span></p>
      </div>
      <div class="foot">
        <span class="left" @click="quanxuan()">全选</span>
        <span class="left" @click="shanchu_quan()">批量删除</span>
        <span>商品总计:</span>
        <span class="zongjia">￥{{zongjine}}</span>
        <span class="ljgm" @click="qrdd">立即购买</span>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import bus from '../../assets/bus.js'
    export default {
        name: "GWC_you",
      data(){
        return{
          sp:[],
          shangdian:[],
          sdarr:[],
          sparr:[],
          splength:[],
          spARR:[],
          gwc:[],
          num:[],
          //对勾
          goubol:[],
          shan_spid:0,
          // 金额
          spzje:[],
          sdzje:[],
          zongjine:0,
          // 删除
          shanchu:[],
          shanchu_duo:[],
          //选中商品id
          xuanzhong:[],
        }
      },
      methods:{
          //商店的勾
        sdgouchange(i){
          this.goubol[i].sdgou=!this.goubol[i].sdgou
          //下属商品的勾和商店的勾保持一致
          if(this.goubol[i].sdgou){
            for(var a=0;a<this.goubol[i].spgou.length;a++){
              this.$set(this.goubol[i].spgou,a,true)
            }
            this.zje2()
            this.zje3()
          }else {
            for(var a=0;a<this.goubol[i].spgou.length;a++){
              this.$set(this.goubol[i].spgou,a,false)
            }
            this.zje2()
            this.zje3()
          }

        },
        //商品的勾
        spgouchange(i,j){
          this.$set(this.goubol[i].spgou,j,!this.goubol[i].spgou[j])
          this.zje2()
          this.zje3()
        },
        //全选
        quanxuan(){
          for(var i=0;i<this.sdarr.length;i++){
            for(var j=0;j<this.spARR[i].length;j++){
              this.goubol[i].sdgou=true
              this.$set(this.goubol[i].spgou,j,true)
              this.zje2()

            }
          }
          this.zje3()
        },
        // 减号
        jian(i,j){
          this.$set(this.num[i],j,this.num[i][j]*1-1)
          // console.log(this.spARR[i][j].id)
          axios.get('/api/vuephp/gwc.php?type=11&userid='+Number(localStorage.userid)+'&num='+this.num[i][j]+'&spid='+this.spARR[i][j].id).then(res=>{
// console.log(res.data)
          })
          if(this.num[i][j]==0){
            alert("该商品将被删除")
            this.shanchu_sp(i,j)

          }
          this.zje()
          this.zje2()
          this.zje3()
        },
        // 加号
        jia(i,j){
          this.$set(this.num[i],j,this.num[i][j]*1+1)

          axios.get('/api/vuephp/gwc.php?type=11&userid='+Number(localStorage.userid)+'&num='+this.num[i][j]+'&spid='+this.spARR[i][j].id).then(res=>{
            // console.log(res.data)
          })
          this.zje()
          this.zje2()
          this.zje3()
        },
        //输入框改变数量
        inputnum(i,j,$event){
            this.num[i][j]=$event.target.value

          axios.get('/api/vuephp/gwc.php?type=11&userid='+Number(localStorage.userid)+'&num='+this.num[i][j]+'&spid='+this.spARR[i][j].id).then(res=>{
            // console.log(res.data)
          })
          this.zje()
          this.zje2()
          this.zje3()
        },

        gwc_sc(){

        },
        //商品总金额
        zje(){
          for(var i=0;i<this.sdarr.length;i++){
            for(var j=0;j<this.spARR[i].length;j++){
              this.$set(this.spzje[i],j,Math.round(this.spARR[i][j].money*this.num[i][j]*100)/100)//取小数点后两位
            }
          }
        },
        //商店总金额
        zje2(){

          for(var i=0;i<this.sdarr.length;i++){
            var sdz=0;
            for(var j=0;j<this.spARR[i].length;j++){
              if(this.goubol[i].spgou[j]){
                sdz+=this.spzje[i][j]
                this.$set(this.sdzje,i,sdz)
              }else {
                sdz+=0
                this.$set(this.sdzje,i,sdz)
              }


            }
          }
        },
        // 总金额
        zje3(){
          this.zongjine=0;
          // console.log(this.sdzje)
          for (var i=0;i<this.sdzje.length;i++){
            this.zongjine+=this.sdzje[i]
            this.zongjine=Math.round(this.zongjine*100)/100

          }
        },
        //删除
        shanchu_sp(i,j){
          // console.log(this.spARR[i][j].id)
          this.shan_spid=this.spARR[i][j].id;
          axios.get('/api/vuephp/gwc.php?type=12&spid='+this.shan_spid).then(res=>{
console.log(res.data)
          })
          window.location.reload()
        },
        //批量删除
        shanchu_quan(){
          for(var i=0;i<this.sdarr.length;i++){
            for(var j=0;j<this.spARR[i].length;j++){
              if(this.goubol[i].spgou[j]){
                this.shanchu_duo.push(this.spARR[i][j].id)
                // console.log(this.spARR[i][j].id)
              }
            }
          }
          // console.log(this.shanchu_duo)
          axios.get('/api/vuephp/gwc.php?type=13&spidarr='+this.shanchu_duo).then(res=>{
            // console.log(res.data)
          })
          this.to_gwc()
        },
        to_gwc(){
          if(localStorage.login=='true'){
            axios.get('/api/vuephp/gwc.php?type=21&userid='+localStorage.userid).then(res=> {
              localStorage.huang=0
              // console.log(res.data)
              if(res.data.length>0){

                window.location.href="/#/gwc_you"
              }else {
                window.location.href="/#/kong"
              }
            })
          }else{
            $('.login').css({
              display:'block'
            })
          }
        },
        //确认订单
        qrdd(){
          for(var i=0;i<this.sdarr.length;i++){
            for(var j=0;j<this.spARR[i].length;j++){
              if(this.goubol[i].spgou[j]){
                this.xuanzhong.push(this.spARR[i][j])
                // console.log(this.spARR[i][j].id)
              }
            }
          }
          // console.log(this.xuanzhong)
          localStorage.huang=1;
          // var bus = new Vue()
          localStorage.xuanzhong=JSON.stringify(this.xuanzhong)
          console.log(localStorage.xuanzhong)
          window.location.href="/#/QueRendingdan"


        },
      },
      mounted(){
        for(var i=0;i<this.sparr.length;i++){
          this.splength.push(false)
        };
        var usid=Number(localStorage.userid)
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
            if (that.sdarr.indexOf(that.shangdian[i]) < 0) {//数组去重
              that.sdarr.push(that.shangdian[i]);
              that.spARR.push([])
              that.num.push([])
              that.spzje.push([])
            }
          }

          for(var i=0;i<that.sdarr.length;i++){
            //打钩
            that.goubol.push({sdgou:true,spgou:[]})
            that.goubol[i].sdgou=false;
            //总价
            // that.zongjine.push({sdzong:true,spzong:[]})

            for(var j=0;j<that.sp.length;j++){
              if(that.sp[j].shangDian==that.sdarr[i]){
                that.spARR[i].push(that.sp[j])//将商品加入对应商店
                that.goubol[i].spgou.push(false)//给商品绑定勾的状态
                // that.spzje[i][j]=that.spARR[i][j].money*that.num[i][j]
                for (var n=0;n<that.gwc.length;n++){
                  if(that.gwc[n].spID==that.sp[j].id){
                    that.num[i].push(that.gwc[n].num)//给商品对应数量
                  }
                }
              }
            }
          }

          this.zje()
          this.zje2()
          // this.zje3()
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
  .num_box input{
    height: 28px;
    width: 80px;
    text-align: center;
    font-size: 15px;
    border: 0 solid;
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
    /*margin-right: 10px;*/
  }
  .jia_box{
    float: right;
    border-left: 1px solid rgb(211,211,211);
    /*margin-left: 10px;*/
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
