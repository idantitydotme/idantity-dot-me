<script setup lang="ts">

import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";
</script>

<template>
  <RLLayoutBox
      tag="footer"
      padding="xl"
      class="bg-primary-900"
  >
    <span class="text-sm text-white text-center">
      &copy; {{ new Date().getFullYear() }} idantity.me. All rights reserved.
    </span>
  </RLLayoutBox>
</template>

<style scoped>

</style>