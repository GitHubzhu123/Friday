<template>
  <div class="duihuan">
    <div class="toP">
      <span>换绑手机</span>
    </div>
    <div class="mid">
      <div class="midCon">
        <!--路由-->
        <div class="luyou">
          <div class="oneDiv">
            <span>1.验证新手机号</span>
            <img src="../../../static/imgM/验证原手机1.png" alt="">
            <!--<img src="../../../static/imgM/验证原手机2.png" alt="">-->
          </div>
          <div class="twoDiv">
            <span>2.验证新手机号</span>
            <img src="../../../static/imgM/验证新手机2.png" alt="">
            <!--<img src="../../../static/imgM/验证新手机2.png" alt="">-->
          </div>
          <div class="thrDiv">
            <span>3.换绑成功</span>
            <img src="../../../static/imgM/换绑成功1.png" alt="">
            <!--<img src="../../../static/imgM/换绑成功2.png" alt="">-->
          </div>
        </div>
        <!--组件展示-->
        <div class="zujian">
          <div class="old">
            <ul class="oldCon">
              <li><input type="text" placeholder="请输入新手机号" id="newPhone"></li>
              <li class="twoLi">
                <input type="text" placeholder="验证码">
                <div class="yzm"><canvas id="canvas" width="80" height="35"></canvas>
                  <span id="changeImg">看不清换一张</span></div>
              </li>
              <li><input type="text" placeholder="输入密码验证身份" id="newPassword"></li>
            </ul>
            <div class="tijiao" @click="succ">
              <router-link to=""><span>提交验证</span></router-link>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  export default {
    name: "GengHuanPhone",
    data(){
      return {

      }
    },
    methods:{
      succ(){
        var ph=$('#newPhone').val()
        var pw=$('#newPassword').val()
        var re = /^1\d{10}$/;
        console.log(pw.trim())
        if (!re.test(ph) || pw.trim()=='') {
          alert('请输入正确的手机号或密码')
        }else{
          axios.get('/api/PHP/Day04/mfriday.php?type=6&id='+localStorage.userid+'&phone='+ph+'&password='+pw).then(res=>{
            console.log(res.data)
            window.location.href='/#/genghuanphone3'
          })
        }
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

  .toP{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .toP>div{
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
  .toP>span{
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
    margin: 40px 0 0 40px;
  }
  .luyou{
    /*width: 800px;*/
    height: 42px;
    /*background: #007aff;*/
  }
  .luyou>div{
    height: 42px;
    float: left;
    position: relative;
    line-height: 42px;
  }
  .luyou>div>img{
    float: left;
  }
  .luyou>div>span{
    margin-left: -190px;
  }
  .luyou>.thrDiv>span{
    margin-left: -170px;
  }
  a{
    color: #000;
  }

  .zujian{
    margin-top: 40px;
    position: relative;
    /*overflow: hidden;*/
  }
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
