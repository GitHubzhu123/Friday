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
import BangDiPhone from '@/components/Grzx/BangDiPhone'
import GengHuanPhone from '@/components/Grzx/GengHuanPhone'
import YanZeOld from '@/components/Grzx/HuanPhone/YanZeOld'
import YanZeNew from '@/components/Grzx/HuanPhone/YanZeNew'
import YanZeSucc from '@/components/Grzx/HuanPhone/YanZeSucc'
import WdZhangH from '@/components/Grzx/WdZhangH'
import WdDingDan from '@/components/Grzx/WdDingDan'
import WdDingDan2 from '@/components/Grzx/WdDingDan2'
import WodeJiFen from '@/components/Grzx/WodeJiFen'
import JifenDingdan from '@/components/Grzx/JifenDingdan'
import WodeMoney from '@/components/Grzx/WodeMoney'
import WodeCollect from '@/components/Grzx/WodeCollect'
import RecentLook from '@/components/Grzx/RecentLook'
import GaiPassword from '@/components/Grzx/GaiPassword'
import WodeMessage from '@/components/Grzx/WodeMessage'

//购物车
import GouWuChe from '@/components/GouWuChe'
import GWC_tit from '@/components/GWC/GWC_tit'
import kong from '@/components/GWC/kong'
import GWC_you from '@/components/GWC/GWC_you'

//商品详情
import SPXQ from '@/components/SPXQ'

//主页
//home
import Home from '@/components/Home'
import Lbt from '@/components/Lbt'
import Top from '@/components/Top'

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
        {
          path: '/bangdiphone',
          name: 'BangDiPhone',
          component: BangDiPhone,
        },
        {
          path: '/genghuanphone',
          name: 'GengHuanPhone',
          component: GengHuanPhone,
          children:[
            {
              path: '/',
              name: 'YanZeOld',
              component: YanZeOld,
            },
            {
              path: '/yanzenew',
              name: 'YanZeNew',
              component: YanZeNew,
            },
            {
              path: '/yanzesucc',
              name: 'YanZeSucc',
              component: YanZeSucc,
            },
          ]
        },
        {
          path: '/wdzhangh',
          name: 'WdZhangH',
          component: WdZhangH,
        },
        {
          path: '/wddingdan',
          name: 'WdDingDan',
          component: WdDingDan,
        },
        {
          path: '/wddingdan2',
          name: 'WdDingDan2',
          component: WdDingDan2,
        },
        {
          path: '/wodejifen',
          name: 'WodeJiFen',
          component: WodeJiFen,
        },
        {
          path: '/jifendingdan',
          name: 'JifenDingdan',
          component: JifenDingdan,
        },
        {
          path: '/wodemoney',
          name: 'WodeMoney',
          component: WodeMoney,
        },
        {
          path: '/wodecollect',
          name: 'WodeCollect',
          component: WodeCollect,
        },
        {
          path: '/recentlook',
          name: 'RecentLook',
          component: RecentLook,
        },
        {
          path: '/gaipassword',
          name: 'GaiPassword',
          component: GaiPassword,
        },
        {
          path: '/wodemessage',
          name: 'WodeMessage',
          component: WodeMessage,
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
    {
      path: '/lbt',
      name: 'Lbt',
      component: Lbt
    },
  ]
})
