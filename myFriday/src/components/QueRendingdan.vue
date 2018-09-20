<template>
  <div class="qrdd">
    <top_xiao></top_xiao>
    <gwc_tit></gwc_tit>
    <hr>
    <div class="qrdd_cont zhong">
      <!--<qrdd_diziwu></qrdd_diziwu>-->
      <qrdd_dizi_you></qrdd_dizi_you>
      <hr>
      <qrdd_spxx></qrdd_spxx>
      <!--<qrdd_sdsj></qrdd_sdsj>-->
    </div>
    <btm></btm>
  </div>
</template>

<script>
  import Top_Xiao from '@/components/Top_Xiao'
  import GWC_tit from '@/components/GWC/GWC_tit'
  import Btm from '@/components/Btm'
  import qrdd_diziwu from '@/components/QRDD/qrdd_diziwu'
  import qrdd_dizi_you from '@/components/QRDD/qrdd_dizi_you'
  import qrdd_spxx from '@/components/QRDD/qrdd_spxx'
  // import qrdd_sdsj from '@/components/QRDD/qrdd_sdsj'
    export default {
        name: "QueRendingdan",
      components:{
        gwc_tit:GWC_tit,
        top_xiao:Top_Xiao,
        btm:Btm,
        qrdd_diziwu:qrdd_diziwu,
        qrdd_dizi_you:qrdd_dizi_you,
        qrdd_spxx:qrdd_spxx,
        // qrdd_sdsj:qrdd_sdsj,
      }
    }
</script>

<style scoped>
  .qrdd_cont{
    position: relative;
  }
  hr{
    height: 1px;
    background: rgb(211,211,211);
    border: none;
  }
</style>
