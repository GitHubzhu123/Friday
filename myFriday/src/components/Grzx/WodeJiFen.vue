<template>
  <div class="duihuan">
    <div class="top">
      <span>我的积分</span>
    </div>
    <div class="bottom">
      <p>
        <span>当前积分 :</span>
        <span class="redSpan">240分</span>
      </p>
      <div class="botCon">
        <div class="botConNav">
          <span class="oneS">积分日期</span>
          <span class="twoS">变动</span>
          <span class="thrS">来源</span>
        </div>
        <ul class="botConCon">
          <li>
            <span class="liOneS">2015-04-05 16:20:10</span>
            <span class="liTwoS">+100</span>
            <div class="liThrS">消费赠送</div>
          </li>
          <li>
            <span class="liOneS">2015-04-05 16:20:10</span>
            <span class="liTwoS">-100</span>
            <div class="liThrS">积分商城兑换</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WodeJiFen"
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
    margin: auto;
    position: relative;
    border: 1px solid #e2e2e2;
    border-bottom: 0px;
  }
  .bottom>p{
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
  }
  .redSpan{
    color: #f08200;
  }
  .botConNav{
    height: 45px;
    position: relative;
    line-height: 45px;
    background: #f2f2f2;
  }
  .botConNav>span{
    position: absolute;
  }
  .oneS{
    left: 118px;
  }
  .twoS{
    left: 530px;
  }
  .thrS{
    left: 912px;
  }
  .botConCon>li{
    height: 54px;
    /*background: lightcyan;*/
    line-height: 54px;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
  }
  .botConCon>li>span{
    position: absolute;
  }
  .liOneS{
    left: 80px;
  }
  .liTwoS{
    left: 530px;
  }
  .liThrS{
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 12px;
    left: 870px;
  }



</style>
