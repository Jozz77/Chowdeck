<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

// Add the icon
addIcons(MdKeyboardarrowdown);
</script>

<template lang="">
  <header class="px-[5%] py-3 z-50 top-0 fixed w-full font-semibold text-[1rem] flex items-center justify-between">
    <div>
      <img alt="Vue logo" class="w-full" src="./Assets/Logo.svg" />
    </div>

    <div class="flex gap-8 bg-white px-10 py-4 rounded-full items-center ">
      <RouterLink to="/">Company</RouterLink>
      <RouterLink to="/">FAQs</RouterLink>
      <RouterLink to="/">Blog</RouterLink>
      <RouterLink to="/">Contact</RouterLink>
    </div>

    <div class="flex gap-2 bg-white px-10 py-4 rounded-full">
      <section class="flex gap-2">
        <p>Customers</p>
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
