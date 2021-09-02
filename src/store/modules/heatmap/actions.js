import axios from 'axios'
import moment from 'moment'
import eloading from '../../../assets/global/js/eloading'

export default {
    // 初始化热普图数据:当前时刻
    async initCurrentTimeHeatMapData(context) {
		eloading.start("加载全部站点信息!!!")
		let currentTime = moment().subtract(10, "minutes").format("YYYY-MM-DD HH:mm:00"); //当前时间的前10分钟时间
		const res = await axios.get('/mazhaoDefaultApi/merge/getDataByDataTime/' + currentTime);
		eloading.reset("全部站点信息加载完成!!!")
		context.commit('initCurrentTimeHeatMapData',res.data)
	}
    
    // 获取热普图数据:指定时间
}