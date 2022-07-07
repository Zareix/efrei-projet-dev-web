<script setup>
import Layout from "../components/Layout.vue";

import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const login = ref("");
const password = ref("");
const error = ref(false);

const doLogin = () => {
  error.value = false;
  axios
    .get(
      `http://localhost:3001/api/responsables/login/${login.value}/${password.value}`
    )
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/materiels");
    })
    .catch(() => {
      error.value = true;
    });
};

localStorage.removeItem("user");
</script>

<template>
  <Layout>
    <form
      class="mx-auto block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <h1>Login</h1>
      <input
        type="text"
        class="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="login"
        required
        v-model="login"
      />
      <input
        type="password"
        class="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="password"
        required
        v-model="password"
      />

      <button
        data-modal-toggle="defaultModal"
        type="button"
        class="rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="doLogin()"
      >
        Login
      </button>
      <div class="mt-4 text-red-500" v-if="error">Wrong credentials</div>
    </form>
  </Layout>
</template>

<style></style>
