<template>
  <div>
    <div class="m_20 p_10 white_bg br_1" v-for="item in imgList" :key="item.link" @click="$router.push({name: item.link})">
      <van-row type="flex" justify="space-between" align="top">
        <van-col span="6">
          <van-icon name="qr" size="1rem"></van-icon>
        </van-col>
        <van-col span="8" align="center">
          <van-image :src="item.src"></van-image>
          <span>{{item.title}}</span>
        </van-col>
        <van-col span="6" align="right">
          <van-icon name="arrow" size=".6rem"></van-icon>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import applyCardImg from '@/assets/apply_card.png'
  import wbApplyCardImg from '@/assets/wbApplycard.png'
  import changePackageImg from '@/assets/change_package.png'
  export default {
    data() {
      return {
        imgList: [
          {src: applyCardImg, title: '开卡业务查询',link: 'opencard'},
          {src: wbApplyCardImg, title: '融宽业务查询',link: 'fuseBroadband'},
          {src: changePackageImg, title: '变更套餐业务查询',link: 'changePackage'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>