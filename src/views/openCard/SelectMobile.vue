<template>
  <div>
    <van-popup v-model="show" position="bottom" @click-overlay="closedPop"
               get-container="body">
      <div class="mobile_box">
        <div class="search_box">
          <van-search
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch">搜索</div>
          </van-search>
        </div>
        <van-grid :column-num="5">
          <van-grid-item>
            <van-button type="default" :loading="false" @click="" size="mini" @click="closedPop">
              按号段
            </van-button>
          </van-grid-item>
          <van-grid-item>
            <van-button type="default" :loading="false" @click="" size="mini">
              按位数
            </van-button>
          </van-grid-item>
          <van-grid-item>
            <van-button type="default" :loading="false" @click="" size="mini">
              剔数字
            </van-button>
          </van-grid-item>
          <van-grid-item>
            <van-button type="default" :loading="false" @click="" size="mini">
              靓号
            </van-button>
          </van-grid-item>
          <van-grid-item>
            <van-button type="default" :loading="false" @click="" size="mini">
              归属地
            </van-button>
          </van-grid-item>
        </van-grid>
        <div>
          <van-grid :column-num="3">
            <van-grid-item>号码</van-grid-item>
            <van-grid-item>号码归属地</van-grid-item>
            <van-grid-item>是否靓号</van-grid-item>
          </van-grid>
          <van-grid :column-num="3">
            <van-grid-item>号码</van-grid-item>
            <van-grid-item>号码归属地</van-grid-item>
            <van-grid-item>是否靓号</van-grid-item>
          </van-grid>
          <van-grid :column-num="3">
            <van-grid-item>号码</van-grid-item>
            <van-grid-item>号码归属地</van-grid-item>
            <van-grid-item>是否靓号</van-grid-item>
          </van-grid>
          <van-grid :column-num="3">
            <van-grid-item>号码</van-grid-item>
            <van-grid-item>号码归属地</van-grid-item>
            <van-grid-item>是否靓号</van-grid-item>
          </van-grid>
          <van-grid :column-num="3">
            <van-grid-item>号码</van-grid-item>
            <van-grid-item>号码归属地</van-grid-item>
            <van-grid-item>是否靓号</van-grid-item>
          </van-grid>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    props:{
      show: Boolean,
      closed: Function
    },
    data() {
      return {

      }
    },
    mounted(){

    },
    methods: {
      closedPop(){
        this.closed()
      },
      onSearch() {

      }
    }
  }
</script>

<style scoped lang="less">
.mobile_box{
  min-height: 100vh;
}
</style>