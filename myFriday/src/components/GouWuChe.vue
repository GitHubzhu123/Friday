<template>
  <div id="gwc_wu" >
    <gwc_tit></gwc_tit>
    <hr>
    <div class="gwc_cont zhong">
      <router-view></router-view>
    </div>
    <hr>
  </div>
</template>

<script>
  import GWC_tit from '@/components/GWC/GWC_tit'
    export default {
        name: "GouWuChe",
      components:{
        gwc_tit:GWC_tit,
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
