<template>
  <div class="duihuan">
    <div class="top">
      <span>订单评价</span>
    </div>
    <div class="bottom">
      <ul class="botCon">
        <li>
          <div class="conLeft">
            <img src="../../../static/imgM/评价-红橘.png" alt="">
            <p>珍享 南非进口红心葡萄柚 西柚柚子</p>
          </div>
          <div class="conRight">
            <div class="oneD wujiaoxing">
              <span>商品评分</span>
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
            </div>
            <div class="twoD">
              <span>评价商品</span>
              <textarea></textarea>
              <p class="show">商品评价,最少10个字,最多50个字</p>
            </div>
            <div class="thrD">
              <span>晒图片</span>
              <ul class="saitu">
                <li>+</li>
                <li>+</li>
                <li>+</li>
                <li>+</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div class="conLeft">
            <img src="../../../static/imgM/评价-红橘.png" alt="">
            <p>珍享 南非进口红心葡萄柚 西柚柚子</p>
          </div>
          <div class="conRight">
            <div class="wujiaoxing oneD">
              <span>商品评分</span>
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
              <img src="../../../static/imgM/黑色五角星.png" alt="">
            </div>
            <div class="twoD">
              <span>评价商品</span>
              <textarea></textarea>
              <p class="show">商品评价,最少10个字,最多50个字</p>
            </div>
            <div class="thrD">
              <span>晒图片</span>
              <ul class="saitu">
                <li>+</li>
                <li>+</li>
                <li>+</li>
                <li>+</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <div class="serveFenshu">
        <div class="wujiaoxing">
          <span>服务态度</span>
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
        </div>
        <div class="wujiaoxing">
          <span>描述相符</span>
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
          <img src="../../../static/imgM/黑色五角星.png" alt="">
        </div>
      </div>
      <div class="tijiao">提交评价</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DingdaPingJia",
    mounted(){
      $('textarea').focus(function () {
        $(this).next().css('display','none')
      });
      $('textarea').blur(function () {
        if($(this).val()=='') {
          $(this).next().css('display','block')
        }
      });
      $('.wujiaoxing>img').click(function () {
        this.src='../../../static/imgM/红色五角星.png'
      });


    }
  }
</script>

<style scoped>
  .tijiao{
    background: #f08200;
    color: #ffffff;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    margin: 60px auto 40px;
    font-size: 20px;
  }
  .serveFenshu{
    width: 490px;
    display: flex;
    justify-content: space-between;
    margin: auto;

  }
  img{
    vertical-align: top;
  }

  .top{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .top>span{
    margin-left: 20px;
  }
  .bottom{
    width: 1090px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    overflow: hidden;
  }

  .botCon{
    width: 1050px;
    margin: 28px 0 0 20px;
  }
  .botCon>li{
    height: 325px;
    margin-bottom: 40px;
    border-bottom: 1px dashed #e2e2e2;

  }
  .conLeft{
    float: left;
    text-align: center;
  }
  .conRight{
    float: right;
  }
  .twoD{
    position: relative;
    height: 140px;
    width: 685px;
  }
  .twoD>span {
    position: absolute;
    top: 0;
  }
  .show{
    font-size: 14px;
    color: #c2c2c2;
    position: absolute;
    top: 12px;
    left: 95px;
  }

  .twoD>textarea{
    resize: none;
    outline: none;
    width: 576px;
    height: 117px;
    position: absolute;
    right: 0;
    top: 5px;
    padding: 9px 12px;
  }
  .thrD>span{
    margin-left: 10px;
  }
  .thrD{
    margin-top: 30px;
    /*background: #007aff;*/
  }
  .conRight>div{
    margin-bottom: 20px;
  }
  .saitu{
    margin-left: 80px;
    margin-top: -20px;
  }
  .saitu>li{
    float: left;
    width: 60px;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    background: #e4e4e4;
    margin-right: 10px;
  }
  .oneD>span{
    margin-right: 15px;
  }
</style>
