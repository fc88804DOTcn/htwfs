<template>
	<div id="map">
		地图主图
		{{currentTimeAllStation}}
	</div>
</template>

<script>
import eloading from '../../assets/global/js/eloading'
import { createLogger, useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
export default defineComponent({
	name: '',
	props: {},
	components: {},
	setup(props, context) {
		const store = useStore();
		const currentTimeAllStation = computed(() => {
			return store.getters.currentTimeAllStation;
		});
		watch(currentTimeAllStation,()=>{
		});
		onMounted(()=>{
			// console.log("地图组件挂载")
		})

		return {
			currentTimeAllStation
		}
	}
});
</script>

<style scoped lang="less">
	#map {
		height: 100%;
		background: transparent;
	}
</style>
