import axios from 'axios'
import moment from 'moment'
import eloading from '../../../assets/global/js/eloading'

export default {
	// 初始化全部站点信息:当前时刻
	async initCurrentTimeAllStation(context) {
		eloading.start("加载热普地图数据")
		let currentTime = moment().subtract(10, "minutes").format("YYYY-MM-DD HH:mm:00"); //当前时间的前10分钟时间
		const res = await axios.get('/mazhaoDefaultApi/jt/api/getAllJTDataByDateTimeGeojson/' + currentTime);
		eloading.reset("加载热普地图数据加载完成!!!")
		context.commit('initCurrentTimeAllStation',res.data)
	}
}