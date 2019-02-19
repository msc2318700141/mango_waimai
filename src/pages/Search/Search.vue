<template>
    <div id="search">
        <HeadTop title="搜索">
            <span slot="left"></span>
            <span slot="right"></span>
        </HeadTop>
        <div class="content">
            <input type='text' placeholder="请输入商家或美食名称">
            <button @click="show">提交</button>
        </div>
    </div>
</template>

<script>
    import HeadTop from "../../components/HeadTop/HeadTop"
    export default {
        name: "Search",
        props:{title:String},
        components:{HeadTop},
        methods:{
            show:function(){
                alert("敬请期待");
            }
        }
    }
</script>

<style scoped>
    .content{
        width:100%;
        padding:10px 0;
        background-color: #ffffff;
    }
    .content input{
        width:80%;
        height:1.6rem;
        background-color: #f0f0f0;
        border:0;
        margin-left:10px;
    }
    .content button{
        width:10%;
        height:1.6rem;
        border:0;
        background-color: #4CD964;
    }
</style>