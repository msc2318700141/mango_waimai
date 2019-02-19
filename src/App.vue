<template>
    <div id="wrapper">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
        name: "App",
        components:{
            FooterGuide
        }
    }
</script>

<style scoped>
    #wrapper{
        width:100%;
        height:100%;
        background:#f0f0f0;
    }
    a{
        text-decoration: none;
        color:#fff !important;
    }
</style>