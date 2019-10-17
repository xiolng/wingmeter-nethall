import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/views/login'),
      children:[
        {
          path: 'index',
          name: 'loginIndex',
          component: () => import('@/views/login/Login'),
          meta: {
            title: '登录'
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/login/Register'),
          meta: {
            title: '注册'
          }
        },
        {
          path: 'resetpassword',
          name: 'resetpassword',
          component: () => import('@/views/login/ResetPassword'),
          meta: {
            title: '重置密码'
          }
        },
      ]
    },
    {
      path: '/business',
      component: () => import('@/views/businessQuery'),
      meta: {
        title: '业务查询'
      },
      children:[
        {
          path: '/',
          name: 'businessIndex',
          component: () => import('@/views/businessQuery/Business'),
          meta: {
            title: '业务查询'
          },
        },
        {
          path: 'businessList',
          name: 'businessList',
          component: () => import('@/views/businessQuery/List'),
          meta: {
            title: '业务查询'
          }
        },
        //openCard
        {
          path: 'opencard',
          name:'opencard',
          component: () => import('@/views/businessQuery/openCard'),
          meta:{
            title: '开卡业务查询'
          }
        },
        {
          path: 'opencardDetail',
          name:'opencardDetail',
          component: () => import('@/views/businessQuery/openCard/detail'),
          meta:{
            title: '开卡业务查询详情'
          }
        },
        //fuseBroadband
        {
          path: 'fuseBroadband',
          name:'fuseBroadband',
          component: () => import('@/views/businessQuery/fuseBroadband'),
          meta:{
            title: '融宽业务查询'
          }
        },
        {
          path: 'fuseBroadbandDetail',
          name:'fuseBroadbandDetail',
          component: () => import('@/views/businessQuery/fuseBroadband/detail'),
          meta:{
            title: '融宽业务查询详情'
          }
        },
        //changePackage
        {
          path: 'changePackage',
          name:'changePackage',
          component: () => import('@/views/businessQuery/changePackage'),
          meta:{
            title: '变更套餐业务查询'
          }
        },
        {
          path: 'changePackageDetail',
          name:'changePackageDetail',
          component: () => import('@/views/businessQuery/changePackage/detail'),
          meta:{
            title: '变更套餐业务查询详情'
          }
        },
      ]
    },
    {
      path: '/openCard',
      component: () => import('@/views/openCard'),
      children:[
        {
          path: '/',
          name: 'openCardList',
          component: () => import('@/views/openCard/OpenCard'),
          meta:{
            title: '我要开卡'
          }
        }
      ]
    }

  ]
})
