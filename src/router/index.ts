import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { RouteName } from "./enums/Route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteName.Home,
      component: HomeView,
    },
    {
      path: "/room-creator",
      name: RouteName.RoomCreator,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RoomCreatorView.vue"),
    },
    {
      path: "/sign",
      name: RouteName.Sign,
      component: () => import("../views/SignView.vue"),
    },
  ],
});

export default router;
