<template>
  <h2 class="sr-only">Blog List</h2>
  <section class="blog">
    <div class="container">
      <BlogListItem v-for="item in data" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

const data = ref<Data[]>([]);
data.value = await getData(10);
</script>

<style scoped lang="scss">
.blog {
  padding: px-to-rem(16);
}
</style>
