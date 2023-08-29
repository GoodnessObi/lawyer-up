<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
</script>

<template>
  <section class="py-[50px] bg-[#F7F7F7">
    <div class="container">
      <SectionHeader headingColor="text-gray" textColor="text-gray" textAlign="text-center">
        <template #heading>Testimonials</template>
      </SectionHeader>

      <div class="grid md:grid-cols-3 gap-[50px]">
        <div class="p-[30px] bg-white text-gray">
          <p class="font-normal mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex items-center gap-4">
            <img src="/src/assets/avatar.png" />
            <span class="font-medium text-base md:text-lg">Tega Matthew</span>
          </div>
        </div>

        <div class="p-[30px] bg-white text-gray">
          <p class="font-normal mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex items-center gap-4">
            <img src="/src/assets/avatar.png" />
            <span class="font-medium text-base md:text-lg">Tega Matthew</span>
          </div>
        </div>

        <div class="p-[30px] bg-white text-gray">
          <p class="font-normal mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex items-center gap-4">
            <img src="/src/assets/avatar.png" />
            <span class="font-medium text-base md:text-lg">Tega Matthew</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
