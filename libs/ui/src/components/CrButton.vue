<script setup lang="ts">
  import type {ButtonVariant, ButtonSize} from "@/components/types";
  import {computed} from "vue";

  const props = withDefaults(defineProps<{
    variant: ButtonVariant,
    size: ButtonSize
  }>(), {
    variant: "secondary",
    size: "default"
  })

 const correctClasses = computed(() => `btn-${props.variant} btn-${props.size}`)
</script>

<template>
<button type="button" :class="correctClasses">
  <slot></slot>
</button>
</template>

<style lang="postcss" scoped>
  .btn {
    @apply rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
  }
  .btn-large {
    @apply px-3.5 py-2.5
  }
  .btn-secondary {
    @apply btn bg-white/10 hover:bg-white/20;
  }
  .btn-rounded {
    @apply rounded-full px-3 py-1.5 bg-white/10 hover:bg-white/20 text-sm font-semibold text-white shadow-sm;
    &.btn-large {
      @apply px-4 py-2.5 !important;
    }
  }
  .btn-primary {
    @apply btn bg-indigo-500 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500;
  }
  .btn-block {
    @apply btn-large w-full
  }
</style>