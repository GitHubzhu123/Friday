<template>
    <div id="spxq">
      <top></top>
      <hr>
      <spxq_cont></spxq_cont>
      <btm></btm>
    </div>
</template>

<script>
  import Top from '@/components/Top'
  import Btm from '@/components/Btm'
  import SPXQ_cont from '@/components/SPXQ/SPXQ_cont'
    export default {
        name: "SPXQ",
      components:{
        top:Top,
        btm:Btm,
        spxq_cont:SPXQ_cont,
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
