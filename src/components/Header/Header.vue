<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

// Add the icon
addIcons(MdKeyboardarrowdown);
</script>

<template lang="">
  <header class="px-[5%] py-3 bg-white z-50 top-0 fixed w-full font-semibold text-[1rem] flex items-center justify-between">
    <div>
      <img alt="Vue logo" class="w-full" src="./Assets/Logo.svg" />
    </div>

    <div class="flex gap-8 items-center ">
      <RouterLink to="/">Company</RouterLink>
      <RouterLink to="/">FAQs</RouterLink>
      <RouterLink to="/">Blog</RouterLink>
      <RouterLink to="/">Contact</RouterLink>
    </div>

    <div class="flex gap-2">
      <section class="flex gap-2">
        <p>Company</p>
        <div class=" ">
          <i class="fa-solid fa-circle-chevron-down"></i>
        </div>
      </section>
      <!-- <section >
        <OhVueIcon name="md-keyboardarrowdown" class="text-[2rem] " />
      </section> -->
    </div>
  </header>
</template>
