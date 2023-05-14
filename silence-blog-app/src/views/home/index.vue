<script setup lang="ts">
import { ref } from 'vue'
const scrollContainerRef = ref<HTMLElement | undefined>(undefined)
const target = scrollContainerRef.value
</script>
<template>
    <div class="home-content">
        home page
    </div>
    <n-back-top :listen-to="target" :bottom="220" :visibility-height="10">
        <div style="
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #000;
      ">
            指定目标
        </div>
    </n-back-top>
</template>
<style lang="scss">
.home-content {
    flex: 1;
    height: 20000px;
}
</style>