<template>
    <div id="order">
        <HeadTop title="订单">
            <span slot="left"></span>
            <span slot="right"></span>
        </HeadTop>
        <img src="../../../static/images/waimai.png">
        <p>暂无订单...</p>
    </div>
</template>

<script>
    import HeadTop from "../../components/HeadTop/HeadTop"
    export default {
        name: "Order",
        props:{title:String},
        components:{HeadTop}
    }
</script>

<style scoped>
    #order{
        background:#fff;
    }
    #order img{
        width:100%;
    }
    #order p{
        font-size:30px;
        color:#f0f0f0;
        text-align: center;
        margin-top:10px;
    }
</style>