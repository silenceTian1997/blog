<script setup lang="ts"  name="about">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <div>
    <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
  </div>
</template>
<style lang="scss">

</style>