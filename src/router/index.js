import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import StaffListView from '../views/StaffListView.vue'
// import OrdersView from '../views/OrdersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/staff_list',
    name: 'staff_list',
    component: StaffListView
  },

  // {
  //   path: '/orders',
  //   name: 'orders',
  //   component: OrdersView
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

