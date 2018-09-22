<template>
  <div class="duihuan">
    <div class="toP">
      <span>地址管理</span>
      <div><router-link to="/newadress">添加新地址</router-link></div>
    </div>
    <div class="mid">
      <ul class="midNav">
        <li class="liOne">
          <p>收货人</p>
        </li>
        <li class="liTwo">
          <p>所在区域</p>
        </li>
        <li class="liThr">
          <p>街道地址</p>
        </li>
        <li class="liFour">
          <p>联系电话</p>
        </li>
        <li class="liFive">
          <p>备注</p>
        </li>
        <li class="liSix">
          <p>操作</p>
          <div>
          </div>
        </li>
      </ul>

      <!---->
      <ul class="midCon" v-for="(item,i) in addres">
        <li class="liOne">
          <div >{{item.shouHuoRen}}</div>

        </li>
        <li class="liTwo">
          <div>{{item.dizhi}}</div>
        </li>
        <li class="liThr">
          <div>{{item.dizhi}}</div>
        </li>
        <li class="liFour">
          <div>{{item.tel}}</div>
        </li>
        <li class="liFive">
          <div>哈喽,你好啊</div>
        </li>
        <li class="liSix">
          <div class="xg">
            <span @click="moren(i)" class="morenSp1">设为默认地址</span>
            <div class="line1 morenSp2"></div>
            <span @click="changei(i)">修改</span>
            <div class="line2"></div>
            <span @click="del(i)">删除</span>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "AdressGuanL",
      data(){
          return {
            addres:[],
          }
      },
      methods:{
          moren(i){
            // var aa = this.addres[i].id;
            // axios.get('/api/PHP/Day04/mfriday.php?type=15&id='+aa+'&userid='+localStorage.userid).then(res=>{
            //   console.log(res.data)
            //   console.log(localStorage.userid)
            //   if(!res.data.length){
            //     window.location.href='/#/adress'
            //   }
            //   // location.reload()
            // })
          },
        changei(i){
          console.log(i);
          localStorage.xiugai = i;
          window.location.href='/#/xiugaiadress';
        },
          del(i){
            // console.log(i);
            var aa = this.addres[i].id;
            axios.get('/api/PHP/Day04/mfriday.php?type=10&id='+aa+'&userid='+localStorage.userid).then(res=>{
              console.log(res.data)
              console.log(localStorage.userid)
              if(!res.data.length){
                window.location.href='/#/adress'
              }
              // location.reload()
            })
          }
      },
      mounted(){
          console.log(localStorage.userid)
        axios.get('/api/PHP/Day04/mfriday.php?type=9&id='+localStorage.userid).then(res=>{
          this.addres=res.data
          // setTimeout(function () {
            for (var i=0;i<res.data.length;i++){
              // console.log($('.morenSp1'))
              if(res.data[i].moRen==1){
                console.log($('.morenSp1')[i],i)
                $('.morenSp1')[i].style.display='none'
                $('.xg')[i].style.width=120+"px"
                $('.xg')[i].style.marginLeft=62+'px'
                $('.morenSp2')[i].style.display='none'
              }else{
                // $('.morenSp2').css('display','block')
              }
            }
          // },1000)


        })
      }
    }
</script>

<style scoped>
  .duihuan{
    /*height: 625px;*/
  }
  .toP{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
    border-bottom: 1px solid #e2e2e2;
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
  .toP a{
    font-size: 14px;
  }



  .mid{
    width: 1040px;
    /*height: 565px;*/
    border: 1px solid #e2e2e2;
    position: relative;
    text-align: center;
    overflow: hidden;
    margin: 25px 0 25px 25px;
    border-bottom: 0px;

  }
  .midCon{
    width: 1040px;
    /*margin: 0 0 0 20px;*/
    height: 50px;
    border-bottom: 1px solid #e2e2e2;
    line-height: 50px;
    border-top: 0;
  }
  .midNav{
    width: 1040px;
    background: aqua;
    border-bottom: 1px solid #e2e2e2;
    /*height: 100px;*/
  }
  .midCon>li,.midNav>li{
    float: left;
  }
  .midCon::after,.midNav::after{
    content: '';
    display: block;
    clear: both;
  }
  .midNav>li>p{
    height: 45px;
    background: #f2f2f2;
    line-height: 45px;
    text-align: center;
  }
  a{
    color: #ffffff;
  }
  .midCon>li>div{
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .liOne{
    width: 105px;
  }
  .liTwo{
    width: 120px;
  }
  .liThr{
    width: 320px;
  }
  .liFour{
    width: 125px;
  }
  .liFive{
    width: 140px;
  }
  .liSix{
    width: 230px;
  }
  .liSix>div{
    width: 200px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .liSix>div>span{
    /*margin-left: 10px;*/
  }
  .line{
    position: absolute;
    width: 2px;
    height: 16px;
    background: #666666;
    top: 16px;
    left: 120px;
  }
  .line1{
    /*position: absolute;*/
    width: 2px;
    height: 16px;
    background: #666666;
    /*top: 16px;*/
    /*left: 128px;*/
  }
  .line2{
    /*position: absolute;*/
    width: 2px;
    height: 16px;
    background: #666666;
    /*top: 16px;*/
    /*left: 175px;*/
  }
</style>
