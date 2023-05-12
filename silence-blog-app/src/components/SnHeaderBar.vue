<script setup lang="ts">
import { h, ref, Component, } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
} from '@vicons/ionicons5'

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
      }
    ]
  },
]

const activeKey = ref<string | null>(null)

const menuChange = (value: object) => {
  console.log(value)
}


</script>
<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @change="menuChange" />
</template>