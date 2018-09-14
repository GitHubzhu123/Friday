import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//个人中心
import GrMenu from '@/components/Grzx/GrMenu'
import DuiHuan from '@/components/Grzx/DuiHuan'
import Adress from '@/components/Grzx/Adress'
import NewAdress from '@/components/Grzx/NewAdress'
import AdressGuanL from '@/components/Grzx/AdressGuanL'


//购物车
import GouWuChe from '@/components/GouWuChe'
import GWC_tit from '@/components/GWC/GWC_tit'
import kong from '@/components/GWC/kong'
import GWC_you from '@/components/GWC/GWC_you'
//商品详情
import SPXQ from '@/components/SPXQ'
//home
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    // 个人中心
    {
      path: '/grmenu',
      name: 'GrMenu',
      component: GrMenu,
      children:[
        {
          path: '/duihuan',
          name: 'DuiHuan',
          component: DuiHuan
        },
        {
          path: '/adress',
          name: 'Adress',
          component: Adress,
        },
        {
          path: '/newadress',
          name: 'NewAdress',
          component: NewAdress,
        },
        {
          path: '/adressguanl',
          name: 'AdressGuanL',
          component: AdressGuanL,
        },
      ]
    },
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
    // {
    //   path: '/gwc_tit',
    //   name: 'GWC_tit',
    //   component: GWC_tit
    // },
    {
      path: '/spxq',
      name: 'SPXQ',
      component: SPXQ
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
