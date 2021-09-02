import { createStore } from 'vuex'

import defaultModule from './modules/default'
import alarm from './modules/alarm'
import user from './modules/user'
import heatmap from './modules/heatmap'
import station from './modules/station'
import indexPanelSwitch from './modules/index-panel-switch'


// 临时测试用
import test from './modules/test'

export default createStore({
  modules: {
	  defaultModule,
	  alarm,
	  user,
	  heatmap,
	  station,
	  indexPanelSwitch,
	  test,
  }
})
