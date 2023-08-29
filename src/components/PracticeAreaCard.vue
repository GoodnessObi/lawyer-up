<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<template>
  <div
    class="group text-center rounded-[2px] pt-[50px] pb-5 px-[18px] hover:bg-white hover:shadow-[0px_3px_30px_0px_rgba(0,0,0,0.15)]"
  >
    <i
      class="flex items-center justify-center rounded-full bg-[#F8EDEB] h-[150px] w-[150px] mx-auto"
    >
      <slot name="icon" />
    </i>

    <div class="mt-6">
      <h4 class="text-black">
        <slot name="heading" />
      </h4>
      <p class="my-4 text-gray-dark">
        <slot name="text" />
      </p>

      <a href="{{ link }}" class="text-sm font-medium text-gray-dark group-hover:text-gold">
        Know More
      </a>
    </div>
  </div>
</template>
