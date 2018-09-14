<template>
  <div class="lbt1">
    <div class="swiper-container " id="lbt">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li><img src="./../../static/z/主页/l1.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
              <a>礼拜五价：</a><span>￥28.80</span></li>
            <li><img src="./../../static/z/主页/l2.jpg" alt="">
              <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
              <a>礼拜五价：</a><span>￥28.80</span></li>
            <li><img src="./../../static/z/主页/l3.jpg" alt="">
              <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
              <a>礼拜五价：</a><span>￥28.80</span></li>
            <li><img src="./../../static/z/主页/l4.jpg" alt="">
              <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
              <a>礼拜五价：</a><span>￥28.80</span></li>
          </ul>
        </div>
        <div class="swiper-slide"><ul>
          <li><img src="./../../static/z/主页/l5.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l6.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l7.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l8.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
        </ul></div>
        <div class="swiper-slide"><ul>
          <li><img src="./../../static/z/主页/l9.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l10.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l11.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
          <li><img src="./../../static/z/主页/l2.jpg" alt="">
            <p>新西兰佳沛黄金奇异果</p><p>6个装</p>
            <a>礼拜五价：</a><span>￥28.80</span></li>
        </ul></div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Lbt",
      mounted:function () {
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
  .lbt1{
    width: 1280px;
    height: 500px;
    margin: 0 auto;
  }
  .swiper-slide{
    width: 1280px;
    height: 500px;
    /*background: #f2f2f2;*/
  }
  .swiper-slide>ul{
    display: flex;
    justify-content: space-between;
  }
  .swiper-slide>ul>li{
    width: 305px;
    height: 403px;
    border: 1px solid #ececec;
    float: left;
    list-style: none;
    margin-top: 20px;
    overflow: hidden;
    text-align: center;
    transition: 0.5s;
  }
  .swiper-slide>ul>li:hover{
    transform: translateY(-2px);
    box-shadow: 5px 5px 10px #ddd;
  }
  .swiper-slide>ul>li>img{
    margin-top: 20px;
  }
  .swiper-slide>ul>li>p:nth-of-type(1){
    margin: 40px 0 10px 0;
    font-size: 18px;
    color: #333;
  }
  .swiper-slide>ul>li>p:nth-of-type(2){
    font-size: 18px;
    margin-bottom: 10px;
    color: #838383;
  }
  .swiper-slide>ul>li>a{
    font-size: 18px;
    color: #f08200;
  }
  .swiper-slide>ul>li>span{
    font-size: 24px;
    color: #ff5757;
  }
</style>
