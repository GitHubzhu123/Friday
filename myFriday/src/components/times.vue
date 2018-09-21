<template>
    <div>{{data.sec}}</div>
</template>

<script>
  import time from '../../static/times'
    export default {
        name: "times",
      data(){
        return{
          data:{}
        }
      },
      mounted:function () {
        // new Date(1541905871);
        setInterval(()=>{
          this.data = time.times(1541905871)
          console.log(this.data);
        },1000)

      }
    }
</script>

<style scoped>

</style>
