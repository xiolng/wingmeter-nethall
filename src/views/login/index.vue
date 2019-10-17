<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$router.push({name: 'loginIndex'})
    }
  }
</script>

<style scoped>

</style>