<script setup lang="ts">
import { computed } from 'vue'
import IconArrow from './icons/IconArrow.vue'

defineProps<{
  user: {
    imagePath: string
    name: string
    title: string
    id: string
  }
}>()

const userImg = computed((user: { imagePath: string; name: string; title: string; id: string }) => {
  return new URL(`@/asswts/${user.imagePath}`, import.meta.url)
})
</script>

<template>
  <div>
    <div class="relative">
      <img :src="userImg" :alt="user.name" />
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
