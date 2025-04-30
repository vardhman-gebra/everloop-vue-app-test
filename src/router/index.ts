import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Features from "../views/Features.vue";
import Pricing from "../views/Pricing.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
