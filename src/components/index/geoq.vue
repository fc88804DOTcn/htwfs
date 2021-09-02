<template>
	<div id="map">
		地图主图
	</div>
</template>

<script>
import eloading from '../../assets/global/js/eloading'
import { createLogger, useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch, inject } from 'vue';
export default defineComponent({
	name: '',
	props: {},
	components: {},
	setup(props, context) {
		const store = useStore();
		// 注入当前时刻所有站点数据
		const currentTimeAllStation = inject('currentTimeAllStation')
		// 注入当前时刻选中站点数据
		const currentTimePresentStation = inject('currentTimePresentStation')

		onMounted(()=>{
			// console.log("地图组件挂载")
		})

		return {
			currentTimeAllStation,
			currentTimePresentStation
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
