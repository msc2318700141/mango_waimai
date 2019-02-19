<template>
    <div class="meal">
        <div class="left">
            <ul>
                <li class="on">优惠</li>
                <li>折扣</li>
                <li>香浓甜粥</li>
                <li>营养咸粥</li>
                <li>爽口凉菜</li>
                <li>精选套餐</li>
                <li>果拼果汁</li>
                <li>小吃主食</li>
            </ul>
        </div>
        <div class="right">
            <p>点餐</p>
            <ul>
                <li>
                    <div><img src="../../../static/images/shop.jpg"></div>
                    <div>
                        <p>南瓜粥</p>
                        <p>甜粥</p>
                        <p>月销91份 好评率100%</p>
                        <p>￥9</p>
                    </div>
                </li>
                <li>
                    <div><img src="../../../static/images/shop.jpg"></div>
                    <div>
                        <p>南瓜粥</p>
                        <p>甜粥</p>
                        <p>月销91份 好评率100%</p>
                        <p>￥9</p>
                    </div>
                </li>
                <li>
                    <div><img src="../../../static/images/shop.jpg"></div>
                    <div>
                        <p>南瓜粥</p>
                        <p>甜粥</p>
                        <p>月销91份 好评率100%</p>
                        <p>￥9</p>
                    </div>
                </li>
                <li>
                    <div><img src="../../../static/images/shop.jpg"></div>
                    <div>
                        <p>南瓜粥</p>
                        <p>甜粥</p>
                        <p>月销91份 好评率100%</p>
                        <p>￥9</p>
                    </div>
                </li>
            </ul>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "../../components/Footer/Footer.vue"
    export default {
        components:{Footer}
    }
</script>

<style type="text/css">
    .meal{
        height:480px;
    }
    .left{
        width:20%;
        float:left;
    }
    .left ul{
        width:100%;
        height:480px;
    }
    .left ul li{
        width:100%;
        height:60px;
        line-height: 60px;
        border-bottom: 1px solid #f0f0f0;
        text-align: center;
        font-size: 12px;
        box-sizing: border-box;
        font-weight: bold;
    }
    .right{
        width:80%;
        float:left;
    }
    .right>p{
        width:100%;
        height:30px;
        line-height: 30px;
        font-size: 12px;
        text-indent: 20px;
        box-sizing: border-box;
        border-left:2px solid #eef;
    }
    .right ul{
        width:100%;
        height:450px;
        background:#fff;
    }
    .right ul li{
        padding:20px;
        height:70px;
        border-bottom: 1px solid #f0f0f0;
    }
    .right ul li div{
        float:left;
    }
    .right ul li div:nth-child(1){
        width:70px;
        height:70px;
    }
    .right ul li div:nth-child(2){
        margin-left:20px;
    }
    .right ul li div:nth-child(2) p:nth-child(1){
        font-weight: bold;
    }
    .right ul li div:nth-child(1) img{
        width:100%;
    }
    .on{
        color:rgb(10,205,10);
        background:#fff;
    }
</style>