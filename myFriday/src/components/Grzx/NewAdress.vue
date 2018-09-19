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
        </li>
        <!---->
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
          <input type="checkbox">&nbsp;&nbsp;设置为常用地址
        </li>
      </ul>
      <div class="baocun">保存</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NewAdress",
      data(){
          return {

          }
      },
      methods:{

      },
      mounted(){
        // $(document).ready(function () {
        //   $("#city").citySelect({
        //     url:"../../../static/city.min.js",  //请求地址，请在localhost下请求这个地址，或者后端直接返回数据
        //     prov:"", //省的默认值，可不写此属性；
        //     city:"", //地市的默认值，可不写；
        //     dist:"", //区的默认值，可不写
        //     nodata:"none", //设置此属性为"none"，当子集无数据时，隐藏select
        //     required:true //是否默认选中
        //   });
        // })
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
