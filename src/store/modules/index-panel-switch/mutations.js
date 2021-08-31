export default {
	// 首页控制面板的展开/收缩方法
	indexPanelSwitchReverse: (state)=>{
		const tempObj = state.indexPanelSwitch;
		for(let item in tempObj){
			tempObj[item] = !tempObj[item]
		}
	},
	switchReverseByType: (state,option)=>{
		state.indexPanelSwitch[option.type] = !state.indexPanelSwitch[option.type]
	}
}