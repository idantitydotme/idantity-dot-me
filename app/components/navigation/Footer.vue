<script setup lang="ts">

import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";
</script>

<template>
  <RLLayoutBox
      tag="footer"
      padding="xl"
      gap="xl"
      align-items="center"
      class="bg-primary-900"
  >
    <NuxtLink to="/">
      <img src="/images/logos/logotype-white.webp" alt="idantity.me Logo" class="h-12"
      />
    </NuxtLink>
    <span class="text-sm text-white text-center">
      &copy; {{ new Date().getFullYear() }} idantity.me. All rights reserved.
    </span>
  </RLLayoutBox>
</template>

<style scoped>

</style>