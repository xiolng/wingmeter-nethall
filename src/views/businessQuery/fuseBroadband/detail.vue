<template>
  <div>
    <div class="pt_40 pb_40 brb_1">
      <van-row type="flex" justify="center" align="center">
        <van-col>
          <van-icon v-if="dataList.activeStatus === 2" name="checked" color="#07c160" size="40"></van-icon>
          <van-icon v-if="dataList.activeStatus === 1" name="warning" color="#ff976a" size="40"></van-icon>
        </van-col>
        <van-col>
          <span>{{dataList.activeStatus === 1 ? '未受理': '已受理'}}</span>
        </van-col>
      </van-row>
    </div>
    <div class="p_10 brb_1">订单信息</div>
    <div class="p_10">
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">订单号</van-col>
          <van-col align="end">{{dataList.outTradeNo}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">订单总金额</van-col>
          <van-col align="end">{{dataList.payAmount}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">套餐名称</van-col>
          <van-col align="end">{{dataList.packageParentName}}</van-col>
        </van-row>
      </van-cell>
    </div>
    <div class="p_10 brb_1">开卡信息</div>
    <div class="p_10">
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">融宽开卡号码</van-col>
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
          <van-col span="12">融宽开卡激活状态</van-col>
          <van-col align="end">
            <div>待激活</div>
            <div>
              <van-button type="warning" size="small" @click="">
                重新激活
              </van-button>
            </div>
          </van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">联系电话</van-col>
          <van-col align="end">{{dataList.contactsMobile}}</van-col>
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
          <van-col align="end">{{dataList.postReceiverName}}</van-col>
        </van-row>
      </van-cell>
    </div>
    <div class="p_10 brb_1">宽带信息</div>
    <div class="p_10">
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">宽带套餐速率</van-col>
          <van-col align="end">{{dataList.speedFee}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">宽带时长</van-col>
          <van-col align="end">{{dataList.packageMonth}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">是否需要光猫</van-col>
          <van-col align="end">{{dataList.needModem}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">是否需要IPTV</van-col>
          <van-col align="end">{{dataList.needIptv}}</van-col>
        </van-row>
      </van-cell>
    </div>
    <div class="p_10 brb_1">融宽安装信息</div>
    <div class="p_10">
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">安装地址</van-col>
          <van-col align="end">{{dataList.broadbandAddress}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">联系人姓名</van-col>
          <van-col align="end">{{dataList.contactsName}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">联系人电话</van-col>
          <van-col align="end">{{dataList.contactsMobile}}</van-col>
        </van-row>
      </van-cell>
      <van-cell>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">预约装宽时间</van-col>
          <van-col align="end">{{dataList.broadbandInstallDate}}</van-col>
        </van-row>
      </van-cell>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: {
          "id": "bfc4c36d33654fa9bb7e3b3eb2e91b06",
          "outTradeNo": "MO20190801092605lt2e",
          "payTradeNo": null,
          "orderStatus": 1,
          "payType": -1,
          "payStatus": 3,
          "payAmount": 0.0000,
          "valueAmount": 310.0000,
          "payChannel": 1,
          "processStatus": 1,
          "packageParentId": "d8113928dce843a1a5adfe3de95ef46e",
          "packageParentName": "大王卡109元",
          "packageChildrenId": "e91b954f87c3462d86ee2ccb85a6f735",
          "packageType": 1,
          "packageTelecomId": "87001182",
          "packageMonth": 12,
          "packageFee": 200.00,
          "broadbandSpeed": 10,
          "speedFee": 10.00,
          "broadbandAddress": "同志街",
          "broadbandInstallDate": 1564588800000,
          "needIptv": 0,
          "iptvFee": 0.00,
          "needModem": 1,
          "modemFee": 100.00,
          "mixBroadbandPayFlag": 0,
          "niceNumPayFlag": 0,
          "applyPhoneNum": "13354314166",
          "niceNumFlag": 0,
          "niceNumFee": 0.00,
          "applyUserId": "b681dcd2-6ff1-48e9-bb85-6dd50587497f",
          "activeStatus": 1,
          "activeDate": null,
          "uploadStatus": 0,
          "postStatus": 2,
          "postAddress": "吉林省 长春市 同志街",
          "postReceiverName": "安红霞",
          "postReceiverMobile": null,
          "postNum": null,
          "postSender": null,
          "postDate": null,
          "getType": 1,
          "iccdNum": null,
          "cardAgreementPath": "20190801/1564622766504.pdf",
          "telecomOlId": null,
          "telecomOlNbr": null,
          "provinceCode": "8220000",
          "provinceName": "吉林省",
          "cityCode": "8220100",
          "cityName": "长春市",
          "customerId": "3b5b231ebf6c11e7834300163e2e2847",
          "contactsName": "安红霞",
          "contactsMobile": "15844005420",
          "buserId": "2bda348119a34abe902b679cf9759466",
          "buserMobile": "15844005420",
          "buserName": "大侠",
          "managerId": "2bda348119a34abe902b679cf9759466",
          "managerCompanyType": "other",
          "companyId": "a4d557db52214504bfe3ef0318e7a516",
          "delFlag": 0,
          "remark": "",
          "createBy": "3b5b231ebf6c11e7834300163e2e2847",
          "createByName": "安红霞",
          "createDate": 1564622765000,
          "paidDate": 1564622765000,
          "finishedDate": null,
          "updateLog": "融合订单不需要支付即可新开卡-提交CDMA成功-修改订单状态(已完成),支付状态(支付成功)",
          "updateBy": "submitOpenCard",
          "updateByName": "submitOpenCard",
          "updateDate": 1564622765000,
          "workUnit": null,
          "cardTwoPath": null,
          "networkName": null,
          "processStatusStr": null,
          "activeStatusStr": null,
          "pacageTypeStr": null,
          "getTypeStr": null,
          "needIptvStr": null,
          "needModemStr": null,
          "applyUserName": null,
          "applyContractMobile": null,
          "cardSizeType": null,
          "cardPathFront": null,
          "cardPathBack": null,
          "cardPathVideoimg": null,
          "managerCompanyTypeName": null
        }
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>