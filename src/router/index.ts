import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name: "dashboard layout",
    redirect:"/dashboard",
    component: () => import("@/layout/dashboard/index.vue"),
    children: [
      {
        path:"/dashboard",
        name: "dashboard",
        component: () => import("@/pages/dashboard/index.vue"),
      },
      {
        path:"/blogs",
        name: "blogs",
        component: () => import("@/pages/blogs/index.vue"),
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name : "404",
    component: () => import("@/layout/404/index.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
