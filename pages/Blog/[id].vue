<template>
  <div>
    <h2>Blog page {{ id }}</h2>
    <p>{{ article?.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

const { id } = useRoute().params;
const { data } = await useFetch<Data[]>("/api/data");

const article = computed(() =>
  data.value?.find((item) => item.id === Number(id))
);
</script>

<style scoped></style>
