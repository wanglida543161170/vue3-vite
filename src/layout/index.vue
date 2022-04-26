<script setup>
import { ref, onMounted } from "vue";

// 响应式状态
const count = ref(0)

// 生命周期钩子
onMounted(() => {
  
})

</script>

<template>
  <div class="layout-wrap h-screen overflow-hidden">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped></style>
