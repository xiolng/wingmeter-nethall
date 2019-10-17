<template>
  <div class="pl_10 pr_10">
    <van-cell-group>
      <van-field
        v-model="formDatas.Phone"
        label="手机号"
        placeholder="请输入手机号"
        size="large"
        :error-message="errPhone"
        @blur="validatePhone"
        @input="changePhone"
        left-icon="phone-o"></van-field>
      <van-field
        v-model="formDatas.Verifications"
        label="短信验证码"
        placeholder="请输入短信验证码"
        :error-message="errVerifications"
        @blur="validateVerification"
        left-icon="coupon-o"
      >
        <van-button slot="button" size="mini" type="primary" :disabled="verificationDisabled" @click="getVerification">{{verificationTxt}}</van-button>
      </van-field>
    </van-cell-group>
    <div class="mt_20 pl_20 pr_20">
      <van-button round block type="warning" @click="Submits">登 录</van-button>
    </div>
    <div class="mt_20 tc">
      <span  @click="$router.push({name:'register'})">我要注册</span>
    </div>
  </div>
</template>

<script>
  import {isPhone} from "@/util/validate"; //手机正则
  import {verificationTime} from "@/util/util"; // 倒计时
  import {Toast} from 'vant' //提示框

  export default {
    data() {
      return {
        formDatas:{ //输入框
          Phone: '',
          Verifications: ''
        },
        errPhone: '', // 手机错误提示
        errVerifications: '', // 验证码错误提示
        errorMessage:{ // 点击登录按钮是未填写提示
          Phone: '请输入手机号',
          Verifications: '请输入验证码'
        },
        verificationTxt: '发送验证码',
        verificationDisabled: false
      }
    },
    methods: {
      // 手机验证
      validatePhone() {
        if (!this.formDatas.Phone) {
          this.errPhone = '手机号码不能为空';
          return false
        }
        if (!isPhone.test(this.formDatas.Phone)) {
          this.errPhone = '请输入正确手机号'
        } else {
          this.errPhone = ''
        }
      },
      // 输入手机号结束时，验证
      changePhone() {
        if (this.formDatas.Phone.length >= 11) {
          let data = isPhone.test(this.formDatas.Phone);
          if (!data) {
            this.errPhone = '请输入正确手机号'
          } else {
            this.errPhone = ''
          }
        }
      },
      // 验证码验证
      validateVerification(){
        if (this.formDatas.Verifications === '') {
          this.errVerifications = '请输入验证码'
        }
      },
      // 获取验证码
      getVerification(){
        if (!this.formDatas.Phone || !isPhone.test(this.formDatas.Phone)) {
          Toast.fail('请输入手机号')
          return false
        }
        this.verificationDisabled = true
        this.verificationTxt = (60 + 'S')
        verificationTime(time => {
          this.verificationTxt = (time + 'S')
          if (time <= 0){
            this.verificationTxt = '发送验证码'
            this.verificationDisabled = false
          }
        })
      },
      // 登录
      Submits(){
        for (let item in this.formDatas){
          if (this.formDatas[item] === ''){
            this[`err${item}`] = this.errorMessage[item]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>