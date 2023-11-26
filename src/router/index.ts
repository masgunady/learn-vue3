import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TamuView from '../views/TamuView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import MainView from '@/views/MainView.vue'
import ListUser from '@/views/user/ListUser.vue'
import DetailUSer from '@/views/user/DetailUser.vue'
import PostView from '@/views/post/PostView.vue'
import CreatePostView from '@/views/post/CreatePostView.vue'
import PostDetailView from '@/views/post/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tamu',
      name: 'tamu',
      component: TamuView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginViewVue
    },
    {
      path: '/main',
      name: 'Main',
      component: MainView
    },
    {
      path: '/user',
      name: 'User',
      component: ListUser
    },
    {
      path: '/user/:id',
      name: 'Detail-user',
      component: DetailUSer
    },
    {
      path: '/post',
      name: 'Post List',
      component: PostView
    },
    {
      path: '/post/create',
      name: 'Post Create',
      component: CreatePostView
    },
    {
      path: '/post/detail/:id',
      name: 'Post Detail',
      component: PostDetailView
    }
  ]
})

export default router
