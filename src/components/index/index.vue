<template>
	<div id="index">
		<Geoq></Geoq>
		
		<ElementsOption>
			<template v-slot:switch>
				<SwitchEntity :switch-type="'left'"></SwitchEntity>
			</template>
		</ElementsOption>
		
		<StatisticsPanel>
			<template v-slot:switch>
				<SwitchEntity :switch-type="'right'"></SwitchEntity>
			</template>
		</StatisticsPanel>
		
		<TrendEcharts>
			<template v-slot:switch>
				<SwitchEntity :switch-type="'bottom'"></SwitchEntity>
			</template>
		</TrendEcharts>
		
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import Geoq from './geoq.vue';
import ElementsOption from './elements-option.vue';
import StatisticsPanel from './statistics-panel.vue';
import TrendEcharts from './trend-echarts.vue';
import SwitchEntity from '../system/switch/index.vue';


export default defineComponent({
	name: '',
	props: {},
	components: { Geoq, ElementsOption, StatisticsPanel, TrendEcharts,SwitchEntity },
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
		box-sizing: border-box;
		position: relative;
	}
</style>
