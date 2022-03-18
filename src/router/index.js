import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import StaffListView from '../views/admin/Users/StaffListView.vue'
import AddUserView from '../views/admin/Users/AddUserView.vue'
import DetailUser from '../views/admin/Users/DetailUserView.vue'
import WorkShifts from '../views/admin/WorkShifts/WorkShiftsView.vue'
import AddWorkShift from '../views/admin/WorkShifts/AddWorkShiftView.vue'
import DetailWorkShift from '../views/admin/WorkShifts/DetailWorkShiftView.vue'
import AddUserToWorkShift from '../views/admin/WorkShifts/AddUserToWorkShiftView.vue'
import OrdersView from '../views/cook/OrdersView.vue'

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
  {
    path: '/add_user',
    name: 'add_user',
    component: AddUserView
  },
  {
    path: '/detail_user/:id',
    name: 'detail_user',
    component: DetailUser
  },
  {
    path: '/work_shifts',
    name: 'work_shifts',
    component: WorkShifts
  },
  {
    path: '/add_work_shift',
    name: 'add_work_shift',
    component: AddWorkShift
  },
  {
    path: '/detail_work_shift/:id',
    name: 'detail_work_shift',
    component: DetailWorkShift
  },
  {
    path: '/add_user_to_work_shift/:id',
    name: 'add_user_to_work_shift',
    component: AddUserToWorkShift
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

