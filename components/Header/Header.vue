<template>
  <header class="header">
    <div class="container p-0">
      <div class="header__wrapper">
        <nuxt-link class="header__logo" to="/">
          <AppLogo />
        </nuxt-link>
        <HeaderToggleButton v-model="openNav" />
        <Navigation :openNav="openNav" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/assets/app-logo.svg";
import Navigation from "./Navigation.vue";

const openNav = ref<boolean>(false);
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

  @include media($bp-sm) {
    flex-direction: row;
    box-shadow: $box-shadow;
  }
}
.header__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: $box-shadow;

  @include media($bp-sm) {
    box-shadow: none;
  }
}
.header__logo {
  padding: px-to-rem(24);
}
</style>
