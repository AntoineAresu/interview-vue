import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CreateBeneficiaryView from "../views/CreateBeneficiaryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/beneficiary/create",
      name: "createBeneficiary",
      component: CreateBeneficiaryView,
    },
  ],
});

export default router;
