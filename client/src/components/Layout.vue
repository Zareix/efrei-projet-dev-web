<script setup>
import { reactive } from "vue";

const user = reactive({});

user.value = JSON.parse(localStorage.getItem("user"));
</script>

<template>
  <nav
    class="rounded border-gray-200 bg-gray-100 px-2 py-2.5 dark:bg-gray-800 sm:px-4"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="flex items-center">
        <img
          src="../assets/logo.png"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >Projet Dev Web</span
        >
        <span
          class="ml-4 self-center whitespace-nowrap text-lg font-normal dark:text-white"
          v-if="user.value?.nomres"
        >
          Logged in as {{ user.value.nomres }} {{ user.value.prenomres }}</span
        >
      </div>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
        >
          <li>
            <router-link
              to="/materiels"
              class="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Matériels</router-link
            >
          </li>
          <li>
            <router-link
              to="/prets"
              class="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Prêts</router-link
            >
          </li>
          <li>
            <router-link
              to="/etudiants"
              class="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Etudiants</router-link
            >
          </li>
          <li>
            <router-link
              to="/responsables"
              class="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Responsables</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container mx-auto mt-4">
    <slot></slot>
  </main>
</template>

<style scoped></style>
