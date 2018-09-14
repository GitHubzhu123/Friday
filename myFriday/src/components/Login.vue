<template>
  <div>
    <top_-xiao></top_-xiao>
    <div class="top">
      <img src="./../../static/z/主页/logo.png" alt="">
      <span>会员注册</span>
    </div>
    <div class="content">
      <div class="cont">
        <div class="div1"></div>
        <div class="div2"><p>礼拜五会员</p><span>免费注册</span></div>

        <div class="log">
          <div class="log1">
            <input type="text" class="inp1 val1" placeholder="请输入手机号">
            <p class="p1"><span>!</span>手机号码不正确，请重新输入</p>
            <input type="text" class="inp1 val2" placeholder="请输入密码（6-20位号码字符）">
            <p class="p2"><span>!</span>密码格式有误，请重新输入</p>
            <input type="text" class="inp1 val3" placeholder="请再次输入密码确认">
            <p class="p3"><span>!</span>两次密码输入不一致</p>
            <input type="text" placeholder="验证码" class="inp2 val4">
            <canvas id="canvas" width="80" height="30"></canvas>
            <a href="#" id="changeImg">看不清，换一张</a>
            <p class="p4" style="clear: both;padding: 5px 0"><span>!</span>验证码输入错误</p>
            <input type="text" class="inp1 val5" placeholder="手机验证码"  :value="aa"><button @click="hq()" class="btn1">{{str}}</button>
            <br/>
            <div class="read">
              <!--<img @click="changeI()" :src="bol?src1:src2" alt="">-->
              <input type="radio" value="do" name="do">
              我已阅读并同意《礼拜五用户协议》
            </div>
            <div class="lo1">
              <button @click="zc()">注册</button>
              <button>登录</button>
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
            aa:''
          }
      },
      methods:{
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
              // clearInterval(time);
              this.str = '再次获取';
              // $(".btn1").attr("disabled",'false');
            }
          }.bind(this),1000);
        },
        zc(){
          var a = $('.val1').val();
          var b = $('.val2').val();
          if($('.val1').val().length>0&&$('.val2').val().length>0&&$('.val3').val().length>0&&$('.val4').val().length>0&&$('.val5').val().length>0){
            axios.get('/api/vuephp/user.php?type=1&phone='+a+'&password='+b).then((response) => {
              console.log(response.data);
              if(response.data==1){
                alert('注册成功');
              }
            });
          }else{
            alert('请完善您的信息');
          }

        }
      },
      mounted:function () {
          //单选框是否点击
        // var val=$('.read>input:radio[name="do"]:checked').val();
        // if(val==null){
        //   alert(123)
        // }
          $('.val1').blur(function () {
            var pattern = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
            // console.log(pattern.test($('.val1').val()))
            if (pattern.test($('.val1').val())) {
              $('.p1').css({
                opacity:'0'
              })
            }else{
              $('.p1').css({
                opacity:'1'
              })
            }
          })
        $('.val2').blur(function () {
          if ($('.val2').val().length>=6&&$('.val2').val().length<20) {
            $('.p2').css({
              opacity:'0'
            })
          }else{
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
            ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
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
  .top{
    width: 1280px;
    height: 130px;
    margin: 0 auto;
    /*background-color: lemonchiffon;*/
    line-height: 150px;
  }
  .top>img{
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
    margin: 8px 0 8px 45px;
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
  }
  .lo1>button:nth-child(1){
    background-color: #f08200;
  }
  .lo1>button:nth-child(2){
    background-color: #498e3d;
  }
</style>
