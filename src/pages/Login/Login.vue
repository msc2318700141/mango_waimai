<template>
    <div class="login">
        <a @click="$router.back()"><i class="iconfont icon-xiazai6"></i></a>
        <h1>芒果外卖</h1>
        <div class="container">
            <div class="first">
                <span class="mes login_title on">短信登陆</span>
                <span class="pass login_title">密码登陆</span>
            </div>
            <transition name="fass">
                <div class="login_box mes">
                    <div class="input">
                        <input type="text" maxlength="11" v-model="phone" class="user"><label>手机号</label>
                        <span class="getCode" @click="rightphone==true?getCode():toast()" :class="{rightPhone:rightphone}">
                            {{computedTime>0?`已发送${computedTime}s`:'获取验证码'}}
                        </span>
                    </div>
                    <div class="input"><input type="text" maxlength="6" class="code"><label>验证码</label></div>
                    <p class="tips">温馨提示：未注册硅谷外卖账号的手机号，登陆时将自动注册，且代表已同意<span>《用户服务协议》</span></p>
                </div>
            </transition>
            <transition name="mass">
                <div class="login_box pass hide">
                    <div class="input"><input type="text" placeholder="请输入账号" maxlength="16"><label>账号</label></div>
                    <div class="input"><input type="password" placeholder="请输入密码" maxlength="16"><label>密码</label></div>
                    <div class="input"><input type="text" placeholder="请输入验证码" maxlength="6"><label>验证码</label></div>
                </div>
            </transition>
            <p class="login_btn" @click="success()">登陆</p>
            <span>关于我们</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        mounted(){
            var _span = $('.container .first span');
            _span.on('click mousemove',function(){
                var _className = $(this).attr("class").split(/\s+/);
                $('.login_box').addClass('hide');
                $('.login_title').removeClass('on');
                $('.login_box.'+_className[0]).removeClass('hide');
                $('.login_title.'+_className[0]).addClass('on');
            })
        },
        data(){
            return{
                phone:'',
                computedTime:0
            }
        },
        methods:{
            getCode:function(){
                if(!this.computedTime){
                    this.computedTime = 30;
                    var timer = setInterval(()=>{
                        this.computedTime --;
                        if(this.computedTime <= 0){
                            clearInterval(timer);
                        }
                    },1000)
                }
            },
            toast:function(){
                alert("请输入正确的号码");
            },
            success:function(){
                alert("登陆成功");
                $(".user").value='';
                $(".code").value='';
            }
        },
        computed:{
            rightphone(){
                return /^1\d{10}$/.test(this.phone)
            }
        }
    }
</script>

<style scoped>
    .login{
        font-size: 14px;
        background-color: #ffffff;
    }
    .login a{
        text-decoration: none;
    }
    .icon-xiazai6{
        display: block;
        font-size: 20px;
        margin:20px;
    }
    .container{
        width:90%;
        margin:0 auto;
    }
    h1{
        color:#4CD964;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    .container .first{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin:30px 0 0 0;
    }
    .on{
        color:#4CD964;
        border-bottom: 2px solid #4CD964;
    }
    .container div.input{
        position:relative;
    }
    .container input{
        margin:10px 0;
        width:100%;
        height:35px;
        text-indent: 60px;
        outline: none;
        box-sizing: border-box;
    }
    .container label{
        position: absolute;
        left:10px;
        top:1.3rem;
    }
    ::-webkit-input-placeholder
    {
        text-indent: 260px;
    }
    .tips{
        color:#9a9e9d;
    }
    .tips span{
        color:#4CD964;
    }
    .login_btn{
        width:100%;
        height:40px;
        background-color: #1aad16;
        margin:30px 0;
        color:#ffffff;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
    }
    .login_box{
        overflow: hidden;
    }
    .container>span{
        display:block;
        color:#9a9e9d;
        width:100%;
        text-align: center;
    }
    .hide{
        display:none;
    }
    .getCode{
        position:absolute;
        top:1.3rem;
        right:1rem;
        color:grey;
    }
    .rightPhone{
        color:#000;
    }
</style>