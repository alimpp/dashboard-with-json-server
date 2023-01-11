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
        path:"/tickets",
        name: "tickets",
        component: () => import("@/pages/tickets/index.vue"),
      },
      {
        path:"/tasks",
        name: "tasks",
        component: () => import("@/pages/tasks/index.vue"),
      },
      {
        path:"/charts",
        name: "charts",
        component: () => import("@/pages/charts/index.vue"),
      },
      {
        path:"/cards",
        name: "cards",
        component: () => import("@/pages/cards/index.vue"),
      },
      {
        path:"/elements",
        name: "elements",
        component: () => import("@/pages/elements/index.vue"),
      },
      {
        path:"/timeline",
        name: "timeline",
        component: () => import("@/pages/timeline/index.vue"),
      },
      {
        path:"/setting",
        name: "setting",
        component: () => import("@/pages/settings/index.vue"),
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
