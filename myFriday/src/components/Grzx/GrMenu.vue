<template>
  <div id="box">
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
              <li><router-link to="/wdzhangh">我的账户</router-link></li>
              <li><router-link to="/wddingdan2">我的订单</router-link></li>
              <li><router-link to="/wodejifen">我的积分</router-link></li>
              <li><router-link to="/jifendingdan">积分订单</router-link></li>
              <li><router-link to="/wodemoney">我的钱包</router-link></li>
            </ul>
          </li>

          <li class="twoLi">
            <div>
              <span>会员资料</span>
              <span @click="bb">></span>
            </div>
            <ul v-show="bol2">
              <li><router-link to="/grziliao">个人资料</router-link></li>
              <li><router-link to="/adressguanl">地址管理</router-link></li>
              <li><router-link to="/wodecollect">我的收藏</router-link></li>
              <li><router-link to="/recentlook">最近浏览</router-link></li>
              <li><router-link to="/gaipassword">修改密码</router-link></li>
            </ul>
          </li>

          <li class="thrLi">
            <div>
              <span>站内信</span>
              <span @click="cc">></span>
            </div>
            <ul v-show="bol3">
              <li><router-link to="/wodemessage">我的消息</router-link></li>
              <li><router-link to="/yijianfk">意见反馈</router-link></li>
            </ul>
          </li>
        </ul>

      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "GrMenu",
    data(){
      return {
        bol1:true,
        bol2:true,
        bol3:true,
      }
    },
    components:{

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
    width: 1280px;
    background: lightseagreen;
    user-select:none;
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
  .leftMenuCon>li>ul>li>a{
    color: #000;
  }
  .right{
    width: 1090px;
    border: 1px solid #e2e2e2;
    float: right;
    margin-bottom: 40px;
  }

</style>
