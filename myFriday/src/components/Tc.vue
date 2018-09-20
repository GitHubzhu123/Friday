<template>
    <div>
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
      <div class="shop">
        <div class="shopT">
          <span>分类</span><a href="###">全部</a><a href="###" class="aa">餐饮</a><a href="###" class="aa">酒店</a><a href="###" class="aa">休闲</a><a href="###" class="aa">电影</a><a
          href="###" class="aa">汽车装饰</a><a href="###" class="aa">家政服务</a>
        </div>
        <div class="shopCt">
          <span>销量</span><span @click="money()">价格 <img id="money" src="./../../static/z/同城/jian.png" alt=""></span><span @click="fen()">评分最高</span>
        </div>
        <div class="shopC">
          <ul>
            <li class="li"  v-for="(a,i) in data" v-if="i>12*(num-1)-1&&i<num*12"><img :src='a.src' alt="">
            <p>{{a.name}}</p>
              <div><img v-for="b in 5" :src="b<=a.guiGe?src1:src2" alt=""><span>￥{{a.money}}/人</span></div>
            <p>{{a.jj}}</p>
            </li>
          </ul>
        </div>
      </div>
      <!--<div class="nav">-->
        <nav aria-label="Page navigation" class="page-nav-outer" id="PageNavId"></nav>
      <!--</div>-->

    </div>
</template>

<script>
  import axios from 'axios'
  import Flbt from "./Flbt";
  import fenPage from "../../static/chajian";
    export default {
        name: "Tc",
      components:{
          Flbt
      },
      data(){
          return{
            src1:'./../../static/z/同城/xing1.png',
            src2:'./../../static/z/同城/xing2.png',
            data:[],
            bol:true,
            num:1
          }
      },
      methods:{
        fen(){
          axios.get('/api/vuephp/tc.php?type=3').then((response) => {
            // console.log(response.data);
            this.data = response.data;
          })
        },
          money(){
            this.bol = !this.bol;
            if (this.bol==true){
              axios.get('/api/vuephp/tc.php?type=1').then((response) => {
                // console.log(response.data);
                this.data = response.data;
              })
              $('#money').css({
                transform:'rotate(180deg)'
              })
            } else{
              axios.get('/api/vuephp/tc.php?type=2').then((response) => {
                // console.log(response.data);
                this.data = response.data;
              })
              $('#money').css({
                transform:'rotate(360deg)'
              })
            }

          }
      },
      mounted: function () {
          // console.log(PageNavCreate);
          fenPage.page();

        $('.shopCt>span').eq(0).css({
          borderColor:'#498e3d',
          color:'#498e3d'
        })
          $('.shopCt>span').click(function () {
            $('.shopCt>span').css({
              color:'#333',
              borderColor:'#e7e7e7'
            })
            $(this).css({
              borderColor:'#498e3d',
              color:'#498e3d'
            })
          });
        axios.get('/api/vuephp/tc.php?type=0').then((response) => {
          // console.log(response.data);
          this.data = response.data;
        })
        // window.onload = function(){
          $('#PageNavId').click(function () {
            // alert('123')
            // console.log($('#PageNavId').html())
            this.num = $('.active>a').html();
            console.log(this.num)
          }.bind(this))
        // }.bind(this)
          //分类点击
        $('.aa').eq(0).css({
          color:'#5a9750'
        })
        $('.aa').click(function () {
          $('.aa').css({
            color:'#a0a0a0'
          })
          $(this).css({
            color:'#5a9750'
          })
        })
      }

    }
</script>

<style scoped>
  /*.nav>nav>div{*/
    /*height: 50px;*/
  /*}*/
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
  .shop{
    width: 1280px;
    margin: 0 auto;
  }
  .shopT{
    padding-top: 20px;
    height: 50px;
    line-height: 50px;
    width: 1280px;
    margin: 0px auto 20px auto;
    border-bottom: 1px solid black;
    font-size: 16px;
    color: #a0a0a0;
    font-weight: 200;
  }
  .shopT>a{
    color: #a0a0a0;
    margin-left: 25px;
  }
  .shopT>a:nth-of-type(1){
    display: inline-block;
    width: 55px;
    height: 25px;
    background: #498e3d;
    line-height: 25px;
    text-align: center;
    color: white;
  }
  .shopC>ul{
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }
  .shopC>ul>li:nth-of-type(4n){
    margin-right: 0;
  }
.shopC>ul>li{
  margin-right: 20px;
  margin-bottom: 20px;
  width: 305px;
  height: 300px;
  background: #f8f6f7;
  float: left;
}
  .li{
    text-align: center;
  }
  .li>p:nth-of-type(1){
    font-size: 24px;
    color: #333;
    margin: 10px 0;
  }
  .li>p:nth-of-type(2){
    font-size: 16px;
    color: #666;
  }
  .li>div{
    margin-bottom: 10px;
  }
  .li>div>img{
    position: relative;
    top: 3px;
    margin: 0 2px;
  }
  .li>div>span{
    font-size: 18px;
    color: #ec6a17;
    margin-left: 5px;
  }
  .shopCt{
    height: 30px;
    /*float: right;*/
    text-align: right;
    margin-bottom: 20px;
    color: #333;
  }
  .shopCt>span{
    display: inline-block;
    height: 25px;
    border: 1px solid #e7e7e7;
    padding: 0 15px;
    line-height: 25px;
    margin-right:40px;
    cursor:pointer
  }
  .nav{
    margin-bottom: 20px;
  }
  .li:hover{
    transition: 0.5s;
    transform: translateY(-2px);
    box-shadow: 2px 2px 10px #adadad;
  }
</style>
