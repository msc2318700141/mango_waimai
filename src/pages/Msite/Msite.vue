<template>
    <div id="msite">
        <HeadTop title="昌平区北七家宏福购物广场">
            <span slot="left"><router-link to="./search"><i class="iconfont icon-icon-test"></i></router-link></span>
            <span slot="right"><router-link to="./login">登陆|注册</router-link></span>
        </HeadTop>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <img src="../../../static/images/food.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s1.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s2.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s3.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s4.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s5.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s6.jpg">
                        <p>甜品饮品</p>
                    </div>
                    <div>
                        <img src="../../../static/images/s8.jpg">
                        <p>甜品饮品</p>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
        <div class="near">
            <i class="iconfont icon-option"></i>
            <span style="color:#999;font-weight: bold">附近商家</span>
        </div>

        <ShopList></ShopList>
    </div>
</template>

<script>
    import HeadTop from "../../components/HeadTop/HeadTop"
    import ShopList from "../../components/ShopList/ShopList"
    export default {
        name: "Msite",
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        },
        components:{HeadTop,ShopList},
    }


</script>

<style type="text/css">
    .swiper-container {
        width: 100%;
        height: 200px;
        background:#fff;
    }
    .swiper-pagination{
        position:absolute;
        bottom:0;
    }
    .swiper-slide{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .swiper-slide div{
        /*display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;*/
        width:25%;
        text-align: center;
        font-size: 12px;
        margin-top:-12px;
    }
    .near{
        width:100%;
        height:20px;
        line-height: 20px;
        background-color: #fff;
        margin-top:10px;
        padding:10px 0 10px 0px;
    }
    .icon-option{
        font-size: 12px;
        margin-left:10px;
    }
    .swiper-slide div img{
        display:block;
        margin:0 auto;
        width:4rem;
        height:4rem;
    }
    .swiper-slide div p{
        font-size:12px;
    }
</style>