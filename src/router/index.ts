import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const IndexView = () => import('@/views/IndexView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const WalletView = () => import('@/views/WalletView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: WalletView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
