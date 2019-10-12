import axios from 'axios'

class HttpRequest {
    constructor () {
        this.baseUrl = '/'
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                //
            }
        }
        return config
    }
    destroy (url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors (instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true
            if (!config.url.includes('/auth/login')) {
                config.headers['Authorization'] = `${localStorage.getItem('jwt-token')}`
            }
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const { data } = res
            return data
        }, error => {
            if (error.response.status === 401){
                localStorage.removeItem('jwt-token')
                const links = location.origin
                window.open(`https://sso.youxin.com/logout?service=${links}`,'_self')
            }
            this.destroy(url)
            // addErrorLog(error.response)
            return Promise.reject(error)
        })
    }
    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default new HttpRequest()
