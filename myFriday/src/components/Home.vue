<template>
  <div>
    <!--<Top></Top>-->
    <Flbt></Flbt>
    <div class="re">
      <ul>
        <li class="re1"><img src="./../../static/z/主页/re.png" alt="">
          <p>内蒙古草原</p>
          <span>羔羊阳精肉</span>
        </li>
        <li class="re2"><img src="./../../static/z/主页/xin.png" alt="">
          <p>新西兰柠檬</p>
          <span>鲜橙靓皮 柠香清新</span></li>
        <li class="re1"><img src="./../../static/z/主页/re.png" alt="">
          <p>内蒙古草原</p>
          <span>羔羊阳精肉</span></li>
        <li class="re2"><img src="./../../static/z/主页/xin.png" alt="">
          <p>新鲜草莓</p>
          <span>留住新鲜</span></li>
      </ul>
    </div>
    <div class="fri">
      <div class="friL">
        <span>礼拜五</span>
        <a>Firiday</a>
      </div>
      <div class="friR"><a>距离开始</a>
        <span class="sp">5天</span><span>:</span><span class="sp">15</span><span>:</span><span class="sp">35</span><span>:</span><span class="sp">20</span><a
          href="#">更多&gt;</a></div>
    </div>
    <Lbt></Lbt>
    <div class="lis">
      <div class="lisT">
        <div class="lisT_l">
          <img src="./../../static/z/主页/c2.png" alt="">
          <span>新鲜水果</span><a>采自新疆优质水果生产基地 ，品质一流</a>

          <div class="lisT_r"><a href="#">更多&gt;</a></div>
        </div>
      </div>
      <div class="lisB">
        <ul>
          <li v-for="(arr,i) in data" v-if="i<4"><img :src="arr.src" alt="" @click="toXiang1(i)">
            <div class="lisC">
              <p>{{arr.name}}</p>
              <p>{{arr.jj}}</p>
              <a>￥{{arr.money}}</a><span>￥{{arr.moneyY}}</span>
              <img src="./../../static/z/主页/gwc1.png" alt="" @click="a1(i)">
            </div>
          </li>
        </ul>
      </div>

      <div class="lisT">
        <div class="lisT_l">
          <img src="./../../static/z/主页/c3.png" alt="">
          <span>水产海鲜</span><a>国内外新鲜到港的鱼虾蟹贝 ，我们全都有</a>

          <div class="lisT_r"><a href="#">更多&gt;</a></div>
        </div>
      </div>
      <div class="lisB">
        <ul>
          <li v-for=" (arr1,i) in data1" v-if="i<4"><img :src="arr1.src" alt="" @click="toXiang2(i)">
            <div class="lisC">
              <p>{{arr1.name}}</p>
              <p>{{arr1.jj}}</p>
              <a>￥{{arr1.money}}</a><span>￥{{arr1.moneyY}}</span>
              <img src="./../../static/z/主页/gwc1.png" alt="" @click="a2(i)">
            </div>
          </li>
        </ul>
      </div>
      <div class="lisT">
        <div class="lisT_l">
          <img src="./../../static/z/主页/c4.png" alt="">
          <span>肉类禽蛋</span><a>采自新疆优质水果生产基地 ，品质一流</a>

          <div class="lisT_r"><a href="#">更多&gt;</a></div>
        </div>
      </div>
      <div class="lisB">
        <ul>
          <li v-for="(arr2,i) in data2"><img :src="arr2.src" alt="" @click="toXiang3(i)">
            <div class="lisC">
              <p>{{arr2.name}}</p>
              <p>{{arr2.jj}}</p>
              <a>￥{{arr2.money}}</a><span>￥{{arr2.moneyY}}</span>
              <img src="./../../static/z/主页/gwc1.png" alt="" @click="a3(i)">
            </div>
          </li>
        </ul>
      </div>
      <!--<div class="lisT">-->
        <!--<div class="lisT_l">-->
          <!--<img src="./../../static/z/主页/c5.png" alt="">-->
          <!--<span>蛋奶速食</span><a>采自新疆优质水果生产基地 ，品质一流</a>-->

          <!--<div class="lisT_r"><a href="#">更多&gt;</a></div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="lisB">-->
        <!--<ul>-->
          <!--<li v-for="(arr2,i) in data2"><img :src="arr2.src" alt="">-->
            <!--<div class="lisC">-->
              <!--<p>{{arr2.name}}</p>-->
              <!--<p>{{arr2.jj}}</p>-->
              <!--<a>￥{{arr2.money}}</a><span>￥{{arr2.moneyY}}</span>-->
              <!--<img src="./../../static/z/主页/gwc1.png" alt="" @click="a4(i)">-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
    <!--<Btm></Btm>-->
  </div>
</template>

<script>
    import Top from "./Top";
    import Btm from "./Btm";
    import Lbt from "./Lbt";
    import Flbt from "./Flbt";
    import axios from 'axios'
    export default {
        name: "Home",
      components: {Flbt, Lbt, Btm, Top},
      data(){
        return {
          data:[],
          data1:[],
          data2:[],
          login:''
        }
      },
      methods:{
          toXiang1(i){
            localStorage.spxqid = this.data[i].id;
            window.location.href = '/#/spxq'
          },
        toXiang2(i){
          localStorage.spxqid = this.data1[i].id;
          window.location.href = '/#/spxq'
        },
        toXiang3(i){
          localStorage.spxqid = this.data2[i].id;
          window.location.href = '/#/spxq'
        },
        a1(i){
          console.log(this.data[i]);
          if(localStorage.login=='true'){
            gwcfr();
            axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.data[i].id+'&num=1&shangdian='+this.data[i].shangDian).then(res=> {
// console.log(res.data)
            })
          }else {
            // alert('您还未登录');
            $('.login').css({
              display:'block'
            })
          }
        },
        a2(i){
          console.log(this.data1[i]);
          if(localStorage.login=='true'){
            gwcfr();
            axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.data1[i].id+'&num=1&shangdian='+this.data[i].shangDian).then(res=> {
// console.log(res.data)
            })
          }else {
            // alert('您还未登录');
            $('.login').css({
              display:'block'
            })
          }
        },
        a3(i){
          // console.log(this.data2[i]);
          // alert(this.data2[i].id)
          if(localStorage.login=='true'){
            gwcfr();
            axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.data2[i].id+'&num=1&shangdian='+this.data[i].shangDian).then(res=> {
// console.log(res.data)
            })
          }else {
            // alert('您还未登录');
            $('.login').css({
              display:'block'
            })
          }
        },
        a4(i){
          // console.log(this.data[i]);
          if(localStorage.login=='true'){
            gwcfr();
            axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.data3[i].id+'&num=1&shangdian='+this.data[i].shangDian).then(res=> {
// console.log(res.data)
            })
          }else {
            // alert('您还未登录');
            $('.login').css({
              display:'block'
            })
          }
        },
      },
      mounted:function () {
        var params = new URLSearchParams();
        params.append('type',1);
        axios.post('/api/vuephp/home.php',params).then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        axios.get('/api/vuephp/home.php',{params:{type:2}}).then((response) => {
          console.log(response.data);
          this.data1 = response.data;
        })
        axios.get('/api/vuephp/home.php?type=3').then((response) => {
          console.log(response.data);
          this.data2 = response.data;
        })
      }
    }
</script>

<style scoped>
  .lisC>img:hover{
    animation-duration: 1s;
    animation-name: swing
  }
  .re{
    width: 1280px;
    margin: 0 auto;
  }
  .re>ul{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .re>ul>li{
    position: relative;
    float: left;
    width: 305px;
    height: 140px;
    list-style: none;
  }
  .re>ul>li>img{
    position: absolute;
    top: 0;
    left: 0;
  }
  .re1{
    font-size: 20px;
    color: #333;
    font-weight: 200;
  }
  .re p{
    margin: 37px 0 10px 30px;
  }
  .re span{
    margin-left: 30px;
  }
  .re2 p{
    font-size: 20px;
    color: #333;
  }
  .re2 span{
    font-size: 16px;
    color: #666;
  }
  .re>ul>li:nth-child(1){
    background: #f2f2f2 url("./../../static/z/主页/re1.png") no-repeat 150px 22px;
  }
  .re>ul>li:nth-child(2){
    background:#f2f2f2 url("./../../static/z/主页/xin1.png") no-repeat 180px 20px;
  }
  .re>ul>li:nth-child(3){
    background:#f2f2f2 url("./../../static/z/主页/re2.png") no-repeat 150px 22px;
  }
  .re>ul>li:nth-child(4){
    background:#f2f2f2 url("./../../static/z/主页/xin2.png") no-repeat 5px 5px;
  }
  .fri{
    height: 100px;
    width: 100%;
    border-bottom: 2px solid #498e3d;
    background: #ebffe8 url("./../../static/z/主页/c1.png") no-repeat 25px 28px;
    width: 1280px;
    margin: 20px auto;
    line-height: 100px;

  }
  .friL{
    float: left;
  }
  .friL span{
    font-size: 30px;
    color: #498e3d;
    margin-left: 80px;
  }
  .friL a{
    font-size: 24px;
    color: #9ea09e;
    margin-left: 15px;
    font-weight: 200;
  }
  .friR{
    float: right;
  }
  .friR a:nth-of-type(1){
    font-size: 24px;
    color: #498e3d;
  }
  .friR a:nth-of-type(2){
    font-size: 18px;
    color: #6f706f;text-decoration: none;
    margin: 0 20px;
  }
  .friR span{
    color: #f08200;
    margin: 0 5px;
  }
  .friR .sp{
    display: inline-block;
    width: 60px;
    height: 40px;
    text-align: center;
    background: #f08200;
    color: white;
    line-height: 40px;
    border-radius: 5px;
  }
  .lisT{
    height: 100px;
    width: 1280px;
    border-bottom: 2px solid #498e3d;
    background-color: #ebffe8;
    margin: 20px auto;
    line-height: 100px;
  }
  .lisT_l>img{
    margin-left: 30px;
    position: relative;
    top: 10px;
  }
  .lisT_l span{
    font-size: 30px;
    color: #498e3d;
    margin-left: 20px;
  }
  .lisT_l a{
    font-size: 24px;
    color: #9ea09e;
    margin-left: 15px;
    font-weight: 200;
  }
  .lisT_r{
    float: right;
    margin-right: 20px;
    font-size: 18px;
  }
  .lisT_r>a{
    text-decoration: none;
    color: #6f706f;
  }
  .lisB{
    width: 1280px;
    height: 430px;
    margin: 0 auto;
  }
  .lisB>ul{
    display: flex;
    justify-content: space-between;
  }
  .lisB>ul>li{
    width: 305px;
    height: 430px;
    /*background-color: lemonchiffon;*/
    list-style: none;
    border: 1px solid #ececec;
    transition: 0.5s;
  }
  /*.lisB>ul>li:hover{*/
    /*transform: translateY(-2px);*/
    /*box-shadow: 5px 5px 10px #ddd;*/
  /*}*/
  .lisB>ul>li>img{
    margin-top: 40px;
    margin-left: 42.5px;
    width: 220px;
    height: 220px;
  }

  .lisC>p:nth-of-type(1){
    font-size: 18px;
    color: #333;
    margin: 40px 0 10px 20px;
  }
  .lisC>p:nth-of-type(2){
    font-size: 14px;
    color: #666;margin-left: 20px;
    margin-bottom: 15px;
  }
  .lisC>a{
    font-size: 24px;
    color: #ff5757;margin-left: 20px;
  }
  .lisC>span{
    color: #666;
    font-size: 18px;
    outline: black;
    text-decoration:line-through;
    margin-left: 15px;
  }
  .lisC>img{
    float: right;
    margin-right: 20px;
  }
</style>
