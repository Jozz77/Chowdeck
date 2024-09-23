<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

// Add the icon
addIcons(MdKeyboardarrowdown);
</script>

<template lang="">
  <header class="px-[5%] py-3 z-50 top-0 fixed w-full font-semibold text-[1rem] flex items-center justify-between">
    <div class="shadow-xl w-[25%] md:w-[17%] bg-Primary px-6 lg:px-10 py-4  rounded-full">
      <img alt="Vue logo" class="w-full" src="./Assets/downLogo.svg" />
    </div>

    <div class="hidden md:flex gap-5 lg:gap-10 shadow-xl rounded-full bg-white px-6 lg:px-10 py-4 items-center ">
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base" >Company</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">FAQs</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Blog</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Contact</RouterLink>
    </div>

    <div class="hidden md:flex gap-2 bg-white shadow-xl px-6 lg:px-10  py-4 rounded-full">
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

    <!-- mobile hamburger -->
    <div class="block md:hidden bg-white shadow-xl px-6  py-3 rounded-full">
      <section class="flex gap-2">
        <div class=" ">
          <i class="fa-solid fa-bars text-[1.7rem] text-black"></i>
        </div>
      </section>
    </div>
  </header>
</template>
