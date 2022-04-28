<template>
  <div
    :id="chartId"
    :class="{ customClass: customClass }"
    class="w-full h-full"
  ></div>
</template>

<script>
import { computed, defineComponent, onBeforeMount, onMounted, ref, onUpdated } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "JChart",
  props: {
    // 自定义类名
    className: {
      type: String,
      default: "",
    },
    // chart配置信息
    chartOptions: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    let chart;
    const domRef = ref();
    const chartId = "echart-" + new Date().getTime();
    const options = computed(() => props.chartOptions);
    const customClass = computed(() => props.className);

    // 初始化图表
    const initChart = () => {
      chart = echarts.init(document.getElementById(chartId));
      if (chart && options.value) {
        chart.setOption(options.value);
        initResizeEvent();
      }
    };
    // 自适应
    const initResizeEvent = () => {
      document.getElementById(chartId).addEventListener("onresize", resize);
    };

    const resize = () => {
      console.log(123);
      if (chart) {
        chart.resize();
      }
    };

    onUpdated(() => {
      console.log(321)
    })

    onBeforeMount(() => {
      if (!chart) {
        return;
      }
      chart.dispose();
    });

    onMounted(() => {
      setTimeout(() => {
        initChart();
      }, 0);
    });

    return {
      chartId,
      customClass,
      domRef,
      resize,
    };
  },
});
</script>

<style scoped></style>
