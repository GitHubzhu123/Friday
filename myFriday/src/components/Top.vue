<template>
  <div>
    <div class="local">
      <div class="loc">
        <p>&times;</p>
        <span>建议您的收货地址 ：</span><a href="###">河南省郑州市</a>

      </div>
    </div>
    <div class="top">
      <div class="topT">
        <div class="topTl">
          <span @click="local()">所在城市 ：北京朝阳区 </span><img src="./../../static/z/主页/箭头.png" alt="">
        </div>
        <div class="topTr">
          <span>您好 ,</span>
          <a class="phone1">17701269859</a>
          <a href="#">退出</a>
          <span class="span">|</span><a href="#">我的订单</a><span class="span">|</span><a href="#">我的消息</a><span class="span">|</span><a href="#">我是商家</a>
          <span class="span">|</span><span class="phone">400-800-8820</span>
        </div>
      </div>
      <div class="topC">
        <img src="./../../static/z/主页/logo.png" alt="">
        <div class="topC1">
          <div class="topC1_1"><input type="text" placeholder="请输入关键字进行搜索"></div>
          <div class="topC1_2"><a>热门:</a><a href="#">奇异果</a><a href="#">牛排</a><a href="#">山竹</a><a href="#">牛油果</a></div>
        </div>
        <div class="topC2">
          <a><img src="./../../static/z/主页/user.png" alt="">个人中心</a><a><img src="./../../static/z/主页/gwc.png" alt="">购物车</a>
        </div>
      </div>
    </div>
    <div class="topB">
      <div class="a1">
        <a href="#">全部分类 <img src="./../../static/z/主页/xia.png" alt=""></a>
        <div>
          <ul class="a1_1">
            <li><img src="./../../static/z/主页/li1.png" alt="">新鲜水果
              <div class="list1">
                <ul>
                  <li><a href="###">应季鲜果</a></li>
                  <li><a href="###">应季鲜果</a></li>
                  <li><a href="###">应季鲜果</a></li>
                  <li><a href="###">应季鲜果</a></li>
                  <li><a href="###">应季鲜果</a></li>
                  <li><a href="###">应季鲜果</a></li>
                </ul>
                <div class="list1_r">
                    <div>
                      <a href="###">草莓</a><span>|</span>
                      <a href="###">葡萄</a><span>|</span>
                      <a href="###">香蕉</a><span>|</span>
                      <a href="###">苹果</a><br/>
                      <a href="###">草莓</a><span>|</span>
                      <a href="###">葡萄</a><span>|</span>
                      <a href="###">香蕉</a><span>|</span>
                      <a href="###">苹果</a><br/>
                    </div>
                  <div>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                  </div>
                  <div>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                  </div>
                  <div>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                    <a href="###">草莓</a><span>|</span>
                    <a href="###">葡萄</a><span>|</span>
                    <a href="###">香蕉</a><span>|</span>
                    <a href="###">苹果</a><br/>
                  </div>
                </div>
              </div>
            </li>
            <li><img src="./../../static/z/主页/li2.png" alt="">生猛海鲜</li>
            <li><img src="./../../static/z/主页/li3.png" alt="">肉类家禽</li>
            <li><img src="./../../static/z/主页/li4.png" alt="">蛋奶素食</li>
            <li><img src="./../../static/z/主页/li5.png" alt="">田园蔬菜</li>
            <li><img src="./../../static/z/主页/li6.png" alt="">零食酒水</li>
            <li><img src="./../../static/z/主页/li7.png" alt="">粮油杂货</li>
            <li><img src="./../../static/z/主页/li8.png" alt="">礼品卡券</li>
            <li><img src="./../../static/z/主页/li9.png" alt="">家具用品</li>
          </ul>
        </div>
      </div>
      <a href="/#/home" class="a2">
        首页</a><a href="#" class="a2">同城</a><a href="#" class="a2">礼拜五</a><a href="#" class="a2">积分商城</a><a href="#" class="a2">导航+</a>
    </div>
    <router-view></router-view>
    <Btm></Btm>
  </div>
</template>

<script>
  import Btm from "./Btm";

  export default {
    name: "Top",
    components:{
      Btm,
    },
    mounted:function () {
      $('.a2').eq(0).css({
        background:'#f08200',
        color: 'white',
      })
      $('.a2').click(function () {
        $('.a2').css({
          background:'white',
          color: '#333',
        })
        $(this).css({
          background:'#f08200',
            color: 'white',
        })
      })

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
  .topC{
    width: 1280px;
    margin: 0 auto;
    height: 130px;
    /*background: palegoldenrod;*/
  }
  .topC>img{
    float: left;
    margin-top: 25px;
    margin-right: 100px;
  }
  .topC1{
    float: left;
  }
  .topC1_1 input{
    width: 445px;
    height: 40px;
    font-size: 14px;
    padding-left: 10px;
    margin-left: 1px;
    border: 0;
    outline-style:none;
  }
  .topC1_1 input::placeholder{
    color: #a0a0a0;
  }
  .topC1_1{
    width: 500px;
    height: 42px;
    line-height: 42px;
    background: #4b943d url("./../../static/z/主页/sou.png") no-repeat 97.5% 10px;
    margin-top: 50px;
  }
  .topC1_2{
    font-size: 14px;
  }
  .topC1_2>a{
    text-decoration: none;
    margin-right: 20px;
    color: #707070;
  }
  .topC2{
    margin-top: 50px;
    float: right;
  }
  .topC2>a{
    display: inline-block;
    width: 130px;
    height: 40px;
    border: 1px solid #e5e5e5;text-align: center;
    line-height: 40px;
    border-radius: 5px;
    background: #f8f8f6;
    font-size: 14px;
  }
  .topC2>a:nth-child(2){
    margin-left: 15px;
  }
  .topC2>a>img{
    margin-right: 8px;
    position: relative;
    top: 3px;
  }
  .topB{
    width: 1280px;
    clear: both;
    margin: 0 auto;
    height: 50px;
    padding-top: 20px;
  }
  .topB a{
    font-size: 16px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    color: #333;
    text-decoration: none;
  }
  .topB>div{
    float: left;
  }
  .a1{
    width: 170px;
    text-align: center;
    position: relative;
  }
  .a1:hover .a1_1{
    display: block;
  }
  .a1_1{
    position: absolute;
    top: 50px;
    left: 0;
  }
  .a1_1{
    display: none;
    z-index: 5;
  }
  .a1_1>li{
    width: 170px;
    list-style: none;
    height: 54.6px;
    line-height: 54.6px;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #eee;
    background: white;
    position: relative;
  }
  .a1_1>li:hover{
    background: #ebffe7;
  }
  .a1_1>li:hover .list1{
    display: block;
  }
  .a1_1>li>img{
    margin-right: 8px;
    position: relative;
    top: 6px;
  }
  .a2{
    width: 150px;
    height: 50px;
  }
  .a2:hover{
    background: #f08200;
    color: white;
  }
  .list1{
    width: 458px;
    height: 500px;
    background: #ebffe7;
    position: absolute;
    top: 0;
    left: 170px;
    display: none;
  }
  .list1>ul{
    float: left;
    margin-left: 38px;
  }
  .list1>ul>li{
    margin-bottom: 20px;
  }
  .list1>ul>li>a{
    color: #498e3d;
    font-weight: 200;
  }


  .list1_r{
    float: left;
    margin-left: 30px;
  }
  .list1_r>div{
    margin-bottom:20px;
  }
  .list1_r>div>a{
    clear: both;
    display: inline;
     }
  .list1_r>div>span{
    margin: 20px;
  }
  .local{
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .loc{
    width: 700px;
    height: 350px;
    background: white url("./../../static/z/主页/localbg.png");
    margin: 180px auto;
  }
  .loc>p{
    text-align: right;
    margin-right: 20px;
    padding-top: 10px;
    font-size:30px;
    color: #999;
    font-weight: 100;
  }
  .loc>span{
    margin-left: 65px;
    font-size: 18px;
    color: #333;
  }
  .loc>a{
    margin-top: 20px;
    display: inline-block;
    width: 180px;
    height: 33px;
    text-align: center;
    background: #498e3d;
    line-height: 33px;
    color: white;
    border-radius: 8px;
    font-weight: 200;
  }

</style>
