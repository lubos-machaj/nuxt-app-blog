<template>
  <div class="slider">
    <div class="slider__wrapper">
      <SliderItem
        v-if="data"
        v-for="item in data"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

const data = ref<Data[]>([]);
data.value = await getData(4);
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  background-color: #08071b;
}
.slider__wrapper {
  min-height: px-to-rem(240);
  max-width: px-to-rem(1440);
  margin: 0 auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
