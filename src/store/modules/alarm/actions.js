import axios from 'axios'
import moment from 'moment'
import eloading from '../../../assets/global/js/eloading'

export default {
	// 初始化全部站点预警信息:当前时刻
	async initCurrentTimeAlarmData(context) {
		eloading.start("加载全部站点预警信息")
		let currentTime = moment().subtract(10, "minutes").format("YYYY-MM-DD HH:mm:00"); //当前时间的前10分钟时间
		const res = await axios.get('/mazhaoDefaultApi/alarm/getVisibilityAlarmByDatatime/' + currentTime);
		eloading.reset("全部站点预警信息加载完成!!!")
		context.commit('initCurrentTimeAlarmData',res.data)
	}
}