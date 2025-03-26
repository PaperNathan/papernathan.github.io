import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView/HomeView.vue") },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
