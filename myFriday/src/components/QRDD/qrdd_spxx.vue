<template>
    <div class="spxx">
      <p class="st">商品信息</p>
      <div class="sd_kp" v-for="(item,i) in sdarr">
      <div class="shangdian">
        <div class="sd_tit">
          <!--<span class="gou" :class="goubol[i].sdgou?'gou1':'gou2'" @click="sdgouchange(i)"></span>-->
          <span class="zi1">{{item}}</span>
          <span class="zi2">规格</span>
          <span class="zi2">单价</span>
          <span class="zi2">数量</span>
          <span class="zi2">金额</span>
        </div>
        <div class="sp" v-for="(jj,j) in spARR[i]">
          <!--<span class="gou" :class="goubol[i].spgou[j]?'gou1':'gou2'" @click="spgouchange(i,j)"></span>-->
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
        </div>
        <p class="je_p">
          <span class="hei">运费</span><span class="hong">￥{{yunfei}}</span>
          <span class="hei">商品金额</span><span class="hong">￥{{sdzje[i]}}</span>
          <span class="hei">商家合计</span><span class="hong">￥{{yunfei+sdzje[i]}}</span>
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
        <input type="text" class="bz" placeholder="限45个字，请填写有关商品、支付、发票等信息">
        <hr>
      </div>
      <div class="sj">
        <p class="cirida lv" >次日达·礼拜五专享</p>
        <p class="time">
          <span>选择送达时间：   2016年9月18日12:00~3:00  </span>
          <span class="rili"></span><span class="lv">点击修改</span>
        </p>
        <hr>
        <p class="zhifu">实付金额：<span class="red">￥{{zongjine}}</span></p>
        <p class="zhifu">订单完成后可获得积分：<span class="huang">300积分</span></p>
        <p class="zhifu"><span class="btn" @click="tj">提交订单</span></p>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import bus from '../../assets/bus.js'
    export default {
        name: "qrdd_spxx",
      data(){
        return{
          //选中商品id
          xuanzhong:[],
          // str:0,
          sp:[],
          shangdian:[],
          sdarr:[],
          sparr:[],
          // splength:[],
          spARR:[[],[]],
          gwc:[],
          num:[[],[]],
          //对勾
          // goubol:[],
          // shan_spid:0,
          // 金额
          yunfei:5.0,
          spzje:[[],[]],
          sdzje:[],
          zongjine:0,
          // 删除
          shanchu:[],
          shanchu_duo:[],
        }
      },
      methods:{

        // 减号
        jian(i,j){
          this.$set(this.num[i],j,this.num[i][j]*1-1)
          // console.log(this.spARR[i][j].id)
          axios.get('/api/vuephp/gwc.php?type=11&userid='+Number(localStorage.userid)+'&num='+this.num[i][j]+'&spid='+this.spARR[i][j].id).then(res=>{
// console.log(res.data)
          })
          // if(this.num[i][j]==0){
          //   alert("该商品将被删除")
          // }
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
        //确认订单
        qrdd(){
          localStorage.huang=1;
          window.location.href="/#/querendingdan"

        },
        gwc_sc(){

        },
        //商品总金额
        zje(){
          for(var i=0;i<this.sdarr.length;i++){
            for(var j=0;j<this.spARR[i].length;j++){
              this.$set(this.spzje[i],j,this.spARR[i][j].money*this.num[i][j])
            }
          }
        },
        //商店总金额
        zje2(){

          for(var i=0;i<this.sdarr.length;i++){
            var sdz=0;
            for(var j=0;j<this.spARR[i].length;j++){
                sdz+=this.spzje[i][j]
                this.$set(this.sdzje,i,sdz)
            }
          }
        },
        // 总金额
        zje3(){
          this.zongjine=0;
          for (var i=0;i<this.sdzje.length;i++){
            this.zongjine+=this.sdzje[i]+this.yunfei

          }
        },
        //删除
        shanchu_sp(i,j){
          this.shan_spid=this.spARR[i][j].id;
          axios.get('/api/vuephp/gwc.php?type=12&spid='+this.shan_spid).then(res=>{
            console.log(res.data)
          })
          window.location.reload()
        },
        // qrdd(){
        //   localStorage.huang=1;
        //   window.location.href="/#/querendingdan"
        //
        // },
        tj(){
          localStorage.huang=2;
          window.location.href="/#/dingdantijiao"
        }
      },
      mounted(){
        this.xuanzhong = JSON.parse(localStorage.xuanzhong);
        console.log()
        var usid=Number(localStorage.userid)
        axios.get('/api/vuephp/gwc.php?type=21&userid='+usid).then(res=>{
          // console.log(res.data)
          this.gwc=res.data
          // console.log(this.gwc)


        //获取选中商品id
        this.sp=this.xuanzhong

          var that = this;
          for(var i=0;i<this.sp.length;i++){
            Vue.set(that.shangdian,i,this.sp[i].shangDian);
            // Vue.set(that.num,i,res.data[i].num);
          }
          for (var i = 0; i < that.shangdian.length; i++) {
            if (that.sdarr.indexOf(that.shangdian[i]) < 0) {
              that.sdarr.push(that.shangdian[i]);
            }
          }
          for(var i=0;i<that.sdarr.length;i++){
            for(var j=0;j<that.sp.length;j++){
              if(that.sp[j].shangDian==that.sdarr[i]){
                that.spARR[i].push(that.sp[j])//将商品加入对应商店
                for (var n=0;n<that.gwc.length;n++){
                  if(that.gwc[n].spID==that.sp[j].id){
                    that.num[i].push(that.gwc[n].num)//给商品对应数量
                  }
                }
              }
            }
          }
          // console.log(that.gwc)
          this.zje()
          this.zje2()
          this.zje3()
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
    margin-left: 60px;
    display: inline-block;
    width: 400px;
  }
  .zi2{
    display: inline-block;
    text-align: center;
    width: 185px;
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
    margin-left: 60px;
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
    margin: 0 15px;
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
    width: 185px;
    text-align: center;
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
    width: 360px;
    padding-left: 10px;
    height: 35px;
    font-size: 15px;
    margin-right: 10px;
  }
  .bz{
    width: 620px;
    padding-left: 10px;
    height: 35px;
    font-size: 15px;
    margin-top: 20px;
  }
  hr{
    margin-top: 20px;
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
  .lv{
    color: rgb(107,165,97);
  }
  .red{
    color: rgb(255,87,87);
    font-size: 25px;
  }
  .huang{
    color: rgb(240,130,0);
  }
  .zhifu{
    font-size: 15px;
    margin-top: 20px;
    text-align: right;
  }
  .btn{
    display: inline-block;
    width: 150px;
    height: 50px;
    font-size: 20px;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    background: rgb(240,130,0);
  }
  .cirida{
    line-height: 60px;
  }
  .time{
    line-height: 40px;;
  }
  .rili{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('/../static/f/JingLing.png') -440px 0px;
    position: relative;
    top: 5px;
    margin-left:30px ;
    margin-right: 10px;
  }
</style>
