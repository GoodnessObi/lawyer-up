<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import BaseLayout from './components/base/BaseLayout.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FooterSection from './components/FooterSection.vue'
import PracticeArea from './components/PracticeArea.vue'
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
    </template>
    <template v-slot:footer>
      <FooterSection />
    </template>
  </BaseLayout>
</template>

<style></style>
