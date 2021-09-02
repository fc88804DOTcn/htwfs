export default {
	// 初始化全部站点信息:当前时刻
    initCurrentTimeAllStation: (state,option)=>{
		state.currentTimeAllStation = option
	},
	// 初始化当前站点信息:当前时刻
	initCurrentTimePresentStation: (state)=>{
		state.currentTimePresentStation = state.currentTimeAllStation[0]
	},
	// 设置当前站点信息:当前时刻
	assignCurrentTimePresentStation: (state,option)=>{
		state.currentTimePresentStation = option
	},
}