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
                background='#000'
                @search="onSearch"
                class="search"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
            <div class="order-wraper">
                <van-card v-for="(i, index) in 10" :key="index"
                    num="2"
                    tag="标签"
                    price="2.00"
                    desc="描述信息"  
                    title="商品标题"
                    :thumb="imageURL"
                    origin-price="10.00">
                <div slot="footer">
                    <van-button size="mini">查看详情</van-button>
                    <van-button size="mini">取消预定</van-button>
                </div>
                </van-card>
            </div>
        </div>
    </div>
</template>
 
<script>

export default {
    name: '',
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
            imageList:[
                '../../static/img/index-shop/1.jpg', 
                '../../static/img/index-shop/2.jpg',
                '../../static/img/index-shop/3.jpg',
                '../../static/img/index-shop/4.jpg',
                '../../static/img/index-shop/5.jpg',
                '../../static/img/index-shop/6.jpg'
            ]
        };
    },
    props:{
        
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
        onClickRight(){

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


</style>
