import axios from './axios'

/**
 * POST 方法 传数据用 data
 * GET 方法传数据用 params
 */
console.log(require('./home')(axios));
export const homeApi = require('./home')(axios)