<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <van-nav-bar title="美味不用队" left-text="惠州" @click-left="onLocaltion()">
                
                <van-icon name="location-o" slot="left" />
                <span slot="left">惠州</span>
            </van-nav-bar>
            <!-- 搜索 -->
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                >
                <div slot="action" @click="onSearch()">搜索</div>
            </van-search>
            <!-- 首页轮播图 -->
            <van-swipe :autoplay="3000" :height="150">
                <van-swipe-item class="swipe-wraper" v-for="(item, index) in bannerScrollList" :key="index" @click="advLink">
                    <img class="adv-img" :src='item.frontImg' />
                    <p class="dec">{{item.name}}</p>
                </van-swipe-item>
            </van-swipe>
            <!-- 预约排队功能按钮 -->
            <van-row class="btn-wraper">
                <van-col span="8" offset="4"><van-button type="primary" class="btn btn-paidui" >排队取号</van-button></van-col>
                <van-col span="8" offset="2"><van-button type="primary" class="btn btn-yuyue">预约选座</van-button></van-col>
            </van-row>
            <div class="index-adv-wraper">
                <p class="title">热门餐厅</p>
                <van-col class="con-img" span="8" v-for="(item, index) in remenList" :key="index">
                    <img :src='item.frontImg' v-lazy="item.frontImg"/>                      
                </van-col>
            </div>
            <!-- 首页商家图片展示模块 -->
            <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
                <div class="index-shop-wraper">
                    <p class="title">精选商家</p>
                    <div v-for="(item, index) in jingxuanList" :key="index">
                        <img :src="item.frontImg" v-lazy="item.frontImg"/>                      
                    </div>
                </div>
            </van-list>    
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default {
    name: '',
    data() {
        return {
            active: 0,
            left:'惠州',
            value: '',
            icon: {
                normal: '../assets/logo.png',
                active: '../assets/logo.png'
            },
            loading: false,
            finished: false,
            bannerScrollList:[],     //精选列表，首页广告第三部分，grade=1
            remenList: [],     //精选列表，首页广告第三部分，grade=2
            totalJingxuanList:[],     //精选列表，首页广告第三部分，grade=3
            jingxuanList: [],
            jingxuanNum:0,
            
        };
    },
    props:{
        
    },
    computed: {
        ...mapState({
            totalShopList: state => state.totalShopList
        }),
        totalShopListType:{
            get (){
                return this.$store.state.totalShopList
            },
            set (val){
                this.$store.state.totalShopList = val
            }
        }   
    },
    created() {
        this.getShopData();    
    },
    mounted() {
        // this.getShopData();
        this.getBannerScrollList();
        this.getRemenList();
        this.getJingxuanList();
    },

    methods: {
        //使用vuex全局共享totalShopList
        getShopData(){
            this.$store.dispatch("setShopList");
        },

        //vuex坑：第一次渲染数据后手动刷新页面数据会丢失
        //首页头部banner商家 grade=1
        getBannerScrollList(){
            this.totalShopList.map( v=> {
                if( v.grade === 1 ){
                    this.bannerScrollList.push(v);
                }
            })
            
            
        },
        //首页头部banner商家 grade=1
        getRemenList(){
            this.totalShopList.map( v=> {
                if( v.grade === 2 ){
                    this.remenList.push(v);
                }
            })
        },
        getJingxuanList(){
            this.totalShopList.map( v=> {
                if( v.grade === 3 ){
                    this.jingxuanList.push(v);
                }
            })
        },
        onSearch(){
            console.log('搜索店铺功能')
        },
        advLink(){
            console.log("导航到店家功能")
            // this.$router.push()
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                if(this.jingxuanNum<this.totalJingxuanList.length){
                    for (let i = 0; i < 2; i++) {
                        this.jingxuanNum++;
                        if(this.totalJingxuanList[this.jingxuanNum]){
                            this.jingxuanList.push(this.totalJingxuanList[this.jingxuanNum])
                        }
                    }
                }

                this.loading = false;

                // 数据全部加载完成
                if(this.jingxuanNum>=this.totalJingxuanList.length){
                    this.finished = true;
                }
            }, 500);
        },
        onLocaltion(){
            console.log("定位功能")
        },
        
    },
};

</script>
 
<style scoped lang="less">
    .page-tabbar{
        overflow: hidden;
    }
    .swipe-wraper{
        position: relative;
        .adv-img{
            width: 100%;
            height: 100%;
        }
        .dec{
            text-align: center;
            position: absolute;
            bottom: 0;
            opacity: .5;
            height: 20px;
            width: 100%;
            color: rgb(194, 24, 24);
        }
    }

    .btn-wraper{
        margin-top: 10px;
        // border-bottom: 1px solid rgba(7, 193, 96);
        // box-shadow: 0 1px 3px #1989fa;
        padding: 10px 0;
    }
    .index-adv-wraper{
        // height: 200px;
        // margin: 10px;
        box-sizing: border-box;
        overflow: hidden;
        border: 5px solid rgba(0, 0, 0, 0.2);
        .con-img{
            // background: rgb(25, 137, 250);
            box-sizing: border-box;
            padding: 1px;
            height: 60%;
        }
        img{
            height: 100px;
            width: 120px;
            
        }
    }
    .title{
        padding: 5px;
        text-align: center;
    }
    .index-shop-wraper{
        div{
        padding: 15px;
        width: 100%;
        height: 250px;
        margin: 10px 0;
        background-color: white;
        box-shadow: 0 1px 3px rgba(25, 137, 250, 0.8);
        background-size: 315px 250px;
        background-position: 15px;
        background-repeat: no-repeat;
        
            img{
                border: 1px solid rgb(25, 137, 250);
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
        }
        
    }

</style>
