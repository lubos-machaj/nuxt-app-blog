<template>
  <BlogList />
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

definePageMeta({
  layout: "home",
});

useHead({
  title: "My Blog | Home",
  meta: [
    { name: "description", content: "This is the home page of my Nuxt app." },
  ],
});
</script>

<style scoped></style>
