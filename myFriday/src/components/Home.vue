<template>
  <div>
    <Top></Top>
    <div class="lbt">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div></div>
          </div>
          <div class="swiper-slide"><img src="./../../static/z/主页/lbt.png" alt=""></div>
          <div class="swiper-slide"><img src="./../../static/z/主页/lbt.png" alt=""></div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-pagination"></div>
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
      </div>
    </div>
    <Btm></Btm>
  </div>
</template>

<script>
    import Top from "./Top";
    import Btm from "./Btm";
    export default {
        name: "Home",
      components: {Btm, Top},
      mounted:function () {
        var div = document.querySelector(".swiper-container");
        var mySwiper = new Swiper(div, {
          //竖直 vertical 水平 horizontal
          direction: 'horizontal',
             loop: true,
             autoplay: true,
              autoplay:{disableOnInteraction:false},
              autoplayDisableOnInteraction : false,
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
        })
      }
    }
</script>

<style scoped>
  .lbt{
    width: 100%;
    height: 500px;
  }
  .swiper-container{
    width: 100%;
    height: 500px;
  }
  .swiper-slide{
    width: 100%;
    height: 500px;
    background: url("./../../static/z/主页/lbt.png") no-repeat;
  }
</style>
