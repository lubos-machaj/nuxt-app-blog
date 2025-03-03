<template>
  <div>
    <h2>Blog page {{ id }}</h2>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Data } from "@/types/api";

const { id } = useRoute().params;
const data = ref<Data>();

onBeforeMount(async () => {
  const arrayData = await getData(0, Number(id));
  data.value = arrayData[0];
});
</script>

<style scoped></style>
