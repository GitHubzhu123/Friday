<template>
    <div id="box">
      <table border="0" cellspacing="0">
        <tr>
          <th>编号</th>
          <th>商品名称</th>
          <th>路径</th>
          <th>类型</th>
          <th>金额</th>
          <th>库存</th>
          <th>规格</th>
          <th>简介</th>
          <th>商店</th>
          <th>操作</th>
        </tr>
        <tr  v-for="(a,i) in data" v-if="i>8*(num-1)-1&&i<8*num">
          <td>{{a.id}}</td>
          <td>{{a.name}}</td>
          <td>{{a.src}}</td>
          <td>{{a.type}}</td>
          <td>{{a.money}}</td>
          <td>{{a.kucun}}</td>
          <td>{{a.jj}}</td>
          <td>{{a.guiGe}}</td>
          <td>{{a.shangDian}}</td>
          <td><button id="del" @click="del(i)">下架商品</button></td>
        </tr>

      </table>
      <div id="ye">
        <span>1</span><span>2</span><span>3</span>
        <span>4</span><span>5</span>
        <span>6</span><span>7</span>
        <span>8</span><span>9</span>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Manage",
      data(){
          return {
            data:'',
            num:1
          }
      },
      mounted:function () {
          $('#ye>span').click(($event)=>{
            this.num = Number($($event.target).text())
            console.log(this.num)
              $('#ye>span').css({
                background:'white',
                color:'#333'
              })
              $($event.target).css({
                background:'lightgray',
                color:'white'
              })
            }
          )
        axios.get('/api/vuephp/shop.php?type=0').then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
      }
    }
</script>

<style scoped>
  th,td{
    text-align: center;
  }
  td{
    padding: 15px;
  }
  tr{
    height: 40px;
    width: 1280px;
  }
  tr~tr:hover{
    background: lemonchiffon !important;
  }
  .box{
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  table{
    margin:  0 auto;
  }
  #del{
    width: 70px;
    height: 30px;
  }
  #ye{
    width: 100%;
    text-align: center;
    margin: 20px;
  }
  #ye>span{
    display: inline-block;
    width: 50px;
    height: 30px;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 30px;
    margin: 0 10px;
  }
</style>
