<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">商城</van-tabbar-item>
            <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 2
            }
        }
    }
</script>

<style scoped>

</style>