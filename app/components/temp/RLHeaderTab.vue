<script setup lang="ts">
import { ref, computed } from 'vue'
import { NuxtLink } from '#components'

interface NavItemProps {
  href?: string
  label: string
  isActive?: boolean
  isPartiallyActive?: boolean
  hasDropdown?: boolean
  dropdownType?: 'normal' | 'megamenu'
  dropdownClassName?: string
}

const props = withDefaults(defineProps<NavItemProps>(), {
  href: undefined,
  isActive: false,
  isPartiallyActive: false,
  hasDropdown: false,
  dropdownType: 'normal',
  dropdownClassName: undefined,
})

const isDropdownOpen = ref(false)

const hasHref = computed(() => !!props.href)

const baseButtonClasses = computed(() => [
  'block px-lg py-md transition',
  'border-none',
  'border-b-2 border-transparent',
  'no-rounding',
  'no-shadow',
  'no-shadow-hover',
  props.isActive || props.isPartiallyActive
    ? 'text-rimelight-primary-400 border-rimelight-primary-400'
    : 'text-black',
  'hover:border-rimelight-primary-400 hover:text-primary-500 hover:no-underline',
])

const dropdownBaseClasses = computed(() => [
  'absolute shadow-2xl z-50 transform origin-top transition-all duration-200 ease-out',
  isDropdownOpen.value
    ? 'opacity-100 visible scale-100'
    : 'opacity-0 invisible scale-95',
  props.dropdownClassName,
])

const toggleDropdown = () => {
  if (props.hasDropdown) {
    isDropdownOpen.value = !isDropdownOpen.value
  }
}

const closeDropdown = () => {
  if (props.hasDropdown) {
    isDropdownOpen.value = false
  }
}
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
      :class="[...baseButtonClasses, '!focus:ring-0', '!outline-none']"
      tabindex="0"
      @click="closeDropdown"
    >
      {{ props.label }}
    </NuxtLink>

    <RLButton
      v-else
      type="button"
      :text="props.label"
      :class="baseButtonClasses"
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
          'bg-rimelight-neutral-800 text-rimelight-neutral-50',
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
          'bg-rimelight-neutral-800 text-rimelight-neutral-50',
        ]"
      >
        <div class="mx-auto max-w-[1440px]">
          <slot />
        </div>
      </div>
    </template>
  </li>
</template>

<style scoped>
</style>
