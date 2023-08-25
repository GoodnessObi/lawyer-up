<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import PracticeAreaCard from './PracticeAreaCard.vue'
import IconBusinessLaw from './icons/IconBusinessLaw.vue'
import IconEducationLaw from './icons/IconEducationLaw.vue'
import IconFamilyLaw from './icons/IconFamilyLaw.vue'
import IconFinanceLaw from './icons/IconFinanceLaw.vue'
</script>
<template>
  <div class="bg-[#FBFBFB] py-[70px]">
    <div class="container">
      <SectionHeader headingColor="text-gray" textColor="text-black" textAlign="text-center">
        <template #heading> Practice Area </template>
        <template #description>
          we offer different variations of the law, no matter what your case is we are here for you
          with vast and experienced attorneys</template
        >
      </SectionHeader>

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
