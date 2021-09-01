<template>
 <div id="elements-option" class="jhbl-index-hover-zindex-10">
	<slot name="switch"></slot>
	<transition
		enter-active-class="animate__animated animate__slideInLeft"
		leave-active-class="animate__animated animate__slideOutLeft"
	>
		<div class="content padding-4" v-if="panelSwitch.left">
			要素选择要素选择要素选择要素选择
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
		}
	}
</style>