<template>
  <div class="form">
    <Header></Header>
    <div class="wraper">
       <img class="headerImg" src="../assets/img/form-logo.png" alt="">
      <form>
        <input type="text" v-model="name" placeholder="请输入真实姓名">
        <input type="text" v-model="phone" placeholder="请输入电话号码">
        <input type="text" v-model="address" placeholder="请输入联系地址">
        <span>注：请登记真实信息，如登记信息有错，我们会取消中奖资格。</span>
        <input type="text" v-model="lotterynum" placeholder="请输入抽奖码">
        <span>注：测试输入：0未不中奖，1为一等奖，2为二等奖，3为三等奖。</span>
        <input class="btn" value="" @click="check();$emit('translateNum', lotterynum)">
      </form>
      <div :class="{shadow:iserr}"></div>
      <img v-if="iserr" class="alerttip" src="../assets/img/alert-tip1.png" alt="">
      <img v-if="iserr" @click="back" class="closeBtn" src="../assets/img/close.png" alt="">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "forminput",
  data: function() {
    return {
      iserr:false,
      name: "",
      phone: null,
      address: "",
      lotterynum: null
    };
  },
  components: {
    Header
  },
  methods: {
    //正则表达式检查手机号码
    checkPhone(num) {
      var phoneReg = /^[1][3,4,5,7,8]\d{9}$/;
      if(phoneReg.test(num)){
        return true
      }else{
        return false;
      }
    },
    check() {
      console.log("xxxxxxxxxxxx");
      //姓名、手机、手机验证出错，弹出错误提示
      if (!this.checkPhone(this.phone)||!this.address||!this.name||!this.lotterynum) {
        this.iserr = true;
      }else{
        //验证正确使用编程时导航跳转到下一个路由
        this.$router.push({ path: "rule" });
      }
    },
    //点击关闭按钮回退
    back(){
      this.iserr = false;
    }
  },
};
</script>

<style scoped>
.wraper {
  position: relative;
  height: 590px;
  background: url("../assets/img/form-bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.headerImg {
  width: 70%;
}
.post {
  text-align: center;
}
input {
  width: 80%;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  height: 30px;
  border-radius: 15px;
  border: 0;
  outline: 0;
  text-align: center;
}
span {
  display: block;
  text-align: center;
  color: white;
  font-size: 5px;
}
.btn {
  width: 100px;
  height: 50px;
  background: url("../assets/img/form-btn.png") no-repeat;
  background-size: 100% auto;
  margin: 10px auto;
}
/* 背景遮罩层 */
.shadow{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
}
/* 报错提示 */
.alerttip{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  margin: auto;
}
.closeBtn{
  position: absolute;
  z-index: 999;
  width: 80px;
  top: 20%;
  right: 15%;

}
</style>

