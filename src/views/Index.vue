<template>
  <div>index</div>
</template>

<script>
  import {home} from '@/api'
    export default {
        name: "Index",
        mounted() {
            console.log(111,home);
            home.gets({
                a:1,
                b:2
            }).then(res =>{
                console.log(res);
            }).catch(err => {
                console.log('err', err);
            })
        }
    }
</script>

<style scoped>

</style>