<script setup>
import { ref, onMounted } from "vue";
import HelloWorldVue from "../../components/HelloWorld.vue";
import BarChart from "../../components/BarChart.vue";

// 响应式状态
// const layout = ref([
//   { "x": 0, "y": 0, "w": 10, "h": 10, "i": "0" },
//   { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1" },
//   { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2" },
//   { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3" },
//   { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" },
//   { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5" },
//   { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6" },
//   { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7" },
//   { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8" },
//   { "x": 6, "y": 3, "w": 2, "h": 4, "i": "9" },
//   { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10" },
//   { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11" },
//   { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12" },
//   { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13" },
//   { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14" },
//   { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15" },
//   { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16" },
//   { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17" },
//   { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18" },
// ])
const layout = ref([
  { x: 3, y: 0, w: 7, h: 14, i: "0" },
  { x: 0, y: 0, w: 3, h: 8, i: "1" },
  { x: 0, y: 8, w: 3, h: 8, i: "2" },
  { x: 0, y: 16, w: 3, h: 7, i: "3" },
  { x: 3, y: 14, w: 7, h: 9, i: "4" },
  { x: 10, y: 0, w: 2, h: 23, i: "5" },
]);

// 添加一个块
const addBlock = () => {
  const i = parseInt(layout.value[layout.value.length - 1].i) + 1 + "";
  layout.value.push({ x: 1, y: 10, w: 2, h: 2, i: i });
};
// 删除末尾块
const deleteEnd = () => {
  layout.value.splice(layout.value.length - 1, 1);
};

window.prints = () => {
  console.log(layout.value);
};

// 生命周期钩子
onMounted(() => {});
</script>

<template>
  <div class="home-wrap h-full bg-blue-100 relative">
    <el-scrollbar style="height: 100%">
      <grid-layout
        v-model:layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
          class="border border-gray-900 overflow-hidden p-2"
        >
          <BarChart></BarChart>
        </grid-item> </grid-layout
    ></el-scrollbar>
    <div class="absolute right-2 top-2">
      <el-button type="primary" @click="addBlock">添加</el-button>
      <el-button type="primary" @click="deleteEnd">删除</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
