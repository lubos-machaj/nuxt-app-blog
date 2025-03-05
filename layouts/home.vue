<template>
  <Header />

  <ClientOnly>
    <Slider />
  </ClientOnly>

  <main class="container">
    <slot />
  </main>
</template>

<script setup lang="ts">
import Slider from "@/components/Slider/Slider.vue";
</script>
