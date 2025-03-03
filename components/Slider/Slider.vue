<template>
  <div class="slider">
    <div class="slider__wrapper">
      <article v-for="(item, index) in data" :key="index" class="slide">
        <NuxtImg class="slide__image" :src="item.image" />
        <div class="slide__content">
          <span class="slide__category" v-text="item.category" />
          <h2 class="slide__title">{{ item.title }}</h2>
          <Button variant="light" size="sm">Read more</Button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SliderData } from "@/types/api";

const { data } = await useFetch<SliderData[]>("slider-data.json");
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  background-color: #08071b;
}
.slider__wrapper {
  max-width: px-to-rem(1440);
  margin: 0 auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  scrollbar-width: none;
  background-color: $background-color;

  &::-webkit-scrollbar {
    display: none;
  }
}
.slide {
  min-height: px-to-rem(240);
  text-align: center;
  margin: 0 0.5px;
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
  position: absolute;
  filter: brightness(0.3);
  top: 0;
  z-index: 10;
}
.slide__content {
  @include flex(column, space-between, center);
  height: 100%;
  color: $color-white;
  position: relative;
  padding: px-to-rem(24);
  z-index: 20;
}
.slide__category {
  font-size: px-to-rem(12);
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  margin-bottom: px-to-rem(4);
}
.slide__title {
  font-size: px-to-rem(20);
  font-weight: $font-weight-normal;
  margin-bottom: px-to-rem(16);
}
</style>
