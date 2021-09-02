export default (element) => {
    const list = [
        {
            type: 'temperature',
            label: '大气温度',
            iconcode: '&#xe693;'
        },
        {
            type: 'humidity',
            label: '大气湿度',
            iconcode: '&#xe693;'
        },
        {
            type: 'rainfall',
            label: '降雨量',
            iconcode: '&#xe68b;'
        },
        {
            type: 'iNWindSpeed',
            label: '顺时风',
            iconcode: '&#xe68a;'
        },
        {
            type: 'iNWindDirection',
            label: '顺时风向',
            iconcode: '&#xeb49;'
        },
        {
            type: 'dMWindSpeed',
            label: '二分风',
            iconcode: '&#xe68a;'
        },
        {
            type: 'dMWindDirection',
            label: '二分风向',
            iconcode: '&#xeb49;'
        },
        {
            type: 'tMWindSpeed',
            label: '十分风',
            iconcode: '&#xe6ec;'
        },
        {
            type: 'tMWindDirection',
            label: '十分风向',
            iconcode: '&#xeb49;'
        },
        {
            type: 'temperatureA',
            label: '大气温度A',
            iconcode: '&#xe693;'
        },
        {
            type: 'temperatureB',
            label: '大气温度B',
            iconcode: '&#xe693;'
        },
        {
            type: 'temperatureC',
            label: '大气温度C',
            iconcode: '&#xe693;'
        },
        {
            type: 'iNWindSpeed_Max',
            label: '顺时风极大',
            iconcode: '&#xe68d;'
        },
        {
            type: 'iNWindDirection_Max',
            label: '顺时风风向极大',
            iconcode: '&#xeb49;'
        },
        {
            type: 'preasure',
            label: '大气压力',
            iconcode: '&#xe998;'
        },
        {
            type: 'roadCondition',
            label: '路面状况',
            iconcode: '&#xe796;'
        },
        {
            type: 'waterThickness',
            label: '水膜厚度',
            iconcode: '&#xe68f;'
        },
        {
            type: 'iceThickness',
            label: '冰层厚度',
            iconcode: '&#xe622;'
        },
        {
            type: 'snowThickness',
            label: '雪层厚度',
            iconcode: '&#xe622;'
        },
        {
            type: 'wetSlip',
            label: '湿滑系数',
            iconcode: '&#xe653;'
        },
    ]
  return list.filter(item=>{
      return item.type===element
  })[0]
};
