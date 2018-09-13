<template>
    <div id="spxq">
      <top></top>
      <hr>
      <div class="lujing">

      </div>
      <btm></btm>
    </div>
</template>

<script>
  import Top from '@/components/Top'
  import Btm from '@/components/Btm'
    export default {
        name: "SPXQ",
      components:{
        top:Top,
        btm:Btm,
      },
    }
</script>

<style scoped>
  hr{
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }

</style>
