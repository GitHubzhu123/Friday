import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//个人中心
import GrMenu from '@/components/Grzx/GrMenu'
import DuiHuan from '@/components/Grzx/DuiHuan'
import Adress from '@/components/Grzx/Adress'
import NewAdress from '@/components/Grzx/NewAdress'
import AdressGuanL from '@/components/Grzx/AdressGuanL'
import GrZiLiao from '@/components/Grzx/GrZiLiao'
import YiJianFK from '@/components/Grzx/YiJianFK'

//购物车
import GouWuChe from '@/components/GouWuChe'
import GWC_tit from '@/components/GWC/GWC_tit'
import kong from '@/components/GWC/kong'
import GWC_you from '@/components/GWC/GWC_you'

//商品详情
import SPXQ from '@/components/SPXQ'

//主页
import Home from '@/components/Home'
import Lbt from '@/components/Lbt'
import Top from '@/components/Top'
import Login from '@/components/Login'
//积分商城
import Jfsc from '@/components/Jfsc'
//同城
import Tc from '@/components/Tc'
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
        {
          path: '/grziliao',
          name: 'GrZiLiao',
          component: GrZiLiao,
        },
        {
          path: '/yijianfk',
          name: 'YiJianFK',
          component: YiJianFK,
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
    {
      path: '/spxq',
      name: 'SPXQ',
      component: SPXQ
    },
    //主页
    {
      path: '/top',
      name: 'Top',
      component: Top,
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/jfsc',
          name: 'Jfsc',
          component: Jfsc
        },
        {
          path: '/tc',
          name: 'Tc',
          component: Tc
        },
      ]
    },
    //轮播图
    {
      path: '/lbt',
      name: 'Lbt',
      component: Lbt
    },
    //登录注册
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
