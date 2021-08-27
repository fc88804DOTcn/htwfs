<template>
	<div id="index">
		<Geoq></Geoq>
		
		<transition
			enter-active-class="animate__animated animate__slideInRight"
			leave-active-class="animate__animated animate__slideOutLeft"
		>
			<ElementsOption v-if="panelSwitch.left"></ElementsOption>
		</transition>
		
		<transition
			enter-active-class="animate__animated animate__slideInLeft"
			leave-active-class="animate__animated animate__slideOutRight"
		>
			<StatisticsPanel v-if="panelSwitch.right"></StatisticsPanel>
		</transition>
		
		<transition
			enter-active-class="animate__animated animate__slideInUp"
			leave-active-class="animate__animated animate__slideOutDown"
		>
			<TrendEcharts v-if="panelSwitch.bottom"></TrendEcharts>
		</transition>
		
		
		
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import Geoq from './geoq.vue';
import ElementsOption from './elements-option.vue';
import StatisticsPanel from './statistics-panel.vue';
import TrendEcharts from './trend-echarts.vue';
export default defineComponent({
	name: '',
	props: {},
	components: { Geoq, ElementsOption, StatisticsPanel, TrendEcharts },
	setup(props, context) {
		const store = useStore();
		const panelSwitch = computed(() => store.getters.indexPanelSwitch);
		return {
			panelSwitch
		};
	}
});
</script>

<style scoped lang="less">
	#index {
		position: relative;
	}
</style>
