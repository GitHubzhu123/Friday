<template>
  <div>
    <div class="login">
      <div class="log">
        <div class="log1">
          <a @click="clear()" href="###" class="span1">&times;</a>
          <div class="log_1"><span>登录</span><a href="###">手机验证登录<img src="./../../static/z/主页/pp.png" alt=""></a>
            </div>
          <div class="log_2"><input type="text" placeholder="请输入手机号" class="val1">
            <img src="./../../static/z/login/dui.png" alt="" class="dui">
          <p class="p1"><span>!</span>{{p1}}</p></div>
          <div class="log_2"><input type="text" placeholder="请输入密码" class="val2">
            <p class="p2"><span>!</span>{{p2}}</p></div>
          <div class="log_4">
            <input type="text" placeholder="验证码">
            <canvas id="canvas" width="80" height="30"></canvas>
            <a href="#" id="changeImg">看不清，换一张</a>
          </div>
          <div class="log_5">
            <input type="checkbox">自动登录
            <a href="###">忘记密码？</a>
          </div>
          <div class="log_6">
            <a @click="log()">登录</a><a href="###" @click="zc()">会员注册</a>
          </div>
          <div class="log_7">
            <p>提示 ：未注册用户将直接注册成为礼拜五用户</p>
            <span>---------用合作网站登录----------</span>
          </div>
          <div class="log_8"><img src="./../../static/z/login/wei.png" alt="">
            <img src="./../../static/z/login/qq.png" alt=""></div>
        </div>
        <div class="log2">
          <a href="###" class="span1" @click="clear()">&times;</a>
          <div class="log2_1"><input type="text" placeholder="请输入手机号">
            <img src="./../../static/z/login/dui.png" alt="" class="dui1">
            <p class="p3 log2p1"><span>!</span>手机号码不正确 ，请重新输入</p>
          </div>
          <div class="log2_2">
            <input type="text" placeholder="请输入密码（6-20位号码字符）">
            <p class="p3 log2p2"><span>!</span>密码不正确</p>
          </div>
          <div class="log2_2 log2_22">
            <input type="text" placeholder="请确认密码">
            <p class="p3 log2p3"><span>!</span>两次密码输入不一致</p>
          </div>
          <div class="log2_3">
            <input type="text" id="code_input" value="" placeholder="验证码"/>
            <div id="v_container"></div>
            <div class="yzm"><a href="###">看不清换一张</a></div>
            <p class="p3 log2p4"><span>!</span>验证失败</p>
          </div>
          <div class="log2_4">
            <input type="text" placeholder="手机验证码">
            <button @click="yzm()">获取验证码</button>
            <a href="###">{{djs}}s</a>
          </div>
          <div class="log2_5"><img @click="changeI()" :src="bol?src1:src2" alt=""><span>我已阅读并同意《礼拜五用户协议》</span></div>
          <div class="log2_6"><a href="###" @click="zcc()">注册</a><a href="###" @click="dl()">登录</a></div>
        </div>
      </div>
    </div>
    <div class="local">
      <div class="loc">
        <p @click="bbc()">&times;</p>
        <span>建议您的收货地址 ：</span><a href="###">河南省郑州市</a>
        <div class="city">
          <Map></Map>
        </div>
        <div class="bccity">
          <p @click="bc()">保存</p>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="topT">
        <div class="topTl">
          <span @click="local()">所在城市 ：{{local}} </span><img src="./../../static/z/主页/箭头.png" alt="">
        </div>
        <div class="topTr">
          <span>您好 ,</span>
          <a class="phone1" @click="login()">{{userid}}</a>
          <a @click="tc()">退出</a>
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
          <a @click="to_grzx"><img src="./../../static/z/主页/user.png" alt="">个人中心</a><a class="togwc" @click="to_gwc"><img src="./../../static/z/主页/gwc.png" alt="">购物车</a>
        </div>
      </div>
    </div>
    <div class="topB">
      <div class="a1">
        <a href="/#/qb">全部分类 <img src="./../../static/z/主页/xia.png" alt=""></a>
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
        首页</a><a href="/#/tc" class="a2">同城</a>
      <a href="/#/zt" class="a2">礼拜五</a><a href="/#/jfsc" class="a2">积分商城</a>
      <a href="/#/lbw" class="a2">导航+</a>
    </div>
    <router-view></router-view>
    <Btm></Btm>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Btm from "./Btm";
  import Map from "./Map";

  export default {
    name: "Top",
    components:{
      Map,
      Btm,
    },
    data(){
      return {
        userid:'未登录',
        p1:'手机号码不正确，请重新输入',
        p2:'密码不正确，请重新输入',
        djs:60,
        bol:true,
        src1:'./../../static/z/主页/yuan1.png',
        src2:'./../../static/z/主页/yuan2.png',
        local:'北京市朝阳区'
      }
    },
    methods:{
      local(){
        $('.local').css({
          display:'block'
        })
      },
      bbc(){
        $('.local').css({
          display:'none'
        })
      },
      bc(){
        this.local = localStorage.str1+localStorage.str2+localStorage.str3;
        // alert(localStorage.str1+=localStorage.str2+=localStorage.str3)
        $('.local').css({
          display:'none'
        })
      },
      changeI(){
        this.bol = !this.bol;
      },
      yzm(){
        this.djs=60;
        $('.log2_4>a').css({
          display:'block'
        })
        var times = setInterval(function () {
          this.djs--;
          if(this.djs==0){
            clearInterval(times);

            $('.log2_4>a').css({
              display:'none'
            })
          }
        }.bind(this),1000)
      },
      clear(){
        $('.login').css({
          display:'none'
        })
      },
      tc(){
        var bol = confirm('确定要退出登录吗')
        if(bol){
          localStorage.userid = '未登录';
          this.userid = localStorage.userid;
          localStorage.login = false;
          // location.reload()
        }else{

        }
      },
      log(){
        var val1 = $('.val1').val();
        var val2 = $('.val2').val();
        var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
        if(pattern.test($('.val1').val())&&val2.length>=6&&val2.length<20){
          axios.get('/api/vuephp/user.php?type=2&phone='+val1).then(res=> {
            console.log(res.data);
            if (res.data==0){
              // alert('该用户不存在');
              this.p1 = '该用户不存在';
              $('.p1').css({
                opacity:'1'
              })
            }else if(res.data[0].passWord==val2){
              alert('登录成功');
              $('.login').css({
                display:'none'
              })

              localStorage.userid = $('.val1').val();
              this.userid = localStorage.userid
              localStorage.login = true;
              // location.reload()
              $('.p2').css({
                opacity:'0'
              })
            }else{
              $('.p2').css({
                opacity:'1'
              })
            }
          })
        }else{
          alert('请检查输入信息是否正确');
        }
      },
      to_gwc(){

        // console.log($(".togwc").offset().left,$(".togwc").offset().top)
        axios.get('/api/vuephp/gwc.php?type=21&userid='+this.userid).then(res=> {
          // console.log(res.data)
          localStorage.huang=0
          if(res.data==''){
            window.location.href="/#/kong"
          }else {
            window.location.href="/#/gwc_you"
          }
          // this.sparr = res.data;
          // var that = this;
        })
      },
      zc(){
        $('.log2').css({
          display:'block'
        })
        $('.log1').css({
          display:'none'
        })
      },
      dl(){
        $('.log1').css({
          display:'block'
        })
        $('.log2').css({
          display:'none'
        })
      },
      login(){
        $('.login').css({
          display:' block'
        })
      },
      zcc(){
        var a1 = $('.log2_1>input').val();
        var b1 = $('.log2_2>input').val();
        if (a1.length>=0&&b1.length>=0){
          axios.get('/api/vuephp/user.php?type=1&phone='+a1+'&password='+b1).then((response) => {
            console.log(response.data);
            if (response.data == 0) {
              alert('注册成功');
            } else {
              alert('该账号已存在');
            }
          })
        }
      },
      to_grzx(){
        window.location.href="/#/grmenu";
      }
    },
    mounted:function () {
      this.local = localStorage.str1+localStorage.str2+localStorage.str3;
      // this.userid = localStorage.userid;
      if(localStorage.userid){
        this.userid = localStorage.userid;
      }else{
        this.userid = '未登录'
      }
      $('.login').css({
        display:'none'
      })
      $('.log1').css({
        display:'block'
      })
      $('.log2').css({
        display:'none'
      })
      $('.dui1').css({
        opacity:'0'
      })
      $('.log2_1>input').blur(function () {
        var a1 = $('.log2_1>input').val();
        var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
        if (pattern.test(a1)){
          $('.dui1').css({
            opacity:'1'
          })
          $('.log2p1').css({
            opacity:'0'
          })
        }else{
          $('.dui1').css({
            opacity:'0'
          })
          $('.log2p1').css({
            opacity:'1'
          })
        }
      })
      $('.log2_2>input').blur(function () {
        var a2 = $('.log2_2>input').val();
        if (a2.length>=6){
          $('.log2p2').css({
            opacity:'0'
          })
        }else{
          $('.log2p2').css({
            opacity:'1'
          })
        }
      })
      $('.log2_22>input').blur(function () {
        var a3 = $('.log2_22>input').val();
        if (a3==$('.log2_2>input').val()){
          $('.log2p3').css({
            opacity:'0'
          })
        }else{
          $('.log2p3').css({
            opacity:'1'
          })
        }
      })
    $('.yzm>a').click(function () {
      $('#verifyCanvas').click();
    })
      var verifyCode = new GVerify("v_container");
      $('#code_input').blur(function(){
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
          $('.log2p4').css({
            opacity:'0'
          })
        }else{
          $('.log2p4').css({
            opacity:'1'
          })
        }
      })
      //登录
      $('.dui').css({
        opacity:'0'
      })
      $('.p1').css({
        opacity:'0'
      })
      $('.p2').css({
        opacity:'0'
      })
      $('.val1').blur(function () {
        var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
        if (pattern.test($('.val1').val())) {
          $('.dui').css({
            opacity:'1'
          })
          $('.p1').css({
            opacity:'0'
          })
        }else{
          $('.dui').css({
            opacity:'0'
          })
          $('.p1').css({
            opacity:'1'
          })
        }
      });
      //验证码
      function randomNum(min,max){
        return Math.floor( Math.random()*(max-min)+min);
      }
      /**生成一个随机色**/
      function randomColor(min,max){
        var r = randomNum(min,max);
        var g = randomNum(min,max);
        var b = randomNum(min,max);
        return "rgb("+r+","+g+","+b+")";
      }
      drawPic();
      document.getElementById("changeImg").onclick = function(e){
        e.preventDefault();
        drawPic();
      }

      /**绘制验证码图片**/
      function drawPic(){
        var canvas=document.getElementById("canvas");
        var width=canvas.width;
        var height=canvas.height;
        var ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';
        /**绘制背景色**/
        ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
        ctx.fillRect(0,0,width,height);
        /**绘制文字**/
        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        for(var i=0; i<4; i++){
          var txt = str[randomNum(0,str.length)];
          ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
          ctx.font = randomNum(20,40)+'px SimHei'; //随机生成字体大小
          var x = 10+i*25;
          var y = randomNum(25,45);
          var deg = randomNum(-45, 45);
          //修改坐标原点和旋转角度
          ctx.translate(x,y);
          ctx.rotate(deg*Math.PI/180);
          ctx.fillText(txt, 0,0);
          //恢复坐标原点和旋转角度
          ctx.rotate(-deg*Math.PI/180);
          ctx.translate(-x,-y);
        }
        /**绘制干扰线**/
        for(var i=0; i<3; i++){
          ctx.strokeStyle = randomColor(40,180);
          ctx.beginPath();
          ctx.moveTo( randomNum(0,width), randomNum(0,height) );
          ctx.lineTo( randomNum(0,width), randomNum(0,height) );
          ctx.stroke();
        }
        /**绘制干扰点**/
        for(var i=0; i<80; i++){
          ctx.fillStyle = randomColor(0,255);
          ctx.beginPath();
          ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
          ctx.fill();
        }}
      $('.aa').on('click', addProduct);
      function addProduct(event) {
        var offset = $('#end').offset();
        var img = $('.aa').attr('src')
        var flyer = $('<img class="u-flyer" src="'+ img +'"/>');
        var top = $(window).scrollTop();

        console.log(event.pageX,event.pageY,$(window).scrollTop());

        flyer.fly({
          start: {
            left: event.pageX,
            top: event.pageY-top
          },
          end: {
            left: offset.left,
            top: offset.top-top,
            width: 20,
            height: 20
          }
        });
        $('.u-flyer').delay(800).animate({opacity:0},1)
      }
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
    margin-left: 5px;
  }
  /*:visited 访问过的（已经看过的）链接样式*/
  /*A:hover*/
  /*A:active*/
  .a2:hover{
    background:#f08200 !important;
    color: white !important;
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
.login{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0,0,0,0.5);
}
  .log{
    width: 385px;
    height: 500px;
    background: white;
    margin: 200px auto 0 auto;
    border: 5px solid #e2e2e2;
    position: relative;
  }
  .log1{
    width: 100%;
  }
  .log_1{
      margin: 25px 35px 10px 35px;
      line-height: 35px;
  }
  .log_1 span{
    font-size: 24px;
    color: #666;
  }
  .log_1 a{
    font-size: 16px;
    color: #5b9751;
    float: right;
  }
  .log_1 a>img{
    position: relative;
    top: 2px;
    margin-left: 5px;
  }
  .log_2{
    position: relative;
    margin-left: 35px;
  }
  .log_2>img{
    position: absolute;
    top: 16px;
    right: 55px;
  }
  .log_2>input{
    width: 295px;
    height: 40px;
    font-size: 16px;
    padding-left: 10px;
  }
  .log_2>p{
    font-size: 12px;
    margin: 5px 0;
    color: #e05259;
  }
  .log_2>p>span{
    display: inline-block;
    width: 12px;
    height: 12px;
    color: white;
    text-align: center;
    line-height: 13px;
    background: #db2630;
    border-radius: 50%;
    margin-right: 5px;
    position: relative;
    top: 0.5px;
  }
  .log_4{
    margin-left: 35px;
  }
  .log_4 input{
    width: 105px;
    padding-left: 10px;
    font-size: 16px;
    height: 40px;
  }
  #canvas{
    position: relative;
    top: 8px;
  }
  #changeImg{
    font-size: 14px;
    color: #f08200;
  }
  .log_5{
    width: 305px;
    margin: 15px auto;
    font-size: 14px;
    color: #666;
  }
  .log_5>a{
    float: right;
    color: #f18c24;text-decoration: underline;
    margin-right: 50px;
  }
  .log_6{
    width: 305px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .log_6>a{
    display: inline-block;
    width: 133px;
    height: 45px;color: white;
    text-align: center;
    line-height: 45px;
    border-radius: 5px;
  }
  .log_6>a:nth-of-type(1){
    background: #f08200;
  }
  .log_6>a:nth-of-type(2){
    background: #498e3d;
  }
  .log_7{
    width: 305px;
    margin: 0 auto;
  }
  .log_7>p{
    font-size: 14px;
    color: #a6a6a6;
    font-weight: 200;
    margin:  15px 0 10px 0;
  }
  .log_7>span{
    color: #707070;
  }
  .log_8{
    text-align: center;
    margin-top: 15px;
  }
  .log_8>img:nth-of-type(1){
    margin-right: 15px;
     }
  .login input{
    outline: none;
  }
  .login input::placeholder{
    font-weight: 200;
    color: #9f9f9f;
  }
  .span1{
    position: absolute;
    top: 0px;
    font-size: 24px;
    color: #ccc;
    font-weight: 200;
    right: 10px;
  }
  .log2{
    width: 305px;
    height: 500px;
    margin: 0 auto;
    /*background: lemonchiffon;*/
  }
  .log2 p{
    opacity: 0;
  }
  .log2 input{
    font-size: 16px;
    padding-left: 10px;
  }
  .log2 input::placeholder{
    color: #a5a5a5;
    font-weight: 200;
  }
  .log2_1{
    padding-top: 30px;
    position: relative;
  }
.log2_1>input{
  width: 295px;
  height: 40px;
  /*padding-left: 10px;*/
}
  .log2_1>img{
    position: absolute;
    right: 10px;
    top: 47px;
  }
.p3{
  font-size: 12px;
  color: #e0414a;
  margin: 7px 0;
}
  .p3>span{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #db2630;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 13px;
    margin-right: 2px;
  }
  .log2_2>input {
    width: 295px;
    height: 40px;
    /*padding-left: 10px;*/
  }
  .log2_3>input {
    width: 93px;
    height: 40px;
    float: left;
  }
  .log2_3>button {
    float: left;
  }

  .log2_3 p{
    clear: both;
    padding: 7px 0;
  }
  .log2_4{
    position: relative;
    height: 40px;
    bottom: 5px;
  }
  .log2_4>input {
    width: 295px;
    height: 40px;
  }
  .log2_4>button{
    position: absolute;
    width: 97px;
    height: 33px;
    background: #498e3d;
    color: white;
    right: 2px;
    top: 5px;
    outline: none;
    font-weight: 200;
  }
  .log2_4>a{
    position: absolute;
    display: inline-block;
    width: 97px;
    height: 33px;
    background: #498e3d;
    color: white;
    right: 2px;
    top: 5px;
    text-align: center;
    line-height: 33px;
    font-weight: 200;
    display: none;
  }
  .log2_5{
    font-size: 14px;
    margin: 15px 0;color: #666;
  }
  .log2_5>img{
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
  .log2_6{
    display: flex;
    justify-content: space-between;
  }
  .log2_6>a{
    display: inline-block;
    width: 133px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    border-radius: 5px;
    color: white;
    font-weight: 200;
  }
  .log2_6>a:nth-child(1){
    background: #f08200;
  }
  .log2_6>a:nth-child(2){
    background: #498e3d;
  }
  #v_container{
    position: relative;
    top: 5px;
    left: 10px;
    float: left;
    width: 60px;
    height: 30px;
  }
  .yzm>a{
    font-size: 14px;
    margin-left: 35px;
    line-height: 38px;
    color: #f29322;
  }
  .city{
    width: 700px;
    margin-top: 50px;
    text-align: center;
  }
  .bccity{
    width: 150px;
    height: 30px;
    margin: 50px auto;
  }
  .bccity p{
    width: 150px;
    height: 35px;
    background: #f08200;
    text-align: center;
    color: white;
    font-weight: 200;
    line-height: 35px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
