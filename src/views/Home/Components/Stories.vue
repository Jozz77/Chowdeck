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
        once: true,
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
        once: true,
      },
    }
  );
});
</script>

<template>
  <div class="px-[5%] py-8 overflow-hidden">
    <section class="join-section text-[#D1D5DB] flex gap-3 items-center">
      <h2 class="font-black text-[3.5rem]">Stories</h2>
      <div class="">
        <img src="../Assets/Pasta.svg" class="w-full" alt="" />
      </div>
    </section>

    <section class="join-section flex justify-between mt-8">
      <div
        v-for="join in joinData"
        :key="join.id"
        class="join-item w-[31%] border-2 rounded-[16px] overflow-hidden border-black"
      >
        <section class="relative mt-[-0.2rem]">
          <img src="../Assets/story2.png" class="w-full" alt="" />
        </section>
        <section class="py-6 flex flex-col gap-3 px-[5%]">
          <h3 class="font-black text-center uppercase text-[0.8rem]">
            Chowdeck Joins Y Combinator's S'22 Batch
          </h3>
          <p class="text-[1rem] text-center font-medium ">
            Chowdeck has been accepted to Y Combinator’s Summer Batch 2022,
            joining a league of extraordinary companies that are dis...
          </p>
          <button
            class=" bg-[#0c513f16] rounded-[8px] mt-4 py-3 text-[#0C513F] text-[0.9rem] font-medium"
          >
            Read More
          </button>
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
