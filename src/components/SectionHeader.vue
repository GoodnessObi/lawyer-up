<script setup lang="ts">
defineProps<{
  headingColor: string
  textColor: string
  textAlign: string
}>()
</script>
<template>
  <div :class="`w-[55%] mx-auto ${textAlign} mt-[5px] mb-[55px]`">
    <h2
      :class="`font-medium mb-[15px] relative before:content-[''] before:absolute before:h-[3px] before:w-[70px] before:border before:border-gold before:bg-gold before:-top-[5px] before:right-0 before:left-0 before:ml-auto before:mr-auto ${headingColor}`"
    >
      <slot name="heading" />
    </h2>
    <p :class="textColor">
      <slot name="description" />
    </p>
  </div>
</template>
