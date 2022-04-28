<script setup>
import { ref, onMounted } from "vue";
import HelloWorldVue from "../../components/HelloWorld.vue";
import BarChart from "../../components/BarChart.vue";

// 响应式状态
const layout = ref([
  { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0" },
])

// 生命周期钩子
onMounted(() => {
})

</script>

<template>
  <div class="home-wrap h-full bg-blue-100">
    <grid-layout v-model:layout="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
      :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
        class="border border-gray-900 overflow-hidden p-2"
      >
        <BarChart></BarChart>
      </grid-item>
    </grid-layout>
  </div>
</template>
<style lang="scss" scoped>
</style>
