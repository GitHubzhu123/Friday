<template>
  <div class="old">
    <ul class="oldCon">
      <li><input type="text" placeholder="请输入新手机号"></li>
      <li class="twoLi">
        <input type="text" placeholder="验证码">
        <img src="../../../../static/imgM/验证码.jpeg" alt="">
        <span>看不清换一张</span>
      </li>
      <li><input type="text" placeholder="输入密码验证身份"></li>
    </ul>
    <div class="yanzheng">
      <router-link to="/yanzesucc"><span>提交验证</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YanZeNew"
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
  .twoLi>img{
    width: 80px;
    height: 35px;
    vertical-align: middle;
    margin-left: 15px;
    margin-right: 5px;
  }
  .twoLi>span{
    font-size: 14px;
    color: #f08200;
  }
  .yanzheng{
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

