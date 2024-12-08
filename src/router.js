// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Import your Home component
import Portfolio from './portfolio.vue'; // Import your Portfolio component

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;