<template>
  <div class="form">
    <Header></Header>
    <div class="wraper">
      <h1 class="title">活动规则</h1>
      <p class="rule">
        优酷黄金会员卡兑奖方式：
    　　<br/>1)如中奖手机号从未注册过优酷账号，该中奖手机号码将作为优酷账号自动激活该会员卡。中奖者用电脑或者手机、平板电脑上网址用“手机快捷登录”方式获取动态密码，完成优酷账号登录后，可在“我的账户”中的交易记录查看中奖的奖品。
    　　<br/>2)如中奖手机号码曾注册过优酷账号，该手机号码注册过的优酷账号自动激活该会员卡。中奖者可使用其手机号码注册的用户名和密码，用电脑或者手机、平板电脑登入优酷网址，登录后，可在“我的账户”中的交易记录查看中奖的奖品。
    　　<br/>3) 获得“优酷黄金会员卡”的中奖者的个人所得税由优酷公司代扣代缴，登入网址，提供个人基本信息。
    　　<br/>智能电视机兑奖方式:

    　　<br/>1)中奖者必须于2017年5月31日24点前在活动官方兑奖页面上提交中奖者本人的真实姓名和身份证信息，提交方式有两种：在中奖结果页直接输入并提交。在活动页面“中奖信息 ”中的“我的奖品 ”页进行输入并提交。

    　　<br/>2)成功提交信息后5个工作日内，微鲸公司会发送106开头的短信给中奖手机号通知领奖。

    　　<br/>3)中奖者须在收到短信后用手机或电脑登录微鲸网站，使用其中奖手机号作为账号进行注册后， 可在“我的优惠券”菜单内查看中奖的奖品，中奖者按页面提示填写收件人姓名、收货地址和联系电话并成功提交后，微鲸公司 将在20个工作日内送货。电视机的最晚送货时间是2017年6月15日。

    　　<br/>4)相关产品送货、安装及售后服务问题，请咨询微鲸公司官方网站，也可拨打服务热线(话费自理，接听时间：全年人工08:00-22:00接听)。

    　　<br/>5)若中奖者未在规定时间内提交真实姓名 、身份证等个人信息, 将视为中奖者自动自愿放弃奖品, 活动主办方不以任何方式补偿。

    　　<br/>如果你有中奖信息，赶紧将个人信息填写完整，好来领取奖励，不能让到手的好运，给溜走哦!
      </p>
      <router-link to="/game"><div class="agreeBtn" ></div></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
// import Common from "./common.js";
export default {
  name: "rule",
  components: {
    Header
  },
  data:function(){
    return{
      // num:null
    }
  },
};
</script>

<style scoped>
.wraper {
  height: 590px;
  background: url("../assets/img/rule-bg.jpg") no-repeat;
  background-size: 100% 100%;
  padding-top: 30px;
  overflow: auto;
}
.title {
  margin: 0px auto;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.rule {
  height: 400px;
  font-size: 12px;
  color: white;
  padding: 0 20px;
  line-height: 20px;
  overflow: auto;
}
.agreeBtn{
  width: 100px;
  height: 50px;
  background: url("../assets/img/agree.png") no-repeat;
  background-size: 100% auto;
  margin: 20px auto;
}
</style>

