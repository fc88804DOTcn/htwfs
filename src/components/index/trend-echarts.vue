<template>
  <div id="trend-echarts">
    <slot name="switch"></slot>
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div class="content padding-4" v-show="panelSwitch.bottom">
        <div class="echarts-box" ref="trendEchart"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { useStore } from "vuex";
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, context) {
    const store = useStore();
    const panelSwitch = computed(() => store.getters.indexPanelSwitch);

    const trendEchart = ref(null);

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
        {
          data: [920, 1032, 1001, 1034, 1290, 1430, 1420],
          type: "line",
          smooth: true,
        },
      ],
    };

    onMounted(() => {
      const trendInstance = echarts.init(trendEchart.value);
      trendInstance.setOption(option);
    });

    return {
      panelSwitch,
      trendEchart,
    };
  },
});
</script>

<style scoped lang='less'>
#trend-echarts {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  .content {
    background: #062a48;
    background: #012a62;
    min-height: 300px;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    padding: 4px;
    border-radius: 4px;
    .echarts-box {
      min-height: 300px;
    }
  }
}
</style>