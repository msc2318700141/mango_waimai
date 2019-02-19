<template>
    <div class="top">
        <slot name="left"></slot>
        <span>{{title}}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        props:{
            title:String
        }
    }
</script>

<style scoped>
    .top{
        width:100%;
        height:2.2rem;
        background:#36aa12;
        color:#fff;
    }
    .top span{
        display:block;
        float:left;
        line-height: 30px;
        height:30px;
    }
    .top span:nth-child(1){
        width:20%;
        text-indent: 10px;
    }
    .top span:nth-child(2){
        width:60%;
        text-align: center;
    }
    .top span:nth-child(3){
        width:20%;
        font-size: 12px;
        text-align: center;
    }
    .top a{
        text-decoration: none;
        color:#fff;
        font-size: 12px;
    }
</style>