<template>
	<!--使用 router-link 组件进行导航 -->
	<!--通过传递 `to` 来指定链接 -->
	<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
	<router-link to="/">Go to Home</router-link>

	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
	<router-view class="router-view"></router-view>
</template>

<script>
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
export default defineComponent({
	name: '',
	props: {},
	components: {},
	setup(props, context) {}
});
</script>

<style lang="less">
html,
body,
#app,
.router-view {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

&#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	.router-view {
		position: fixed;
	}
}
</style>
