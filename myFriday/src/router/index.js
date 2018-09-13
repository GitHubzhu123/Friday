import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GrMenu from '@/components/personinfor/GrMenu'
// import GrzhangHu from '@/components/personinfor/GrzhangHu'

//购物车
import GouWuChe from '@/components/GouWuChe'
import GWC_tit from '@/components/GWC/GWC_tit'
import kong from '@/components/GWC/kong'
import GWC_you from '@/components/GWC/GWC_you'

import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/grzhanghu',
    //   name: 'GrzhangHu',
    //   component: GrzhangHu
    // },
    {
      path: '/grmenu',
      name: 'GrMenu',
      component: GrMenu
    //购物车
    {
      path: '/gouwuche',
      name: 'GouWuChe',
      component: GouWuChe,
      children:[
        {
          path: '/kong',
          name: 'kong',
          component: kong
        },
        {
          path: '/gwc_you',
          name: 'GWC_you',
          component: GWC_you
        },
      ]
    },
    {
      path: '/gwc_tit',
      name: 'GWC_tit',
      component: GWC_tit
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
