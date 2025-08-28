<script setup lang="ts">
import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";

useHead({
  title: 'me.home',
});
</script>

<template>
  <RLLayoutBox direction="vertical">
    <RLLayoutBox
        tag="section"
        direction="vertical"
        padding="xl"
        gap="xl"
        align-items="center"
        class="py-12"
    >
      <NuxtImg src="https://ciaawgwwdr7itajy.public.blob.vercel-storage.com/images/logos/logomark-white.webp" alt="idantity.me Logo" class="h-96"/>
      <h1 class="text-6xl font-bold">Sharing a bit of me.</h1>
    </RLLayoutBox>
  </RLLayoutBox>
</template>

<style scoped>

</style>