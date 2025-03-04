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
    color: $font-color;
    font-size: px-to-rem(30);
  }

  &__icon--open {
    font-size: px-to-rem(20);
  }

  @include media($bp-md) {
    display: none;
  }
}
</style>
