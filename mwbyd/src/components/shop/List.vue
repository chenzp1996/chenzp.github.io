<template>
    <div>
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
        <van-tabs type="card" class="shaixuan-bar" animated color="RGB(130,191,252)">
            <van-tab title="全部商家" @click="showWhich('all')">
                <CommenShopBlock></CommenShopBlock>
            </van-tab>
            <van-tab title="500m内" @click="showWhich('dis')"></van-tab>
            <van-tab title="五星好店" @click="showWhich('star')"></van-tab>
        </van-tabs>
    </div>
</template>
 
<script>
import Vue from 'vue';
import CommenShopBlock from "../CommenShopBlock.vue" //餐厅模块

export default {
    name: 'List',
    components:{
        CommenShopBlock
    },
    data() {
        return {
            active: 0,
            value: '',
            imageURL: '../../static/img/index-shop/1.jpg',
            shopList:[],
            paramsName:this.$route.params.pathMatch
        };
    },

    methods: {
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
        },
        onSearch(){
            console.log('搜索店铺功能')
        },

    },
};
</script>
 
<style scoped lang="less">
.shaixuan-bar{
    margin-top: 15px;
}

</style>
