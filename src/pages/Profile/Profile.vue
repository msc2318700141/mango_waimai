<template>
    <div id="profile">
        <HeadTop title="个人中心">
            <span slot="left"></span>
            <span slot="right"></span>
        </HeadTop>
        <router-link to="/login">
            <div class="login_box">
                <div class="left"><img src="../../../static/images/photo.jpg"></div>
                <div class="right">
                    <span class="login">登陆/注册</span>
                    <span><i class="iconfont icon-shouji"></i>暂无绑定手机号</span>
                </div>
                <div class="arrows"> > </div>
            </div>
        </router-link>
        <div class="balance">
            <ul>
                <li>
                    <span><i>0.00</i>元</span>
                    <span>我的余额</span>
                </li>
                <li>
                    <span><i>0</i>个</span>
                    <span>我的优惠</span>
                </li>
                <li>
                    <span><i>0</i>分</span>
                    <span>我的积分</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li>
                    <i class="iconfont icon-dingdan"></i>
                    <p>我的订单<span> > </span></p>
                </li>
                <li>
                    <i class="iconfont icon-huiyuantequanfenxianglibao2"></i>
                    <p>积分商城<span> > </span></p>
                </li>
                <li>
                    <i class="iconfont icon-filedicon_memberco"></i>
                    <p>硅谷外卖会员卡<span> > </span></p>
                </li>
                <li>
                    <i class="iconfont icon-tubiaolunkuo-"></i>
                    <p>服务中心<span> > </span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HeadTop from "../../components/HeadTop/HeadTop"
    export default {
        name: "Profile",
        props:{title:String},
        components:{HeadTop}
    }
</script>

<style scoped>
    .login_box{
        width:100%;
        height:100px;
        margin-top:2px;
        background:#1aad16;
    }
    .login_box div{
        float:left;
    }
    .login_box .left{
        width:5.2rem;
        height:5.2rem;
        border-radius: 50%;
        overflow: hidden;
        margin:15px 10px;
    }
    .login_box .left img{
        width:100%;
        height:100%;
    }
    .login_box .right span{
        display:block;
        color:#ffffff;
        font-size: 15px;
        margin:10px;
    }
    .login_box .right{
        margin:15px 0;
        width:70%;
    }
    .login_box .right .login{
        font-size: 18px;
        font-weight: bold;
    }
    .login_box .arrows{
        position:absolute;
        top:5rem;
        right:2rem;
        font-weight: bold;
        font-size: 18px;
        color:#f0f0f0;
    }
    .balance{
        width:100%;
        height:100px;
        border-bottom: 1px solid #f0f0f0;
        background-color: #ffffff;
    }
    .balance ul{
        display:flex;
        align-items: center;
        justify-content: space-around;
        width:100%;
        height:100%;
    }
    .balance ul li{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:33.1%;
        float:left;
        height:80%;
    }
    .balance ul li:not(:first-child){
        border-left:1px solid #f0f0f0;
    }
    .balance ul li span{
        font-size: 14px;
        margin:5px;
    }
    .balance ul li i{
        font-size:20px;
        color:#ce8b10;
        font-weight:bold;
    }
    .content{
        width:100%;
        height:220px;
        background-color: #ffffff;
    }
    .content ul{
        width:100%;
        height:100%;
    }
    .content ul li{
        width:100%;
        height:25%;
        line-height:55px;
    }
    .content ul li i{
        display: block;
        float:left;
        width:10%;
        height:100%;
        font-size:20px;
        text-align: center;
    }
    .content ul li p{
        float:left;
        display:inline-block;
        width:90%;
        height:100%;
        border-bottom:1px solid #f0f0f0;
        box-sizing: border-box;
        font-size: 16px;
    }
    .content ul li span{
        position:absolute;
        right:20px;
        color: #9a9e9d;
    }
</style>