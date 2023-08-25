<script setup lang="ts">
// import IconFacebook from './icons/IconFacebook.vue'
// import IconTwitter from './icons/IconTwitter.vue'
import IconYoutube from './icons/IconYoutube.vue'
</script>

<template>
  <section class="text-cream bg-blue-dark py-[50px]">
    <div class="container">
      <div class="flex flex-row justify-between mb-[70px]">
        <div class="basis-1/2 w-1/2 flex flex-row justify-between pr-10">
          <div class="basis-2/3">
            <img
              alt="Lawyer-up logo"
              class=""
              src="@/assets/logo-white.svg"
              width="125"
              height="125"
            />
            <p class="mt-4 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, risus ut adipiscing
              fames facilisis ut felis, accumsan.
            </p>
          </div>
          <div class="flex flex-col">
            <h5
              class="w-full mb-6 relative before:content-[''] before:absolute before:border before:w-[80%] before:border-gold before:bottom-[-4px] before:h-0"
            >
              Index
            </h5>
            <a
              href=""
              target="_blank"
              rel="noopener"
              class="text-[#FCFCFC] mb-4 font-normal hover:text-[#333] active:text-[#333]"
              >Home</a
            >

            <a
              href=""
              target="_blank"
              rel="noopener"
              class="text-[#FCFCFC] mb-4 font-normal hover:text-[#333] active:text-[#333]"
              >About</a
            >
            <a
              href=""
              target="_blank"
              rel="noopener"
              class="text-[#FCFCFC] mb-4 font-normal hover:text-[#333] active:text-[#333]"
              >Contact</a
            >
          </div>
        </div>

        <div class="basis-1/2 w-1/2 flex flex-row justify-around">
          <div class="flex flex-col">
            <h5
              class="w-full mb-6 relative before:content-[''] before:absolute before:border before:w-[80%] before:border-gold before:bottom-[-4px] before:h-0"
            >
              Contact us
            </h5>
            <a href="" target="_blank" rel="noopener" class="mb-4 font-normal">contact@lop.com</a>

            <a href="" target="_blank" rel="noopener" class="mb-4 font-normal">856 - 693 - 456</a>
          </div>
          <div class="">
            <h5
              class="w-full mb-12 relative before:content-[''] before:absolute before:border before:w-[80%] before:border-gold before:bottom-[-4px] before:h-0"
            >
              Follow us
            </h5>
            <div class="flex gap-6">
              <a href="" target="_blank" rel="noopener" class="">
                <i>
                  <IconYoutube />
                </i>
              </a>
              <a href="" target="_blank" rel="noopener" class="">
                <i>
                  <IconYoutube />
                </i>
              </a>
              <a href="" target="_blank" rel="noopener" class="">
                <i>
                  <IconYoutube />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p>© 2020 LawyerUp. All right reserved.</p>
      </div>
    </div>
  </section>
</template>

<style></style>
