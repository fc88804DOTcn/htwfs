<template>
 <div id="trend-echarts" class="jhbl-index-hover-zindex-10">
	<slot name="switch"></slot>
	<transition
		enter-active-class="animate__animated animate__slideInUp"
		leave-active-class="animate__animated animate__slideOutDown"
	>
		<div class="content" v-if="panelSwitch.bottom">
			趋势图标
		</div>
	</transition>
 </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
export default defineComponent({
	name: '',
	props: {},
	components: {},
	setup(props, context) {
		const store = useStore();
		const panelSwitch = computed(() => store.getters.indexPanelSwitch);
		return {
			panelSwitch
		};
	},
})
</script>

<style scoped lang='less'>
	#trend-echarts {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 0;
		.content {
			background: grey;
			min-height: 300px;
		}
	}
</style>