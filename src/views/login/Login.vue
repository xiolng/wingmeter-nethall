<template>
  <div class="white_bg pt_10">
    <van-tabs v-model="active" title-active-color="#f60" :border="false" swipeable>
      <van-tab title="验证码登录">
        <Verification></Verification>
      </van-tab>
      <van-tab title="账号密码登录">
        <Account></Account>
      </van-tab>
    </van-tabs>


    <div class="wecLogin">
      <van-divider>微信登录</van-divider>
      <div class="tc mt_20 mb_20">
        <van-image
          width="1.2rem"
          height="1.2rem"
          src="data:image/png;base64,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"
        ></van-image>
      </div>
    </div>
  </div>
</template>

<script>
  import Verification from "@/views/login/Verification";
  import Account from "@/views/login/Account";

  export default {
    data() {
      return {
        active: 0
      }
    },
    components: {
      Verification,
      Account
    }
  }
</script>

<style scoped lang="less">
  .wecLogin {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>