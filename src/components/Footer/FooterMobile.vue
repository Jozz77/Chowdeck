<script setup>
import { onMounted, ref } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(
    ".footer-section", // Target the section you want to animate
    { opacity: 0, y: 200 }, // Initial state
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true,
      },
    }
  );
});

const companyLinks = ref([
  { name: "Customer", link: "" },
  { name: "Vendors", link: "" },
  { name: "Riders", link: "" },
  { name: "Storefront", link: "" },
  { name: "About", link: "" },
  { name: "Careers", link: "" },
  { name: "FAQs", link: "" },
  { name: "Blogs", link: "" },
  { name: "Contact", link: "" },
  { name: "Terms of Use", link: "" },
  { name: "Privacy Policy", link: "" },
]);

const cuisinesLinks = ref([
  { name: "Pasta near me", link: "" },
  { name: "Rice near me", link: "" },
  { name: "Fast food near me", link: "" },
  { name: "Asian food in Lagos", link: "" },
  { name: "African food in Lagos", link: "" },
  { name: "Breakfast menu in Lagos", link: "" },
  { name: "Fitfam stores in Lagos", link: "" },
  { name: "American food in Lagos", link: "" },
  { name: "Pastries in Lagos", link: "" },
  { name: "Salad in Lagos", link: "" },
  { name: "Fruits in Lagos", link: "" },
]);

const poplularLinks = ref([
  { name: "Food delivery", link: "" },
  { name: "Surulere", link: "" },
  { name: "Ogudu", link: "" },
  { name: "Yaba", link: "" },
  { name: "Ikeja", link: "" },
  { name: "Lekki", link: "" },
  { name: "King Glab", link: "" },
  { name: "Korede Spaghetti", link: "" },
  { name: "Iyan Aladuke", link: "" },
  { name: "Food Fusion", link: "" },
  { name: "Belefull", link: "" },
]);
</script>

<template>
  <div class="pt-6 footer-section px-[5%]">
    <section>
      <div class="border-b-[1px] mt-4 relative border-[#ffffff37] pt-6 pb-12">
        <section class="flex flex-col items-start gap-2">
          <div class="flex gap-3 items-center">
            <div>
              <img src="./Assets/star.svg" alt="Star" />
            </div>
            <h3
              class="leading-none text-white font-black text-[2rem] "
            >
              Cool stuff only
            </h3>
          </div>
          <p class="text-[#FFEDB3] text-[0.95rem]">
            Subscribe to our newsletter
          </p>
        </section>
      </div>
    </section>

    <!-- section section -->
    <section
      class="grid row-auto grid-rows-4 border-[#ffffff37] border-b-[1px] grid-cols-9"
    >
      <div
        class="border-b-[1px] row-span-4 col-span-9 border-[#ffffff37] flex items-center justify-between"
      >
        <div class="py-6 w-full">
          <input
            type="text"
            name=""
            class="outline-0 text-[1.1rem] ssm:text-[1.3rem] bg-transparent text-[#ffffff58] placeholder:text-[#ffffff58] font-black"
            placeholder="yourname@email.com"
          />
        </div>
      </div>

      <section
        class="col-span-9 grid row-auto grid-rows-2 border-b-[1px] border-[#ffffff37] grid-cols-4"
      >
        <div
          class="flex gap-2 py-6 justify-center col-span-2 pl-[10%] border-b-[1px] border-r-[1px] border-[#ffffff37] row-span-1 items-center"
        >
          <div>
            <img src="./Assets/tweet.svg" alt="Star" />
          </div>
          <RouterLink to="">
            <p
              class="text-[1rem] ssm:text-[1.1rem] leading-none font-black text-white"
            >
              Twitter
            </p>
          </RouterLink>
        </div>
        <div
          class="flex gap-2 py-6 justify-center pl-[10%] col-span-2 border-t-[1px] border-[#ffffff37] row-span-1 items-center"
        >
          <div>
            <img src="./Assets/instagram.svg" alt="Star" />
          </div>
          <RouterLink to="">
            <p
              class="text-[1rem] ssm:text-[1.1rem] leading-none font-black text-white"
            >
              Instagram
            </p>
          </RouterLink>
        </div>
        <div
          class="flex gap-2 py-6 justify-center pl-[10%] col-span-2  border-r-[1px] border-[#ffffff37] row-span-1 items-center"
        >
          <div>
            <img src="./Assets/facebook.svg" alt="Star" />
          </div>
          <RouterLink to="">
            <p
              class="text-[1rem] ssm:text-[1.1rem] leading-none font-black text-white"
            >
              Facebook
            </p>
          </RouterLink>
        </div>
        <div
          class="flex gap-2 py-6 justify-center pl-[10%] col-span-2 border-t-[1px] border-[#ffffff37] row-span-1 items-center"
        >
          <div>
            <img src="./Assets/linkedin.svg" alt="Star" />
          </div>
          <RouterLink to="">
            <p
              class="text-[1rem] ssm:text-[1.1rem]  leading-none font-black text-white"
            >
              LinkedIn
            </p>
          </RouterLink>
        </div>
      </section>

      <!-- <div
        class="border-l-[1px] border-b-[1px] row-span-4 col-span-2 py-4 lg:py-6 border-[#ffffff37]"
      >
        <img src="./Assets/star.svg" class="mx-auto" alt="Star" />
      </div> -->

      

      <div class="py-10 col-span-9 flex gap-[5%] border-b-[1px] border-[#ffffff37] ">
        <h3
          class="tracking-widest font-black w-[40%] text-[#ffffff58] uppercase text-[1rem] ssm:text-[1.1rem]"
        >
          Company
        </h3>
        <section class=" flex flex-col gap-4">
          <div class=" " v-for="(link, index) in companyLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[1rem] ssm:text-[1.1rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <div class="py-10 col-span-9 flex gap-[5%] border-b-[1px] border-[#ffffff37] ">
        <h3
          class="tracking-widest font-black w-[40%] text-[#ffffff58] uppercase text-[1rem] ssm:text-[1.1rem]"
        >
          Cuisines near you
        </h3>
        <section class=" flex flex-col gap-4">
          <div class=" " v-for="(link, index) in cuisinesLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[1rem] ssm:text-[1.1rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <div class="py-10 col-span-9 flex gap-[5%]">
        <h3
          class="tracking-widest font-black w-[40%]  text-[#ffffff58] uppercase text-[1rem] ssm:text-[1.1rem]"
        >
          Popular
        </h3>
        <section class=" flex flex-col gap-4">
          <div class=" " v-for="(link, index) in poplularLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[1rem] ssm:text-[1.1rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>
    </section>

    <div
        class=" border-b-[1px]  border-[#ffffff37] py-8 ssm:py-12 "
      >

        <div>
          <img
            src="./Assets/downLogo.svg"
            class="w-[50%] ssm:w-[45%] sm:w-[40%] mx-auto"
            alt="Star"
          />
        </div>
      </div>

    <section class="text-center py-6 lg:py-8">
      <small class="text-[#ffffff58] text-[0.9rem] text-center"
        >© All Rights Reserved. 2024, Chowdeck Logistics Inc.
      </small>
    </section>
  </div>
</template>