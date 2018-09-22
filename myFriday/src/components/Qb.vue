<template>
    <div>
      <div class="top">
        <span>您的当前位置：首页 > 全部商品 > 苹果 > 阿克苏</span>
      </div>
      <div class="topBar">
        <span>一级分类：</span><a href="###">全部</a><a href="###">苹果</a><a href="###">阿克苏</a><a href="###">酒店</a><a href="###">休闲</a><a
        href="###">电影</a>
      </div>
      <div class="topN">
        <div class="topNl"><span>排序：</span><a href="###">销量</a>
          <a href="###" @click="money()">价格 <img src="./../../static/z/同城/jian.png" alt=""></a><a href="###">评分最高</a></div>
        <div class="topNr"><span>筛选：</span><a>全国</a><a>次日达</a></div>
      </div>

      <div class="lisB">
        <ul>
          <li @click="toXiang(i)" v-for="(arr,i) in data"  v-if="i>8*(num-1)-1&&i<num*8"><img :src="arr.src" alt="">
            <div class="lisC">
              <p>{{arr.name}}</p>
              <p>{{arr.jj}}</p>
              <a>￥{{arr.money}}</a><span>￥{{arr.money}}</span>
              <img class="gwc" src="./../../static/z/主页/gwc1.png" alt="" @click="hq(i,$event)">
            </div>
          </li>
        </ul>
      </div>
      <nav aria-label="Page navigation" class="page-nav-outer" id="PageNavId"></nav>
    </div>
</template>

<script>
  import axios from 'axios'
  import fenPage from "../../static/chajian";
    export default {
        name: "Qb",
      data(){
          return {
            data:'',
            num:1,
            bol:true
          }
      },
      methods:{
        toXiang(i,event){
          // event.preventDefault()
          localStorage.spxqid = this.data[i].id;
          window.location.href = '/#/spxq'
        },
        hq(i,event){
          event.stopPropagation()
          console.log(this.data[i])
          if(localStorage.login=='true'){

            gwcfr();
            setTimeout(function () {
              var usid=Number(localStorage.userid)
              axios.get('/api/vuephp/gwc.php?type=21&userid='+usid).then(res=>{
                // console.log(res.data)
                this.gwc=res.data
                this.jsq=this.gwc.length
                console.log(this.jsq)
                $(".gwcjishu").html(this.jsq)
              })
            },1500)
            axios.get('/api/vuephp/gwc.php?type=1&userid='+localStorage.userid+'&spid='+this.data[i].id+'&num=1&shangdian='+this.data[i].shangDian).then(res=> {
// console.log(res.data)
            })
          }else{
            // alert('您还未登录');
            $('.login').css({
              display:'block'
            })
          }
        },
        money(){
          this.bol = !this.bol;
          if (this.bol){
            axios.get('/api/vuephp/tc.php?type=5').then((response) => {
              console.log(response.data);
              this.data = response.data;
            })
          }else{
            axios.get('/api/vuephp/tc.php?type=6').then((response) => {
              console.log(response.data);
              this.data = response.data;
            })
          }
        }
      },
      mounted:function () {
        fenPage.page();
        // window.onload = function(){
          // PageNavId
          $('#PageNavId').click(function () {
            this.num = $('.active>a').html();
            console.log(this.num);
          }.bind(this))
        // }.bind(this)

        axios.get('/api/vuephp/tc.php?type=4').then((response) => {
          console.log(response.data);
          // this.data = response.data;
          // var aa = response.data;
          // response.data.splice(0,1);
          this.data = response.data;
        })
          //表头
        $('.topBar>a').eq(0).css({
          color:'#fff',
          background: '#458E3D'
        })
        $('.topBar>a').click(function () {
          $('.topBar>a').css({
            color:'#666',
            background:'#fff'
          })
          $(this).css({
            color:'#fff',
            background: '#458E3D'
          })
        })
        $('.topNl>a').eq(0).css({
          color:'#498e3d',
          borderColor:'#498e3d'
        })
        $('.topNl>a').click(function () {
          $('.topNl>a').css({
            color:'#666',
            borderColor:'#e7e7e7'
          })
          $(this).css({
            color:'#498e3d',
            borderColor:'#498e3d'
          })
        })
        $('.topNr>a').eq(0).css({
          color:'#fff',
          background:'#498e3d'
        })
        $('.topNr>a').click(function () {
          $('.topNr>a').css({
            color:'#333',
            background:'#dedede'
          })
          $(this).css({
            color:'#fff',
            background:'#498e3d'
          })
        })
        // $('.gwc').mouseover(function () {
        //   $(this).addClass('aa')
        // });
        // $('.gwc').mouseout(function () {
        //   $(this).removeClass('aa')
        // });
      }
    }
</script>

<style scoped>
  .gwc:hover{
  animation-duration: 1s;
  animation-name: swing;
  }
.top{
  width: 1280px;
  height: 55px;
  margin: 20px auto 0 auto;
  line-height: 55px;
  font-size: 14px;
  color: #666;
  font-weight: 200;
  background: #f4f4f4;
}
.top>span{
  margin-left: 18px;
}
  .topBar{
    width: 1280px;
    height: 55px;
    line-height: 55px;
    margin: 0 auto;color: #666;
    font-weight: 200;
    border-bottom: 1px solid #e7e7e7;
  }
.topBar>a{
  color: #666;
  display: inline-block;
  height: 25px;
  padding: 0 10px;
  line-height: 25px;
  /*background: #458E3D;*/
  text-align: center;
  margin: 0 5px;
}
.topBar>a:nth-of-type(1){
  margin-left:15px;
}
  .topN{
    width: 1280px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    color: #666;
  }
.topN a{
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  text-align: center;
  line-height: 30px;
  color: #333;
  font-weight: 200;
}
.topNl{
  float: left;
}
.topNl>a{
  margin: 0 20px;
  border: 1px solid #e7e7e7;
}
.topNr{
  float: right;
}
.topNr>a{
  display: inline-block;
  margin-left: 40px;
  background: #dedede;
}


.lisB{
  width: 1280px;
  /*height: 430px;*/
  margin: 0 auto;
}
.lisB>ul{
  display: flex;
  /*justify-content: space-between;*/
  flex-wrap: wrap;
  clear: both;
}
.lisB>ul>li{
  width: 305px;
  height: 430px;
  list-style: none;
  border: 1px solid #ececec;
  transition: 0.5s;
  margin-right: 15px;
  margin-bottom: 15px;
}
  .lisB>ul>li:nth-of-type(4n){
    margin-right: 0;
  }
.lisB>ul>li>img{
  margin-top: 40px;
  margin-left: 42px;
  width: 220px;
  height: 220px;
}
  .lisC{
    clear: both;
  }
.lisC>p:nth-of-type(1){
  font-size: 18px;
  color: #333;
  margin: 40px 0 10px 30px;
}
.lisC>p:nth-of-type(2){
  font-size: 14px;
  color: #666;margin-left: 30px;
  margin-bottom: 15px;
}
.lisC>a{
  font-size: 24px;
  color: #ff5757;margin-left: 30px;
}
.lisC>span{
  color: #666;
  font-size: 18px;
  outline: black;
  text-decoration:line-through;
  margin-left: 15px;
}
.lisC>img{
  float: right;
  margin-right: 20px;
}
</style>
