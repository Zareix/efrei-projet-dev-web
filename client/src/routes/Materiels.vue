<script setup>
import Layout from "../components/Layout.vue";
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const materiels = ref([]);

const codebarre = ref("");
const nommat = ref("");
const descriptionmat = ref("");
const dateachatmat = ref("");
const prixachatmat = ref(0);
const fournisseurmat = ref("");

const editing = ref({});

const fetchData = () => {
  axios
    .get("http://localhost:3001/api/materiels")
    .then((res) => (materiels.value = res.data));
};

const save = () => {
  axios
    .post("http://localhost:3001/api/materiels", {
      codebarre: codebarre.value,
      nommat: nommat.value,
      descriptionmat: descriptionmat.value,
      dateachatmat: dateachatmat.value,
      prixachatmat: prixachatmat.value,
      fournisseurmat: fournisseurmat.value,
    })
    .then((res) => {
      fetchData();
    });
};

const remove = (id) => {
  axios.delete("http://localhost:3001/api/materiels/" + id).then((res) => {
    fetchData();
  });
};

const edit = () => {
  axios
    .patch(
      "http://localhost:3001/api/materiels/" + editing.value.codebarre,
      editing.value
    )
    .then((res) => {
      editing.value = {};
      fetchData();
    });
};

const router = useRouter();
if (!localStorage.getItem("user")) router.push("/login");

fetchData();
</script>

<template>
  <Layout>
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
            <td class="flex gap-2 px-6 py-4 text-right">
              <button
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                @click="editing = { ...materiel }"
              >
                Edit
              </button>
              <button
                class="font-medium text-red-600 hover:underline dark:text-red-500"
                @click="remove(materiel.codebarre)"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr
            class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          >
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Code barre"
                required
                type="text"
                id="codebarre"
                v-model="codebarre"
              />
            </th>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nom"
                required
                type="text"
                id="nommat"
                v-model="nommat"
              />
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Description"
                required
                type="text"
                id="descriptionmat"
                v-model="descriptionmat"
              />
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Date achat"
                required
                type="text"
                id="dateachatmat"
                v-model="dateachatmat"
              />
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Prix"
                required
                type="number"
                min="0"
                id="prixachatmat"
                v-model="prixachatmat"
              />
            </td>
            <td class="px-6 py-4">
              <input
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Fournisseur"
                required
                type="text"
                id="fournisseurmat"
                v-model="fournisseurmat"
              />
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
    <div v-if="editing.codebarre">
      <div
        class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-10"
      >
        <div
          id="defaultModal"
          tabindex="-1"
          class="mx-auto h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:h-full"
        >
          <div class="mx-auto h-full w-full max-w-2xl p-4 md:h-auto">
            <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div
                class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Editing {{ editing.codebarre }}
                </h3>
                <button
                  type="button"
                  class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="editing = {}"
                >
                  <svg
                    class="h-5 w-5"
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
              </div>
              <div class="space-y-6 p-6">
                <div class="mb-3">
                  <label for="codebarre">Code barre</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="codebarre"
                    required
                    v-model="editing.codebarre"
                  />
                </div>
                <div class="mb-3">
                  <label for="nommat">Nom</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="nommat"
                    required
                    v-model="editing.nommat"
                  />
                </div>
                <div class="mb-3">
                  <label for="descriptionmat">Description</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="descriptionmat"
                    required
                    v-model="editing.descriptionmat"
                  />
                </div>
                <div class="mb-3">
                  <label for="dateachatmat">Date achat</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="dateachatmat"
                    required
                    v-model="editing.dateachatmat"
                  />
                </div>
                <div class="mb-3">
                  <label for="prixachatmat">Prix achat</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="prixachatmat"
                    required
                    v-model="editing.prixachatmat"
                  />
                </div>
                <div class="mb-3">
                  <label for="fournisseurmat">Fournisseur</label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="fournisseurmat"
                    required
                    v-model="editing.fournisseurmat"
                  />
                </div>
              </div>
              <div
                class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
              >
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  @click="edit()"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                  @click="editing = {}"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style></style>
