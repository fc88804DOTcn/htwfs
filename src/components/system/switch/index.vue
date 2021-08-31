<template>
	<div v-if="type === 'top'">
		<div v-if="status">
			<i @click="switchClickHandler" class="iconfont switch top">&#xef88;</i>
		</div>
		<div v-else>
			<i @click="switchClickHandler" class="iconfont switch top">&#xef89;</i>
		</div>
	</div>
	<div v-else-if="type === 'right'">
		<div v-if="status">
			<i @click="switchClickHandler" class="iconfont switch right">&#xe6d1;</i>
		</div>
		<div v-else>
			<i @click="switchClickHandler" class="iconfont switch right">&#xef8a;</i>
		</div>
	</div>
	<div v-else-if="type === 'bottom'">
		<div v-if="status">
			<i @click="switchClickHandler" class="iconfont switch bottom">&#xef89;</i>
		</div>
		<div v-else>
			<i @click="switchClickHandler" class="iconfont switch bottom">&#xef88;</i>
		</div>
	</div>
	<div v-else-if="type === 'left'">
		<div v-if="status">
			<i @click="switchClickHandler" class="iconfont switch left">&#xef8a;</i>
		</div>
		<div v-else>
			<i @click="switchClickHandler" class="iconfont switch left">&#xe6d1;</i>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
export default defineComponent({
	name: '',
	props: {
		// 接受一个必要的参数表示开关的方向类型
		'switch-type': {
			type: String,
			required: true
		}
	},
	components: {},
	setup(props, context) {
		const store = useStore()
		// 定义当前组件开关状态变量
		let status = computed(() => store.getters.indexPanelSwitch[props.switchType])
		
		// 定义组件点击处理方法
		const switchClickHandler = function() {
			// 应当触发开关的按下事件
			const option = {}
			option.type = props.switchType
			store.commit('switchReverseByType',option)
		}
		
		return {
			type: props.switchType,
			status,
			switchClickHandler
		}
	}
});
</script>

<style scoped lang="less">
	.iconfont.switch {
		position: absolute;
		animation: jhbl-starify 2s infinite linear;
		transition: all .2s ease-in-out;
		&.top,&.bottom {
			left: calc(50% - 14px);
			bottom: -30px;
		}
		&.bottom {
			top: -30px;
			bottom: unset;
		}
		&.right,&.left {
			left: -30px;
			top: calc(50% - 14px);
		}
		&.left {
			right: -30px;
			left: unset;
		}
		&:hover {
			cursor: pointer;
			color: #0FF;
			animation: null;
			transform: scale(1.1);
		}
	}
</style>
