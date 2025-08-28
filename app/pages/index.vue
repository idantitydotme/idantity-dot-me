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
      <NuxtImg src="/logos/logomark.webp" alt="Queer Kit Logo" size="512px"/>
      <h1 class="text-6xl font-bold">Your guide to all things queer.</h1>
      <RLButton variant="social" size="md" start-icon="third-party:instagram"/>
    </RLLayoutBox>
    <RLLayoutBox
        direction="vertical"
        class="bg-primary-600 py-12"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </RLLayoutBox>
    <RLLayoutBox
        direction="vertical"
        align-items="center"
        class="w-full bg-primary-200 py-12"
    >
      <h2 class="text-5xl text-white">Latest Blog Posts</h2>
    </RLLayoutBox>
  </RLLayoutBox>
</template>

<style scoped>

</style>