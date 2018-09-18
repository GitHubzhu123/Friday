<template>
  <div class="duihuan">
    <div class="toP">
      <span>账户余额 : </span>
      <span>¥20.00</span>
    </div>
    <div class="bottom">
      <div class="botCon">
        <span>请选择充值金额 :</span>
        <div class="money">
          <div>500元</div>
          <div>1000元</div>
          <div>2000元</div>
        </div>
        <p class="youli">充值有礼</p>
        <ul class="liwu">
          <li>
            <p class="oneP">充500元送 : </p>
            <img class="imG" src="../../../static/imgM/评价-黄橘.png" alt="">
            <div class="liwuRig">
              <p>新疆哈密瓜25kg</p>
              <p>价值 : 500</p>
            </div>
          </li>
          <!---->
          <li>
            <p class="oneP">充500元送 : </p>
            <img class="imG" src="../../../static/imgM/评价-黄橘.png" alt="">
            <div class="liwuRig">
              <p>新疆哈密瓜25kg</p>
              <p>价值 : 500</p>
            </div>
          </li>
          <li>
            <p class="oneP">充500元送 : </p>
            <img class="imG" src="../../../static/imgM/评价-黄橘.png" alt="">
            <div class="liwuRig">
              <p>新疆哈密瓜25kg</p>
              <p>价值 : 500</p>
            </div>
          </li>
        </ul>
        <div class="ljcz">立即充值</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WodeMoney",
    data(){
      return {

      }
    },
    mounted(){
      $('.money>div').click(function () {
        $('.money>div').css('background','#fff');
        $(this).css('background','#66995d');
      })
    }
  }
</script>

<style scoped>


  .toP{
    width: 1090px;
    height: 58px;
    position: relative;
    line-height: 58px;
    font-size: 20px;
  }
  .toP>span{
    margin-left: 20px;
  }
  .toP>span:last-child{
    margin-left: 0px;
    color: #f08200;
  }
  .bottom{
    border-top: 1px solid #e2e2e2 ;
    position: relative;
    cursor: default;
  }

  .botCon{
    width: 1050px;
    margin: 40px auto;
    position: relative;
    font-size: 20px;
    /*background: lightcyan;*/
  }
  .liwu>li{
    width: 360px;
    height: 190px;
    float: left;
    /*background: lightseagreen;*/
    position: relative;
    border: 1px solid #e2e2e2;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  .liwu::after{
    content: '';
    display: block;
    clear: both;
  }
  .money>div{
    width: 115px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #e2e2e2;
    float: left;
    margin-right: 40px;

  }
  .money:after{
    content: '';
    display: block;
    clear: both;
  }
  .money{
    margin: 20px 0 35px;
  }
  .youli{
    color: #f08200;
    margin-bottom: 20px;
  }
  .oneP{
    margin-left: 20px;
    margin-top: 10px;
  }
  .imG{
    width: 180px;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .liwuRig{
    position: absolute;
    left: 200px;
    top: 80px;
  }
  .ljcz{
    background: #f08200;
    color: #ffffff;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
  }


</style>
