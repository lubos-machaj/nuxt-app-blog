<template>
  <Header />
  <Slider />
  <main class="container">
    <slot />
  </main>
</template>

<script setup lang="ts">
import Slider from "@/components/Slider/Slider.vue";
</script>
