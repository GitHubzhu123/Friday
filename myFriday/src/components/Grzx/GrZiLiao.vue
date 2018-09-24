<template>
  <div class="duihuan">
    <div class="toP">
      <span>个人资料</span>
    </div>
    <div class="mid">
      <div class="midCon">
        <div class="headImg">
          <span>当前头像:</span>
          <div class="touPho">
            <!--<img src="../../../static/imgM/头像背景.png" alt="">-->
            <img src="../../../static/imgM/个人资料头像.png" alt="">
          </div>
          <span class="xiugai">修改</span>
        </div>
        <ul class="inputs">
          <li class="oneLi">
            昵称: <input id="oneInp" type="text" :value="nicheng">
          </li>
          <li class="twoLi">
            性别: <label><input type="radio" name="sex" id="oneRadio" value="1"> 男</label>
                  <label ><input type="radio" name="sex" value="2"> 女</label>
          </li>
          <li class="thrLi">
            生日: <select id="thrInp">
            <option>{{age}}</option>
          </select> 年
          </li>
          <li class="fourLi">
            手机: <input id="fourInp" type="text" :value="phone">
            <router-link to="/genghuanphone"><span>更换手机</span></router-link>
          </li>
        </ul>
        <div class="ack" @click="sub()">确认提交</div>
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
        name: "GrZiLiao",
      data(){
          return {
            nicheng:'',
            phone:'',
            sex:'',
            age:'',
          }
      },
      methods:{
        year(){

        },
        sub(){
          // console.log($('#thrInp').val())
          var one=document.getElementById('oneInp').value;
          var thr=document.getElementById('thrInp').value;
          var four=document.getElementById('fourInp').value;
          var oneRadio = $('.twoLi input:radio:checked').val()
            // console.log(one,thr,four,oneRadio)
          console.log(localStorage.userid)
            axios.get('/api/PHP/Day04/mfriday.php?type=2&id='+localStorage.userid+'&nicheng='+one+'&birthday='+thr+'&sex='+ oneRadio).then(res=>{
              console.log(res.data)
            })
        }
      },
      mounted(){

          axios.get('/api/PHP/Day04/mfriday.php?type=3&id='+localStorage.userid).then(res=>{
            // console.log(res.data)
            this.nicheng=res.data[0].nicheng
            this.phone=res.data[0].phone
            this.sex=res.data[0].sex
            this.age=res.data[0].birthday
            if (this.sex=='1') {
              // console.log($("input:radio:eq(0)").val())
              $("input:radio:eq(0)").attr('checked',true)
            } else{
              $("input:radio:eq(1)").prop('checked',true)
            }
          })




          // 出生日期
        $('#thrInp').on('click',function () {
          var thr=document.getElementById('thrInp')
          thr.innerHTML='';
          for (var i=0;i<10;i++) {
            var opt=document.createElement('option')
            opt.innerHTML=1990+i;
            thr.appendChild(opt)
          }
        })

      }
    }
</script>

<style scoped>


  .toP{
    width: 1090px;
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
    font-size: 20px;
  }
  .mid input{
    font-size: 16px;
  }

  a{
    color: #ffffff;
  }
  .headImg{
    width: 210px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
    margin-top: 40px;
  }
  .xiugai{
    color: #aedb01;
    font-size: 16px;
    margin-left: 10px;
  }
  .touPho{
    width: 80px;
    height: 80px;
    position: relative;
  }
  .touPho>img{
    position: absolute;
  }
  .touPho>img:last-child{
    top: 3px;
    left: 3px;
  }
  .fourLi>a{
    font-size: 16px;
    color: #aedb01;
    margin-left: 10px;
  }
  .twoLi>label{
    margin-right: 35px;
    margin-left: 10px;
  }
  .oneLi>input,.fourLi>input{
    width: 170px;
    height: 35px;
    margin-left: 10px;
  }
  .thrLi>select{
    width: 110px;
    height: 40px;
    margin-left: 10px;
    font-size: 16px;
  }
  .ack{
    width: 150px;
    height: 50px;
    background: #f08200;
    text-align: center;
    line-height: 50px;
    position: absolute;
    border-radius: 5px;
    top: 365px;
    left: 140px;
    color: #ffffff;
  }
  .inputs{
    margin-left: 80px;
  }
  .inputs>li{
    margin: 15px 0;
  }
</style>
