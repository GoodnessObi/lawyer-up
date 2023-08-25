<script setup lang="ts">
defineProps<{
  placeholder: string
  id: string
  required?: boolean
  label: string
}>()
</script>

<template>
  <div class="mb-12">
    <label :for="id" class="block capitalize">{{ label }}</label>

    <textarea
      :v-model="id"
      class="block border-b border-b-gray w-full"
      :placeholder="placeholder"
      :required="required"
    ></textarea>
  </div>
</template>
