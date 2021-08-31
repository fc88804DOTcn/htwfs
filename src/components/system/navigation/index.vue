<template>
 <div id="navigation">
	 
	<!-- LOGO、时间组件、标题、系统操作 -->
	<div class="row">
		<!-- logo+时间 -->
		<div class="logo-timer">
			<img src="../../../assets/logo.png" alt="logo" class="logo">
			<div class="timmer"></div>
		</div>
		
		<!-- 标题 -->
		<div class="title">
			<div class="sup">主标题</div>
			<div class="sub">副标题</div>
		</div>
		
		
		<!-- 系统操作 -->
		<div class="system-operation">
			
		</div>
	</div>
	
	
	
	<!-- 要素展示、报警区域、要素展示 -->
	
	<div class="row">
		<!-- 要素 -->
		<div class="logo-timer">
			
		</div>
		
		<!-- 报警 -->
		<div class="title">
			
		</div>
		
		
		<!-- 要素 -->
		<div class="system-operation">
			
		</div>
	</div>
	
	
	
	
	
	
	
	
	
 </div>
</template>

<script>
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
export default defineComponent({
	name: '',
	props: {},
	components: {},
	setup(props, context) {

	
	},
})
</script>

<style scoped lang='less'>
	#navigation {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
		background: url("../../../assets/img/nav-bg.png") repeat-x;
		padding: 4px;
		box-sizing: border-box;
		.row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			>div {
				flex: 1;
			}
		}
	}
</style>