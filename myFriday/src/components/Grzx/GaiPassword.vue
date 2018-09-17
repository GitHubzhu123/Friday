<template>
  <div class="duihuan">
    <div class="top">
      <span>修改密码</span>
    </div>
    <div class="mid">
      <ul class="midCon">
        <li><input type="text" placeholder="请输入手机号"></li>
        <li><input type="password" placeholder="请输入密码(6-20位号码字符)"></li>
        <li><input type="password" placeholder="请再次输入密码确认"></li>
        <li class="fourLi">
          <input type="text" placeholder="验证码">
          <div class="yzm"><canvas id="canvas" width="80" height="35"></canvas>
            <span id="changeImg">看不清换一张</span></div>
        </li>
        <li class="fiveLi">
          <input type="text" placeholder="手机验证码">
          <button>获取验证码</button>
        </li>
      </ul>
      <div class="bangding" @click="aa">提交修改</div>
      <div class="success" v-show="bol">
        <div>
          <img src="../../../static/imgM/绑定成功.png" alt="">
          <span>恭喜你修改成功</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GaiPassword",
    data(){
      return {
        bol:false
      }
    },
    methods:{
      aa(){
        this.bol=true
      }
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


  .top{
    width: 1090px;
    height: 58px;
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
    font-size: 16px;
  }
  .midCon{
    position: relative;
    margin: 40px 0 0 40px;
  }
  .bangding{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 450px;
    left: 40px;
    color: #ffffff;
    font-size: 20px;
  }
  li>input{
    width: 310px;
    height: 45px;
    font-size: 16px;
    margin-bottom: 30px;
    background: #f9f9f9;
    outline: none;
  }
  .fourLi>input{
    width: 110px;
  }
  .fourLi>img{
    width: 80px;
    height: 35px;
    vertical-align: middle;
    margin-left: 15px;
    margin-right: 5px;
  }
  .fourLi{
    position: relative;
  }
  .fourLi>span{
    font-size: 14px;
    color: #f08200;
  }
  .fiveLi{
    position: relative;
    width: 310px;
  }
  .fiveLi>button{
    width: 100px;
    height: 32px;
    position: absolute;
    background: #e8e8e8;
    right: 5px;
    top: 9px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
  }
  .success{
    width: 460px;
    height: 185px;
    background: #d9d9d9;
    border-radius: 20px;
    position: absolute;
    top: 163px;
    right: 90px;
    font-size: 20px;
    color: #f08200;
    text-align: center;
  }
  .success>div{
    width: 220px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -25px;
    margin-left: -110px;
  }

</style>
