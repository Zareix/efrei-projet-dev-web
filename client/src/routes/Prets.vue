<script setup>
import Layout from "../components/Layout.vue";
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const prets = ref([]);
const etudiants = ref([]);
const responsables = ref([]);
const materiels = ref([]);

const idetu = ref("");
const codebarre = ref("");
const datedebutpret = ref("");
const datefinpret = ref("");
const idres = ref("");

const fetchData = () => {
  axios
    .get("http://localhost:3001/api/prets")
    .then((res) => (prets.value = res.data));
  axios
    .get("http://localhost:3001/api/etudiants")
    .then((res) => (etudiants.value = res.data));
  axios
    .get("http://localhost:3001/api/responsables")
    .then((res) => (responsables.value = res.data));
  axios
    .get("http://localhost:3001/api/materiels")
    .then((res) => (materiels.value = res.data));
};

const save = () => {
  axios
    .post("http://localhost:3001/api/prets", {
      idetu: idetu.value,
      codebarre: codebarre.value,
      datedebutpret: datedebutpret.value,
      datefinpret: datefinpret.value,
      idres: idres.value,
    })
    .then((res) => {
      fetchData();
    });
};

const remove = (idetu, codebarre, datedebutpret) => {
  axios
    .delete(
      `http://localhost:3001/api/prets/${idetu}/${codebarre}/${encodeURIComponent(
        datedebutpret
      )}`
    )
    .then((res) => {
      fetchData();
    });
};

const router = useRouter();
if (!localStorage.getItem("user")) router.push("/login");

fetchData();
</script>

<template>
  <Layout>
    <h1>Etudiants</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Id étudiant</th>
            <th scope="col" class="px-6 py-3">Code barre</th>
            <th scope="col" class="px-6 py-3">Date début prêt</th>
            <th scope="col" class="px-6 py-3">Date fin prêt</th>
            <th scope="col" class="px-6 py-3">Id res</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            v-for="pret in prets"
          >
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {{ pret.idetu }}
            </th>
            <td class="px-6 py-4">
              {{ pret.codebarre }}
            </td>
            <td class="px-6 py-4">
              {{ pret.datedebutpret }}
            </td>
            <td class="px-6 py-4">
              {{ pret.datefinpret }}
            </td>
            <td class="px-6 py-4">
              {{ pret.idres }}
            </td>
            <td class="flex gap-2 px-6 py-4 text-right">
              <button
                class="font-medium text-red-600 hover:underline dark:text-red-500"
                @click="remove(pret.idetu, pret.codebarre, pret.datedebutpret)"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr
            class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          >
            <td class="px-6 py-4">
              <select
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Etudiants"
                required
                id="idetu"
                v-model="idetu"
              >
                <option
                  v-for="etudiant in etudiants"
                  v-bind:value="etudiant.idetu"
                >
                  {{ etudiant.prenometu }} {{ etudiant.nometu }}
                </option>
              </select>
            </td>
            <td class="px-6 py-4">
              <select
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Code barre"
                required
                id="codebarre"
                v-model="codebarre"
              >
                <option
                  v-for="materiel in materiels"
                  v-bind:value="materiel.codebarre"
                >
                  {{ materiel.codebarre }} {{ materiel.nommat }}
                </option>
              </select>
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Date début prêt"
                required
                type="text"
                id="datedebutpret"
                v-model="datedebutpret"
              />
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Date fin prêt"
                required
                type="text"
                id="datefinpret"
                v-model="datefinpret"
              />
            </td>
            <td class="px-6 py-4">
              <select
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Responsable"
                required
                id="idres"
                v-model="idres"
              >
                <option
                  v-for="responsable in responsables"
                  v-bind:value="responsable.idres"
                >
                  {{ responsable.nomres }} {{ responsable.prenomres }}
                </option>
              </select>
            </td>
            <td class="px-6 py-4 text-right">
              <button
                @click="save()"
                class="font-medium text-blue-600 hover:underline dark:text-green-500"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<style></style>
