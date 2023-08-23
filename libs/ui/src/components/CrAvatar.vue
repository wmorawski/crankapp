<script setup lang="ts">

import {computed} from "vue";

const props = withDefaults(defineProps<{
  username: string;
  avatarUrl?: string;
  size?: string
}>(), {
  size: "default"
})
const firstLetter = computed(() => props.username ? props.username[0].toUpperCase() : '')
</script>

<template>
  <img v-if="props.avatarUrl" class="image-avatar" :src="avatarUrl" :alt="props.username + '-avatar'" />
  <span v-else class="letter-avatar">
    <span class="letter-avatar_content">{{firstLetter}}</span>
  </span>
</template>

<style scoped lang="postcss">
  .image-avatar {
    @apply inline-block h-10 w-10 rounded-full
  }
  .letter-avatar {
    @apply inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500;
    &_content {
      @apply font-medium leading-none text-white;
    }
  }
</style>