<script setup>
import { ref } from "vue";

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
  <div class="pt-10 px-[5%]">
    <section>
      <div class="border-b-[1px] mt-8 relative border-[#ffffff37] py-8">
        <section class="flex items-end gap-4">
          <div class="flex gap-3 items-center">
            <div>
              <img src="./Assets/star.svg" alt="Star" />
            </div>
            <h3 class="leading-none text-white font-black text-[2.2rem]">
              Cool stuff only
            </h3>
          </div>
          <p class="text-[#FFEDB3] text-[0.85rem]">
            Subscribe to our newsletter
          </p>
        </section>
        <section class="absolute right-0 bottom-[-20%]">
          <img src="./Assets/bag.svg" alt="Star" />
        </section>
      </div>
    </section>

    <!-- section section -->
    <section
      class="grid row-auto grid-rows-4 border-[#ffffff37] border-b-[1px] grid-cols-9"
    >
      <div
        class="border-b-[1px] row-span-4 col-span-7 border-[#ffffff37] flex items-center justify-between"
      >
        <div class="py-4 w-full">
          <input
            type="text"
            name=""
            class="outline-0 text-[1rem] bg-transparent text-[#ffffff58] placeholder:text-[#ffffff58] font-black"
            placeholder="yourname@email.com"
          />
        </div>
        
      </div>
      <div class="border-l-[1px] border-b-[1px] row-span-4 col-span-2 py-6 border-[#ffffff37]">
          <img src="./Assets/star.svg" class="mx-auto" alt="Star" />
        </div>

      <div
        class="col-start-1 border-r-[1px] flex flex-col justify-between row-span-3 border-[#ffffff37] py-10 col-end-4"
      >
        <div>
          <img src="./Assets/svg.svg" class="" alt="svg" />
        </div>

        <div>
          <img src="./Assets/downLogo.svg" alt="Star" />
        </div>
      </div>

      <div class="py-10 col-span-2 border-r-[1px] border-[#ffffff37] pl-[10%]">
        <h3
          class="tracking-widest font-black text-[#ffffff58] uppercase text-[0.8rem]"
        >
          Company
        </h3>
        <section class="mt-5 flex flex-col gap-4">
          <div class=" " v-for="(link, index) in companyLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[0.9rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <div class="py-10 col-span-2 border-r-[1px] border-[#ffffff37] pl-[10%]">
        <h3
          class="tracking-widest font-black text-[#ffffff58] uppercase text-[0.8rem]"
        >
          Cuisines near you
        </h3>
        <section class="mt-5 flex flex-col gap-4">
          <div class=" " v-for="(link, index) in cuisinesLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[0.9rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <div class="py-10 col-span-2 pl-[10%]">
        <h3
          class="tracking-widest font-black text-[#ffffff58] uppercase text-[0.8rem]"
        >
          Popular
        </h3>
        <section class="mt-5 flex flex-col gap-4">
          <div class=" " v-for="(link, index) in poplularLinks" :key="index">
            <RouterLink :to="link.link">
              <p class="text-[0.9rem] hover:text-[#ffffff58] text-white">
                {{ link.name }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <div
        class="flex gap-2 py-4 justify-center pl-[10%] col-span-3 border-t-[1px] border-r-[1px] border-[#ffffff37] row-span-1 items-center"
      >
        <div>
          <img src="./Assets/tweet.svg" alt="Star" />
        </div>
        <RouterLink to="">
          <p class="text-[0.9rem] xxl:text-[1rem] leading-none font-black text-white">Twitter</p>
        </RouterLink>
      </div>
      <div
        class="flex gap-2 py-4 justify-center pl-[10%] col-span-3 border-t-[1px] border-[#ffffff37] row-span-1 items-center"
      >
        <div>
          <img src="./Assets/instagram.svg" alt="Star" />
        </div>
        <RouterLink to="">
          <p class="text-[0.9rem] xxl:text-[1rem] leading-none font-black text-white">
            Instagram
          </p>
        </RouterLink>
      </div>
      <div
        class="flex gap-2 py-4 justify-center pl-[10%] col-span-3 border-t-[1px] border-r-[1px] border-[#ffffff37] row-span-1 items-center"
      >
        <div>
          <img src="./Assets/facebook.svg" alt="Star" />
        </div>
        <RouterLink to="">
          <p class="text-[0.9rem] xxl:text-[1rem] leading-none font-black text-white">Facebook</p>
        </RouterLink>
      </div>
      <div
        class="flex gap-2 py-4 justify-center pl-[10%] col-span-3 border-t-[1px] border-[#ffffff37] row-span-1 items-center"
      >
        <div>
          <img src="./Assets/linkedin.svg" alt="Star" />
        </div>
        <RouterLink to="">
          <p class="text-[0.9rem] xxl:text-[1rem] leading-none font-black text-white">LinkedIn</p>
        </RouterLink>
      </div>
    </section>

    <section class="text-center py-8">
      <small class="text-[#ffffff58] text-[0.8rem] text-center"
        >© All Rights Reserved. 2024, Chowdeck Logistics Inc.
      </small>
    </section>
  </div>
</template>