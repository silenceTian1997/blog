<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="hello">
    hello <span class="text"> world </span>
  </div>
  <div class="card">
    <button class="sn-button" type="button" @click="count++">count is {{ count }}</button>
    <button class="sn-button--center" type="button" @click="count++">count is {{ count }}
      <button class="sn-button__header" type="button" @click="count++">count is {{ count }}</button>
    </button>
  
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}

.hello {
  color: #ff0;

  .text {
    color: #888;
  }
}

@include b(button) {
    color: blue;
    @include m(center) {
       padding-bottom: 30px;

       @include e(header) {
            padding-top: 30px;
         }
  }
}

</style>
