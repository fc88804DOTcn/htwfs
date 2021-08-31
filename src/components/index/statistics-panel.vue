<template>
 <div id="statistics-panel" class="jhbl-index-hover-zindex-10">
	<slot name="switch"></slot>
	<transition
		enter-active-class="animate__animated animate__slideInRight"
		leave-active-class="animate__animated animate__slideOutRight"
	>
		<div class="content" v-if="panelSwitch.right">
			统计面板
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
	#statistics-panel {
		height: 80%;
		width: auto;
		position: absolute;
		bottom: 0;
		right: 0;
		.content {
			background: bisque;
			height: 100%;
		}
	}
</style>