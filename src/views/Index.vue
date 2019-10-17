<template>
  <div>
    <div class="pt_20 pb_20 white_bg">
      <!--title-tab-list-->
      <van-row type="flex" justify="left" align="center">
        <van-col span="6">
          <van-row type="flex" justify="center" align="center" gutter="10">
            <van-col>
              <van-icon name="arrow-down"></van-icon>
            </van-col>
            <van-col>
              <span class="orange" @click="show = true">{{addressName}}</span>
              <AddressSelect :show="show" :area-list="list" :show-num="3" :callback="getArea"
                             :close-pop="setPop"></AddressSelect>
            </van-col>
          </van-row>
        </van-col>
        <van-col span="8" class="tc">
          <div style="height: 1.7rem">
            <van-icon name="scan" size="1.6rem"></van-icon>
          </div>
          <div>扫一扫</div>
        </van-col>
        <van-col span="8" class="tc">
          <div style="height: 1.7rem">
            <van-image
              width="1.4rem"
              height="1.4rem"
              src="data:image/png;base64,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"
            />
          </div>
          <div>付款码</div>
        </van-col>
      </van-row>
    </div>
    <!--活动、充值、流量-->
    <div class="mt_10 white_bg">
      <van-tabs v-model="active" title-active-color="#f60" line-height="1px">
        <van-tab title="活动">
          <ActivityModule></ActivityModule>
        </van-tab>
        <van-tab title="充话费">
          <PhoneChargeModule></PhoneChargeModule>
        </van-tab>
        <!--<van-tab title="充流量">内容 3</van-tab>-->
      </van-tabs>
    </div>
    <!--开卡业务-->
    <div class="titleTxt tips mt_20 mr_10 ml_10 pb_10 brb_gray_1">开卡业务</div>
    <van-grid :column-num="4">
      <van-grid-item icon="idcard" text="我要开卡" :to="{path: '/openCard'}"></van-grid-item>
      <van-grid-item icon="peer-pay" text="卡号激活"></van-grid-item>
      <van-grid-item icon="cluster-o" text="状态查询"></van-grid-item>
      <van-grid-item icon="logistics" text="物流查询"></van-grid-item>
    </van-grid>
    <!--菜单-->
    <Tabbar/>
  </div>
</template>

<script>
  import Tabbar from "_c/common/Tabbar"; //tab导航
  import AddressSelect from "_c/common/AddressSelect"; //定位，地址选择器
  import ActivityModule from "@/views/activity/ActivityModule"; //活动模块
  import PhoneChargeModule from "@/views/phoneCharge/PhoneChargeModule"; //充话费
  import addressList from './area' // 模拟数据

  export default {
    name: "Index",
    data() {
      return {
        active: 0,
        show: false,
        list: addressList,
        addressName: '全国'
      }
    },
    mounted() {

    },
    methods: {
      getArea(list) {
        this.show = false
        this.addressName = list[list.length - 1].name
      },
      setPop() {
        this.show = false
      }
    },
    components: {
      Tabbar,
      AddressSelect,
      ActivityModule,
      PhoneChargeModule
    }
  }
</script>

<style scoped lang="less">

</style>