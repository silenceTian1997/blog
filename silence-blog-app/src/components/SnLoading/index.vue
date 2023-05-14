<script lang='ts' setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
// console.log()
onMounted(()=>{
    gsap.to('.sn-loading',{opacity: 0, delay: .1 })
    
})
</script>

<template>
    <div class="sn-loading"></div>
</template>
<style lang='scss' scoped>

    @include b(loading){
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
    }

</style>
