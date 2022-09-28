import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: {
        name: "Main",
      },
    },
    {
      path: "/main",
      name: "Main",
      component: () => import("@/views/MainView.vue"),
    },
    {
      path: "/product/:id",
      name: "Product",
      component: () => import("@/views/ProductView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
