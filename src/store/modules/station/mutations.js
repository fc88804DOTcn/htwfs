export default {
	// 初始化全部站点信息:当前时刻
    initCurrentTimeAllStation: (state,option)=>{
		state.currentTimeAllStation = option
	},
	// 设置当前站点信息
	assignCurrentStation: (state,option)=>{
		state.currentStation = option
	},
}