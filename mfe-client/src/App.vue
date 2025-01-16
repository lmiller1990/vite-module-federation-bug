<script setup lang="ts">
// @ts-ignore
import { greet } from "mfe_host/greet";
import { onMounted } from "vue";

onMounted(() => {
  greet();
});
</script>

<template>
  <h1>This is the client</h1>
</template>
