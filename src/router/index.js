import Vue from 'vue'
import VueRouter from 'vue-router'
import aPage from '@/components/aPage'
import bPage from '@/components/bPage'
import cPage from '@/components/cPage'
import home from '@/components/home'
import phone from '@/components/phone'
// import tablet from '@/components/tablet'

Vue.use(VueRouter)

// 定义路由的时候如下定义，name也可为中文
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/aPage',
    component: aPage,
    // 子路由
    // children: [
    //   {
    //     path: 'phone',
    //     component: phone
    //   },
    //   {
    //     path: 'tablet',
    //     component: tablet
    //   },
    //   // 当进入到home时，下面的组件显示
    //   {
    //     path: '',
    //     component: phone
    //   }
    // ],
    name: 'aPage'
  },
  {
    path: '/bPage/:id',
    component: bPage,
    name: 'bPage'
  },
  {
    path: '/cPage',
    component: cPage,
    name: 'cPage'
  },
  {
    path: '/phone',
    component: phone,
    name: 'phone'
  }
]

export default new VueRouter({
  // mode: 'history',
  routes: routes
})
