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
//确认订单
import QueRendingdan from '@/components/QueRendingdan'
import qrdd_diziwu from '@/components/QRDD/qrdd_diziwu'
import qrdd_dizi_you from '@/components/QRDD/qrdd_dizi_you'
import qrdd_spxx from '@/components/QRDD/qrdd_spxx'
import qrdd_sdsj from '@/components/QRDD/qrdd_sdsj'
//主页
//home
import Home from '@/components/Home'
import Lbt from '@/components/Lbt'
import Top from '@/components/Top'
import Login from '@/components/Login'

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
    //确认订单
    {
      path: '/querendingdan',
      name: 'QueRendingdan',
      component: QueRendingdan,
      children:[

      ]
    },
    {
      path: '/qrdd_diziwu',
      name: 'qrdd_diziwu',
      component: qrdd_diziwu
    },
    {
      path: '/qrdd_dizi_you',
      name: 'qrdd_dizi_you',
      component: qrdd_dizi_you
    },
    {
      path: '/qrdd_spxx',
      name: 'qrdd_spxx',
      component: qrdd_spxx
    },
    {
      path: '/qrdd_sdsj',
      name: 'qrdd_sdsj',
      component: qrdd_sdsj
    },
    //商品详情
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
