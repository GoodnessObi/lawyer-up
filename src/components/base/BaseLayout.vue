<script setup lang="ts"></script>

<template>
  <header class="bg-[url('/src/assets/hero.png')] min-h-[889px]">
    <slot name="header" />
  </header>
  <main>
    <slot name="main" />
  </main>
  <footer>
    <slot name="footer"> This is the footer </slot>
  </footer>
</template>
