<template>
  <div class="pl_10 pr_10">
    <van-cell-group>
      <van-field
        v-model="formDatas.UserName"
        label="用户名"
        placeholder="请输入用户名"
        size="large"
        :error-message="errUserName"
        @blur="validateTxt('UserName')"
        left-icon="manager-o"></van-field>
      <van-field
        v-model="formDatas.PassWord"
        label="密码"
        placeholder="请输入密码"
        :error-message="errPassWord"
        @blur="validateTxt('PassWord')"
        left-icon="other-pay"
      >
      </van-field>
    </van-cell-group>
    <div class="mt_20 pl_20 pr_20">
      <van-button round block type="warning" @click="Submits">登 录</van-button>
    </div>
    <div class="mt_20 tc">
      <van-row type="flex" justify="space-between">
        <van-col span="`6`" @click="$router.push({name:'register'})">我要注册</van-col>
        <van-col span="`6`" @click="$router.push({name: 'resetpassword'})">忘记密码？</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formDatas:{
          UserName: '',
          PassWord: ''
        },
        errUserName: '',
        errPassWord: '',
        errTxt:{
          UserName: '请输入用户名',
          PassWord: '请输入密码'
        }
      }
    },
    methods:{
      /**
       * 输入框验证
       * @param name
       * @returns {boolean}
       */
      validateTxt(name){
        if (this.formDatas[name] === ''){
          this[`err${name}`] = this.errTxt[name]
        } else {
          this[`err${name}`] = ''
        }
        return false
      },
      Submits() {
        for (let item in this.formDatas){
          if (this.formDatas[item] === ''){
            this[`err${item}`] = this.errTxt[item]
          }
        }
      },
    }
  }
</script>

<style scoped>

</style>