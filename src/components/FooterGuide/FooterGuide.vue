<template>
    <div class="footer">
        <div @click="goTo('/msite')">
            <i class="iconfont icon-tubiaolunkuo-"></i>
            <span>商家</span>
        </div>
        <div @click="goTo('/search')">
            <i class="iconfont icon-icon-test"></i>
            <span>搜索</span>
        </div>
        <div @click="goTo('/order')">
            <i class="iconfont icon-dingdan"></i>
            <span>订单</span>
        </div>
        <div @click="goTo('/profile')">
            <i class="iconfont icon-geren"></i>
            <span>个人</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goTo:function(path){
                this.$router.replace(path);
            }
        }
    }
</script>

<style scoped>
    .footer{
        position:fixed;
        width:100%;
        height:50px;
        display:flex;
        justify-content: space-around;
        align-items: center;
        bottom:0;
        z-index:99;
        background-color:#f0f0f0;
        border-top:1px solid #f4f4f4;
    }
    .footer div{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:25%;
    }
</style>