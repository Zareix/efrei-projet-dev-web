<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const counting = () => {
  count.value += 1;
};
</script>

<template>
  Hello
  <p class="font-semibold">{{ msg }}</p>
  <button @click="count++">Count</button>
  <p>{{ count }}</p>
</template>

<style scoped>
p {
  text-decoration: underline;
}
</style>
