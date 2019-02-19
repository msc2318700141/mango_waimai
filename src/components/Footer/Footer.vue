<template>
    <div class="foot">
        <div class="container">
            <i class="iconfont icon-gouwuche1"></i>
            <div>
                <span>￥0</span>
                <span>配送费￥4元</span>
            </div>
            <span>￥20元起送</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .foot{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:50px;
        background:rgb(26,26,25);
        color:#fff;
    }
    .container{
        width:100%;
        height:100%;
    }
    .container div{
        display:inline-block;
        margin-left:80px;
    }
    .container div span{
        display:block;
    }
    .iconfont{
        position:absolute;
        top:-10px;
        left:20px;
        z-index:999;
        font-size: 40px;
        color:#fff;
    }
    .container>span{
        float:right;
        width:150px;
        text-align: center;
        line-height: 50px;
    }
</style>