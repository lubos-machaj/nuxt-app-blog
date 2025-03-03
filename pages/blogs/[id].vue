<template>
  <div>
    <h2>Blog page {{ id }}</h2>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
</script>

<style scoped></style>
