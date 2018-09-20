<template>
    <div>
      <div class="sou1">
        <img src="static/z/主页/suo.png" alt="">
        <p>抱歉 ，暂未查到您要的商品</p>
      </div>
      <div class="sou2">
        <div class="top">
          <span>您的当前位置：首页 > 全部商品 > 搜索</span>
        </div>
        <div class="topN">
          <div class="topNl"><span>排序：</span><a href="###">销量</a>
            <a href="###" @click="money()">价格 <img id="money" src="./../../static/z/同城/jian.png" alt=""></a><a href="###">评分最高</a></div>
          <div class="topNr"><span>筛选：</span><a>全国</a><a>次日达</a></div>
        </div>
        <div class="lis">
          <ul>
            <!--v-for="(arr,i) in data"  -->
            <li v-for="(arr,i) in data" v-if="i>8*(num-1)-1&&i<num*8"><img :src="arr.src" alt="">
              <div class="lisC">
                <p>{{arr.name}}</p>
                <p>{{arr.jj}}</p>
                <a>￥{{arr.money}}</a><span>￥{{arr.moneyY}}</span>
                <img class="gwc" src="./../../static/z/主页/gwc1.png" alt="" @click="hq(i)">
              </div>
            </li>
          </ul>
        </div>
        <nav aria-label="Page navigation" class="page-nav-outer" id="PageNavId"></nav>
      </div>
    </div>
</template>

<script>
  import fenPage from "../../static/chajian";
  import axios from 'axios'
    export default {
        name: "Suosou",
      data(){
          return {
            data:[],
            num:1,
            bol:true,
            example0:'',
          }
      },
      methods:{
          hq(i){
            console.log(this.data[i])
            // alert(localStorage.login)
            if(localStorage.login=='true'){
              gwcfr();
            }else{
              // alert('您还未登录');
              $('.login').css({
                display:'block'
              })
            }
          },
        money(){
          this.bol = !this.bol;
          if (this.bol==true){
          axios.get('/api/vuephp/tc.php?type=9&name='+localStorage.sou).then((response) => {
            this.data = response.data;
          })
          $('#money').css({
            transform:'rotate(180deg)'
          })
          } else{
          axios.get('/api/vuephp/tc.php?type=10&name='+localStorage.sou).then((response) => {
            this.data = response.data;
          })
          $('#money').css({
            transform:'rotate(360deg)'
          })
        }
        }
      },
      // watch:{
      //   example0(curVal,oldVal){
      //     console.log(curVal,oldVal);
      //   },
      mounted:function () {
        //   console.log(this.$route.params.name)
        // this.example0 = this.$route.params.name
        axios.get('/api/vuephp/tc.php?type=8&name='+this.$route.query.name).then(res=> {
          console.log(res.data);
          this.data = res.data;
          if(res.data.length<1||this.$route.query.name.length<1){
            $('.sou1').css({
              display:'block'
            })
            $('.sou2').css({
              display:'none'
            })
          }
        })
        fenPage.page();
        $('#PageNavId').click(function () {
          this.num = $('.active>a').html();
          console.log(this.num);
        }.bind(this));
        $('.topNl>a').eq(0).css({
          color:'#498e3d',
          borderColor:'#498e3d'
        })
        $('.topNl>a').click(function () {
          $('.topNl>a').css({
            color:'#666',
            borderColor:'#e7e7e7'
          })
          $(this).css({
            color:'#498e3d',
            borderColor:'#498e3d'
          })
        })
        $('.topNr>a').eq(0).css({
          color:'#fff',
          background:'#498e3d'
        })
        $('.topNr>a').click(function () {
          $('.topNr>a').css({
            color:'#333',
            background:'#dedede'
          })
          $(this).css({
            color:'#fff',
            background:'#498e3d'
          })
        })
      }
    }
</script>

<style scoped>
  .gwc:hover{
    animation-duration: 1s;
    animation-name: swing;
  }
  .sou1{
    width: 1280px;
    height: 577px;
    margin: 0 auto;
    font-size: 36px;
    color: #f08200;
    text-align: center;
    font-weight: 200;
    display: none;
  }
  .sou1>img{
    margin-top: 180px;
    margin-bottom: 30px;
  }
  .top{
    width: 1280px;
    height: 55px;
    background: #f4f4f4;
    margin: 0 auto;
    font-size: 14px;
    color: #666;
    line-height: 55px;
  }
  .top>span{
    margin-left: 15px;
  }
  .topN{
    width: 1280px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    color: #666;
  }
  .topN a{
    display: inline-block;
    height: 30px;
    padding: 0 10px;
    text-align: center;
    line-height: 30px;
    color: #333;
    font-weight: 200;
  }
  .topNl{
    float: left;
  }
  .topNl>a{
    margin: 0 20px;
    border: 1px solid #e7e7e7;
  }
  .topNr{
    float: right;
  }
  .topNr>a{
    display: inline-block;
    margin-left: 40px;
    background: #dedede;
  }
  .lisB{
    width: 1280px;
    /*height: 430px;*/
    margin: 0 auto;
  }
  .lis>ul{
    display: flex;
    /*justify-content: space-between;*/
    flex-wrap: wrap;
    clear: both;
  }
  .lis>ul>li{
    width: 305px;
    height: 430px;
    list-style: none;
    border: 1px solid #ececec;
    transition: 0.5s;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .lis>ul>li:nth-of-type(4n){
    margin-right: 0;
  }
  .lis>ul>li>img{
    margin-top: 40px;
    margin-left: 42px;
    width: 220px;
    height: 220px;
  }
  .lisC>p:nth-of-type(1){
    font-size: 18px;
    color: #333;
    margin: 40px 0 10px 30px;
  }
  .lisC>p:nth-of-type(2){
    font-size: 14px;
    color: #666;margin-left: 30px;
    margin-bottom: 15px;
  }
  .lisC>a{
    font-size: 24px;
    color: #ff5757;margin-left: 30px;
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
  .lis{
    width: 1280px;
    margin: 0 auto;
    height: 888px;
  }
  .lis>ul{
    height: 888px;
  }
</style>
