import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView/HomeView.vue") },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/BlogView/BlogView.vue"),
  },
  {
    path: "/blog/:id",
    component: () => import("@/views/BlogView/BlogView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
