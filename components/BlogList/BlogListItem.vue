<template>
  <article class="blog-item">
    <NuxtLink :to="`/blog/${item.id}`" tabindex="-1">
      <NuxtImg
        :src="getImage(item.id)"
        :alt="item.title"
        class="slider-item__image"
        quality="50"
        loading="lazy"
        sizes="280px xs:480px md:320px lg:288px xl:348px"
      />
      <div class="blog-item__content">
        <span class="blog-item__tag" v-text="item.tag" />
        <h3 class="blog-item__title" v-text="item.title" />
        <div class="blog-item__separator" />
        <p class="blog-item__decription" v-text="truncateText(item.body, 80)" />
        <Button class="blog-item__btn" variant="link" size="md"
          >Read more</Button
        >
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";
defineProps<{ item: Data }>();
</script>

<style scoped lang="scss">
.blog-item {
  width: 100%;
  margin-bottom: px-to-rem(24);
  text-align: center;
  @include transition(box-shadow);
  height: fit-content;
  grid-row: span 3;

  &:hover {
    box-shadow: $box-shadow-m;
  }
}
.slider-item__image {
  width: 100%;
  height: px-to-rem(200);
  object-fit: cover;
}
.blog-item__content {
  padding: px-to-rem(8) px-to-rem(24) px-to-rem(16);
}
.blog-item__tag {
  display: inline-block;
  font-size: px-to-rem(12);
  text-transform: uppercase;
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
  margin-bottom: px-to-rem(8);
}
</style>
