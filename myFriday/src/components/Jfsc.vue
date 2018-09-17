<template>
  <div>
    <div class="swiper-container " id="lbt">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p>积分商城</p>
          <span>小|积|分|兑|超|值</span>
        </div>
        <div class="swiper-slide"><p>积分商城</p>
          <span>小|积|分|兑|超|值</span></div>
        <div class="swiper-slide"><p>积分商城</p>
          <span>小|积|分|兑|超|值</span></div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="lis">
      <ul v-for=" arr in data">
        <li v-for=" arr in data">
          <img :src="arr.src" alt="">
          <p>{{arr.name}}</p>
          <p>{{arr.jieShao}}</p>
          <div class="jj"><span>积分 ：</span><a>{{arr.moneyY}}</a><span>价值 ：￥{{arr.money}}</span></div>
          <a href="###" class="aa">立即兑换</a>
        </li>

      </ul>
    </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Jfsc",
      data(){
          return {
            data:''
          }
      },
      mounted:function () {
        axios.get('/api/vuephp/jf.php?').then((response) => {
          console.log(response.data);
          this.data = response.data;
        })


        var div = document.querySelector("#lbt");
        var mySwiper = new Swiper(div, {
          //竖直 vertical 水平 horizontal
          direction: 'horizontal',
          // loop: true,
          // autoplay: true,
          //  autoplay:{disableOnInteraction:false},
          //  autoplayDisableOnInteraction : false,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
        });
      }
    }
</script>

<style scoped>
  .swiper-slide{
    width: 1280px;
    height: 500px;
    background: url("./../../static/z/积分/jfbg.png");
    color: #498e3d;
    text-align: center;
  }

  .swiper-slide>p{
    font-size: 60px;
    margin-top: 150px;
    margin-bottom: 50px;
    font-weight: 200;
  }
  .swiper-slide>span{
    font-size: 40px;
    font-weight: 200;
    letter-spacing: 25px;
    margin-left: 20px;
  }
  .lis{
    width: 1280px;
    margin: 0 auto;
    clear: both;
  }
  .lis>ul{
    width: 1280px;
    height: 480px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .lis>ul>li{
    float: left;
    width: 300px;
    height: 480px;
    border: 1px solid #ececec;
    text-align: center;
  }
  .lis>ul>li>img{
    margin-top: 65px;
    margin-bottom:40px;
  }
  .lis>ul>li>p:nth-of-type(1){
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }
  .lis>ul>li>p:nth-of-type(2){
    font-size: 14px;
    color: #666;
    margin-bottom: 25px;
  }
  .jj{
    margin-bottom: 25px;
  }
  .jj>span{
    font-size: 18px;
    color: #666;
  }
  .jj>span:nth-of-type(1){
    float: left;
    margin-left: 30px;
  }
  .jj>span:nth-of-type(2){
    float: right;
    margin-right: 30px;
  }
  .jj>a{
    /*float: left;*/
    font-size: 24px;
    color: #ff5757;
    position: relative;
    right: 20px;
    bottom: 3px;
  }
  .aa{
    clear: both;
    width: 150px;
    height: 35px;
    display: inline-block;
    text-align: center;
    line-height: 35px;
    background: #f08200;
    border-radius: 17.5px;
    color: white;
    font-weight: 200;
  }
</style>
