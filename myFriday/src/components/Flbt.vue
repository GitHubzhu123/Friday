<template>
  <div class="lbt">
    <div class="swiper-container lbt">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide1"><div class="slide1C">
            <p>礼拜五</p><span>新鲜美食限量抢</span>
          </div></div>
        </div>
        <div class="swiper-slide"><img src="./../../static/z/主页/lbt.png" alt=""></div>
        <div class="swiper-slide"><img src="./../../static/z/主页/lbt.png" alt=""></div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Flbt",
      mounted:function () {
        var div = document.querySelector(".swiper-container");
        var mySwiper = new Swiper(div, {
          //竖直 vertical 水平 horizontal
          direction: 'horizontal',
          // loop: true,
          // autoplay: true,
          //  autoplay:{disableOnInteraction:false},
          //  autoplayDisableOnInteraction : false,
//              speed: 1000,
//              effect: 'cube',
//              on: {
//                  slideChangeTransitionEnd: function() {
//                      alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
//                  },
//              },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
        });
      }
    }
</script>

<style scoped>
  .lbt{
    width: 100%;
    height: 500px;
  }
  .lbt .swiper-slide{
    width: 100%;
    height: 500px;
    background: url("./../../static/z/主页/lbt.png") no-repeat;
    position: relative;
  }
  .slide1{
    width: 490px;
    height: 220px;
    border: 2px solid white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .slide1C{
    width: 470px;
    height: 200px;
    border: 2px solid white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 5px #999;
  }
  .slide1C>p{
    font-size: 72px;
    margin-top: 20px;
  }
  .slide1C>span{
    font-size: 36px;
    letter-spacing: 5px;
  }
</style>
