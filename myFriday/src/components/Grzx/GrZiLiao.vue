<template>
  <div class="duihuan">
    <div class="top">
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
          <li>
            昵称: <input type="text">
          </li>
          <li>
            性别: <label><input type="radio" name="sex">男</label>
                  <label ><input type="radio" name="sex">女</label>
          </li>
          <li>
            生日: <select>
            <option value=""></option>
          </select>年
          </li>
          <li>
            手机: <input type="text">
            <span>更换手机</span>
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
  .xiugai{
    color: #aedb01;
    font-size: 16px;
  }
  .touPho{
    position: relative;
  }
  .touPho>img{
    position: absolute;
  }

  .top{
    width: 1035px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
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
    font-size: 20px;
  }

  a{
    color: #ffffff;
  }
</style>
