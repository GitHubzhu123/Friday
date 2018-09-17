<template>
  <div class="duihuan">
    <div class="top">
      <span>我的账单</span>
    </div>
    <div class="bottom">
      <div class="botCon">
        <div class="botConNav">
          <span class="oneS">操作</span>
          <span class="twoS">充值金额</span>
          <span class="thrS">账户余额</span>
          <span class="fourS">时间</span>
        </div>
        <ul class="botConCon">
          <li>
            <div class="liOneS"><span>充值</span></div>
            <div class="liTwoS"><span>+¥10000元</span></div>
            <div class="liThrS"><span>¥</span><span>34430.3元</span></div>
            <div class="liFourS">
              <span>2015-04-15 17:21:21</span>
            </div>
          </li>
          <li>
            <div class="liOneS"><span>退款</span></div>
            <div class="liTwoS"><span>+¥10000元</span></div>
            <div class="liThrS"><span>¥</span><span>34430.3元</span></div>
            <div class="liFourS">
              <span>2015-04-15 17:21:21</span>
            </div>
          </li>
          <li>
            <div class="liOneS"><span>消费</span></div>
            <div class="liTwoS"><span>-¥10000元</span></div>
            <div class="liThrS"><span>¥</span><span>34430.3元</span></div>
            <div class="liFourS">
              <span>2015-04-15 17:21:21</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WdZhangDan"
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
  .top>span{
    margin-left: 20px;
  }
  .bottom{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
  }

  .botCon{
    width: 1050px;
    /*height: 500px;*/
    margin: 20px 0 0 20px;
    position: relative;
    border: 1px solid #e2e2e2;
    border-bottom: 0px;
  }

  .botConNav{
    height: 45px;
    position: relative;
    line-height: 45px;
    background: #f2f2f2;
    font-size: 18px;
  }
  .botConNav>span{
    float: left;
    width: 262px;
    text-align: center;
  }
  .botConCon>li{
    height: 54px;
    /*background: lightcyan;*/
    line-height: 54px;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
    text-align: center;
  }
  .botConCon>li>div{
    float: left;
    width: 262px;
    height: 54px;
    text-align: center;
  }
  .liThrS{
    color: #f08200;
  }


</style>
