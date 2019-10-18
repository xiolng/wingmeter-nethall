<template>
  <div>
    <van-field
      placeholder="请输入姓名"
      label="姓名"
      required
    ></van-field>
    <div class="p_10">身份证上传</div>
    <van-grid :column-num="3">
      <van-grid-item class="pr">
        <input type="file" accept="image/jpeg" class="id_card" @change="addIdCard">
        <div class="tc">
          <div>+添加</div>
          <div>身份证正面</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <input type="file" accept="image/jpeg" class="id_card">
        <div class="tc">
          <div>+添加</div>
          <div>身份证反面</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <input type="file" accept="video/mp4" class="id_card">
        <div class="tc">
          <div>+录制</div>
          <div>上传视频</div>
        </div>
      </van-grid-item>
    </van-grid>
    <van-field
      placeholder="请输入电话"
      label="联系电话"
      required
    ></van-field>
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
    <van-field
      placeholder="请选择套餐"
      label="选择套餐"
      required
      disabled
      @click="showSetMeal = !showSetMeal"
    ></van-field>
    <van-field
      placeholder="请选择号码"
      label="选择号码"
      required
      disabled
      @click="showMobile = !showMobile"
    ></van-field>
    <div class="p_10 brb_gray_1">
      <van-row type="flex" align="center">
        <van-col span="6">开卡角色</van-col>
        <van-col span="18">
          <van-radio-group v-model="radio">
            <van-row type="flex" justify="space-around">
              <van-col>
                <van-radio name="1" icon-size="16" disabled>商户开卡</van-radio>
              </van-col>
              <van-col>
                <van-radio name="2" icon-size="16" disabled>客户经理开卡</van-radio>
              </van-col>
            </van-row>
          </van-radio-group>
        </van-col>
      </van-row>
    </div>

    <van-field
      placeholder="请输入号码"
      label="联系号码"
      value="15844005420"
      disabled
    ></van-field>
    <van-field
      placeholder="请选择区域"
      label="所在区域"
      disabled
      required
      @click="showAddress = !showAddress"
    ></van-field>
    <van-field
      placeholder="街道/镇+村/小区/写字楼+门牌号"
      label="详细地址"
    ></van-field>

    <SelectSetMeal :show="showSetMeal" :closed="closedSetMeal" :save-meal="getMeal"></SelectSetMeal>
    <SelectMobile :show="showMobile" :closed="closedMobile"></SelectMobile>
    <AddressSelect :show="showAddress" :area-list="list" :show-num="3" :callback="getArea"
                   :close-pop="setPop"></AddressSelect>
  </div>
</template>

<script>
  import SelectSetMeal from "@/views/openCard/SelectSetMeal"; // 选择套餐
  import SelectMobile from "@/views/openCard/SelectMobile"; //选择手机号
  import AddressSelect from "_c/common/AddressSelect"; //地址选择
  import addressList from '../area' // 模拟数据
  import {Toast} from 'vant'
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
        verificationDisabled: false,
        radio: '1',
        showSetMeal: false,
        showMobile: false,
        showAddress: false,
        list: addressList,
      }
    },
    methods:{
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
      closedSetMeal(){
        this.showSetMeal = false
      },
      closedMobile(){
        this.showMobile = false
      },
      getMeal(item){
        console.log(item);
      },
      addIdCard(item){
        console.log(111, item);
      },
      getArea(list) {
        this.showAddress = false
        this.addressName = list[list.length - 1].name
      },
      setPop() {
        this.showAddress = false
      }
    },
    components:{
      SelectSetMeal,
      SelectMobile,
      AddressSelect
    }
  }
</script>

<style scoped lang="less">
.id_card{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>