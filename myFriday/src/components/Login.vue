<template>
  <div>
    <top_-xiao></top_-xiao>
    <div class="top">
      <router-link to="/top">
      <img src="./../../static/z/主页/logo.png" alt=""></router-link>
      <span>{{login}}</span>
    </div>
    <div class="content">
      <div class="cont">
        <div class="div1"></div>
        <div class="div2"><p>礼拜五会员</p><span>免费注册</span></div>

        <div class="log">
          <div class="log1">
            <input type="text" class="inp1 val1" placeholder="请输入手机号">
            <img src="./../../static/z/login/dui.png" alt="" class="dui">
            <p class="p1"><span>!</span>手机号码不正确，请重新输入</p>
            <input type="text" class="inp1 val2" placeholder="请输入密码（6-20位号码字符）">
            <img src="./../../static/z/login/dui.png" alt="" class="dui1"><p class="p2"><span>!</span>密码格式有误，请重新输入</p>
            <input type="text" class="inp1 val3" placeholder="请再次输入密码确认">
            <p class="p3"><span>!</span>两次密码输入不一致</p>
            <input type="text" placeholder="验证码" class="inp2 val4">
            <canvas id="canvas" width="80" height="30"></canvas>
            <a href="#" id="changeImg">看不清，换一张</a>
            <p class="p4" style="clear: both;padding: 5px 0"><span>!</span>验证码输入错误</p>
            <input type="text" class="inp1 val5" placeholder="手机验证码"  :value="aa"><button @click="hq()" class="btn1">{{str}}</button>
            <br/>
            <div class="read">
              <img @click="changeI()" :src="bol?src1:src2" alt="">
              我已阅读并同意《礼拜五用户协议》
            </div>
            <div class="lo1">
              <button @click="zc()">注册</button>
              <button @click="dl1()">登录</button>
            </div>
          </div>
          <div class="log2">
            <div class="log22">
            <div class="log2_1">
              <span>登录</span><a href="###">手机验证登录 <img src="./../../static/z/login/icon.png" alt=""></a>
            </div>
              <div class="log2_2">
                <input type="text" placeholder="请输入手机号/账号" class="a1">
                <img src="./../../static/z/login/dui.png" alt="" class="log2i" style="display: none;">
                <p class="log2p1"><span>!</span>{{p1}}</p>
              </div>
              <div class="log2_2">
                <input type="text" placeholder="请输入密码" class="a2">
                <!--<img src="./../../static/z/login/dui.png" alt="">-->
                <p class="log2p2"><span>!</span>密码不正确，请重新输入</p>
              </div>
              <div class="log2_3">
                <input type="text" placeholder="验证码">
                <canvas id="canvas1" width="80" height="30"></canvas>
                <a href="#" id="changeImg1">看不清，换一张</a>
              </div>
              <div class="log2_4">
                <input type="checkbox">自动登录
                <a href="###" @click="wj()">忘记密码?</a>
              </div>
              <div class="log2_5">
                <a @click="dl()">登录</a>
                <a @click="zc1()">会员注册</a>
              </div>
              <div class="log2_6">
                <p>提示 ：未注册用户将直接注册成为礼拜五用户</p>
                <span>----------用合作网站登录----------</span>
              </div>
              <div class="log2_7">
                <img src="./../../static/z/login/wei.png" alt="">
                <img src="./../../static/z/login/qq.png" alt="">
              </div>
            </div>
          </div>

          <div class="log3">
            <div class="log33">
              <p>重置密码</p>
              <div class="log3_1"><input type="text" placeholder="请输入手机号" class="input1">
              <p class="pa"><span>!</span>手机号码格式不正确</p></div>
              <div class="log3_2">
                <input type="text" placeholder="验证码" >
                <canvas id="canvas2" width="80" height="30"></canvas>
                <a href="#" id="changeImg2">看不清，换一张</a>
                <p><span>!</span>密码格式有误，请重新输入</p>
              </div>
              <div class="log3_1"><input type="text" placeholder="请输入密码（6-20位号码字符）" class="input2"><p class="pb"><span>!</span>密码格式有误，请重新输入</p></div>
              <div class="log3_1"><input type="text" placeholder="请再次输入密码" class="input3">
                <p class="pc"><span>!</span>两次输入密码不一致，请重新输入</p></div>
              <div class="log3_1"><input type="text" placeholder="手机验证码" :value="aa1">
              <span @click="hq1()">{{str1}}</span></div>
              <div class="log3_3">
                <a href="###" @click="upd()">提交</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    import Top_Xiao from "./Top_Xiao";
    export default {
        name: "Login",
      components: {Top_Xiao},
      data(){
          return{
           src1: './../../static/z/主页/yuan1.png',
            src2: './../../static/z/主页/yuan2.png',
            bol:true,
            str:'获取验证码',
            aa:'',
            login:'会员注册',
            p1:'手机号码不正确，请重新输入',
            str1:'获取验证码',
            aa1:''
          }
      },
      methods:{
          dl1(){
            this.login = '登录';
            $('.log1').css({
              display:'none'
            })
            $('.log2').css({
              display:'block'
            })
            $('.log3').css({
              display:'none'
            })
          },
        zc1(){
          this.login='会员注册'
          $('.log2').css({
            display:'none'
          })
          $('.log1').css({
            display:'block'
          })
        },

        changeI(){
          this.bol = !this.bol;
        },
        ran(b,a){
          return Math.floor(Math.random()*(a-b)+b)
        },
        hq(){
          for (var i=0;i<5;i++){
            this.aa+=this.ran(0,9);
          }
          var a = 60;
          var time = setInterval(function () {
            a--;
            // document.getElementsByClassName('btn1').disable = true;
            $(".btn1").attr("disabled",'ture');
            this.str = a+' s';
            if (a==0){
              clearInterval(time);
              this.str = '再次获取';
              // $(".btn1").attr("disabled",'false');
            }
          }.bind(this),1000);
        },
        hq1(){
          for (var i=0;i<5;i++){
            this.aa1+=this.ran(0,9);
          }
          var a = 60;
          var times = setInterval(function () {
            a--;
            this.str1 = a+' s';
            if (a==0){
              this.str1 = '再次获取';
              clearInterval(times);
            }
          }.bind(this),1000);
        },
        zc(){
          var a = $('.val1').val();
          var b = $('.val2').val();
          if($('.val1').val().length>0&&$('.val2').val().length>0&&$('.val3').val().length>0&&$('.val4').val().length>0&&$('.val5').val().length>0){
            axios.get('/api/vuephp/user.php?type=1&phone='+a+'&password='+b).then((response) => {
              console.log(response.data);
              if(response.data==0){
                alert('注册成功');
              }else{
                alert('该账号已存在');
              }
            });
          }else{
            alert('请完善您的信息');
          }

        },
        wj(){
          this.login='找回密码'
          $('.log1').css({
            display:'none'
          })
          $('.log2').css({
            display:'none'
          })
          $('.log3').css({
            display:'block'
          })
        },
        upd(){
            var aa = $('.input1').val();
            var bb = $('.input2').val();
            // alert(123)
          if ($('.input1').val().length>0&&$('.input2').val().length) {
            axios.get('/api/vuephp/user.php?type=3&phone=' + aa+'&password='+bb).then((response) => {
              console.log(response.data);
              if(response.data==0){
                alert('用户不存在');
              }else{
                alert('密码更改成功');
                $('.log1').css({
                  display:'none'
                })
                $('.log2').css({
                  display:'block'
                })
                $('.log3').css({
                  display:'none'
                })
              }
            })
          }else{
            alert('请完善您的信息');
          }

        },
        dl(){
          var a1 = $('.a1').val();
          var b1 = $('.a2').val();
          var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
          if (pattern.test(a1)) {
            console.log(a1, b1);
            axios.get('/api/vuephp/user.php?type=2&phone=' + a1).then((response) => {
              console.log(response.data);
              if (response.data == 0) {
                this.p1 = '该用户不存在';
                // alert('该用户不存在');
                $('.log2p1').css({
                  opacity: '1'
                })
              } else if (b1 == response.data[0].passWord) {
                localStorage.login = true;
                localStorage.userid = a1;
                alert('登录成功');
                window.location.href = '#/top'
              } else if (a1.length > 0 && b1.length > 0) {
                $('.log2p2').css({
                  opacity: '1'
                })
                $('.log2p1').css({
                  opacity: '0'
                })
                // alert('密码错误');
              } else {
                alert('请确保账号密码输入完整');
              }
            });
          }else{
            this.p1 = '请检查手机号是否输入正确';
            $('.log2p1').css({
              opacity: '1'
            })
          }
        },

      },
      mounted:function () {
        localStorage.login = false;
        localStorage.userid = '未登录';
        $('.input1').blur(function () {
          var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
          if (pattern.test($('.input1').val())) {
            $('.pa').css({
              opacity:'0'
            })
          }else{
            $('.pa').css({
              opacity:'1'
            })
          }
        })
        $('.input2').blur(function () {
          if ($('.input2').val().length>=6){
            $('.pb').css({
              opacity:'0'
            })
          }else{
            $('.pb').css({
              opacity:'1'
            })
          }
        })
        $('.input3').blur(function () {
          if ($('.input2').val()==$('.input3').val()){
            $('.pc').css({
              opacity:'0'
            })
          }else{
            $('.pc').css({
              opacity:'1'
            })
          }
        })
          $('.a1').blur(function () {
            var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
            if (pattern.test($('.a1').val())) {
              $('.log2i').css({
                display:'block'
              })
            }else{
              $('.log2i').css({
                display:'none'
              })
            }
          })
          $('.val1').blur(function () {
            var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
            // console.log(pattern.test($('.val1').val()))
            if (pattern.test($('.val1').val())) {
              $('.dui').css({
                display:'block'
              })
              $('.p1').css({
                opacity:'0'
              })
            }else{
              $('.dui').css({
                display:'none'
              })
              $('.p1').css({
                opacity:'1'
              })
            }
          })
        $('.val2').blur(function () {
          if ($('.val2').val().length>=6&&$('.val2').val().length<20) {
            $('.dui1').css({
              display:'block'
            })
            $('.p2').css({
              opacity:'0'
            })
          }else{
            $('.dui1').css({
              display:'none'
            })
            $('.p2').css({
              opacity:'1'
            })
          }
        })
        $('.val3').blur(function () {
          if ($('.val3').val()==$('.val2').val()) {
            $('.p3').css({
              opacity:'0'
            })
          }else{
            $('.p3').css({
              opacity:'1'
            })
          }
        })


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
          for(var i=0; i<8; i++){
            ctx.strokeStyle = randomColor(40,180);
            ctx.beginPath();
            ctx.moveTo( randomNum(0,width), randomNum(0,height) );
            ctx.lineTo( randomNum(0,width), randomNum(0,height) );
            ctx.stroke();
          }
          /**绘制干扰点**/
          for(var i=0; i<100; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
            ctx.fill();
          }}


        drawPic1();
        document.getElementById("changeImg1").onclick = function(e){
          e.preventDefault();
          drawPic1();
        }

        /**绘制验证码图片**/
        function drawPic1(){
          var canvas=document.getElementById("canvas1");
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
          for(var i=0; i<8; i++){
            ctx.strokeStyle = randomColor(40,180);
            ctx.beginPath();
            ctx.moveTo( randomNum(0,width), randomNum(0,height) );
            ctx.lineTo( randomNum(0,width), randomNum(0,height) );
            ctx.stroke();
          }
          /**绘制干扰点**/
          for(var i=0; i<100; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
            ctx.fill();
          }}

          //找回密码验证码
        drawPic2();
        document.getElementById("changeImg2").onclick = function(e){
          e.preventDefault();
          drawPic2();
        }
        /**绘制验证码图片**/
        function drawPic2(){
          var canvas=document.getElementById("canvas2");
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
          for(var i=0; i<8; i++){
            ctx.strokeStyle = randomColor(40,180);
            ctx.beginPath();
            ctx.moveTo( randomNum(0,width), randomNum(0,height) );
            ctx.lineTo( randomNum(0,width), randomNum(0,height) );
            ctx.stroke();
          }
          /**绘制干扰点**/
          for(var i=0; i<100; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
            ctx.fill();
          }}
      }
    }
</script>

<style scoped>
  .log2{
    display: none;
  }
  .log22{
    width: 310px;
    height: 500px;
    margin: 0 auto;
  }
  .log2_1>span{
    font-size: 24px;
    color: #666666;
    float: left;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .log2_1>a{
    font-size: 16px;
    color: #6ba063;
    float: right;
    margin-top: 37px;
  }.log2_1>a>img{
    position: relative;
       top: 3px;
     }
  .log2_2{
    width: 100%;
    /*height: 40px;*/
    position: relative;
    clear: both;
  }
   .log2_2>input{
     width: 295px;
     height: 40px;
     padding-left: 10px;
     font-size: 16px;
   }
  .log2_2>input::placeholder{
    color: #999;
  }
  .log2 input::placeholder{
    font-weight: 200;

  }
  .log2_2>img{
    position: absolute;
    bottom: 38px;
    right: 15px;
  }
  .log2_2>p{
    font-size: 12px;
    color: #dd343d;
    margin: 5px 0;
    opacity: 0;
  }
  .log2_2>p>span{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #dd343d;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 14px;
    margin-right: 3px;
    position: relative;
    bottom: 1px;
  }
  .log2_3>input{
    width: 100px;
    padding-left: 10px;
    height: 40px;
    font-size: 16px;
  }
  .log2_3>input::placeholder{
    color: #999;
    font-weight: 200;
  }
  .log2_4{
    font-size: 14px;
    margin: 10px 0;
    color: #666;
    font-weight: 200;
  }
  .log2_4>a{
    color: #f29322;
    text-decoration: underline;
    margin-left: 120px;
  }
  .log2_5{
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .log2_5>a{
    display: inline-block;
    width: 132px;
    height: 45px;
    border-radius: 5px;
    color: white;
    text-align: center;
    line-height: 45px;
    font-size: 18px;
    font-weight: 200;
  }
  .log2_5>a:nth-of-type(1){
    background-color: #f08200;
  }
  .log2_5>a:nth-of-type(2){
    background-color: #498e3d;
  }
  .log2_6{
    text-align: center;
  }
  .log2_6>p{
    font-size: 14px;
    color: #999;
    font-weight: 200;
    margin: 15px 0 10px 0;
  }
  .log2_6>span{
    color: #666;
    font-weight: 200;
  }
  .log2_7{
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }
  .log2_7>img{
    margin: 0 10px;
  }
  #canvas1{
    position: relative;
    top: 7px;
  }
  #changeImg1{
    color: #f18a11;
    font-size: 14px;
  }
  .top{
    width: 1280px;
    height: 130px;
    margin: 0 auto;
    /*background-color: lemonchiffon;*/
    line-height: 150px;
  }
  .top img{
    position: relative;
    top: 17px;
  }
  .top>span{
    display: inline-block;
    height: 40px;
    /*width: 100px;*/
    line-height: 40px;
    border-left: 1px solid #cecece;
    /*text-align: center;*/
    padding-left: 30px;
    font-size: 20px;
    color: #666666;
    margin-left: 55px;
  }
  .content{
    width: 100%;
    height: 500px;
    background: url("./../../static/z/主页/loginbg.png");
  }
  .cont{
    width: 1280px;
    margin: 0 auto;
    position: relative;
  }
  .div1{
    width: 490px;
    height: 220px;
    border: 2px solid white;
    position: absolute;
    top: 140px;
    left: 220px;
  }
  .div2{
    width: 470px;
    height: 200px;
    border: 2px solid white;
    position: absolute;
    top: 150px;left: 230px;
    font-size: 48px;
    color: white;
    text-align: center;
  }
  .div2>p{
    margin: 25px 0 10px 0;
  }
  .div2>span{
    letter-spacing: 40px;
    margin-left: 30px;
  }
  .log{
    width: 400px;
    height: 500px;
    background-color: white;
    float: right;
  }
  .log1{
    width: 400px;
    height: 500px;
    text-align: center;
    position: relative;
    /*display: none;*/
  }
  .log1>input:nth-of-type(1){
    margin-top: 30px;
  }
  .log1>p{
    text-align: left;
    font-size: 12px;
    color: #db2630;
    margin: 5px 0 5px 45px;
    opacity: 0;
  }
  .log1>p>span{
    display: inline-block;
    background: #db2630;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    color: white;
    text-align: center;
     line-height: 13px;
    margin-right: 3px;
  }
  .inp1{
    width: 295px;
    height: 40px;
    display: inline-block;
    padding-left: 10px;
    font-size: 16px;
  }
  .inp1::placeholder{
    color: #adadad;
    font-weight: 200;
  }
  .inp2{
    height: 40px;
    width: 100px;padding-left: 10px;
    float: left;font-size: 16px;
    margin-left: 45px;
  }
  .inp2::placeholder{
    color: #adadad;
    font-weight: 200;
  }
  #canvas{
    position: relative;
    top: 6px;
    margin-left: -20px;
  }
  #changeImg{
    font-size: 14px;
    color: #f08200;
  }
  .btn1{
    position: absolute;
    width: 100px;
    height: 30px;
    background: #498e3d;
    color: white;
    font-weight: 200;
    right: 50px;
    top: 327px;
    outline: none;
  }
  .read{
    float: left;
    margin: 15px 0 15px 45px;
    font-size: 14px;
    color: #959595;
  }
  .read>img{
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
  .lo1{
    clear: both;
    width: 310px;
    height: 45px;
    margin: 0 auto;
    /*background: #666666;*/
    display: flex;
    justify-content: space-between;
  }
  .lo1>button{
    display: inline-block;
    height: 45px;
    width: 130px;color: white;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    font-weight: 200;
  }
  .lo1>button:nth-child(1){
    background-color: #f08200;
  }
  .lo1>button:nth-child(2){
    background-color: #498e3d;
  }
  .dui{
    position: absolute;
    top: 46px;
    right: 60px;
    display: none;
  }
  .log33{
    width: 305px;
    margin: 0 auto;
    /*background-color: palegoldenrod;*/
    height: 500px;
  }
  .log33>p{
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: 200;
  }
  .log3_1>input{
    font-size: 16px;
    width: 285px;
    height: 40px;
    padding-left: 15px;
  }
  .log3_2>input{
    width: 95px;font-size: 16px;
    height: 40px;
    padding-left: 15px;
  }
  #canvas2{
    position: relative;
    top: 10px;
    width: 80px;
  }
  #changeImg2{
    font-size: 14px;
    color: #f08200;
  }
  .log3_1>p,.log3_2>p{
    margin: 5px 0;
    color: #e0414a;
    font-size: 12px;
    opacity: 0;
  }
  .log3_1>p>span{
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    text-align: center;
    background-color: #db2630;
    color: white;
    line-height: 13px;
  }
  .log33 input::placeholder{
    font-weight: 200;
    color: #999;
  }
  .log3{
    display: none;
  }
  .log3_1{
     position: relative;
   }
  .log3_1>span{
    position: absolute;
    top: 5.5px;
    right: 5px;
    display: inline-block;
    width: 100px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    background-color: #498e3d;
    color: white;
    font-weight: 200;
    font-size: 14px;
  }
  .log3_3{
    width: 100%;
    height: 43px;
    background-color: #f08200;margin-top: 30px;
  }
  .log3_3 a{
    display: inline-block;
    width: 100%;
    height: 43px;
    text-align: center;
    line-height: 43px;
    color: white;
    text-decoration: none;
  }
  .dui1{
    position: absolute;
    right: 58px;
    top: 117px;
    display: none;
  }
</style>
