import { createRouter, createWebHistory } from "vue-router";
import Layout from "./routes/Layout.vue";
import Landing from "./routes/Landing.vue";
import Pricing from "./routes/Pricing.vue";
import Dashboard from "./routes/Dashboard.vue";
import Showcase from "./routes/Showcase.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Landing },
        { path: "pricing", component: Pricing },
        { path: "dashboard", component: Dashboard },
        { path: "components", component: Showcase },
      ],
    },
  ],
});
