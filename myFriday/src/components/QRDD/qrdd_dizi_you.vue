<template>
    <div class="dizi">
      <span class="sjr">收件人信息</span>
      <span class="newdizi" @click="zhe()">使用新地址</span>
      <div class="dizi_window over">
        <div class="dizi_box" v-for="(item,i) in addres">
          <p><span class="dian" :class="dianbol[i]?'dian1':'dian2'" @click="dhizhidian(i)"></span>
            {{item.shouHuoRen}} {{item.dizhi}} {{item.dizhi}} 电话:{{item.tel}}
            <span class="mr2">默认地址</span>
            <span class="sc" @click="del(i)">删除</span>
            <span class="xg" @click="changei(i)">修改</span>
            <span class="swmr mr" @click="moren(i)">设为默认地址</span>
          </p>
        </div>
      </div>
      <div class="zhankai">
        <span @click="kaichange()">展开其他地址</span><span class="kai" @click="kaichange()"></span>
        <span @click="guanchange()">收起地址</span><span class="guan" @click="guanchange()"></span>
      </div>
      <!--地址添加与修改窗口-->
      <div class="newwindow">
        <qrdd_dizhi></qrdd_dizhi>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import qrdd_dizhi from '@/components/QRDD/qrdd_dizhi'
    export default {
        name: "qrdd_dizi_you",
      components:{
        qrdd_dizhi:qrdd_dizhi,
      },
      data(){
        return {
          addres:[],
          dianbol:[],
        }
      },
      methods:{
        dhizhidian(i){
          for(var a=0;a<this.dianbol.length;a++){
            this.$set(this.dianbol,a,false)
          }
          this.$set(this.dianbol,i,true)
          localStorage.qrdd_dzid=this.addres[i].id
          console.log(localStorage.qrdd_dzid)
        },
        moren(i){//设为默认
          $(".mr").css({
            display:'inline-block'
          })
          $(".mr2").css({
            display:'none'
          })
          $(".mr").eq(i).css({
            display:'none'
          })
          $(".mr2").eq(i).css({
            display:'inline-block'
          })
          axios.get('/api/PHP/Day04/mfriday.php?type=15&id='+this.addres[i].id+'&userid='+localStorage.userid).then(res=>{
            console.log(res.data)
          })
        },
        changei(i){//修改
          console.log(i);
          localStorage.xiugai = i;
          this.zhe()
        },
        del(i){//删除
          var aa = this.addres[i].id;
          axios.get('/api/PHP/Day04/mfriday.php?type=10&id='+aa+'&userid='+localStorage.userid).then(res=>{
            console.log(res.data)
            console.log(localStorage.userid)
            if(!res.data.length){
              window.location.href='/#/adress'
            }
          })
        },
        kaichange(){//展开
          $(".dizi_window").removeClass("over")
        },
        guanchange(){//关闭
          $(".dizi_window").addClass("over")
        },
        zhe(){//遮罩层
          $('body').append("<div class='zhezhaoceng'></div>")
          $(".zhezhaoceng").css({
            width:'100%',
            height:'100%',
            background:'rgba(0,0,0,0.5)',
            position:'fixed',
            top:0,
          })
          $(".newwindow").css({
            display:'block',
          })
        }

      },
      mounted(){
        console.log(this.dianbol)
        axios.get('/api/PHP/Day04/mfriday.php?type=9&id='+localStorage.userid).then(res=>{
          this.addres=res.data
          var that = this;
          window.onload = function(){
            for(var i=0;i<res.data.length;i++){
              // console.log(res.data[i].moRen)

              that.dianbol.push(false)
              if(res.data[i].moRen==1){
                // console.log($(".mr").eq(i))
                $(".mr").eq(i).css({
                  display:'none'
                })
                $(".mr2").eq(i).css({
                  display:'inline-block'
                })
                that.$set(that.dianbol,i,true)
              }
            }
          }
          console.log(that.dianbol)
        })

      }
    }
</script>

<style scoped>
  .sjr{
    font-size: 20px;
    line-height: 60px;
  }
  .newdizi{
    display: inline-block;
    width: 90px;
    height: 30px;
    border-radius: 5px;
    font-size: 15px;
    color: white;
    line-height: 30px;
    background: rgb(240,130,0);
    float: right;
    text-align: center;
    margin-top: 15px;
  }
  .dizi_window{

  }
  .over{
    height: 200px;
    overflow: hidden;
  }
  .dizi_box>p{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 15px;
    background: rgb(244,255,242);
  }
  .dian{
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(190,190,190);
    border-radius: 50%;
    position: relative;
    top: 2px;
    margin-right: 10px;

  }
  .dian1{
    background: url('/../static/f/JingLing.png') -418px 3px;
  }
  .dian2{
    background: url('/../static/f/JingLing.png') -60px 3px;
  }
  .mr2{
    margin-left: 10px;
    color: rgb(150,150,150);
    display: none;
  }
  .swmr,.xg,.sc{
    float: right;
  }
  .sc{
    margin-right: 10px;
    color: rgb(107,165,97);
  }
  .xg{
    margin-right: 30px;
    color: rgb(107,165,97);
  }
  .swmr{
    margin-right: 30px;
    color: rgb(240,130,0);
  }
  .zhankai{
    line-height: 40px;
    color: rgb(107,165,97);
    margin-bottom: 20px;
  }
  .kai,.guan{
    display: inline-block;
    width: 15px;
    height: 15px;
    /*border: 1px solid;*/
    margin: 0 15px;
  }
  .kai{
    background: url('/../static/f/JingLing.png') -376px 2px;
  }
  .guan{
    background: url('/../static/f/JingLing.png') -399px 2px;
  }
  .newwindow{
    width: 680px;
    height: 440px;
    border: 5px solid rgb(226,226,226);
    background: white;
    position: fixed;
    top: 200px;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 9999;
    display: none;
  }
</style>
