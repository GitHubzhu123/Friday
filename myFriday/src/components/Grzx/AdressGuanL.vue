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
          <div class="cz">
            <span @click="moren(i)" class="mr">设为默认地址</span>
            <span class="line1 mr2">|</span>
            <span @click="changei(i)" class="xg">修改</span>
            <span class="line2">|</span>
            <span @click="del(i)" class="sc">删除</span>
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
            console.log(this.addres[i])
            $(".mr").eq(i).css({
              display:'none'
            })
            // console.log($(".mr").eq(0))
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
          // console.log(localStorage.userid)

        axios.get('/api/PHP/Day04/mfriday.php?type=9&id='+localStorage.userid).then(res=>{
          this.addres=res.data
          window.onload = function(){
            for(var i=0;i<res.data.length;i++){
              console.log(res.data[i].moRen)
              if(res.data[i].moRen==1){
                console.log($(".mr").eq(i))
                $(".mr").eq(i).css({
                  display:'none'
                })
                $(".mr2").eq(i).css({
                  display:'none'
                })
              }
            }

          }
        })
        // window.onload = function() {
        //   console.log(this.addres)
        // }
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
    color: white;
  }
  .mid{
    width: 1040px;
    border: 1px solid #e2e2e2;
    position: relative;
    /*text-align: center;*/
    line-height: 45px;
    margin: 25px 0 25px 25px;
    border-bottom: 0px;

  }
  .midNav{
    background: rgb(242,242,242);
    height: 45px;
  }
  .midNav>li{
    height: 45px;
    float: left;
    text-align: center;
    /*background: red;*/
  }
  .liOne{
    width: 100px;
    margin-left: 15px;
    /*background: red;*/
  }
  .liTwo{
    width: 150px;
  }
  .liThr{
    width: 300px;
  }
  .liFour{
    width: 120px;
  }
  .liFive{
    width: 150px;
  }
  .liSix{
    width: 190px;
    /*background: red;*/
  }
  .midCon{
    /*background: red;*/
    height: 50px;
    border-bottom: 1px solid rgb(200,200,200);
  }
  .midCon>li{
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;

    /*background: red;*/
  }
  .midCon>li>div{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cz{
    /*background: red;*/
  }
  .mr{
    /*display: none;*/
    color: rgb(240,130,0);
  }
  .xg,.sc{
    color: rgb(73,142,61);
  }
  .line1,.line2{
    color: rgb(100,100,100);
  }
</style>
