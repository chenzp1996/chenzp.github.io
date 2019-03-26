<template>
    <div class="detail-wrapper">
        <div class="info">
            <van-row type="flex" justify="center">
                <van-col span="8">
                    <img class="frontImg" :src="shopInfo.frontImg" alt="店铺照片"/>
                </van-col>
                <van-col span="16" class="text-container">
                    <div class="desc" >
                        <h6 class="resName">{{shopInfo.name}}</h6>
                        <div class="star">
                            <van-icon color="#FBBA2C" name="star" v-for="(item, index) in shopInfo.avgScore" :key="index"/>
                        </div>
                    </div>
                    <van-icon v-if="shopInfo.isOpen" class="status" size="20px" color="RGB(130,191,252)" name="passed" />
                    <van-icon v-else class="status" size="20px" name="close" />
                </van-col>
               
            </van-row>
        </div>
        <div class="connect-wrapper">
            <van-cell :title="shopInfo.phone" is-link icon="phone"/>
            <van-cell :title="shopInfo.address" is-link icon="location"/>
            <van-cell :title="`营业时间：${shopInfo.openTime}`" is-link icon="clock"/>
        </div>

        <!-- 预约排队功能按钮 -->
            <van-row class="btn-wraper">
                <van-col span="8" offset="4"><van-button type="primary" @click="setFormShow(true)" class="btn btn-paidui" >排队取号</van-button></van-col>
                <van-col span="8" offset="2"><van-button type="primary" @click="setFormShow(true)" class="btn btn-yuyue">预约选座</van-button></van-col>
            </van-row>
        <van-popup v-model="show" position="bottom" :overlay="true">
            <OrderForm @setFormShow="setFormShow"/>
        </van-popup>
        
    </div>
</template>
 
<script>
import Vue from 'vue';
import OrderForm from "../OrderForm.vue" //餐厅模块

export default {
    name: 'Detail',
    components:{
        OrderForm
    },
    data() {
        return {
            shopInfo:{},
            show:false
        };
    },
    props:{
        
    },
    computed: {
         
    },
    created() {
        this.getShopData();
    },
    methods: {
        //根据shop_id获取该商家的信息
        getShopData(){
             Vue.axios.get('/api/shop/detail',{
                 params:{
                     shop_id:this.$route.query.shop_id
                 }
             }).then((res) => {
                this.shopInfo = res.data.result;
                // console.log(this.shopInfo)
            })
        },
        setFormShow(bool){
            this.show = bool;
        }
    },
};
</script>
 
<style scoped lang="less">
.detail-wrapper{
    .info{
            padding:10px 20px;
            margin-bottom: 20px;
            border-bottom: 5px solid rgb(204, 205, 207);
            // background-image: linear-gradient(-90deg, rgba(148, 127, 127, 0.596) 0%, #202935 100%);
        .frontImg{
            border-radius: 10px;
        }
        .text-container{
            margin-left: 20px;
            position: relative;
            .desc{
                position: absolute;
                top: 0;
                bottom: 0;
                transform: translate(0,25%);
                // vertical-align: middle;
                h6{
                    font-size: 14px;
                }
                .star{
                    margin-top: 5px;
                }
            }
            .status{
                width: 20px;
                height: 20px;
                position: absolute;
                bottom: 0;
                right: 20px;
            }
        }
        
    }
    .banner{
        width: 100%;
        height: 200px;
    }
    .btn-wraper{
        margin-top: 10px;
        padding: 10px 0;
    }
}
</style>
