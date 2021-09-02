<template>
	<transition
		enter-active-class="animate__animated animate__slideInDown"
		leave-active-class="animate__animated animate__slideOutUp"
	>
		<Navigation v-if="panelSwitch.top" class="navigation"></Navigation>
	</transition>
	<!-- {{currentTimeAllStation}} -->
	<!-- {{currentTimePresentStation}} -->
	
	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
	<router-view class="router-view" v-slot="{ Component }">
		<transition name="fade">
		    <component :is="Component" />
		  </transition>
	</router-view>
</template>

<script>
import eloading from './assets/global/js/eloading'
import emitter from './assets/global/js/emitter';
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, onBeforeMount, reactive, ref, watch, provide } from 'vue';
import Navigation from './components/system/navigation/index.vue';
export default defineComponent({
	name: '',
	props: {},
	components: { Navigation },
	setup(props, context) {
		const store = useStore();
		// 定义必要的计算属性
		// 定义计算属性获取首页控制面板开关
		const panelSwitch = computed(() => store.getters.indexPanelSwitch);
		// 定义计算属性获取当前时刻的所有站点数据并在根组件中提供
		const currentTimeAllStation = computed(() => store.getters.currentTimeAllStation);
		provide('currentTimeAllStation',currentTimeAllStation)
		// 定义计算属性获取当前时刻的选中站点数据并在根组件中提供
		const currentTimePresentStation = computed(() => store.getters.currentTimePresentStation);
		provide('currentTimePresentStation',currentTimePresentStation)


		// 应用挂载前初始化数据
		onBeforeMount(()=>{
			store.dispatch('initCurrentTimeAllStation')
			store.dispatch('initCurrentTimeHeatMapData')
			store.dispatch('initCurrentTimeAlarmData')
		})

		// 当全部站点数据过去成功后，初始化当前时刻选中的站点
		watch(currentTimeAllStation,()=>{
			store.commit('initCurrentTimePresentStation')
		});

		
		onMounted(() => {
			// console.log("根组件挂载")
			document.addEventListener('keydown', () => {
				if (event.keyCode === 69) {
					// 此处应触发控制器开关取反事件
					emitter.emit('indexPanelSwitchReverse');
				}
			});
			// 监听上面配置的键盘E键触发的事件
			emitter.on('indexPanelSwitchReverse', () => {
				console.log("indexPanelSwitchReverse trigger")
				store.commit('indexPanelSwitchReverse');
			});

			eloading.stop()
		});

		return {
			panelSwitch,
			currentTimeAllStation,
			currentTimePresentStation
		};
	}
});
</script>

<style lang="less">
html,
body,
#app {
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url(assets/img/bg.jpg);
}

#app {
	box-sizing: border-box;
	padding: 0px;

	.navigation {
		// position: absolute;
		// top: 0;
		// left: 0;
	}

	.router-view {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		padding: 4px;
		>div {
			height: 100%;
		}
	}
}
</style>
