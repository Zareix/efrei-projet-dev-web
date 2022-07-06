<script setup>
import { ref } from "vue";
import axios from "axios";

const materiels = ref([]);

axios
  .get("http://localhost:3001/api/materiels")
  .then((res) => (materiels.value = res.data));
</script>

<template>
  <h1>Materiels</h1>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
      <thead
        class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Code barre</th>
          <th scope="col" class="px-6 py-3">Nom</th>
          <th scope="col" class="px-6 py-3">Description</th>
          <th scope="col" class="px-6 py-3">Date d'achat</th>
          <th scope="col" class="px-6 py-3">Prix d'achat</th>
          <th scope="col" class="px-6 py-3">Fournisseur</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          v-for="materiel in materiels"
        >
          <th
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            {{ materiel.codebarre }}
          </th>
          <td class="px-6 py-4">
            {{ materiel.nommat }}
          </td>
          <td class="px-6 py-4">
            {{ materiel.descriptionmat }}
          </td>
          <td class="px-6 py-4">
            {{ materiel.dateachatmat }}
          </td>
          <td class="px-6 py-4">
            {{ materiel.prixachatmat }}
          </td>
          <td class="px-6 py-4">
            {{ materiel.fournisseurmat }}
          </td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
