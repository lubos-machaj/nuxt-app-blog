<template>
  <NuxtLink :to="`/blog/${item.id}`">
    <article class="blog-item">
      <NuxtImg class="slider-item__image" :src="item.image" />
      <div class="blog-item__content">
        <span class="blog-item__source" v-text="item.source" />
        <h3 class="blog-item__title" v-text="item.title" />
        <div class="blog-item__separator" />
        <p class="blog-item__decription" v-text="item.description" />
        <Button class="blog-item__btn" variant="link" size="md"
          >Read more</Button
        >
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

defineProps<{ item: Data }>();
</script>

<style scoped lang="scss">
.blog-item {
  width: 100%;
  margin-bottom: px-to-rem(16);
  text-align: center;
  @include transition(box-shadow);
  &:hover {
    box-shadow: $box-shadow-m;
  }

  @include media($bp-sm) {
    width: calc(100% / 2);
  }

  @include media($bp-md) {
    width: calc(100% / 3);
  }
}
.slider-item__image {
  width: 100%;
}
.blog-item__content {
  padding: px-to-rem(8) px-to-rem(24) px-to-rem(16);
}
.blog-item__source {
  display: inline-block;
  font-size: px-to-rem(12);
  margin-bottom: px-to-rem(4);
}
.blog-item__title {
  font-size: px-to-rem(15);
}
.blog-item__separator {
  display: inline-block;
  width: px-to-rem(75);
  height: px-to-rem(2);
  margin: px-to-rem(12) auto px-to-rem(4);
  background-color: $color-gray;
}
.blog-item__decription {
  font-size: px-to-rem(14);
  margin-bottom: px-to-rem(12);
}
</style>
