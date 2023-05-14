<script setup lang="ts" name="SnHeaderBar">

</script>
<template>
  <div class="sn-header">
    <header class="sn-header--content flex-y-center">
      <img class="logo" src="@/assets/logo.webp" alt="">

      <ul class="sn-header--menu flex-y-center">
        <li class="sn-header--menu-item">首页</li>
        <li class="sn-header--menu-item">时间轴</li>
        <li class="sn-header--menu-item">关于</li>
      </ul>
      <img class="sn-header--author" src="//p3-pc-sign.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9807ef9d8cf1499bb95ba5163623869b.jpeg?x-expires=1684155600&x-signature=llfIasX91TfwSPi7y0VEJmyTmS4%3D&from=2480802190" alt="">
    </header>
  </div>
</template>

<style lang="scss" scoped>
@include b(header) {
  width: 100vw;
  height: var(--header-height);
  background-color: var(--header-bgc);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;

  @include m(content) {
    width: 1720px;
    margin: 0 auto;
    height: 100%;

    .logo {
      width: 96px;
      height: 66px;
      pointer-events: none;
    }
  }

  @include m(menu){
    height: 100%;
    margin-left: auto;

    &-item{
      color: var(--text-color);
      padding: 8px;
    }
  }
  @include m(author){
    width: 33.33px;
    height: 33.33px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;
  }

}
</style>