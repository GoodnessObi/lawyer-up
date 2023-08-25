<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import BaseLayout from './components/base/BaseLayout.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FooterSection from './components/FooterSection.vue'
import PracticeArea from './components/PracticeArea.vue'
import AttorneysSection from './components/AttorneysSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar />
      <HeroSection />
    </template>
    <template v-slot:main>
      <AboutSection />
      <PracticeArea />
      <AttorneysSection />
      <div class="bg-[#fbfbfb] mt-[70px]">
        <TestimonialSection />
        <ContactSection />
      </div>
    </template>
    <template v-slot:footer>
      <FooterSection />
    </template>
  </BaseLayout>
</template>

<style></style>
