<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const SCROLL_THRESHOLD_PERCENTAGE = 0.15;

const scrollProgress = ref(0);
const showButton = computed(
	() => scrollProgress.value >= SCROLL_THRESHOLD_PERCENTAGE,
);

const updateScrollProgress = () => {
	const scrollTop = window.scrollY;
	const docHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const progress = docHeight > 0 ? scrollTop / docHeight : 0;
	scrollProgress.value = progress;
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

onMounted(() => {
	window.addEventListener("scroll", updateScrollProgress);
	updateScrollProgress();
});

onUnmounted(() => {
	window.removeEventListener("scroll", updateScrollProgress);
});
</script>

<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 shadow-lg transition-opacity duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
  >
    <svg
      class="absolute left-0 top-0 -rotate-90"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="#27272a"
        stroke-width="2"
      />

      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="var(--color-primary-500)"
        stroke-width="2"
        :stroke-dasharray="`${2 * Math.PI * 18}`"
        :stroke-dashoffset="`${2 * Math.PI * 18 * (1 - scrollProgress)}`"
        stroke-linecap="round"
        class="transition-all duration-100 ease-linear"
      />
    </svg>

    <div
      class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600"
    >
      <Icon name="general:arrow-up" size="lg" color="white" />
    </div>
  </button>
</template>

<style scoped>

</style>
