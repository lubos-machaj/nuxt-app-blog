<template>
  <button
    :class="['btn', `btn--${variant}`, `btn--${size}`]"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  light?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  light: false,
});

const emit = defineEmits<{
  click: [];
}>();
</script>

<style scoped lang="scss">
.btn {
  color: $text-color;
  border: 1px solid $text-color;
  transition: all 0.2s ease-in-out;
}

.btn--primary {
  color: $primary-color;
  border-color: $primary-color;

  &:hover {
    color: $color-white;
    background-color: $primary-color;
  }
}

.btn--secondary {
  color: $secondary-color;
  border-color: $secondary-color;

  &:hover {
    color: $color-white;
    background-color: $secondary-color;
  }
}

.btn--light {
  color: $color-white;
  border-color: $color-white;

  &:hover {
    color: $color-black;
    background-color: $color-white;
  }
}

.btn--sm {
  font-size: px-to-rem(14);
  padding: px-to-rem(6) px-to-rem(12);
}

.btn--md {
  font-size: px-to-rem(16);
  padding: px-to-rem(8) px-to-rem(16);
}

.btn--lg {
  font-size: px-to-rem(18);
  padding: px-to-rem(12) px-to-rem(20);
}
</style>
