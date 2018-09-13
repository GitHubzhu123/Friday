import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GrMenu from '@/components/personinfor/GrMenu'
// import GrzhangHu from '@/components/personinfor/GrzhangHu'

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
    },
  ]
})
