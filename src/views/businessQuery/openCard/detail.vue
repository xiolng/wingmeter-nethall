<template>
  <div>
    <div class="pt_40 pb_40 brb_1">
      <van-row type="flex" justify="center" align="center">
        <van-col>
          <van-icon v-if="dataList.activeStatus === 2" name="checked" color="#07c160" size="40"></van-icon>
          <van-icon v-if="dataList.activeStatus === 1" name="warning" color="#ff976a" size="40"></van-icon>
        </van-col>
        <van-col>
          <span>{{dataList.activeStatus === 1 ? '待激活': '激活成功'}}</span>
        </van-col>
      </van-row>
      <div v-if="dataList.activeStatus === 1" class="tc mt_10">
        <van-button type="warning" size="small" @click="">
          立即激活
        </van-button>
      </div>
      <div v-if="dataList.activeStatus === 2" class="tc">恭喜，激活成功~</div>
    </div>
    <div class="p_10">
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">开卡号码</van-col>
          <van-col align="end">{{dataList.applyPhoneNum}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">提交日期</van-col>
          <van-col align="end">{{dataList.createDate}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">开卡状态</van-col>
          <van-col align="end">{{dataList.activeStatus}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">联系电话</van-col>
          <van-col align="end">{{dataList.contractMobile}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">选择套餐</van-col>
          <van-col align="end">{{dataList.applyPackage}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">邮寄地址</van-col>
          <van-col align="end">{{dataList.postAddress}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">联系人</van-col>
          <van-col align="end">{{dataList.nickName}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">开卡推荐人</van-col>
          <van-col align="end">{{dataList.introducerName}}</van-col>
        </van-row>
      </van-cell>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: {}
      }
    },
    mounted(){
      this.dataList = this.$route.params.item
      console.log(this.dataList,333,this.$route.params.item);
    }
  }
</script>

<style scoped>

</style>