<template>
  <h2 class="sr-only">Blog List</h2>
  <section class="blog">
    <BlogListItem v-for="item in data" :key="item.id" :item="item" />
  </section>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

const data = ref<Data[]>([]);
data.value = await getData(12);
</script>

<style scoped lang="scss">
.blog {
  padding: px-to-rem(32) 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  @include media($bp-sm) {
    padding: px-to-rem(32) px-to-rem(16);
  }
}
</style>
