import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // home path
      path: '/',
      component: Home
    },
    {
      // portfolio index path
      path: '/portfolio',
      component: Portfolio
    },
    {
      // stocks index path
      path: '/stocks',
      component: Stocks
    }
  ]
})
