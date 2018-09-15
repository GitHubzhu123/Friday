<template>
  <div class="duihuan">
    <div class="top">
      <span>绑定手机</span>
    </div>
    <div class="mid">
      <ul class="midCon">
        <li><input type="text" placeholder="请输入手机号"></li>
        <li><input type="password" placeholder="请输入密码(6-20位号码字符)"></li>
        <li><input type="password" placeholder="请再次输入密码确认"></li>
        <li class="fourLi">
          <input type="text" placeholder="验证码">
          <img src="../../../static/imgM/验证码.jpeg" alt="">
          <span>看不清换一张</span>
        </li>
        <li class="fiveLi">
          <input type="text" placeholder="手机验证码">
          <button>获取验证码</button>
        </li>
      </ul>
      <div class="bangding" @click="aa">点击绑定</div>
      <div class="success" v-show="bol">
        <div>
          <img src="../../../static/imgM/绑定成功.png" alt="">
          <span>恭喜你绑定成功</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "BangDiPhone",
      data(){
          return {
            bol:false
          }
      },
      methods:{
          aa(){
            this.bol=true
          }
      }
    }
</script>

<style scoped>



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
    left: 360px;
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
