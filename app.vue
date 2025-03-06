<template>
  <div class="app">
    <Loader v-if="loading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const store = useBlogStore();
const { loading } = store;
</script>

<style lang="scss"></style>
