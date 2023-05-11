<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
// defineProps
</script>
<script lang="ts">
    export default {
        name:'about'
    }
</script>
<template>
    <div>
        <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
    </div>
</template>
<style lang="scss"></style>