// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import BaiduMap from 'vue-baidu-map'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component('v-chart', ECharts)
Vue.use(BaiduMap, {  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */  ak: 'vKkbgO3q6lO8DC3Dy2AklH3afyMFSBGR'})
 // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size


Vue.config.productionTip = false

/* eslint-disable no-new */
import test from '@/views/test.vue'
import home from '@/views/home.vue'
import echarts from '@/views/echarts.vue'
import p1 from '@/components/p1.vue'
import map from '@/components/map.vue'
let router = new VueRouter({
  routes: [
    {path: '/home', component: home},
    {path: '/test', component: test},
    {path: '/echarts', component: echarts},
    {path: '/p1', component: p1},
    {path: '/map', component: map}
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
