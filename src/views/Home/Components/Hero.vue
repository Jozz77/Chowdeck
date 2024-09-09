<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import imgUrl from '../Assets/svg.svg';
import Apple from '../Assets/Frame.svg';
import Bike from '../Assets/Bike.svg';

// Create refs for the DOM elements
const headingRef = ref(null);
const buttonRef1 = ref(null);
const buttonRef2 = ref(null);
const bikeRef = ref(null);

onMounted(() => {
  // Create a GSAP timeline
  const tl = gsap.timeline();

  // Animate heading (fade in with GSAP)
  tl.fromTo(headingRef.value, 
  { opacity: 0, y: 200 },    // Starting state (invisible, moved 50px down)
  { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } // Slowly fades in and moves to original position
)
    // Animate button 1 (slide in from bottom)
    .from(buttonRef1.value, {
      opacity: 0,
      y: 100,
      duration: 0.8,
    })
    // Animate button 2 (slide in from bottom)
    .from(buttonRef2.value, {
      opacity: 0,
      y: 100,
      duration: 0.8,
    }, '-=0.5') // Overlap the animation by half a second
    // Animate bike (slide in from right)
    .from(bikeRef.value, {
      opacity: 0,
      x: '100vw',
      duration: 3,
    });
});
</script>

<template>
  <div class="px-[5%] mt-20">
    <!-- Heading to animate -->
    <h1 ref="headingRef" class="text-center text-[7rem] font-bold">
      <!-- Se o ti jeun? -->
      <!-- You don chop? -->
      You've eaten?
    </h1>

    <!-- Buttons to animate -->
    <section class="flex items-center mt-12 justify-center gap-4">
      <button ref="buttonRef1" class="bg-[#0C513F] py-4 px-6 rounded-md flex gap-2 items-center">
        <div>
          <img alt="Playstore logo" class="w-full" :src="imgUrl" />
        </div>
        <p class="text-white text-[1rem]">Download on Google Play</p>
      </button>

      <button ref="buttonRef2" class="bg-[#0C513F] py-4 px-6 rounded-md flex gap-2 items-center">
        <div>
          <img alt="Apple logo" class="w-full" :src="Apple" />
        </div>
        <p class="text-white text-[1rem]">Download on the App Store</p>
      </button>
    </section>

    <!-- Bike image to animate -->
    <section class="mt-12 w-[10%]">
      <img ref="bikeRef" alt="Bike logo" class="w-full" :src="Bike" />
    </section>
  </div>
</template>

<style scoped>
.bg-Primary {
  background-color: #FFC501;
}
</style>
