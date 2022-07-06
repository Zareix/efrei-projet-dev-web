import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHashHistory } from "vue-router";
import "flowbite";

import "./global.css";

import Home from "./routes/Home.vue";
import Materiels from "./routes/Materiels.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/materiels", component: Materiels },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount("#app");
