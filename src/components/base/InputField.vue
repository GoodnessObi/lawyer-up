<script setup lang="ts">
defineProps<{
  placeholder: string
  id: string
  type: string
  required?: boolean
  label: string
}>()
</script>

<template>
  <div class="mb-12">
    <label :for="id" class="block capitalize">{{ label }}</label>

    <input
      :v-model="id"
      :type="type"
      class="block border-b border-b-gray w-full"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
