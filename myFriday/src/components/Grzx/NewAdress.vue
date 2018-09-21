<template>
  <div class="duihuan">
    <div class="toP">
      <span>添加新地址</span>
    </div>
    <div class="mid">
      <ul class="midCon">
        <li class="oneLi">
          <span>*</span>收货人姓名: <input type="text">
        </li>
        <!---->
        <li class="twoLi">
          <span>*</span>所在地区:
          <div id="city">
            <select class="prov"></select>
            <select class="city" disabled="disabled"></select>
            <select class="dist" disabled="disabled"></select>
          </div>
        </li>        <!---->
        <li class="thrLi">
          <span>*</span>详细地址: <input type="text">
        </li>
        <!---->
        <li class="fourLi">
          <span>*</span>联系电话: <input type="text" class="oneInp">
         <span style="font-size: 16px;color: black">或固定电话:</span> <input type="text" class="twoInp"> — <input class="thrInp" type="text"><br>
        </li>
        <!---->
        <li class="fiveLi">
          <input type="checkbox" class="fourInp">&nbsp;&nbsp;设置为常用地址
        </li>
      </ul>
      <div class="baocun" @click="save">保存</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "NewAdress",
      data(){
          return {
            defaul:''
          }
      },
      methods:{
        save(){
          var one=$('.oneLi>input').val()
          var thr=$('.thrLi>input').val()
          var five=$('.oneInp').val()
          var six =$('.twoInp').val()
          var seven=$('.thrInp').val()
          var ack=document.querySelector('.fourInp')
          if (ack.checked){
            this.defaul=1
          }else{
            this.defaul=0
          }
          console.log(localStorage.userid)
          axios.get('/api/PHP/Day04/mfriday.php?type=8&user='+one+'&userid='+localStorage.userid+'&local='+thr+'&moren='+ this.defaul+'&phone='+five+'&quhao='+six+'&guhua='+seven).then(res=>{
            console.log(res.data)
          })
          window.location.href='/#/adressguanl'
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>


  .toP{
    width: 1035px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
    position: relative;
    line-height: 58px;
    font-size: 20px;
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
  .mid{
    height: 565px;
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    /*text-align: center;*/
    font-size: 18px;
    /*font-weight: lighter;*/
  }

  .midCon>li>span{
    color: #f00;
  }
  .thrInp{
    width: 125px;
    height: 35px;
  }
  .oneInp{
    width: 150px;
    height: 35px;
  }
  .twoInp{
    width: 47px;
    height: 35px;
  }
  .thrLi>input{
    width: 458px;
    height: 35px;
  }
  #city{
    display: inline-block;
  }
  .twoLi select{
    width: 140px;
    height: 35px;
    font-size: 16px;
    text-align: center;
    margin-right: 15px;
  }
  .oneLi>input{
    width: 330px;
    height: 35px;
  }


  .baocun{
    width: 150px;
    height: 50px;
    background: #f08200;
    border-radius: 5px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    margin-left: 150px;
    margin-top: 40px;
  }
  .midCon{
    margin-top: 40px;
    margin-left: 50px;
  }
  .midCon>li{
    margin-bottom: 20px;
  }
  .fiveLi{
    margin-left: 100px;
    font-size: 16px;
  }
</style>
