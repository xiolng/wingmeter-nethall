<template>
  <div>
    <van-popup v-model="shows" position="left" @click-overlay="closedPop"
               get-container="body">
      <div class="set_meal_box">
        <div class="img_box">
          <img style="width: 100%;" src="../../assets/tianyi.png" alt="">
        </div>
        <div class="p_10">请选择套餐</div>
        <div class="item_box">
          <div class="setMealItem" :class="[(item.id === checkItem.id) ? 'br_orange_1':'br_gray_1']"  v-for="item in listData" :key="item.id" @click="checkItem = item">
            <span>{{item.packageName}}</span>
            <div class="cir_tip" v-show="item.id === checkItem.id">
              <van-icon name="success" class="orange"></van-icon>
            </div>
          </div>
        </div>
        <div class="p_10">卡号类型</div>
        <div class="item_box">
          <div class="setMealItem br_orange_1 typeItem">
            <span>{{checkItem.cardSizeType === 2 ? '4G Nano卡':'其它'}}</span>
            <div class="cir_tip">
              <van-icon name="success" class="orange"></van-icon>
            </div>
          </div>
        </div>
        <!--套餐详情-->
        <div class="detail_box">
          <van-tabs background="#fbf5f5">
            <van-tab v-for="(item, index) in detailItems" :key="index" :title="item.title">
              <div class="pt_10">
                <div v-for="(list, inx) in splitDetail(checkItem[item.name])" :key="inx" v-if="checkItem[item.name]" class="p_10">
                  {{list}}
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="p_20">
        <van-button type="warning" :loading="false" @click="saveMeal(checkItem), closedPop()" block>
          确认选择
        </van-button>
      </div>

    </van-popup>

  </div>
</template>

<script>
  import setMealJSON from "@/views/openCard/setMealJSON"; //测试数据
  export default {
    props:{
      show: Boolean,
      closed: Function,
      saveMeal: Function
    },
    data() {
      return {
        shows: !!this.show,
        listData: [],
        checkItem: '',
        detailItems: [
          {name: 'packageDetail', title: '套餐详情'},
          {name: 'feeDetail', title: '资费标准'},
          {name: 'activityDetail', title: '活动说明'},
        ]
      }
    },
    mounted(){
      this.listData = JSON.parse(JSON.stringify(setMealJSON.data))
    },
    methods:{
      closedPop(){
        this.closed()
      },
      splitDetail(item){
        if (item && item.length >= 1) return item.split(' ')
        return item
      }
    }
  }
</script>

<style scoped lang="less">
.set_meal_box{
  min-height: 100vh;
  background: #fff;
  padding: 10px;
}
  .setMealItem{
    width: 45%;
    height: 70px;
    margin: 2%;
    position: relative;
    padding: 6px;
    display: inline-block;
    vertical-align: top;
    overflow-y: hidden;
    &.br_orange_1{
      min-height: 70px;
      height: auto;
    }
    &.typeItem{
      min-height: auto;
    }
    .cir_tip{
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .detail_box{
    padding-top: 30px;
  }
</style>