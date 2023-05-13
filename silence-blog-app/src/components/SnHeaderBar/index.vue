<script setup lang="ts">
import { h, ref, Component, watch } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
} from '@vicons/ionicons5'
import about from '../../views/about/index.vue'
console.log(about)
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: '#/about',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '鼠',
        key: 'rat'
      },
      {
        label: '鼠11鼠11鼠11鼠11鼠11鼠11鼠11',
        key: 'rat1'
      }
    ]
  },
]

const activeKey = ref<string | null>(null)

watch(() => activeKey.value, (val, oval) => {
  console.log(val, oval)
})


</script>
<template>
  <header class="sn-header">
    <img class="logo" alt="">
  </header>
</template>

<style lang="scss" scoped>
@include b(header) {
  width: 100%;
  height: 90px;
  background-color: #fff;
  position: sticky;
  top: 0;

  .logo {
    width: 120px;
    height: 80px;
    pointer-events: none;
    background-color: green;
  }
}
</style>