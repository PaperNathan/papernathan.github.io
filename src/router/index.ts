import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/home", component: () => import("@/views/HomeView/HomeView.vue") },
  { path: "/blog", component: () => import("@/views/BlogView/BlogView.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
