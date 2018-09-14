<template>
  <div class="duihuan">
    <div class="top">
      <span>意见反馈</span>
    </div>
    <div class="mid">
      <div class="midCon">
        <textarea></textarea>
        <p>请输入您的意见我们将期待与您共同成长</p>
        <div class="ack1">取消</div>
        <div class="ack2">提交</div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "YiJianFK",
      methods:{

      },
      mounted(){
          $('textarea').focus(function () {
            $('.midCon>p').css('display','none')
          })
          // $('textarea').blur(function () {
          //   $('.midCon>p').css('display','block')
          // })
      }
    }
</script>

<style scoped>
  .midCon>p{
    position: absolute;
    top: 60px;
    left: 60px;
    font-size: 16px;
    color: #999999;
  }
  .midCon>textarea{
    width: 1000px;
    height: 375px;
    margin: 45px;
    outline: none;
    font-size: 16px;
    resize:none;
    /*text-indent: 2em;*/
  }
  .top{
    width: 1090px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .top>div{
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -15px;
    width: 90px;
    height: 30px;
    background: #498e3d;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  .top>span{
    margin-left: 20px;
  }
  .mid{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    font-size: 20px;
  }
  .midCon{
    position: relative;
  }
  .ack1{
    width: 150px;
    height: 50px;
    background: #999999;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 450px;
    left: 360px;
    color: #ffffff;
  }
  .ack2{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 450px;
    left: 610px;
    color: #ffffff;
  }
</style>
