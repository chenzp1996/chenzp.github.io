<template>
  <div>
    <div class="user-banner">
        <div v-if="!is_login" class="login-btn" @click="goToLogin">
            <p>未登录</p>
        </div>
        <div v-else>
            <img class="avatar" v-if="avatar" :src="avatar" alt="用户头像">
        </div>
    </div>
    <van-row class="user-links">
      <van-col span="12">
        <van-icon name="daijiedan" />
        我的订单
      </van-col>
      <van-col span="12">
        <van-icon name="yiwancheng" />
        已完成
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>

    <van-row>
        <van-col offset="4" span="20">
            <van-button  class="lay-out" type="danger" size="large" @click="layOut">退出账号</van-button>
        </van-col>
    </van-row>
    
  </div>
</template>
 
<script>
import Cookies from 'js-cookie'

export default {
    name: '',
    data() {
        return {
            is_login:Cookies.get('is_login') || this.$store.state.is_login ||'',
            avatar:localStorage.getItem("avatar") || ''
        };
    },
    props:{
        
    },
    computed: {
        // this.avatar = ;
        isLogin(){
            let user_id = Cookies.get('user_id'),
                is_login = Cookies.get('is_login')
            // console.log(is_login)
            if(user_id && is_login){
                // console.log(localStorage.getItem("avatar"))
                this.avatar = localStorage.getItem("avatar");
                this.$store.commit('userStatus',user_id)
            }else{
                this.$store.commit('userStatus',null)
            }
            return this.$store.getters.is_login;
        }
    },
    methods: {
        goToLogin(){
            this.$router.push('login');
        },
        layOut(){
            let isLogin = Cookies.get('is_login');
            if(isLogin){
                this.$dialog.confirm({
                    title: '确定退出当前账号吗？',
                    }).then(() => {
                        localStorage.removeItem("user_id");
                        Cookies.remove('is_login','user_id')
                        this.$router.go(0)
                    }).catch(() => {
                    // on cancel
                });
            }else{
                this.$dialog.alert({
                    message: '您还未登录，请先登录！'
                    }).then(() => {}).catch(() => {
                });
            }
            
        }

    },
};
</script>
 
<style lang="less" scoped>
.user {
  &-banner {
    height: 200px;
    background: url("../assets/img/banner.png") no-repeat;
    background-size: 100%;
    position: relative;

    .login-btn{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #f44;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        text-align: center;    
        p{
            text-align: center;
            margin-top: 25px;
        }
    }
    
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.avatar{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50%;

    img{
        width:100%;
        height: 100%;
        
    }
}

.lay-out{
    width: 80%;
    margin: 50px auto 0;
}
</style>
