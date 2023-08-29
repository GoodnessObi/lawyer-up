<script setup lang="ts">
import { ref, computed } from 'vue'

const isNavOpen = ref<boolean>(false)

const navClass = computed((): string => {
  return isNavOpen.value ? 'flex' : 'hidden'
})

const toggleNav = () => {
  return (isNavOpen.value = !isNavOpen.value)
}
</script>

<template>
  <nav class="bg-white">
    <div class="container py-6 lg:flex lg:justify-between lg:items-center">
      <div class="flex justify-between items-center">
        <img alt="Lawyer-up logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <button class="lg:hidden cursor-pointer" @click="toggleNav">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <line
                x1="1"
                y1="1"
                x2="24"
                y2="1"
                stroke="#2C2F3A"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="1"
                y1="6"
                x2="24"
                y2="6"
                stroke="#2C2F3A"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="1"
                y1="11"
                x2="24"
                y2="11"
                stroke="#2C2F3A"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </i>
        </button>
      </div>
      <div
        :class="`${navClass} lg:flex flex-col lg:flex-row justify-between lg:items-center gap-10 mt-10 lg:mt-0`"
      >
        <a
          href=""
          target="_blank"
          rel="noopener"
          class="text-[#333] hover:text-[#333] active:text-[#333]"
          >Home</a
        >

        <a
          href=""
          target="_blank"
          rel="noopener"
          class="text-[#828282] hover:text-[#333] active:text-[#333]"
          >About</a
        >

        <a
          href="/"
          target="_blank"
          rel="noopener"
          class="text-[#828282] hover:text-[#333] active:text-[#333]"
          >Practice Area</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener"
          class="text-[#828282] hover:text-[#333] active:text-[#333]"
          >Attorneys</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener"
          class="text-[#828282] hover:text-[#333] active:text-[#333]"
          >Testimonial</a
        >
        <a
          href=""
          target="_blank"
          rel="noopener"
          class="text-[#828282] hover:text-[#333] active:text-[#333]"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<style></style>
