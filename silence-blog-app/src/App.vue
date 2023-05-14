<script setup lang="ts">
import SnHeaderBar from "./components/SnHeaderBar/index.vue";
// import SnFooterBar from "./components/SnFooterBar/index.vue";
// import SnLoading from "./components/SnLoading/index.vue";

</script>
<template>
  <div>
    <SnHeaderBar />
    <section class="s-container flex">
      <div class="sider">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2022144061号</a>
      </div>
      <n-scrollbar class="s-centent">
        <router-view v-slot="{ Component }">
          <KeepAlive :include="['about']">
            <component :is='Component'></component>
          </KeepAlive>
        </router-view>
      </n-scrollbar>
    </section>

    <!-- <SnFooterBar /> -->
    <SnLoading />
  </div>
</template>

<style>
body {
  background-color: var(--bgc);
}

.s-container {
  width: 1720px;
  margin: 0 auto;
  padding-top: 20px;
}

.sider {
  width: 200px;
  height: calc(100vh - var(--header-height) - 20px);
  background-color: var(--header-bgc);
}

.s-centent {
  flex: 1;
  margin-left: 20px;
  height: calc(100vh - var(--header-height) - 20px);
  overflow-y: scroll;
  background-color: var(--header-bgc);
}
</style>
