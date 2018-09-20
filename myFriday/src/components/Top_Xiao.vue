<template>
  <div class="top">
    <div class="topT">
      <div class="topTl">
        <span>所在城市 ：北京朝阳区 </span><img src="./../../static/z/主页/箭头.png" alt="">
      </div>
      <div class="topTr">
        <span>您好 ,</span>
        <a class="phone1">{{userid}}</a>
        <a href="#">退出</a>
        <span class="span">|</span><a href="#">我的订单</a><span class="span">|</span><a href="#">我的消息</a><span class="span">|</span><a href="#">我是商家</a>
        <span class="span">|</span><span class="phone">400-800-8820</span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Top_Xiao",
      data(){
          return {
            userid:localStorage.username
          }
      },
      mounted:function () {
        // alert(localStorage.userid)
      }
    }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 35px;
    background: #eee;
    color: #6f6f6f;
  }
  .topT{
    width: 1280px;
    height: 35px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 35px;
  }
  .topTl{
    float: left;
  }
  .topTl>img{
    position: relative;
    bottom: 1px;
  }
  .topTr{
    float: right;
  }
  .span{
    margin:0 10px ;
  }
  .topTr>a{
    text-decoration: none;
    color: #6f6f6f;
    /*margin-left: 3px;*/
  }
  .topTr .phone1{
    color: #76ac6c;
    margin-right: 7px;
  }
  .phone{
    padding-left: 24px;
    color: #666;
    background: url("./../../static/z/主页/phone.png") no-repeat 2px 2px;
  }
</style>
