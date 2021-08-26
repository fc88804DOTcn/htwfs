import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入样式清零重置文件
import 'normalize.css/normalize.css'

// 导入flexible适配
import 'amfe-flexible/index.js'

// 饿了么UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
app.use(ElementPlus, {
	size: 'small',
	zIndex: 3000,
	locale: zhCn,
})

// 导入animate.css动画库
import 'animate.css'

// 导入Iconfont字体图标
import "./assets/iconfont/iconfont.css"

app.use(router)
app.use(store)
app.mount('#app')

// 导入全局自定义样式
import "./assets/global/css/index.css"
// 导入全局js脚本文件
import jhbl from './assets/global/js/index.js'
jhbl()
