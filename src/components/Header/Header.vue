<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

// Add the icon
addIcons(MdKeyboardarrowdown);
</script>

<template lang="">
  <header class="px-[5%] py-3 z-50 top-0 fixed w-full font-semibold text-[1rem] flex items-center justify-between">
    <div class="shadow-xl rounded-full">
      <img alt="Vue logo" class="w-full" src="./Assets/Logo.svg" />
    </div>

    <div class="flex gap-5 lg:gap-10 shadow-xl rounded-full bg-white px-6 lg:px-10 py-4 items-center ">
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base" >Company</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">FAQs</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Blog</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Contact</RouterLink>
    </div>

    <div class="flex gap-2 bg-white shadow-xl px-6 lg:px-10  py-4 rounded-full">
      <section class="flex gap-2">
        <p class="text-[0.85rem] lg:text-base">Customers</p>
        <div class=" ">
          <i class="fa-solid fa-circle-chevron-down text-black"></i>
        </div>
      </section>
      <!-- <section >
        <OhVueIcon name="md-keyboardarrowdown" class="text-[2rem] " />
      </section> -->
    </div>
  </header>
</template>
