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
    image: "https://res.cloudinary.com/duzj8zjj5/image/upload/v1727204967/story1_cy3eqc.png",
  },
  {
    id: 2,
    icon: "",
    title: `Champions : Kingsley Agbinya`,
    text: `Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...`,
    image: "https://res.cloudinary.com/duzj8zjj5/image/upload/v1727204968/story2_m3did6.png",
  },
  {
    id: 3,
    icon: "",
    title: `Champions : Anthony Agam`,
    text: `Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.`,
    image: "https://res.cloudinary.com/duzj8zjj5/image/upload/v1727204968/story3_d3wnoa.png",
  },
]);

// Add the icon
addIcons(PrArrowDown);

onMounted(() => {
  gsap.fromTo(
    ".story-section", // Target the section you want to animate
    { opacity: 0, x: 50 }, // Initial state
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".story-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".story-item", // Target each item in the section
    { opacity: 0, y: 200 }, // Initial state
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3, // Stagger the animation by 0.3 seconds
      scrollTrigger: {
        trigger: ".story-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        once: true,
      },
    }
  );
});
</script>

<template>
  <div class="px-[5%] py-8 overflow-hidden">
    <section class="story-section text-[#D1D5DB] flex gap-3 items-center">
      <h2 class="font-black text-[2.7rem] lg:text-[3.2rem]">Stories</h2>
      <div class="w-[15%] lg:w-auto">
        <img src="../Assets/Pasta.svg" class="w-full" alt="" />
      </div>
    </section>

    <section class="story-section flex flex-col md:flex-row gap-6 md:gap-0 justify-between mt-8">
      <div
        v-for="join in joinData"
        :key="join.id"
        class="story-item w-[100%] md:w-[32%] lg:w-[31%] border-2 rounded-[16px] overflow-hidden border-black"
      >
        <section class="relative mt-[-0.2rem]">
          <img :src="join.image" class="w-full" alt="" />
        </section>
        <section class="py-4 lg:py-6 flex flex-col gap-4 md:gap-3 px-[5%]">
          <h3 class="font-black h-5 md:h-8 text-center uppercase text-[0.9rem] ssm:text-[1rem] md:text-[0.8rem]">
            {{ join.title }}
          </h3>
          <p class="text-[0.9rem] ssm:text-[1rem] md:text-[0.8rem] h-16 md:h-20 lg:h-auto lg:text-[0.95rem] xxl:text-[1rem] text-center font-medium ">
            {{ join.text }}
          </p>
          <button
            class=" bg-[#0c513f16] rounded-[8px] mt-2 lg:mt-4 py-3 text-[#0C513F] text-[0.9rem] ssm:text-[1rem] md:text-[0.9rem] font-medium"
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
.story-section {
  opacity: 0; /* Ensure initial opacity is 0 for the animation */
}
.story-item {
  opacity: 0; /* Ensure initial opacity is 0 for the animation */
}
</style>
