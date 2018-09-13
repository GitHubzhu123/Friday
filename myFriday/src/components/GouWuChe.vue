<template>
  <div id="gwc_wu" >
    <top_xiao></top_xiao>
    <gwc_tit></gwc_tit>
    <hr>
    <div class="gwc_cont zhong">
      <router-view></router-view>
    </div>
    <btm></btm>
  </div>
</template>

<script>
  import GWC_tit from '@/components/GWC/GWC_tit'
  import Top_Xiao from '@/components/Top_Xiao'
  import Btm from '@/components/Btm'
    export default {
        name: "GouWuChe",
      components:{
        gwc_tit:GWC_tit,
        top_xiao:Top_Xiao,
        btm:Btm,
      }
    }
</script>

<style scoped>
  #gwc_wu{

  }
  .gwc_cont{
    position: relative;
  }
  hr{
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
</style>
