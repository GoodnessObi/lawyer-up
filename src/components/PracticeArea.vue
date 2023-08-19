<script setup lang="ts">
import PracticeAreaCard from './PracticeAreaCard.vue'
import IconBusinessLaw from './icons/IconBusinessLaw.vue'
import IconEducationLaw from './icons/IconEducationLaw.vue'
import IconFamilyLaw from './icons/IconFamilyLaw.vue'
import IconFinanceLaw from './icons/IconFinanceLaw.vue'
</script>
<template>
  <div class="bg-[#FBFBFB] py-[70px]">
    <div class="container">
      <div class="w-[55%] mx-auto text-center mt-[5px] mb-[55px]">
        <h2
          class="text-gray font-medium mb-[15px] relative before:content-[''] before:absolute before:h-[3px] before:w-[70px] before:border before:border-gold before:bg-gold before:-top-[5px] before:right-0 before:left-0 before:ml-auto before:mr-auto"
        >
          Practice Area
        </h2>
        <p class="text-black">
          we offer different variations of the law, no matter what your case is we are here for you
          with vast and experienced attorneys
        </p>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <PracticeAreaCard link="#">
          <template #icon>
            <IconBusinessLaw />
          </template>
          <template #heading>Business Law</template>
          <template #text
            >we offer different variations of the law, no matter what your case is we are here for
            you with vast and experienced attorneys</template
          >
        </PracticeAreaCard>

        <PracticeAreaCard link="#">
          <template #icon>
            <IconFinanceLaw />
          </template>
          <template #heading>Finance Law</template>
          <template #text
            >we offer different variations of the law, no matter what your case is we are here for
            you with vast and experienced attorneys</template
          >
        </PracticeAreaCard>

        <PracticeAreaCard link="#">
          <template #icon>
            <IconFamilyLaw />
          </template>
          <template #heading>Family Law</template>
          <template #text
            >we offer different variations of the law, no matter what your case is we are here for
            you with vast and experienced attorneys</template
          >
        </PracticeAreaCard>

        <PracticeAreaCard link="#">
          <template #icon>
            <IconEducationLaw />
          </template>
          <template #heading>Education Law</template>
          <template #text
            >we offer different variations of the law, no matter what your case is we are here for
            you with vast and experienced attorneys</template
          >
        </PracticeAreaCard>
      </div>
    </div>
  </div>
</template>

<style></style>
