<template>
  <div class="leftMenu">
    <div>个人中心</div>
    <ul>
      <li>
        <div>
          <span>交易管理</span>
          <img src="" alt="">
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
          <img src="" alt="">
        </div>
        <ul>
          <li>个人资料</li>
          <li>地址管理</li>
          <li>我的收藏</li>
          <li>最近浏览</li>
          <li>修改密码</li>
        </ul>
      </li>

      <li>
        <div>
          <span>站内信</span>
          <img src="" alt="">
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
        name: "GrMenu"
    }
</script>

<style scoped>
  .leftMenu{
    /*width: 1230px;*/
    /*height: 700px;*/
    /*margin: 0 auto;*/
    /*background: lightblue;*/
    width: 170px;
    height: 625px;
    background: lightseagreen;
  }
  .leftMenu>div{
    font-size: 20px;
  }
</style>
