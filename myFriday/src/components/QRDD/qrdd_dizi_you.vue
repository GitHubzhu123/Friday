<template>
    <div class="dizi">
      <span class="sjr">收件人信息</span>
      <span class="newdizi">使用新地址</span>
      <div class="dizi_window">
        <div class="dizi_box" v-for="item in [0,1,2,3,4,5,6]">
          <p><span class="dian"></span>但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589 <span class="mr">默认地址</span>
            <span class="sc">删除</span><span class="xg">修改</span><span class="swmr">设为默认地址</span>
          </p>
        </div>
      </div>
      <div class="zhankai">
        <span>展开其他地址</span><span class="kai"></span>
        <span>收起地址</span><span class="guan"></span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qrdd_dizi_you"
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
    background: url('/../static/f/JingLing.png') -418px 3px;
  }
  .mr{
    margin-left: 10px;
    color: rgb(150,150,150);
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
</style>
