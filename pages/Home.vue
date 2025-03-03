<template>
  <div>
    <h2>Home page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae
      at placeat non iste rerum vero voluptatibus nam distinctio, fugit
      perspiciatis unde quisquam commodi ex modi, corporis porro velit sed?
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

useHead({
  title: "Nuxt Blog - Home",
  meta: [
    { name: "description", content: "This is the home page of my Nuxt app." },
  ],
});
</script>

<style scoped></style>
