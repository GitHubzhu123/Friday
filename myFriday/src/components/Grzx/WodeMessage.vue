<template>
  <div class="duihuan">
    <div class="top">
      <span>我的消息</span>
    </div>
    <div class="bottom">
      <div class="botCon">
        <div class="botConNav">
          <span class="oneS">标题</span>
          <span class="twoS">发送时间</span>
          <span class="thrS">状态</span>
          <span class="fourS">操作</span>
        </div>
        <ul class="botConCon">
          <li>
            <div class="liOneS"><span>您的货物已发货</span></div>
            <div class="liTwoS"><span>2015年9月23日 15:27:07</span></div>
            <div class="liThrS"><span>未查看</span></div>
            <div class="liFourS">
              <span>查看</span>
              <div></div>
              <span>删除</span>
            </div>
          </li>
          <li>
            <div class="liOneS"><span>您的货物已发货</span></div>
            <div class="liTwoS"><span>2015年9月23日 15:27:07</span></div>
            <div class="liThrS"><span>未查看</span></div>
            <div class="liFourS">
              <span>查看</span>
              <div></div>
              <span>删除</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WodeMessage"
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
    position: absolute;
  }
  .oneS{
    left: 188px;
  }
  .twoS{
    left: 596px;
  }
  .thrS{
    right: 205px;
  }
  .fourS{
    right: 65px;
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
  }
  .liOneS{
    width: 420px;
  }
  .liTwoS{
    width: 320px;
    /*left: 450px;*/
    margin-left: 50px;
  }
  .liThrS{
    width: 80px;
  }
  .liFourS{
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    top: 12px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #4b943d;
    margin-left: 60px;
  }
  .liFourS>div{
    width: 2px;
    height: 16px;
    background: #e2e2e2;
  }

</style>
