<template>
  <section class="blog" v-if="item">
    <div class="blog__header">
      <div class="container container--blog">
        <h2 class="blog__title" v-text="item.title" />
      </div>
    </div>

    <div class="blog__content container container--blog">
      <p class="blog__text" v-text="item.body" />
      <NuxtImg
        @click="toggleDialog()"
        class="blog__image"
        :src="getImage(item.id)"
        :alt="item.title"
        quality="50"
        loading="lazy"
        sizes="280px xs:500px md:688px"
      />
      <p class="blog__text" v-text="item.body" />
    </div>

    <Dialog v-model="showDialog">
      <NuxtImg
        :src="getImage(item.id)"
        :alt="item.title"
        loading="lazy"
        sizes="280px xs:576px md:768px lg:992px xl:1200px"
      />
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
.container--blog {
  @include media($bp-lg) {
    max-width: px-to-rem(720);
  }

  @include media($bp-xl) {
    max-width: px-to-rem(720);
  }
}

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
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: px-to-rem(16);

  &:hover {
    filter: brightness(0.8);
    @include transition(filter);
  }
}
</style>
