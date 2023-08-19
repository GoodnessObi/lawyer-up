<script setup lang="ts">
import IconArrow from './icons/IconArrow.vue'

defineProps<{
  user: {
    imageUrl: string
    name: string
    title: string
    id: string
  }
}>()
</script>

<template>
  <div>
    <div class="relative">
      <img :src="user.imageUrl" :alt="user.name" />
      <a
        :href="`/#/${user.id}`"
        class="absolute w-[75px] h-[75px] bg-white drop-shadow-[-5px_4px_10px_rgba(0,0,0,0.25)] rounded-full flex justify-center items-center bottom-0 right-0"
      >
        <IconArrow />
      </a>
    </div>
    <div class="mt-5">
      <p class="text-[18px] font-[600] mb-[5px]">{{ user.name }}</p>
      <p>{{ user.title }}</p>
    </div>
  </div>
</template>
