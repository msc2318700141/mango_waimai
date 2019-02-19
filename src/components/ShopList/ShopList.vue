<template>
    <div class="shopList">
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/cake.jpg"></div>
                <div class="description">
                    <p>上海麦当劳宝地餐厅</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/ba.jpg"></div>
                <div class="description">
                    <p>焖饭大师</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/greens.jpg"></div>
                <div class="description">
                    <p>汉堡王</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/milktea.jpg"></div>
                <div class="description">
                    <p>KFC宝地广场店</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/vermicelli.jpg"></div>
                <div class="description">
                    <p>兰州拉面</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
        <router-link to="/merchant/meal">
            <div class="shop">
                <div class="photo"><img src="../../../static/images/sugar.jpg"></div>
                <div class="description">
                    <p>星巴克</p>
                    <p>起送 ￥0|配送 ￥9|人均 ￥35</p>
                    <p><span class="discount">折</span>折扣商品6.75折起</p>
                    <p><span class="first">首</span>新用户立减17元，首次使用美团支付最高再减3元</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ShopList"
    }
</script>

<style scoped>
    .shopList{
        background-color: #fff;
        margin-bottom:50px;
    }
    .shop{
        padding:20px 0;
        height:80px;
        /*border-bottom: 1px solid #f0f0f0;*/
    }
    .shop div{
        float:left;
        margin-left:15px;
        height:100%;
    }
    .shop .photo img{
        width:70px;
    }
    .shop .description{
        width:70%;
        overflow: hidden;
    }
    a{
        text-decoration: none;
        color:#000;
    }
    .shop .description p{
        line-height: 19px;
        font-family: "Heiti SC", "Arial";
    }
    .shop .description p:not(:first-child){
        font-size:10px;
    }
    .shop .description p span{
        display:inline-block;
        color:#fff;
        margin-right:5px;
        padding:0 2px;
    }
    .shop .description p span.discount{
        background:#c27de9;
    }
    .shop .description p span.first{
        background:#f58521;
    }
</style>