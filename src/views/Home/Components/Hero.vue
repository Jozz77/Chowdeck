<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import Bike from "../Assets/Bike.svg";

// Create refs for the DOM elements
const headingRef = ref(null);
const buttonRef1 = ref(null);
const buttonRef2 = ref(null);
const bikeRef = ref(null); // Original bike
const bikeRefRight = ref(null); // Original bike
const bikeDiagonalRef = ref(null); // Diagonal bike

onMounted(() => {
  // Create a GSAP timeline for the heading and buttons (runs first)
  const firstTimeline = gsap.timeline();

  // Animate heading (fade in with GSAP)
  firstTimeline
    .fromTo(
      headingRef.value,
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    // Animate button 1 (slide in from bottom)
    .from(buttonRef1.value, { opacity: 0, y: 100, duration: 0.8 })
    // Animate button 2 (slide in from bottom)
    .from(buttonRef2.value, { opacity: 0, y: 100, duration: 0.8 }, "-=0.5");

  // Create a separate timeline for the diagonal bike and the original bike
  const secondTimeline = gsap.timeline({ repeat: -1, repeatDelay: -0.5, delay: -1 }); // Set to repeat the bike sequence

  // Animate the diagonal bike first
  secondTimeline
    .fromTo(
      bikeDiagonalRef.value,
      { x: "100vw", y: "-25vh", rotate: 345, opacity: 1 }, // Starting position from the right
      { x: "60vw", y: "0vh", rotate: 345, duration: 2, ease: "power2.inOut" } // Move downwards
    )
    .set(bikeDiagonalRef.value, { rotate: 0 }, )
    // Move horizontally across the screen
    .to(bikeDiagonalRef.value, {
      x: "-100vw",
      y: "0vh",
      rotate: 0,
      duration: 4.5,
      ease: "power2.inOut",
    })
    // After the diagonal bike finishes, animate the original bike
    .fromTo(
      bikeRef.value,
      { x: "-30vw", opacity: 1 },
      { x: "100vw", opacity: 1, duration: 4.5, ease: "power2.inOut" },
      "-=4" // Start bikeRef 2.5 seconds before bikeDiagonalRef finishes
    )
    .fromTo(
      bikeRefRight.value,
      { x: "100vw", opacity: 1 },
      { x: "-70vw", opacity: 1, duration: 4.5, ease: "power2.inOut" },
      "-=3.5" // Start bikeRef 2.5 seconds before bikeDiagonalRef finishes
    );

  // Chain the second timeline after the first timeline completes
  firstTimeline.add(secondTimeline, "+=0"); // 0.5 seconds delay after the first timeline
});

// Array of texts to cycle through
const texts = [
  "You don chow?",
  "Se o ti jeun?",
  "I riela nri?",
  "Kun ci abinci?",
  "Have you eaten?",
];
const currentText = ref(texts[0]);
let currentIndex = 0;
let intervalId = null;

// Function to switch between texts every 5 seconds
const switchText = () => {
  currentIndex = (currentIndex + 1) % texts.length;
  currentText.value = texts[currentIndex];
};

onMounted(() => {
  intervalId = setInterval(switchText, 5000); // Switch text every 5 seconds
});

onBeforeUnmount(() => {
  clearInterval(intervalId); // Clean up interval when the component is unmounted
});
</script>

<template>
  <div
    class="px-[5%] relative flex flex-col gap-8 justify-center items-center h-screen heroBg overflow-hidden pb-4"
  >
    <!-- Heading to animate -->
    <h1
      ref="headingRef"
      class="text-[5rem] lg:text-[6.5rem] xl:text-[7rem] mt-[-20%] lg:mt-[-15%] xl:mt-[-10%] xxl:mt-[-13%] overflow-hidden text-center animated-text font-bold"
    >
      {{ currentText }}
    </h1>

    <!-- Buttons to animate -->
    <section class="flex items-center justify-center gap-4">
      <button
        ref="buttonRef1"
        class="bg-[#0C513F] py-4 px-6 rounded-md flex gap-2 items-center"
      >
        <div class="w-[10%]">
          <img alt="Playstore logo" class="w-full" src="../Assets/svg.svg" />
        </div>
        <p class="text-white text-[1rem]">Download on Google Play</p>
      </button>

      <button
        ref="buttonRef2"
        class="bg-[#0C513F] py-4 px-6 rounded-md flex gap-2 items-center"
      >
        <div>
          <i class="fa-brands fa-apple text-white text-[1.5rem]"></i>
        </div>
        <p class="text-white text-[1rem]">Download on the App Store</p>
      </button>
    </section>

    <!-- Bike images to animate -->
    <section class="absolute bottom-[5%] w-full flex gap-4">
      <!-- First bike that moves diagonally and then vertically (repeats) -->
      <div class="w-[10%]">
        <img
          ref="bikeDiagonalRef"
          alt="Diagonal Bike logo"
          class="w-full"
          :src="Bike"
        />
      </div>

      <!-- Original bike that moves from the right (runs once) -->
      <div class="w-[10%]">
        <img
          ref="bikeRef"
          alt="Bike logo"
          class="scale-x-[-1] w-full"
          :src="Bike"
        />
      </div>
      <!-- Original bike that moves from the left (runs once) -->
      <div class="w-[10%]">
        <img ref="bikeRefRight" alt="Bike logo" class="w-full" :src="Bike" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.heroBg {
  background-color: #f4f4f4;
}
.animated-text {
  position: relative;
  transition: transform 0.7s ease, opacity 0.7s ease;
}

/* Animation classes */
.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
