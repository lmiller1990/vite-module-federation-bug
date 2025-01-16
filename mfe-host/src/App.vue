<template>
  <h1>This is the host</h1>
  <div ref="client_app"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

async function getClient(el: HTMLElement) {
  // @ts-ignore
  await import("mfe_client/place")
    .then((mod) => {
      mod.default(el);
    })
    .catch(console.error);
}

const client_app = ref();

onMounted(() => {
  getClient(client_app.value!);
});
</script>
