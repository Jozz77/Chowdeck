
<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Create refs for the DOM elements
const placeRef = ref(null);
const textRef = ref(null);
const imageRef = ref(null);

onMounted(() => {
  // Create a GSAP timeline for the place and buttons (runs first)
  const firstTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: placeRef.value, // Element that triggers the animation
      start: "top 80%", // When the top of the section is 80% from the top of the viewport
      end: "bottom top", // End when the bottom of the section hits the top of the viewport
      toggleActions: "play none none reverse", // Optional: Adjust if needed
      once: true, // Ensures the animation only plays once
    },
  });

  firstTimeline
    .fromTo(
      placeRef.value,
      { opacity: 0, x: -200 }, // Initial state
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" } // End state
    )
    .fromTo(
      textRef.value,
      { opacity: 0, x: -200 }, // Initial state
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" } // End state
    )
    .fromTo(
      imageRef.value,
      { opacity: 0, x: 200 }, // Initial state
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }, // End state
      "-=1.5"
    );
});
</script>

<template>
  <div
    ref="placeRef"
    class="px-[5%] place-container flex flex-col gap-6 ssm:gap-12 lg:gap-0 lg:flex-row justify-between mt-10"
  >
    <section
      ref="textRef"
      class=" w-full lg:w-[48%]  bg-Primary rounded-[12px] py-8 px-[3%]"
    >
      <h2 class="text-[2rem] ssm:text-[2.5rem] lg:text-[2.3rem] xl:text-[2.5rem] leading-[130%] text-white font-black">
        Place your <br />
        order in seconds
      </h2>
      <div class="mt-10">
        <button
          class="bg-white flex items-center gap-2 rounded-[8px] px-4 py-3"
        >
          <div class="w-[8%]">
            <img src="../Assets/svg.svg" class="w-full" alt="Playstore" />
          </div>
          <span class="text-[0.9rem] font-medium">Download on Google Play</span>
        </button>
        <button
          class="bg-white mt-4 flex items-center gap-2 rounded-[8px] px-4 py-3"
        >
          <div>
            <i class="fa-brands fa-apple text-black text-[1.2rem]"></i>
          </div>
          <span class="text-[0.9rem] font-medium">Download on App Store</span>
        </button>
      </div>

      <div class="justify-between gap-[10%] flex items-end">
        <section class="flex flex-col gap-4">
          <div class="w-[40%]">
            <img src="../Assets/can.svg" class="w-full" alt="Can" />
          </div>
          <div>
            <button
              class="bg-[#FFC501] border-[3px] border-black py-3 px-8 rounded-[8px] text-[0.95rem] font-black"
            >
              CDNWEB
            </button>
          </div>
          <p class="text-white">
            Get
            <span class="text-[#FFC501] text-[0.9rem] font-semibold">₦300</span>
            off your first order when you use this promo code!
          </p>
        </section>
        <div class="w-[30%] lg:w-[70%]">
          <img src="../Assets/bottle.svg" class="w-full" alt="bottle" />
        </div>
      </div>
    </section>

    <div ref="imageRef" class="w-full lg:w-[50%] xl:w-[48%]">
      <img src="../Assets/place.png" class="w-full" alt="Can" />
    </div>
  </div>
</template>