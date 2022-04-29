<template>
  <div
    :id="chartId"
    :class="{ customClass: customClass }"
    class="w-full h-full"
  ></div>
  <object
    ref="domRef"
    tabindex="-1"
    type="text/html"
    aria-hidden="true"
    data="about:blank"
    style="
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border: none;
      padding: 0px;
      margin: 0px;
      opacity: 0;
      z-index: -1000;
      pointer-events: none;
    "
  ></object>
</template>

<script>
import { computed, defineComponent, onBeforeMount, onMounted, ref } from "vue";
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
    const chartId = "echart-" + new Date().getTime() + Math.random();
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
    const resize = () => {
      if (chart) {
        chart.resize();
      }
    };
    // 自适应
    const initResizeEvent = () => {
      domRef.value.contentDocument.defaultView.addEventListener(
        "resize",
        resize
      );
    };

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
