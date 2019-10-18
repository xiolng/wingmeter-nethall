<template>
  <div>
    <van-popup v-model="show" :close-on-click-overlay="false" position="bottom" @click-overlay="closed"
               get-container="body">
      <van-area :area-list="list" :columns-num="showNum" @confirm="save" @cancel="closed"></van-area>
    </van-popup>
  </div>
</template>

<script>

  export default {
    props: {
      show: Boolean, //选择框，显示隐藏
      showNum: Number, //1：省，2： 省、市， 3：省、市、区
      areaList: Object, // 省市数据
      callback: Function, // 返回 选中数据 数组 []
      closePop: Function // 点击遮罩 取消 关闭弹框
    },
    data() {
      return {
        active: 0,
        list: {}
      }
    },
    mounted() {
      console.log(4444);
      this.list = this.setAddress(this.areaList)
    },
    methods: {
      /**
       * 返回选中数据
       * @param list
       * @returns {Function}
       */
      save(list) {
        return this.callback(list)
      },
      closed() {
        this.closePop()
      },
      /**
       * 添加keys，值为value去掉8
       * @param list
       * @returns {*}
       */
      spliceValue(list) {
        return list.map(v => {
          let keys = v.value.substr(1, v.value.length - 1)
          v.keys = keys
          return v
        })
      },
      /**
       * 改为vant需要的格式
       * @param data
       * @returns {{county_list: {区}, province_list: {省}, city_list: {市}}}
       */
      setAddress(data) {
        let list = {
          province_list: {},
          city_list: {},
          county_list: {}
        }
        this.spliceValue(data.children).map(v => {
          list.province_list[v.keys] = v.label
        })
        data.children.map(v => {
          this.spliceValue(v.children).map(j => {
            list.city_list[j.keys] = j.label
            this.spliceValue(j.children).map(q => {
              list.county_list[q.keys] = q.label
            })
          })
        })
        return list

      }
    },
  }
</script>

<style scoped>

</style>