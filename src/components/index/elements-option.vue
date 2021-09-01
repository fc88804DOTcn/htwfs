<template>
  <div id="elements-option" class="jhbl-index-hover-zindex-10">
    <slot name="switch"></slot>
    <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <div class="content padding-4" v-if="panelSwitch.left">
       
	    <el-collapse>

          <el-collapse-item title="一致性 Consistency">
			<template #title>
			一致性 Consistency<i class="header-icon el-icon-info"></i>
			</template>
			<div class="element-item">
				<i class="iconfont"></i>
				按钮
			</div>
			<div class="element-item">
				<i class="iconfont"></i>
				按钮
			</div>
			<div class="element-item">
				<i class="iconfont"></i>
				按钮
			</div>
          </el-collapse-item>

		  <el-collapse-item title="一致性 Consistency">
			<template #title>
			一致性 Consistency<i class="header-icon el-icon-info"></i>
			</template>
			<div class="element-item">
				<i class="iconfont"></i>
				按钮
			</div>
          </el-collapse-item>
		  
        </el-collapse>


      </div>
    </transition>
  </div>
</template>

<script>
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
    return {
      panelSwitch,
    };
  },
});
</script>

<style scoped lang='less'>
#elements-option {
  height: 80%;
  width: auto;
  position: absolute;
  bottom: 0px;
  left: 0;
  .content {
    background: gainsboro;
    height: 100%;
	box-sizing: border-box;
	/deep/ .el-collapse {
		background: red;
	}
  }
}
</style>