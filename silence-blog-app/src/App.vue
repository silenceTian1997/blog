<script setup lang="ts">
import SnHeaderBar from "./components/SnHeaderBar/index.vue";
import SnFooterBar from "./components/SnFooterBar/index.vue";
</script>
<template>
  <div>
    <NLoadingBarProvider>
      <SnHeaderBar />
      <router-view v-slot="{ Component }">
        <KeepAlive :include="['about']">
          <component :is='Component'></component>
        </KeepAlive>
      </router-view>
      <SnFooterBar />
    </NLoadingBarProvider>
  </div>
</template>

<style>

</style>
