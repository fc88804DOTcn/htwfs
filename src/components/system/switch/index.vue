<template>
	<div v-if="type === 'top'">
		<div v-if="status">
			<i class="iconfont switch top">&#xef88;</i>
		</div>
		<div v-else>
			<i class="iconfont switch top">&#xef89;</i>
		</div>
	</div>
	<div v-else-if="type === 'right'">
		<div v-if="status">
			<i class="iconfont switch right">&#xe6d1;</i>
		</div>
		<div v-else>
			<i class="iconfont switch right">&#xef8a;</i>
		</div>
	</div>
	<div v-else-if="type === 'bottom'">
		<div v-if="status">
			<i class="iconfont switch bottom">&#xef89;</i>
		</div>
		<div v-else>
			<i class="iconfont switch bottom">&#xef88;</i>
		</div>
	</div>
	<div v-else-if="type === 'left'">
		<div v-if="status">
			<i class="iconfont switch left">&#xef8a;</i>
		</div>
		<div v-else>
			<i class="iconfont switch left">&#xe6d1;</i>
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
		
		let status = computed(() => store.getters.indexPanelSwitch[props.switchType])
		
		return {
			type: props.switchType,
			status,
		}
	}
});
</script>

<style scoped lang="less">
	.iconfont.switch {
		font-size: 28px;
		display: block;
	    box-sizing: border-box;
	    line-height: 1;
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
