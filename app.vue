<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <Loader v-if="loading" />
    </transition>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const store = useBlogStore();
const { loading } = store;
</script>

<style lang="scss">
.fade-enter-active {
  opacity: 1;
  transition: all 0.5s ease-out;
}
.fade-leave-active {
  opacity: 0;
  transition: all 0.5s ease-out;
}
</style>
