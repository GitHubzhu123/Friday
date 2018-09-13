<template>
  <div id="content">
    <div class="leftMenu">
      <div>个人中心</div>
      <ul class="leftMenuCon">
        <li class="oneLi">
          <div>
            <span>交易管理</span>
            <span @click="aa">></span>
          </div>
          <ul v-show="bol1">
            <li><router-link to="/duihuan">我的账户</router-link></li>
            <li><router-link to="">我的订单</router-link></li>
            <li><router-link to="">我的积分</router-link></li>
            <li><router-link to="">积分订单</router-link></li>
            <li><router-link to="">我的钱包</router-link></li>
          </ul>
        </li>

        <li class="twoLi">
          <div>
            <span>会员资料</span>
            <span @click="bb">></span>
          </div>
          <ul v-show="bol2">
            <li><router-link to="">个人资料</router-link></li>
            <li><router-link to="">地址管理</router-link></li>
            <li><router-link to="">我的收藏</router-link></li>
            <li><router-link to="">最近浏览</router-link></li>
            <li><router-link to="">修改密码</router-link></li>
          </ul>
        </li>

        <li class="thrLi">
          <div>
            <span>站内信</span>
            <span @click="cc">></span>
          </div>
          <ul v-show="bol3">
            <li><router-link to="">我的消息</router-link></li>
            <li><router-link to="">意见反馈</router-link></li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  export default {
    name: "GrMenu",
    data(){
      return {
        bol1:false,
        bol2:false,
        bol3:false,
      }
    },
    methods:{
      aa(){
        this.bol1=!this.bol1
      },
      bb(){
        this.bol2=!this.bol2
      },
      cc(){
        this.bol3=!this.bol3
      }
    },
    mounted(){
      $('.leftMenuCon>li>ul>li>a').click(function () {
        $('.leftMenuCon>li>ul>li>a').css('color','black');
        $(this).css('color','red')
      })
    }
  }
</script>

<style scoped>

  #content{
    width: 1230px;
    background: lightseagreen;
  }
  .leftMenu{
    float: left;
    width: 170px;
    height: 625px;
    overflow: hidden;
    text-indent: 25px;
    border: 1px solid #e2e2e2;
  }
  .leftMenu>div{
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e2e2e2;
  }
  .leftMenuCon>li>div{
    font-size: 20px;
  }
  .leftMenuCon>li,.leftMenuCon>li>ul>li{
    margin: 12px 0;
  }
  .leftMenuCon>li>div>span:last-child{
    margin-left: 20px;
  }
  .leftMenuCon>.thrLi>div>span:last-child{
    margin-left: 40px;
  }
  .thrLi{
    /*box-sizing: border-box;*/
    /*border-bottom: 1px solid #e2e2e2;*/
    /*padding-bottom: 15px;*/
  }
  .right{
    width: 1035px;
    border: 1px solid #e2e2e2;
    float: right;
  }
</style>
