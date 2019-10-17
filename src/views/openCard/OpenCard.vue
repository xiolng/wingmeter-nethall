<template>
  <div class="paleBlue_bg">
    <div class="p_10 paleYellow_bg">
      <div class="tips pt_10 pb_10">长春市朝阳区万朗东朝阳路专营店（万朗）</div>
      <div>用户您好，您开卡邀请人为</div>
      <div class="red pt_10">158****5420</div>
    </div>
    <img style="width: 100%;" src="../../assets/card_bg.png" alt="">
    <div class="mt_20 p_10 openCard">
      <van-tabs v-model="active" background="#eee" color="#56b1fc" title-active-color="#56b1fc">
        <van-tab title="邮寄取卡">
          <div class="white_bg">
            <MailCardComp></MailCardComp>
          </div>
        </van-tab>
        <van-tab title="线下取卡">
          <div class="white_bg">123123</div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="p_10 pb_20">
      <div class="pb_20 white">
        <van-icon name="checked" size="16px"></van-icon>
        <span class="pl_10">我已阅读《入网协议》</span>
      </div>
      <div class="oh br_radius">
        <van-row class="white_bg" type="flex" justify="space-between" align="center">
          <van-col>
            <div class="pl_20">费用总计： 0元</div>
          </van-col>
          <van-col>
            <van-button type="warning" @click="">
              立即提交
            </van-button>
          </van-col>
        </van-row>
      </div>
    </div>

  </div>
</template>

<script>
  import MailCardComp from "@/views/openCard/MailCardComp"; // 邮寄取卡
  export default {
    data() {
      return {
        active: '邮寄取卡',
      }
    },
    components:{
      MailCardComp
    }
  }
</script>

<style scoped lang="less">

</style>