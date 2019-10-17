<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<style lang="less">
  #app {
    background: #fff;
  }
</style>
