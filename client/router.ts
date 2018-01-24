import Vue from 'vue'
import VueRouter from 'vue-router'


// router settings
Vue.use(VueRouter)

const index = (resolve:any) => require(['./modules/index.vue'], resolve)
const news = (resolve:any) => require(['./modules/News.vue'], resolve)
const tools = (resolve:any) => require(['./modules/Tools.vue'], resolve)
const resource = (resolve:any) => require(['./modules/Resource.vue'], resolve)
const project = (resolve:any) => require(['./modules/Project.vue'], resolve)
const aboutUs = (resolve:any) => require(['./modules/AboutUs.vue'], resolve)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    name: 'index',
    path: '/index',
    component: index,
    meta: { auth: false }
  }, {
    path: '/news',
    component: index
  },
  {
    path: '/tools',
    component: index
  },
  {
    path: '/resource',
    component: index
  },
  {
    path: '/project',
    component: index
  },
  {
    path: '/aboutUs',
    component: index
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
