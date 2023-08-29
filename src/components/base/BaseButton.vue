<script setup lang="ts">
defineProps<{
  type: 'primary' | 'secondary'
  btnClass?: string
}>()
</script>
<template>
  <button :class="`btn btn-${type} ${btnClass}`">
    <slot />
  </button>
</template>

<style>
.btn {
  @apply py-[14px] px-[17px] md:px-[25px] text-white text-sm md:text-base lg:text-lg rounded-[5px];
}

.btn-primary {
  @apply bg-gold-light;
}

.btn-secondary {
  @apply bg-gray-dark;
}
</style>
