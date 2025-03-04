<template>
  <div>Home data: {{ data }}</div>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Nuxt Blog - Home",
  meta: [
    { name: "description", content: "This is the home page of my Nuxt app." },
  ],
});

const data = ref<Data[]>([]);
data.value = await getData(4);
</script>

<style scoped></style>
