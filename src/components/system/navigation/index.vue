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
			<!-- 针对地图添加的定位操作：仅在首页出现 -->
			<ul>
				<li><i class="iconfont sys-btn">&#xe6de;</i></li>
				<li><i class="iconfont sys-btn">&#xe6dd;</i></li>
				<li><i class="iconfont sys-btn">&#xec32;</i></li>
				<li><i class="iconfont sys-btn">&#xe743;</i></li>
				<li><i class="iconfont sys-btn">&#xe6df;</i></li>
			</ul>
			<!-- 一个鼠标移入滑出的系统菜单 -->
			<li @mouseenter="sysBtnMouseOverHander" @mouseleave="sysBtnMouseOutHander">
				<i class="iconfont">&#xe6cd;</i>
				<transition
					enter-active-class="animate__animated animate__slideInDown"
					leave-active-class="animate__animated animate__slideOutUp"
				>
					<ul v-if="showSystemBtn">
						<li><i class="iconfont">&#xe600;</i></li>
						<li><i class="iconfont">&#xe651;</i></li>
					</ul>
				</transition>
			</li>
		</div>
	</div>
	
	
	
	<!-- 要素展示、报警区域、要素展示 -->
	
	<div class="row">
		<!-- 要素 -->
		<div class="">
			
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
		let showSystemBtn = ref(false)
		
		const sysBtnMouseOverHander = function() {
			showSystemBtn.value = true
		}
		const sysBtnMouseOutHander = function() {
			showSystemBtn.value = false
		}
		
		return {
			sysBtnMouseOverHander,
			sysBtnMouseOutHander,
			showSystemBtn
		}
	
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
		background: url("../../../assets/img/nav-bg.png") repeat;
		padding: 4px;
		box-sizing: border-box;
		.row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			>div {
				flex: 1;
				display: flex;
				box-sizing: border-box;
			}
			.system-operation {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				ul {
					display: flex;
					i.iconfont {
						font-size: 18px;
						margin: 0 5px;
						color: #0FF;
						transition: all 0.2s;
						&:hover {
							color: #FFF;
							cursor: pointer;
						}
					}
				}
				> li {
					position: relative;
					line-height: 1;
					i.iconfont {
						color: #8e8e8e;
						&:hover {
							cursor: default;
						}
					}
					ul {
						position: absolute;
						display: flex;
						flex-direction: column;
						li {
							margin: 4px 0px;
						}
					}
				}
			}
			.logo-timer {
				padding: 15px 0px;
				> img {
					width: 8%;
				}
			}
		}
	}
</style>