<template>
	<transition
		enter-active-class="animate__animated animate__slideInDown"
		leave-active-class="animate__animated animate__slideOutUp"
	>
		<Navigation v-if="panelSwitch.top" class="navigation"></Navigation>
	</transition>
	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
	<router-view class="router-view" v-slot="{ Component }">
		<transition name="fade">
		    <component :is="Component" />
		  </transition>
	</router-view>
</template>

<script>
import Emitter from 'tiny-emitter';
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import Navigation from './components/system/navigation/index.vue';
export default defineComponent({
	name: '',
	props: {},
	components: { Navigation },
	setup(props, context) {
		const store = useStore();
		const panelSwitch = computed(() => store.getters.indexPanelSwitch);

		// 全局事件处理
		const emitter = new Emitter();
		onMounted(() => {
			document.addEventListener('keydown', () => {
				if (event.keyCode === 69) {
					// 此处应触发控制器开关取反事件
					emitter.emit('indexPanelSwitchReverse');
				}
			});
			emitter.on('indexPanelSwitchReverse', () => {
				store.commit('indexPanelSwitchReverse');
			});
		});

		return {
			panelSwitch
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
