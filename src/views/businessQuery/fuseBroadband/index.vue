<template>
  <div class="pt_10">
    <van-tabs v-model="active" @click="selectTab">
      <van-tab v-for="(itemTitle,index) in tabTitle" :key="index" :title="itemTitle.title">
        <div style="height: calc(100vh - 60px); overflow-y: auto;" v-if="active === index">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="+item" @click="$router.push({name:'fuseBroadbandDetail',params: {item}})">
              <van-row type="flex" align="center" justify="space-between">
                <van-col span="20">
                  <van-row type="flex" justify="space-between" class="mb_10">
                    <van-col>
                      <span>开卡号码</span>
                    </van-col>
                    <van-col>
                      <span>{{item.applyPhoneNum}}</span>
                    </van-col>
                  </van-row>
                  <van-row type="flex" justify="space-between">
                    <van-col>
                      <span>开卡状态</span>
                    </van-col>
                    <van-col>
                      <span>{{activeStatusMap[item.activeStatus]}}</span>
                    </van-col>
                  </van-row>
                  <van-row type="flex" justify="space-between">
                    <van-col>
                      <span>装宽状态</span>
                    </van-col>
                    <van-col>
                      <span>{{activeStatusMap[item.processStatus]}}</span>
                    </van-col>
                  </van-row>
                </van-col>
                <van-col>
                  <van-icon name="arrow" size="20"></van-icon>
                </van-col>
              </van-row>
            </van-cell>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        loading: false,
        finished: false,
        list: [],
        activeStatusMap: {
          "1": "待激活",
          "2": "激活成功",
          "3": "激活失败",
          "4": "过期回收"
        },
        tabTitle: [
          {title: '全部'},
          {title: '已受理'},
          {title: '未受理'}
        ],
        listData : [{
          "id": "bfc4c36d33654fa9bb7e3b3eb2e91b06",
          "applyPhoneNum": "13354314166",
          "activeStatus": 2,
          "processStatus": 2,
          "getType": 1
        }, {
          "id": "995549af127f4662b22b6986048f5ac9",
          "applyPhoneNum": "18943982463",
          "activeStatus": 1,
          "processStatus": 1,
          "getType": 1
        }]
      }
    },
    methods: {
      selectTab(){
        this.list = []
      },
      onLoad() {
        // 异步更新数据
        if(this.active >= 1){
          this.list = this.listData.filter(v => +v.activeStatus === (+this.active))
        } else if (this.active <= 0) {
          this.list = this.listData
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>