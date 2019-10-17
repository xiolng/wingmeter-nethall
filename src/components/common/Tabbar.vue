<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/shop">商城</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>

</style>