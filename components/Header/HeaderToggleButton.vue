<template>
  <button class="toggle-btn" @click.prevent="open = !open">
    <span
      class="toggle-btn__icon"
      :class="{ 'toggle-btn__icon--open': open }"
      v-text="open ? '✖' : '☰'"
    />
  </button>
</template>

<script setup lang="ts">
const open = defineModel();
</script>

<style scoped lang="scss">
.toggle-btn {
  width: px-to-rem(48);
  height: px-to-rem(48);
  margin-right: px-to-rem(16);
  position: relative;
  z-index: 10;

  &__icon {
    color: #424242;
    font-size: px-to-rem(30);
  }

  &__icon--open {
    font-size: px-to-rem(25);
  }

  @include media($bp-sm) {
    display: none;
  }
}
</style>
