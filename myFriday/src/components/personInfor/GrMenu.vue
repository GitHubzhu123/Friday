<template>
  <div class="leftMenu">
    <div>个人中心</div>
    <ul class="leftMenuCon">
      <li class="oneLi">
        <div>
          <span class="col">交易管理</span>
          <span>></span>
        </div>
        <ul>
          <li>我的账户</li>
          <li>我的订单</li>
          <li>我的积分</li>
          <li>积分订单</li>
          <li>我的钱包</li>
        </ul>
      </li>

      <li>
        <div>
          <span>会员资料</span>
          <span>></span>
        </div>
        <ul>
          <li>个人资料</li>
          <li>地址管理</li>
          <li>我的收藏</li>
          <li>最近浏览</li>
          <li>修改密码</li>
        </ul>
      </li>

      <li class="thrLi">
        <div>
          <span>站内信</span>
          <span>></span>
        </div>
        <ul>
          <li>我的消息</li>
          <li>意见反馈</li>
        </ul>
      </li>
    </ul>

  </div>
</template>


<script>
  export default {
    name: "GrMenu",

  }
</script>

<style scoped>

  .col {
    color:#ff0;
  }
  .leftMenu{
    width: 170px;
    height: 625px;
    background: lightseagreen;
    overflow: hidden;
  }
  .leftMenu>div{
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    border: 1px solid #e2e2e2;
  }
  .leftMenu>div,.leftMenu>ul{
    margin-left: 20px;
  }
  .leftMenuCon>li>div{
    font-size: 20px;
    /*margin-bottom: 20px;*/
  }
  .leftMenuCon>li,.leftMenuCon>li>ul>li{
    margin: 15px 0;
  }
  .leftMenuCon>.oneLi{
    margin-top: 0;
  }
  .leftMenuCon>li>div>span:last-child{
    margin-left: 25px;
  }
  .leftMenuCon>.thrLi>div>span:last-child{
    margin-left: 40px;
  }
</style>
