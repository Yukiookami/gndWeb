// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import gndHome from './components/gndHome'
import gndAbout from './components/gndAbout'
import gndContactUs from './components/gndContactUs'
import gndJoinUs from './components/gndJoinUs'
import gndVideo from './components/gndVideo'
import gndProject from './components/gndProject'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/error.svg',
  loading: './assets/loading.svg',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
Vue.use(iView)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: gndHome, meta: {title: '首页'}},
    {path: '/gndAbout', component: gndAbout, meta: {title: '关于我们'}},
    {path: '/gndContactUs', component: gndContactUs, meta: {title: '联系我们'}},
    {path: '/gndJoinUs', component: gndJoinUs, meta: {title: '招贤纳士'}},
    {path: '/gndVideo', component: gndVideo, meta: {title: '媒体之声'}},
    {path: '/gndProject', component: gndProject, meta: {title: '项目精选'}}
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
