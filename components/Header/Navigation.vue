<template>
  <nav class="nav" :class="{ 'nav--open': openNav }">
    <nuxt-link
      v-for="route in routes"
      :key="route"
      :to="`/${route}`"
      class="nav__link"
      >{{ capitalize(route) }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
import { capitalize } from "@/utils/textFormat";
defineProps({
  routes: Array<string>,
  openNav: Boolean,
});
</script>

<style scoped lang="scss">
$mobile-nav-width: 75%;

.nav {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0;
  top: $mobile-nav-width;
  right: -100%;
  transition: none;
  position: absolute;
  z-index: 100;

  @include media($bp-md) {
    width: auto;
    margin-right: px-to-rem(24);
    position: static;
    flex-direction: row;
  }
}
.nav--open {
  right: 0;
  top: $mobile-nav-width;
  background: $color-white;
  box-shadow: $box-shadow-l;
  transition: all 0.3s ease-in-out;

  @include media($bp-md) {
    box-shadow: none;
  }
}
.nav__link {
  font-weight: 600;
  padding: px-to-rem(16) px-to-rem(2);
  margin: 0 px-to-rem(16);
  border-bottom: 1px solid $shadow-color;
  transition: color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: $color-pink;
  }

  @include media($bp-md) {
    border: none;
    padding: px-to-rem(8);
    margin: 0 px-to-rem(4);
  }
}
.router-link-active {
  color: $secondary-color;
  &:hover {
    color: $secondary-color;
  }
}
</style>
