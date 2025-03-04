<template>
  <section class="blog" v-if="data">
    <div class="blog__header">
      <div class="container">
        <h2 class="blog__title" v-text="data.title" />
      </div>
    </div>

    <div class="blog__content container">
      <p class="blog__text" v-text="data.description" />
      <p class="blog__text" v-text="data.content" />
      <NuxtImg class="blog__image w-100" :src="data.image" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blog-detail",
});

import type { Data } from "@/types/api";

const { id } = useRoute().params;

const data = ref<Data | null>(null);
const arrayData = await getData(0, Number(id));
data.value = arrayData[0];
</script>

<style scoped lang="scss">
.blog__content {
  padding: px-to-rem(16);
}
.blog__header {
  min-height: px-to-rem(100);
  padding: px-to-rem(16);
  background-color: rgba($color-cyan, 0.3);
  @include flex(row, center, center);
}
.blog__title {
  font-size: px-to-rem(24);
  text-align: center;
}
.blog__text {
  margin-bottom: px-to-rem(16);
}
</style>
