import { ElLoading } from 'element-plus';
let loadingInstance
const options = {
    fullscreen: true,
    text: "正在初始化一些必要数据..."
}

export default {
    start(text) {
        if(text) options.text = text
        loadingInstance = ElLoading.service(options);
    },
    reset(text, type) {
        if (text) {
            loadingInstance.setText(text)
        }
    },
    stop() {
        loadingInstance.close()
    },
}