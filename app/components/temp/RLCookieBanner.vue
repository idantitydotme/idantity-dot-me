<script lang="ts" setup>
import { ref } from 'vue'
import { useCookie } from '#app'
import RLLayoutBox from "~/components/temp/RLLayoutBox.vue";

interface CookieBannerProps {
  cookiePolicyLink: string
}

const props = defineProps<CookieBannerProps>()

const COOKIE_BANNER_CLOSED_KEY = 'cookieBannerClosed'

const cookieBannerConsent = useCookie<boolean>(COOKIE_BANNER_CLOSED_KEY, {
  default: () => false,
  maxAge: 60 * 60 * 24 * 90,
  secure: import.meta.env.PROD,
  sameSite: 'lax',
})

const showBanner = ref(!cookieBannerConsent.value)

const hideBanner = () => {
  showBanner.value = false
  cookieBannerConsent.value = true
}
</script>

<template>
  <RLLayoutBox
    v-if="showBanner"
    tag="dialog"
    position="fixed"
    padding="lg"
    align-items="center"
    justify-content="center"
    role="dialog"
    aria-live="polite"
    aria-label="Cookie Consent"
    class="max-w-[1440px] bottom-4 -translate-x-1/2 left-1/2 z-50 bg-primary-600"
  >
    <RLLayoutBox
      direction="horizontal"
      gap="lg"
      align-items="center"
      justify-content="between"
      class="max-w-[1280px] w-full"
    >
      <span class="text-sm text-center">
        This website uses cookies to ensure to enhance your browsing experience. By continuing to use our site, you agree to our
        <NuxtLink
          :to="props.cookiePolicyLink"
          class="underline"
          aria-label="Cookie Policy"
        >
          Cookie Policy
        </NuxtLink>.
      </span>
      <RLLayoutBox
        direction="horizontal"
        gap="md"
      >
        <RLButton
          variant="primary"
          text="Accept All"
          aria-label="Accept All"
          @click="hideBanner"
        />
        <RLButton
          variant="primary"
          text="Reject All"
          aria-label="Reject All"
          @click="hideBanner"
        />
      </RLLayoutBox>
    </RLLayoutBox>
  </RLLayoutBox>
</template>

<style scoped>

</style>
