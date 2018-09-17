<template>
  <div class="old">
    <ul class="oldCon">
      <li><input type="text" placeholder="请输入新手机号"></li>
      <li class="twoLi">
        <input type="text" placeholder="验证码">
        <div class="yzm"><canvas id="canvas" width="80" height="35"></canvas>
          <span id="changeImg">看不清换一张</span></div>
      </li>
      <li><input type="text" placeholder="输入密码验证身份"></li>
    </ul>
    <div class="tijiao">
      <router-link to="/yanzesucc"><span>提交验证</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YanZeOld",
    data(){
      return {

      }
    },
    methods:{

    },
    mounted(){
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
          ctx.font = randomNum(15,25)+'px SimHei'; //随机生成字体大小
          var x = 10+i*15;
          var y = randomNum(25,33);
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
        }
      }
    }

  }
</script>

<style scoped>


  li>input{
    width: 310px;
    height: 45px;
    font-size: 16px;
    margin-bottom: 30px;
    background: #f9f9f9;
    outline: none;
  }
  .twoLi>input{
    width: 110px;
  }
  .twoLi{
    position: relative;
  }
  .yzm{
    position: absolute;
    left: 135px;
    top: 8px;
    width: 175px;
    height: 35px;
    font-size: 14px;
    color: #f08200;
  }
  .yzm>span{
    position: absolute;
    right: 0;
    top: 10px;
  }

  .twoLi>img{
    width: 80px;
    height: 35px;
    vertical-align: middle;
    margin-left: 15px;
    margin-right: 5px;
  }
  .twoLi>a{
    font-size: 14px;
    color: #f08200;
  }
  .tijiao{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 250px;
    left: 0;
    font-size: 20px;
  }
  a{
    color: #ffffff;
  }
</style>
