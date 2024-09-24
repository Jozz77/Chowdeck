<script setup>
import { ref } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

// Add the icon
addIcons(MdKeyboardarrowdown);

// State to manage mobile menu visibility
const isMobileMenuOpen = ref(false);

// Function to toggle the mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="px-[5%] py-3 z-50 top-0 fixed w-full font-semibold text-[1rem] flex items-center justify-between">
    <!-- Logo Section -->
    <div class="shadow-xl w-[40%] ssm:w-[35%] sm:w-[25%] md:w-[17%] bg-Primary px-6 lg:px-10 py-4 sm:py-4 rounded-full">
      <img alt="Vue logo" class="w-full" src="./Assets/downLogo.svg" />
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-5 lg:gap-10 shadow-xl rounded-full bg-white px-6 lg:px-10 py-4 items-center">
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Company</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">FAQs</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Blog</RouterLink>
      <RouterLink to="/" class="hover:text-Primary text-[0.85rem] lg:text-base">Contact</RouterLink>
    </div>

    <!-- Dropdown Menu for Customers -->
    <div class="hidden md:flex gap-2 bg-white shadow-xl px-6 lg:px-10 py-4 rounded-full">
      <section class="flex gap-2">
        <p class="text-[0.85rem] lg:text-base">Customers</p>
        <div>
          <OhVueIcon name="md-keyboardarrowdown" class="text-[2rem]" />
        </div>
      </section>
    </div>

    <!-- Mobile Hamburger Icon -->
    <div class="block md:hidden bg-Primary shadow-xl px-6 sm:py-4 py-3 rounded-full" @click="toggleMobileMenu">
      <section class="flex gap-2">
        <div  v-if="!isMobileMenuOpen">
          <i class="fa-solid fa-bars text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.7rem] text-white"></i>
        </div>
        <div  v-if="isMobileMenuOpen">
          <i class="fa-solid fa-xmark text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.7rem] text-white"></i>
        </div>
      </section>
    </div>
  </header>

  <!-- Mobile Menu -->
  <transition name="slide-fade">
    <div
      v-if="isMobileMenuOpen"
      class="fixed top-0 left-0 w-full h-full bg-black z-40 flex px-[5%] y-10 flex-col items-start py-20"
    >
      <div class=" mt-4">
        <RouterLink to="/" class="block text-[1.3rem] sm:text-[1.5rem]  py-5  font-semibold text-white">Company</RouterLink>
        <RouterLink to="/" class="block text-[1.3rem] sm:text-[1.5rem]  py-5 font-semibold text-white">FAQs</RouterLink>
        <RouterLink to="/" class="block text-[1.3rem] sm:text-[1.5rem]  py-5 font-semibold text-white">Blog</RouterLink>
        <RouterLink to="/" class="block text-[1.3rem] sm:text-[1.5rem]  py-5 font-semibold text-white">Contact</RouterLink>
      </div>
      <section class="text-center absolute left-[50%] px-[5%] w-full translate-x-[-50%]  bottom-[5%] ">
      <small class="text-[#ffffff58] text-[0.9rem] sm:text-[1rem] text-center"
        >© All Rights Reserved. 2024, Chowdeck Logistics Inc.
      </small>
    </section>
    </div>
  </transition>
</template>

<style scoped>
/* Animation for the mobile menu */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(-120px);
  opacity: 0;
}
</style>
