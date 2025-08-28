<script setup lang="ts">
import type { NuxtError } from '#app'

const props = withDefaults(
    defineProps<{
      error?: NuxtError
    }>(),
    {
      error: () => ({
        statusCode: 200,
        statusMessage: 'No Error',
        fatal: false,
        unhandled: false,
        name: 'Error',
        message: 'An unexpected client-side error occurred.', 
        toJSON: () => ({
          statusCode: 200,
          statusMessage: 'No Error',
          fatal: false,
          unhandled: false,
          name: 'Error',
          message: 'An unexpected client-side error occurred.',
        })
      } as NuxtError)
    }
)

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout name="default">
      <RLLayoutBox
          tag="main"
          direction="vertical"
          gap="lg"
          align-items="center"
          justify-content="center"
      >
        <RLImage
            src="/not-found.webp"
            alt="Mascot - Page Not Found"
            :width="512"
            :height="512"
            image-class="mx-auto"
        />
        <h1
            class="text-6xl font-bold text-rimelight-primary-100"
        >
          {{ props.error.statusCode }}
        </h1>
        <p class="text-2xl text-rimelight-primary-100">
          {{ props.error.statusMessage || 'An unexpected error occurred.' }}
        </p>
        <p class="text-xl text-rimelight-primary-100">
          <span v-if="props.error.statusCode === 404">Oops! The page you're looking for doesn't exist.</span>
          <span v-else>Something went wrong on our end.</span>
        </p>
        <p class="text-md text-rimelight-primary-100">
          <span v-if="props.error.statusCode === 404">It might have been moved or deleted - please check the URL or return to the homepage.</span>
          <span v-else>Please try again later. If the issue persists, contact support.</span>
        </p>
        <RLButton
            variant="primary"
            size="md"
            text="Go to Homepage"
            aria-label="Go to Homepage"
            @click="handleError"
        />
      </RLLayoutBox>
  </NuxtLayout>
</template>

<style scoped>

</style>