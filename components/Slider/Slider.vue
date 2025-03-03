<template>
  <div class="slider">
    <article v-for="(item, index) in data" :key="index" class="slide">
      <div class="slide__content">
        <span class="slide__category" v-text="item.category" />
        <h2 class="slide__title">{{ item.title }}</h2>
        <Button variant="light">Read more</Button>
      </div>
      <NuxtImg class="slide__image" :src="item.image" />
    </article>
  </div>
</template>

<script setup lang="ts">
import type { SliderData } from "@/types/api";

const { data } = await useFetch<SliderData[]>("data.json");
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
.slide {
  min-height: 200px;
  text-align: center;
  margin: 1px;
  scroll-snap-align: start;
  flex: 1 0 100%;
  background: $color-black;
  position: relative;
  @include media($bp-xs) {
    flex-basis: 50%;
  }
  @include media($bp-sm) {
    flex-basis: calc(100% / 3);
  }
  @include media($bp-md) {
    flex-basis: calc(100% / 4);
  }
}
.slide__image {
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: 10;
}
.slide__content {
  color: $color-white;
  position: relative;
  top: 0;
  z-index: 20;
  padding: px-to-rem(24);
}
.slide__title {
  font-size: px-to-rem(24);
  margin-bottom: px-to-rem(8);
}
.slide__category {
  font-size: px-to-rem(12);
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-bottom: px-to-rem(8);
}
</style>
