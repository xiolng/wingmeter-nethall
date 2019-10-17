<template>
  <div class="activity_box pl_50 pr_50 tc">
    <div class="white pt_10">充值金额：送话费+优惠券+服务</div>
    <van-field placeholder="请输入充值号码" input-align="center" class="mobile_input" style="background: none;"></van-field>
    <van-button type="warning" size="small" @click="">
      立即参加
    </van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .activity_box{
    min-height: 235px;
    background: url("../../assets/activity_bg.png") left top no-repeat;
    background-size: 100%;
    padding-top: 62px;
  }
  .mobile_input{
    background: none;
    margin-bottom: 20px;
    /deep/ input{
      color: #ffffff;
    }
  }
  .mobile_input ::placeholder{
    color: #fff;
  }
</style>