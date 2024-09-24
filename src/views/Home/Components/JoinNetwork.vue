<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PrArrowDown } from "oh-vue-icons/icons";
import join1 from "../Assets/join1.svg";
import joinIcon1 from "../Assets/circle.svg";
import join2 from "../Assets/join2.svg";
import joinIcon2 from "../Assets/joinIcon2.svg";
import join3 from "../Assets/join3.svg";
import joinIcon3 from "../Assets/joinIcon3.svg";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const joinData = ref([
  {
    id: 1,
    icon: joinIcon1,
    title: `Start selling`,
    text: `Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.`,
    image: join1,
  },
  {
    id: 2,
    icon: joinIcon2,
    title: `Deliver happiness`,
    text: `Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.`,
    image: join2,
  },
  {
    id: 3,
    icon: joinIcon3,
   title: `Behind the scenes`,
    text: `If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.`,
    image: join3,
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
    <section
      class="join-section text-[#D1D5DB] mt-8 sm:mt-12 lg:mt-16 flex gap-3 items-center justify-center"
    >
      <h2 class="text-[#D1D5DB] text-[1.5rem] ssm:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">Join our growing network</h2>
        <i class="fa-solid fa-arrow-down text-[#D1D5DB] leading-none text-[1.3rem] ssm:text-[2rem] md:text-[2.5rem]"></i>
    </section>

    <section class="join-section flex flex-col gap-6 md:gap-0 md:flex-row justify-between mt-8 sm:mt-12">
      <div
        v-for="join in joinData"
        :key="join.id"
        class="join-item w-full  md:w-[32%] lg:w-[30%] border-2 overflow-hidden rounded-[16px] border-black"
      >
        <section class="py-4 lg:py-6 flex flex-col gap-3 md:gap-1 lg:gap-3 px-[5%]">
          <div class="w-[8%] h-5 mb-3 sm:mb-5 md:mb-0 ">
            <img :src="join.icon" class=" w-full" alt="" />
          </div>
          <h3 class="font-black  md:text-[1.2rem] text-[1.1rem] lg:text-[1.3rem]">{{join.title}}</h3>
          <p class="text-[0.95rem] md:text-[0.85rem] lg:text-[0.95rem]">
            {{join.text}}
          </p>
          <button
            class="hover:[blue] tracking-[3px] uppercase text-left text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] font-black"
          >
            see more
          </button>
        </section>
        <section>
          <img :src="join.image" class="w-full mb-[-1%]" alt="" />
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
