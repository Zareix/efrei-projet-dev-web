import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHashHistory } from "vue-router";
import "flowbite";

import "./global.css";

import Materiels from "./routes/Materiels.vue";
import Responsables from "./routes/Responsables.vue";
import Etudiants from "./routes/Etudiants.vue";
import Prets from "./routes/Prets.vue";
import Login from "./routes/Login.vue";

const routes = [
  { path: "/", redirect: "/materiels" },
  { path: "/responsables", component: Responsables },
  { path: "/materiels", component: Materiels },
  { path: "/etudiants", component: Etudiants },
  { path: "/prets", component: Prets },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount("#app");
