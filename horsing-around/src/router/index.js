import { createRouter, createWebHistory } from "vue-router";

import RacingPage from "@/views/Racing.vue";
import JockeyPage from "@/views/Jockey.vue";
import HorsesPage from "@/views/Horses.vue";
import LoginComp from "@/views/Login.vue";
import NotFound from "@/views/NotFound";
import ProfilePage from "@/views/Profile";

const routes = [
  {
    path: "/",
    name: "Racing",
    component: RacingPage,
  },
  {
    path: "/horses",
    name: "Horses",
    component: HorsesPage,
  },
  {
    path: "/jockey",
    name: "Jockey",
    component: JockeyPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComp,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
