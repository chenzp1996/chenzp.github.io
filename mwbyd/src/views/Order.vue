<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="goback()"
            @click-right="onClickRight()"
            class="nav-bar"
            />
            <!-- 搜索 -->
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                class="search"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
            <div class="no-order" v-if="!shopList">
                您还没有预约订座...
                <router-link class="go-to-shop" to="/shop">立即预约</router-link>
            </div>
            <div v-else class="order-wraper">
                <van-card v-for="(item, index) in shopList" :key="index"
                    tag="预约"
                    :desc="`预约人数:${item.peopleNum}人`"
                    :price="`到店时间:${item.eatTime}`"
                    currency=""
                    :title="item.shop_id.name"
                    :thumb="item.shop_id.frontImg"
                    
                    >
                <div slot="footer">
                    <van-button size="small" @click="goToShop(item.shop_id._id)">查询商家</van-button>
                    <van-button size="small" @click="cancleOrder(item.user_id,item.shop_id._id)">取消预定</van-button>
                    <p class="creat-time">订单时间：{{item.createTime}}</p>
                </div>
                </van-card>
            </div>
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue'
import Cookies from 'js-cookie'

export default {
    name: '',
    data() {
        return {
            active: 0,
            value: '',
            is_login: Cookies.get('is_login') || this.$store.state.is_login ||'',
            user_id:  localStorage.getItem('user_id') || '',
            shopList:[]
        };
    },
    props:{
        
    },
    computed: {
        isLogin(){
            let user_id = Cookies.get('user_id'),
                is_login = Cookies.get('is_login');
            if(user_id && is_login){
                this.avatar = localStorage.getItem("avatar");
                this.$store.commit('userStatus',user_id)
            }else{
                this.$store.commit('userStatus',null)
            }
            return this.$store.getters.is_login;
        }
    },
    created() {
        this.getShopData();
    },
    methods: {
        onSearch(){
            console.log('搜索店铺功能')
        },
        getShopData(){
            Vue.axios.get('/api/order',{
                params:{
                    user_id:this.user_id
                }
            }).then((res) => {
                this.shopList = res.data.result;
                console.log(this.shopList)
            })
        },
        cancleOrder(user_id,shop_id){
            console.log(user_id,shop_id)
        },
        goback(){
            this.$router.go(-1);
            this.data.active = 0;
        },
        onClickRight(){

        }

    },
};
</script>
 
<style scoped lang="less">
.page-tabbar{
    overflow: hidden;
}
.no-order{
    text-align: center;
    color: #999;
    margin-top: 20px;
    .go-to-shop{
        display: block;
        color: #3497FB;
    }
}
.creat-time{
    text-align: left;
    margin-bottom: 10px;
}


</style>
