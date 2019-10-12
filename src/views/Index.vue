<template>
  <div>index</div>
</template>

<script>
  import gets from '@/api'
    export default {
        name: "Index",
        mounted() {
            console.log(gets);
            gets().then(res =>{
                console.log(res);
            }).catch(err => {
                console.log('err', err);
            })
        }
    }
</script>

<style scoped>

</style>