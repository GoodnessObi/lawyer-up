<script setup lang="ts"></script>

<template>
  <header
    class="bg-cover bg-[40%] md:bg-center bg-no-repeat md:bg-cover bg-[url('/src/assets/hero.png')] min-h-[80px] md:min-h-[556px] lg:min-h-[889px]"
  >
    <slot name="header" />
  </header>
  <main>
    <slot name="main" />
  </main>
  <footer>
    <slot name="footer"> This is the footer </slot>
  </footer>
</template>
