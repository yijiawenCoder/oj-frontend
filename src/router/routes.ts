import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import CanAdminView from "@/views/CanAdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/canAdmin",
    name: "仅管理员可见",
    component: CanAdminView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/about",
    name: "我的",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
