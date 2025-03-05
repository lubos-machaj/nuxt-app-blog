<template>
  <article class="slider-item">
    <NuxtLink :to="`/blog/${item.id}`" tabindex="-1">
      <NuxtImg :src="item.image" :alt="item.title" class="slider-item__image" />
      <div class="slider-item__content">
        <span class="slider-item__category" v-text="item.source" />
        <h2 class="slider-item__title">{{ item.title }}</h2>
        <Button variant="light" size="md">Read more</Button>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";
defineProps<{ item: Data }>();
</script>

<style scoped lang="scss">
.slider-item {
  min-height: px-to-rem(240);
  text-align: center;
  margin: 0 1px;
  scroll-snap-align: start;
  flex: 1 0 100%;
  background: $color-black;
  position: relative;

  @include media($bp-sm) {
    flex-basis: calc(100% / 2);
  }
  @include media($bp-md) {
    flex-basis: calc(100% / 4);
  }
}
.slider-item__image {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  position: absolute;
  filter: brightness(0.25);
  @include transition(filter);
  top: 0;
  z-index: 10;

  a:hover & {
    filter: brightness(0.35);
  }
}
.slider-item__content {
  @include flex(column, space-between, center);
  height: 100%;
  color: $color-white;
  position: relative;
  padding: px-to-rem(24);
  z-index: 20;
}
.slider-item__category {
  font-size: px-to-rem(12);
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  margin-bottom: px-to-rem(4);
}
.slider-item__title {
  font-size: px-to-rem(16);
  font-weight: $font-weight-semibold;
  margin-bottom: px-to-rem(16);
}
</style>
