<template>
  <section class="blog" v-if="item">
    <div class="blog__header">
      <div class="container">
        <h2 class="blog__title" v-text="item.title" />
      </div>
    </div>

    <div class="blog__content container">
      <p class="blog__text" v-text="item.body" />
      <p class="blog__text" v-text="item.body" />
      <NuxtImg
        @click="toggleDialog()"
        class="blog__image w-100"
        :src="getImage(item.id)"
        :alt="item.title"
      />
    </div>

    <Dialog v-model="showDialog">
      <NuxtImg :src="getImage(item.id)" :alt="item.title" />
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

/**
 * Data
 */
const { id } = useRoute().params;
const arrayData = await getData(0, Number(id));
const item = ref<Data>(arrayData[0]);

/**
 * Dialog
 */
const showDialog = ref(false);
const toggleDialog = () => {
  showDialog.value = !showDialog.value;
};

definePageMeta({
  layout: "blog-detail",
});

item.value &&
  useHead({
    title: `My Blog | ${item.value.title}`,
    meta: [
      {
        name: "description",
        content: item.value.body,
      },
    ],
  });
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
.blog__image {
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
    @include transition(filter);
  }
}
</style>
