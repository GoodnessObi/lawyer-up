<script setup lang="ts"></script>
<template>
  <div class="rounded-[5px] border border-gold-light py-9 text-center min-w-[150px]">
    <p class="text-gold font-medium text-4xl mb-[10px]">
      <slot name="number" />
    </p>
    <p class="font-medium">
      <slot name="text" />
    </p>
  </div>
</template>

<style></style>
