import axios from './axios'

export const gets = (params) => {
    return axios.request({
        url: '/www',
        method: 'get',
        params
    })

}