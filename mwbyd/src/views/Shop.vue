<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <van-nav-bar
                title="附近餐厅"
                left-text="返回"
                left-arrow
                @click-left="goback()"
                @click-right="onLocation()"
                class="nav-bar"
            >
                <van-icon name="location-o" slot="right" />
            </van-nav-bar>
           
            
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue';
import { getQueryFromUrl } from '../utils/commentTool.js';

export default {
    name: '',
    components:{
        
    },
    data() {
        return {
            active: 0,
            value: '',
            shopData:{}
        };
    },
    props:{
        
    },
    computed: {
         
    },
    created() {
        this.resList = function(){
            showWhich(value)
        }
        this.getShopData();
    },
    methods: {
        onSearch(){
            console.log('搜索店铺功能')
        },
        
        goback(){
            this.$router.go(-1);
            this.data.active = 0;
        },
        onLocation(){
            console.log("定位功能")
        },
        getShopData(){
            let shop_id = getQueryFromUrl('shop_id');
            console.log(shop_id)
            Vue.axios.get('/api/shop',{
                params:{
                    shop_id:''
                }
                }).then((res) => {
                this.shopData = res.data.shopData;
                // console.log(this.shopList)
            })
        },
    },
};
</script>
 
<style scoped lang="less">
.page-tabbar{
    overflow: hidden;
}

.van-nav-bar__text{
    color: #000;
    .van-icon-arrow-left:before{
        color: #000;
    }
}
.nav-bar{
    color: #000;
}

.shaixuan-bar{
    margin: 10px 0;

}


</style>
