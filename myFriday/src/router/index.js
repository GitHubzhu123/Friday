import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
//购物车
import GouWuChe_wu from '@/components/GouWuChe_wu'
import GWC_tit from '@/components/GWC/GWC_tit'

=======
import Home from '@/components/Home'
>>>>>>> 36105957955d09e9fdec4fc9390583c84df14955

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
<<<<<<< HEAD
    //购物车
    {
      path: '/gouwuche_wu',
      name: 'GouWuChe_wu',
      component: GouWuChe_wu
    },
    {
      path: '/gwc_tit',
      name: 'GWC_tit',
      component: GWC_tit
=======
    {
      path: '/home',
      name: 'Home',
      component: Home
>>>>>>> 36105957955d09e9fdec4fc9390583c84df14955
    },
  ]
})
