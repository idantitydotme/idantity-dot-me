<script setup lang="ts">
import { useHead, useRoute } from '#app';
import { computed } from 'vue';
import Header2 from "~/components/navigation/Header2.vue";
import Footer from "~/components/navigation/Footer.vue";
import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";
import RLScrollToTop from "~/components/temp/RLScrollToTop.vue";
import RLCookieBanner from "~/components/temp/RLCookieBanner.vue";

const route = useRoute();

const locale = computed(() => {
  const currentLocale = route.params.locale as string;
  return currentLocale || 'en';
});

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));

useHead({
  htmlAttrs: {
    lang: locale,
    dir: dir,
  },
});

import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    to: '/',
    icon: 'logos:logomark-white'
  },
  {
    label: 'me.games',
    to: '/games',
  },
  {
    label: 'me.music',
    to: '/music',
  },
  {
    label: 'me.portfolio',
    to: '/portfolio',
    active: true,
  },
  {
    label: 'me.about',
    to: '/about'
  },
  {
    label: 'me.contact',
    to: '/contact'
  }
])
</script>

<template>
  <RLLayoutBox
    class="bg-neutral-950"
  >
    <RLNavigationMenu as="header" :items="items" variant="link" highlight class="w-full bg-primary-900 justify-center sticky top-0 z-50"/>
    <RLLayoutBox
      tag="main"
      align-items="center"
    >
      <slot />
    </RLLayoutBox>
    <Footer />
    <RLScrollToTop/>
    <RLCookieBanner cookie-policy-link="/documents/cookie-policy" />
  </RLLayoutBox>
</template>

<style scoped>

</style>