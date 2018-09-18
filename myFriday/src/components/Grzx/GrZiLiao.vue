<template>
  <div class="duihuan">
    <div class="toP">
      <span>个人资料</span>
    </div>
    <div class="mid">
      <div class="midCon">
        <div class="headImg">
          <span>当前头像:</span>
          <div class="touPho">
            <img src="../../../static/imgM/头像背景.png" alt="">
            <img src="../../../static/imgM/个人资料头像.png" alt="">
          </div>
          <span class="xiugai">修改</span>
        </div>

        <ul class="inputs">
          <li class="oneLi">
            昵称: <input type="text">
          </li>
          <li class="twoLi">
            性别: <label><input type="radio" name="sex"> 男</label>
                  <label ><input type="radio" name="sex"> 女</label>
          </li>
          <li class="thrLi">
            生日: <select>
            <option value="">1970</option>
          </select> 年
          </li>
          <li class="fourLi">
            手机: <input type="text">
            <router-link to="/genghuanphone"><span>更换手机</span></router-link>
          </li>
        </ul>
        <div class="ack">确认提交</div>
      </div>
    </div>

  </div>
</template>


<script>
    export default {
        name: "GrZiLiao"
    }
</script>

<style scoped>


  .toP{
    width: 1090px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
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
  .mid input{
    font-size: 16px;
  }

  a{
    color: #ffffff;
  }
  .headImg{
    width: 210px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
    margin-top: 40px;
  }
  .xiugai{
    color: #aedb01;
    font-size: 16px;
    margin-left: 10px;
  }
  .touPho{
    width: 80px;
    height: 80px;
    position: relative;
  }
  .touPho>img{
    position: absolute;
  }
  .touPho>img:last-child{
    top: 3px;
    left: 3px;
  }
  .fourLi>a{
    font-size: 16px;
    color: #aedb01;
    margin-left: 10px;
  }
  .twoLi>label{
    margin-right: 35px;
    margin-left: 10px;
  }
  .oneLi>input,.fourLi>input{
    width: 170px;
    height: 35px;
    margin-left: 10px;
  }
  .thrLi>select{
    width: 110px;
    height: 40px;
    margin-left: 10px;
    font-size: 16px;
  }
  .ack{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 365px;
    left: 140px;
    color: #ffffff;
  }
  .inputs{
    margin-left: 80px;
  }
  .inputs>li{
    margin: 15px 0;
  }
</style>
