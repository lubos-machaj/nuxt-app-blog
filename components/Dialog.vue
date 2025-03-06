<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="open"
      class="dialog-overlay"
      @click="toggleDialog"
      aria-label="Close"
    >
      <dialog :open="open" class="dialog" @click.stop>
        <button class="dialog__close-btn" @click="toggleDialog">
          <span class="dialog__close-btn-text">×</span>
        </button>

        <slot></slot>
      </dialog>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const open = defineModel<boolean>();

const toggleDialog = () => {
  open.value = !open.value;
};

const handleEscKey = (event: KeyboardEvent): void => {
  if (event.key === "Escape") {
    toggleDialog();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscKey);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleEscKey);
});
</script>

<style scoped lang="scss">
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog {
  background: $color-white;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 px-to-rem(10) px-to-rem(30) rgba(0, 0, 0, 0.3);
  border: 0;
}
.dialog__close-btn {
  color: $color-black;
  padding: px-to-rem(10);
  position: absolute;
  top: 0;
  right: px-to-rem(10);
}
.dialog__close-btn-text {
  font-size: px-to-rem(40);
  line-height: 1;
  text-shadow: 0 0 px-to-rem(3) $color-white;

  @include media($bp-md) {
    font-size: px-to-rem(30);
  }
}
</style>
