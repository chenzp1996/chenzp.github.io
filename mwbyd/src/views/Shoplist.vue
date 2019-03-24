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
            <!-- 搜索 -->
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch()"
                class="search"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
            <!-- 筛选标签栏 -->
            <van-tabs type="card" class="shaixuan-bar" animated color="RGB(130,191,252)">
                <van-tab title="全部商家" @click="showWhich('all')">
                    <CommenShopBlock></CommenShopBlock>
                </van-tab>
                <van-tab title="500m内" @click="showWhich('dis')"></van-tab>
                <van-tab title="五星好店" @click="showWhich('star')"></van-tab>
            </van-tabs>
            
        </div>
    </div>
</template>
 
<script>
import Vue from 'vue';
import CommenShopBlock from "../components/CommenShopBlock.vue" //餐厅模块

export default {
    name: '',
    components:{
        CommenShopBlock
    },
    data() {
        return {
            active: 0,
            value: '',
            imageURL: '../../static/img/index-shop/1.jpg',
            advImges: [
            {
                title:'南京大排档',
                href: '',
                url: '../../static/img/ct1.jpg'
            }, 
            {
                title:'北京烤鸭',
                href: '',
                url: '../../static/img/ct2.jpg'
            },
            {
                title:'烤鱼',
                href: '',
                url: '../../static/img/ct3.jpg'
            },
            {
                title:'烧烤',
                href: '',
                url: '../../static/img/ct4.jpg'
            }],
            restaurants: [{
                    "name": "三全鲜食（北新泾店）",
                    "address": "长宁区新渔路144号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 1000,
                    "reputable": 5
                },
                {
                    "name": "Hot honey 首尔炸鸡（仙霞路）",
                    "address": "上海市长宁区淞虹路661号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 500,
                    "reputable": 5
                },
                {
                    "name": "新旺角茶餐厅",
                    "address": "上海市普陀区真北路988号创邑金沙谷6号楼113",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 800,
                    "reputable": 4
                },
                {
                    "name": "泷千家(天山西路店)",
                    "address": "天山西路438号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 400,
                    "reputable": 5
                },
                {
                    "name": "胖仙女纸杯蛋糕（上海凌空店）",
                    "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 1200,
                    "reputable": 3
                },
                {
                    "name": "贡茶",
                    "address": "上海市长宁区金钟路633号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 2000,
                    "reputable": 4
                },
                {
                    "name": "豪大大香鸡排超级奶爸",
                    "address": "上海市嘉定区曹安公路曹安路1685号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 3000,
                    "reputable": 4
                },
                {
                    "name": "茶芝兰（奶茶，手抓饼）",
                    "address": "上海市普陀区同普路1435号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 100,
                    "reputable": 5
                },
                {
                    "name": "十二泷町",
                    "address": "上海市北翟路1444弄81号B幢-107",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 2000,
                    "reputable": 4
                },
                {
                    "name": "星移浓缩咖啡",
                    "address": "上海市嘉定区新郁路817号",
                    "imgSrc": "../../static/img/ct2.jpg",
                    "distance": 1000,
                    "reputable": 3
                },
            ],
            resList:[],//用来传到子组件commenshopblock中
            shopList:[]
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
        // this.getShopData();
        // console.log(this.shopList)
    },
    methods: {
        onSearch(){
            console.log('搜索店铺功能')
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                // for (let i = 0; i < 10; i++) {
                // this.list.push(this.list.length + 1);
                // }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                this.finished = true;
                }
            }, 500);
        },
        goback(){
            this.$router.go(-1);
            this.data.active = 0;
        },
        onLocation(){
            console.log("定位功能")
        },
        getShopData(){
            Vue.axios.get('/api/shop').then((res) => {
                this.shopList = res.data.shopList;
                // console.log(this.shopList)
            })
        },
        //筛选数据展示
        showWhich(value) {
            this.resList = [];
            if (value === "all") {
                this.resList = this.restaurants;
            } else if (value === "dis") {
                this.restaurants.forEach(item => {
                    if (item.distance <= 500) {
                        this.resList.push(item);
                    }
                });
            } else if (value === "star") {
                this.restaurants.forEach(item => {
                    if (item.reputable >= 5) {
                        this.resList.push(item);
                    }
                });
            }
        }


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
