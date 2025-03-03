<template>
  <nav class="nav" :class="{ 'nav--open': openNav }">
    <nuxt-link class="nav__link" to="/home">Home</nuxt-link>
    <nuxt-link class="nav__link" to="/about">About</nuxt-link>
    <nuxt-link class="nav__link" to="/contact">Contact</nuxt-link>
    <nuxt-link class="nav__link" to="/blog">Blog</nuxt-link>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  openNav: Boolean,
});
</script>

<style scoped lang="scss">
$mobile-nav-width: 70%;

.nav {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0;
  top: $mobile-nav-width;
  right: -100%;
  transition: none;
  position: absolute;
  z-index: 5;

  @include media($bp-sm) {
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
  box-shadow: 1px 7px 8px $shadow-color;
  transition: all 0.3s ease-in-out;

  @include media($bp-sm) {
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

  @include media($bp-sm) {
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
