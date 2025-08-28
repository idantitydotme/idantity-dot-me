<script setup lang="ts">
import { computed, ref } from "vue";
import { NuxtLink } from "#components";

interface NavItemProps {
	href?: string;
	label: string;
	isActive?: boolean;
	isPartiallyActive?: boolean;
	hasDropdown?: boolean;
	dropdownType?: "normal" | "megamenu";
	dropdownClassName?: string;
}

const props = withDefaults(defineProps<NavItemProps>(), {
	href: undefined,
	isActive: false,
	isPartiallyActive: false,
	hasDropdown: false,
	dropdownType: "normal",
	dropdownClassName: undefined,
});

const isDropdownOpen = ref(false);

const hasHref = computed(() => !!props.href);

const baseRLButtonClasses = computed(() => [
	"block px-lg py-md transition",
	"border-none",
	"border-b-2 border-transparent",
	"no-rounding",
	"no-shadow",
	"no-shadow-hover",
	props.isActive || props.isPartiallyActive
		? "text-primary-400 border-primary-400"
		: "text-neutral-50",
	"hover:border-primary-400 hover:text-primary-400 hover:no-underline",
]);

const dropdownBaseClasses = computed(() => [
	"absolute shadow-lg z-50 transform origin-top transition-all duration-200 ease-out",
	isDropdownOpen.value
		? "opacity-100 visible scale-100"
		: "opacity-0 invisible scale-95",
	props.dropdownClassName,
]);

const toggleDropdown = () => {
	if (props.hasDropdown) {
		isDropdownOpen.value = !isDropdownOpen.value;
	}
};

const closeDropdown = () => {
	if (props.hasDropdown) {
		isDropdownOpen.value = false;
	}
};
</script>

<template>
  <li
    class="relative"
    @mouseenter="props.hasDropdown ? isDropdownOpen = true : null"
    @mouseleave="props.hasDropdown ? isDropdownOpen = false : null"
  >
    <NuxtLink
      v-if="hasHref"
      :to="props.href"
      :class="[...baseRLButtonClasses, '!focus:ring-0', '!outline-none']"
      tabindex="0"
      @click="closeDropdown"
    >
      {{ props.label }}
    </NuxtLink>

    <RLButton
      v-else
      type="button"
      :text="props.label"
      :class="baseRLButtonClasses"
      variant="ghost"
      :aria-expanded="props.hasDropdown ? isDropdownOpen : undefined"
      :aria-haspopup="props.hasDropdown ? 'true' : undefined"
      tabindex="0"
      @click="toggleDropdown"
    />

    <template v-if="props.hasDropdown">
      <div
        v-if="props.dropdownType === 'normal'"
        :class="[
          ...dropdownBaseClasses,
          'left-0 mt-2 min-w-max rounded-lg p-md',
          'bg-neutral-800 text-neutral-50',
        ]"
      >
        <ul
          role="menu"
          class="m-0 flex list-none flex-col gap-sm p-0"
        >
          <slot />
        </ul>
      </div>

      <div
        v-if="props.dropdownType === 'megamenu'"
        :class="[
          ...dropdownBaseClasses,
          'fixed left-0 w-screen p-xl',
          'bg-neutral-800 text-neutral-50',
        ]"
        :style="{ top: '56px' }"
      >
        <div class="container mx-auto">
          <slot />
        </div>
      </div>
    </template>
  </li>
</template>

<style scoped>
</style>
