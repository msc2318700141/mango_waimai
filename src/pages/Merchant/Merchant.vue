<template>
    <div class="merchant">
        <div class="head">
            <div class="top"><router-link to="/msite"><i class="iconfont icon-fanhui"></i></router-link></div>
            <div>
                <div class="shopLogo"><img src="../../../static/images/shopLogo.jpg"></div>
                <p class="title"><span>品牌</span>嘉禾一品（温都水城）<i class="iconfont icon-jiantou3"></i></p>
                <p class="center">$.月销90单.芒果专送.约28分钟.距离1000m</p>
                <p class="discount"><span>首单</span>新用户下单立减17元(不与其他活动同时参加)</p>
            </div>
            <div class="menu">
                <span><router-link to="/merchant/meal">点餐</router-link></span>
                <span><router-link to="/merchant/evaluate">评价</router-link></span>
                <span><router-link to="/merchant/business">商家</router-link></span>
            </div>
        </div>
        <div class="food">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Merchant",
        /*mounted() {
            $(".menu span").on("click", function () {
                $(".menu span").removeClass("on");
                $(this).addClass("on");
                console.log(this);
            })
        }*/
    }
</script>

<style scoped>
    .iconfont{
        display:inline-block;
    }
    .merchant{
        background:#ffffff;
    }
    .head{
        position: relative;
    }
    .head div:nth-child(2){
        text-align: center;
    }
    .top{
        width:100%;
        height:45px;
        background:url("../../../static/images/shop.jpg");
        line-height: 45px;
    }
    .icon-fanhui{
        font-size: 20px;
        color:#ffffff;
        margin-left:5px;
    }
    .icon-jiantou3{
        font-size: 20px;
    }
    .shopLogo{
        position:absolute;
        top:10px;
        left:50%;
        display:flex;
        align-items: center;
        justify-content: center;
        width:60px;
        height:60px;
        background:#fff;
        border:1px solid #f0f0f0;
        box-shadow: 0 0 1px #f0f0f0;
        box-sizing: border-box;
        transform: translateX(-50%);
    }
    .shopLogo img{
        display:inline-block;
        width:30px;
        height:30px;
    }
    .title{
        margin-top:30px;
        font-size:20px;
        font-weight: bold;
        height:30px;
        line-height: 30px;
    }
    .title span{
        display:inline-block;
        background:yellow;
        padding:2px 5px;
        font-size:12px;
        margin-right: 10px;
        box-shadow: 0 0 1px #9a9e9d;
        font-weight: normal;
        border-radius: 3px;
        box-sizing: border-box;
        height:20px;
        line-height: 20px;
    }
    .center{
        margin-top:10px;
    }
    .discount{
        display:inline-block;
        padding:2px 10px;
        margin-top:2px;
        font-size:12px;
        border:1px solid #f0f0f0;
        border-radius: 5px;
        box-shadow: 0 0 1px #f0f0f0;
    }
    .discount span{
        display:inline-block;
        background:#42b983;
        padding:1px 2px;
        border-radius: 3px;
        margin-right:5px;
        color:#ffffff;
        font-size: 12px;
    }
    .menu{
        display:flex;
        align-items: center;
        justify-content: space-around;
    }
    .menu span a{
        text-decoration: none;
        display:inline-block;
        color:#9a9e9d;
        font-size:16px;
        padding:10px 0;
    }
    .food{
        width:100%;
        height:auto;
        background:rgb(245,245,250);
        padding-top:2px;
    }
    .router-link-active{
        color:#1aad16 !important;
        border-bottom: 3px solid #1aad16;
    }
</style>