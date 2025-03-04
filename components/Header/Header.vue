<template>
  <header class="header">
    <div class="container container--md p-0">
      <div class="header__wrapper">
        <nuxt-link class="header__logo" to="/">
          <AppLogo />
          <h1 class="sr-only">My Blog</h1>
        </nuxt-link>
        <HeaderToggleButton v-model="openNav" />
        <Navigation :openNav="openNav" :routes="routes" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/assets/app-logo.svg";
import Navigation from "./Navigation.vue";

const openNav = ref<boolean>(false);
const routes = ref(["home", "blog", "about", "contact"]);
const route = useRoute();

watch(
  () => route.path,
  () => {
    openNav.value = false;
  }
);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
  box-shadow: $box-shadow;

  @include media($bp-md) {
    flex-direction: row;
  }
}
.header__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  padding: px-to-rem(24);
}
</style>
