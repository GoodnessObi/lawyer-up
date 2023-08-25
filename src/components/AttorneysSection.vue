<script setup lang="ts">
import AttorneyCard from './AttorneyCard.vue'
import SectionHeader from './SectionHeader.vue'

const users: {
  imageUrl: string
  name: string
  title: string
  id: string
}[] = [
  {
    imageUrl: 'src/assets/gbenga-philip.png',
    name: 'Gbenga Philip',
    title: 'Criminal Lawyer',
    id: '1'
  },
  {
    imageUrl: 'src/assets/tega-mathew.png',
    name: 'Tega Matthew',
    title: 'Family Lawyer',
    id: '2'
  },
  {
    imageUrl: 'src/assets/isaac-tope.png',
    name: 'Isaac Tope',
    title: 'Education Lawyer',
    id: '3'
  },
  {
    imageUrl: 'src/assets/greg-john.png',
    name: 'Greg John',
    title: 'Finance Lawyer',
    id: '4'
  }
]
</script>

<template>
  <div class="bg-blue-dark py-14 text-cream">
    <div class="container">
      <SectionHeader headingColor="text-cream" textColor="text-cream" textAlign="text-center">
        <template #heading>Meet Our Attorneys</template>
        <template #description
          >we offer different variations of the law, no matter what your case is we are here for you
          with vast and experienced attorneys</template
        >
      </SectionHeader>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-[60px]">
        <AttorneyCard v-for="user in users" :key="`${user.name}-${user.id}`" :user="user" />
      </div>
    </div>
  </div>
</template>

<style></style>
