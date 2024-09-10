<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PrArrowDown } from "oh-vue-icons/icons";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const joinData = ref([
  {
    id: 1,
    icon: "",
    title: `Start selling`,
    text: `Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.`,
    image: "",
  },
  {
    id: 2,
    icon: "",
    title: `Start selling`,
    text: `Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.`,
    image: "",
  },
  {
    id: 3,
    icon: "",
    title: `Start selling`,
    text: `Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.`,
    image: "",
  },
]);

// Add the icon
addIcons(PrArrowDown);

onMounted(() => {
  gsap.fromTo(
    ".join-section", // Target the section you want to animate
    { opacity: 0, y: 50 }, // Initial state
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".join-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true
      },
    }
  );

  gsap.fromTo(
    ".join-item", // Target each item in the section
    { opacity: 0, x: 200 }, // Initial state
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3, // Stagger the animation by 0.3 seconds
      scrollTrigger: {
        trigger: ".join-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true
      },
    }
  );
});
</script>

<template>
  <div class="px-[5%] py-8 overflow-hidden">
    <section
      class="join-section text-[#D1D5DB] mt-16 flex gap-2 items-center justify-center"
    >
      <h2 class="text-[#D1D5DB] text-[3.5rem]">Join our growing network</h2>
      <div class="text-[#D1D5DB]">
        <OhVueIcon name="pr-arrow-down" class="text-[2rem]" />
      </div>
    </section>

    <section class="join-section flex justify-between mt-8">
      <div
        v-for="join in joinData"
        :key="join.id"
        class="join-item w-[30%] border-2 rounded-[16px] border-black"
      >
        <section class="py-6 flex flex-col gap-3 px-[5%]">
          <div>
            <img src="../Assets/circle.svg" alt="" />
          </div>
          <h3 class="font-black text-[1.3rem]">Start selling</h3>
          <p class=" text-[0.95rem] ">
            Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.
          </p>
          <button
            class="hover:[blue] uppercase text-left text-[0.9rem] font-semibold"
          >
            see more
          </button>
        </section>
        <section>
          <img src="../Assets/join1.svg" class="w-full" alt="" />
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optionally add more styles for the animation */
.join-section {
  opacity: 0; /* Ensure initial opacity is 0 for the animation */
}
.join-item {
  opacity: 0; /* Ensure initial opacity is 0 for the animation */
}
</style>
