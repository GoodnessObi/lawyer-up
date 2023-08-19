<script setup lang="ts">
import AboutCard from './AboutCard.vue'
</script>

<template>
  <section class="bg-blue-light text-white py-[56px]">
    <div class="container grid grid-cols-2">
      <div>
        <div class="mb-5">
          <h2
            class="relative before:content-[''] before:absolute before:h-[3px] before:w-[70px] before:border before:border-gold before:bg-gold before:-top-[5px]"
          >
            Who we are
          </h2>
        </div>
        <div>
          <p class="leading-[35px] font-normal">
            This consultation would doubtless not have arisen – at least in relation to solicitors –
            had the SRA not abandoned any interest in structured and targeted CPD. Solicitors used
            to have a CPD regime which looked like that of their counterparts in many other
            countries, with evidence required of particular courses taken, maybe even by authorised
            providers. But the SRA decided that that was too blunt an instrument, which took up too
            much of their resources to police. And so they threw out the whole thing and replaced it
            with – nothing.
          </p>
          <p class="leading-[35px] font-normal mt-8">
            Well, not exactly nothing. There is a requirement that solicitors must provide a proper
            standard of service, which is different to a rule which requires CPD. Under the SRA’s
            current regime, solicitors can decide that they are up to date and competent and
            therefore need not undertake
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="grid grid-cols-2 gap-5 auto-rows-[150px]">
          <AboutCard>
            <template #number> 1200 </template>
            <template #text> Happy Clients </template>
          </AboutCard>

          <AboutCard>
            <template #number> 399 </template>
            <template #text> Solved Cases </template>
          </AboutCard>

          <AboutCard>
            <template #number> 190 </template>
            <template #text> Award Wins </template>
          </AboutCard>

          <AboutCard>
            <template #number> 120 </template>
            <template #text> Winning Cases </template>
          </AboutCard>
        </div>
      </div>
    </div>
  </section>
</template>
