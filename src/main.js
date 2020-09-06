import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入ele
import ElementUI from 'element-ui'
// 导入ele CSS
import 'element-ui/lib/theme-chalk/index.css'
// 注册路由
Vue.use(VueRouter)
// 注册 ele
Vue.use(ElementUI)
// 实例化路由
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/findMusic'
    },
    {
      path: '/findMusic',
      component: findMusic
    },
    {
      path: '/newMusic',
      component: newMusic
    },
    {
      path: '/newMv',
      component: newMv
    },
    {
      path: '/musicPlay',
      component: musicPlay
    },
    {
      path: '*',
      redirect: '/findMusic'
    }
  ]
})
// 导入组件
import findMusic from './components/findMusic.vue'
import newMusic from './components/newMusic.vue'
import newMv from './components/newMv.vue'
import musicPlay from './components/musicPlay.vue'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
