export default {
    // 获取全部站点信息:当前时刻
    currentTimeAllStation: (state, getters, rootState) => {
		return state.currentTimeAllStation
    },
    // 获取当前站点信息:当前时刻
    currentTimePresentStation: (state, getters, rootState) => {
		return state.currentTimePresentStation
	}
}