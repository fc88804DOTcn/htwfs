<template>
  <div id="elements-option" class="jhbl-index-hover-zindex-10">
    <slot name="switch"></slot>
    <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <div class="content padding-4" v-show="panelSwitch.left">

        <el-scrollbar wrap-class="wrap-class" view-class="view-class">
        <!-- <el-scrollbar> -->

        <div class="box" v-if="currentTimePresentStation">
          <!-- <p>当前站点为 {{currentTimePresentStation.properties.wayStation.province}} 的 
            {{currentTimePresentStation.properties.wayStation.highway}} 区间的 
            {{currentTimePresentStation.properties.wayStation.stationname}} 该设备编号为 
            {{currentTimePresentStation.properties.wayStation.stationnum}}</p> -->
          <template v-for="(value,key) in currentTimePresentStation.properties.wayStation.jtData" :key="key">
            <el-button plain v-if="value!=-999&&key!='date_Time'" @click="elelmentBtnClickHandler(key)">
              <i class="iconfont" v-html="elTransfer(key).iconcode"></i>
              {{elTransfer(key).label}}
            </el-button>
          </template>
          
        </div>

        </el-scrollbar>

      </div>
    </transition>
  </div>
</template>

<script>
import emitter from '../../assets/global/js/emitter'
import eleToLabelTransfer from '../../assets/global/js/elementToLabel'
import { useStore } from "vuex";
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
  inject,
} from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, context) {
    const store = useStore();
    const panelSwitch = computed(() => store.getters.indexPanelSwitch);
    const elTransfer = eleToLabelTransfer

    // 注入当前时刻选中站点数据
		const currentTimePresentStation = inject('currentTimePresentStation')

    const elelmentBtnClickHandler = function(option) {
      emitter.emit('elementChange');
    }

    return {
      panelSwitch,
      currentTimePresentStation,
      elTransfer,
      elelmentBtnClickHandler,
    };
  },
});
</script>

<style scoped lang='less'>
.wrap-class {
  background: red;
}

.view-class {
  background: blue;
}

#elements-option {
  height: 80%;
  width: auto;
  position: absolute;
  bottom: 0px;
  left: 0;
  .content {
    border-top-right-radius: 5px;
    background: gainsboro;
    background: #012a62;
    height: 100%;
    box-sizing: border-box;
    &:hover {
        .box {
          .el-button {
            background: #062a48;
          }
        }
      }
    .box {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
      border: 1px solid gainsboro;
      padding: 4px;
      border-radius: 4px;
      margin-right: 14px;
      .el-button {
        margin-left: 0;
        margin-bottom: 8px;
        background: #062a48;
        &:last-child {
          margin-bottom: 0px;
        }
        :deep(span) {
              display: flex;
              justify-content: space-between;
              i {
                margin-right: 5px;
              }
        }
      }
    }

    :deep(.el-scrollbar__thumb) {
      background: whitesmoke;
      opacity: 1;
    }
  }
}
</style>