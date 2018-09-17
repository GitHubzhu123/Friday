<template>
  <div class="duihuan">
    <div class="top">
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
          <select class="one">
            <option value="0">请选择省区</option>
            <option value="1">北京</option>
            <option value="2">河南</option>
          </select>
          <select class="two">
            <option value="">请选择城市</option>
          </select>
          <select class="three">
            <option value="">请选择区县</option>
          </select>
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
        var HNCitys=["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "商丘", "周口", "驻马店", "南阳", "信阳", "济源"];
        var Beijing=['东城','西城','朝阳','丰台','石景山','海淀','门头沟','房山','通州','顺义','昌平','大兴','怀柔','平谷','密云','延庆'];
        var one=document.querySelector('.one');
        var two=document.querySelector('.two');
        var three=document.querySelector('.three');
        $('.one').change(function () {
          two.innerHTML="<option>--请选择城市--</option>"

          console.log(this.HNCitys)
          if (one.value == "2") {
            for (var i = 0; i < HNCitys.length; i++) {
              // 创建 option
              var opt1 = document.createElement("option");
              opt1.innerHTML = HNCitys[i];

              // 添加
              two.appendChild(opt1);
            }
          }
          // 如果是北京
          if (one.value == "1") {
            for (var j = 0; j < Beijing.length; j++) {
              var opt2 = document.createElement("option");
              opt2.innerHTML = Beijing[j];
              two.appendChild(opt2);
            }
          }
        });
      }
    }
</script>

<style scoped>


  .top{
    width: 1035px;
    height: 58px;
    /*border-bottom: 1px solid #e2e2e2;*/
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .top>div{
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
  .top>span{
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
  .twoLi>select{
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
