<template>
  <Transition name="fade" mode="out-in">
    <div class="loader-wrapper">
      <div class="loading" />
    </div>
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader-wrapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-white;
}

.loading {
  display: inline-block;
  width: px-to-rem(50);
  height: px-to-rem(50);
  border: 3px solid rgba(108, 108, 108, 0.3);
  border-radius: 50%;
  border-top-color: #575757;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
