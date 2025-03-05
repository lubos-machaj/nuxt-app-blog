<template>
  <header class="header">
    <div class="container container--md p-0">
      <div class="header__wrapper">
        <nuxt-link class="header__link" to="/home">
          <NuxtImg
            src="app-logo.svg"
            class="header__logo"
            alt="My blog logo"
            aria-hidden="true"
          />
          <h1 class="sr-only">My Blog</h1>
        </nuxt-link>
        <HeaderToggleButton v-model="openNav" />
        <Navigation :openNav="openNav" :routes="routes" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
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
  box-shadow: $box-shadow-s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: $color-white;

  @include media($bp-md) {
    position: static;
    flex-direction: row;
  }
}
.header__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__link {
  padding: px-to-rem(24);
}
.header__logo {
  width: px-to-rem(155);
}
</style>
