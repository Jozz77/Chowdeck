<script setup>
import { onMounted, ref } from "vue";
import explore1 from "../Assets/explore1.png";
import explore2 from "../Assets/explore2.png";
import explore3 from "../Assets/explore3.png";
import explore4 from "../Assets/explore4.png";
import quick1 from "../Assets/quick1.svg";
import quick2 from "../Assets/quick2.svg";
import quick3 from "../Assets/quick3.svg";
import quick4 from "../Assets/quick4.svg";
import quick5 from "../Assets/quick5.svg";
import bottle1 from "../Assets/bottle.svg";
import bottle2 from "../Assets/bottle2.svg";
import bottle3 from "../Assets/bottle3.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => (
   gsap.fromTo(
    ".explore-section", // Target the section you want to animate
    { opacity: 0, y: 50 }, // Initial state
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".explore-section", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true,
      },
    }
  )
))


const quickData = ref([
  {
    id: 1,
    img: quick1,
    text: "Quick and easy onboarding",
  },
  {
    id: 2,
    img: quick2,
    text: "Quality meal choices",
  },
  {
    id: 3,
    img: quick3,
    text: "Live updates on orders",
  },
  {
    id: 4,
    img: quick4,
    text: "Highly rated riders",
  },
  {
    id: 5,
    img: quick5,
    text: "20/7 support for customers and vendors",
  },
]);

const exploreImages = ref([
  {
    id: 1,
    img: explore1,
    style: "mt-0",
  },
  {
    id: 2,
    img: explore2,
    style: "mt-8",
  },
  {
    id: 3,
    img: explore3,
    style: "mt-0",
  },
  {
    id: 4,
    img: explore4,
    style: "mt-8",
  },
]);

// Clone the data for smooth infinite scrolling
const clonedQuickData = ref([...quickData.value, ...quickData.value]);
const clonedExploreData = ref([...exploreImages.value, ...exploreImages.value]);

// Sample slide data (you can replace with actual images)
const slides = ref([
  { id: 1, image: bottle1 },
  { id: 2, image: bottle2 },
  { id: 3, image: bottle3 },
]);

const activeSlide = ref(0);

// Function to go to the next slide
const nextSlide = () => {
  if (activeSlide.value < slides.value.length - 1) {
    activeSlide.value++;
  } else {
    activeSlide.value = 0; // Loop back to the first slide
  }
};

// Function to go to the previous slide
const prevSlide = () => {
  if (activeSlide.value > 0) {
    activeSlide.value--;
  } else {
    activeSlide.value = slides.value.length - 1; // Loop back to the last slide
  }
};

// Function to go to a specific slide based on pagination click
const goToSlide = (index) => {
  activeSlide.value = index;
};
</script>

<template>
  <div class="bg-Primary explore-section mt-28 lg:mt-40 pt-[5%] pb-24 lg:pb-32">
    <section
      class="mt-[-15%] bg-Secondary mx-[5%] rounded-[16px] py-6 px-[3%] relative"
    >
      <h2 class="text-[2.7rem] lg:text-[3.2rem] font-black text-center">Explore categories</h2>

      <!-- Slider -->
      <div class="flex justify-center mt-8 relative">
        <div class="w-[15%]">
          <img
            :src="slides[activeSlide].image"
            class="w-full"
            alt="category-image"
          />
        </div>
      </div>

      <div class="flex justify-between">
        <!-- Pagination (Numbered) -->
        <div class="flex justify-center mt-4 space-x-2">
          <div
            class="border-2 bg-black rounded-full h-12 w-12 flex justify-center items-center border-black"
          >
            <i
              class="fa-solid fa-location-dot text-[1.5rem] text-Secondary"
            ></i>
          </div>
          <span
            v-for="(slide, index) in slides"
            :key="slide.id"
            @click="goToSlide(index)"
            :class="[
              'cursor-pointer h-12 w-12 flex items-center border-2 border-black justify-center rounded-full text-[1rem] font-medium',
              index === activeSlide
                ? 'bg-transparent text-black'
                : 'bg-black hover:bg-[#000000be] text-Secondary',
            ]"
          >
            0{{ index + 1 }}
          </span>
          <div
            class="border-2 bg-black rounded-full h-12 w-12 flex justify-center items-center border-black"
          >
            <div class="w-[70%]">
              <img src="../Assets/diamond.svg" class="w-full" alt="" />
            </div>
          </div>
        </div>

        <!-- Previous & Next Buttons -->
        <div class="flex gap-2 items-center mt-4">
          <button
            @click="prevSlide"
            class="border-2 bg-black hover:bg-[#000000be] hover:border-[#000000be] rounded-full h-12 w-12 flex justify-center items-center border-black"
          >
            <i class="fa-solid fa-arrow-left text-[1.5rem] text-Secondary"></i>
          </button>
          <button
            @click="nextSlide"
            class="border-2 bg-black hover:bg-[#000000be] hover:border-[#000000be] rounded-full h-12 w-12 flex justify-center items-center border-black"
          >
            <i class="fa-solid fa-arrow-right text-[1.5rem] text-Secondary"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="flex mt-10 justify-between px-[5%] items-center">
      <div class="w-[40%] relative">
        <h3 class="text-[2.3rem] lg:text-[2.7rem] leading-[130%] text-white font-black">
          Chowdeck has <br />
          you covered
        </h3>
        <div class="w-[30%] absolute bottom-[-10%] right-[10%] mt-8 mx-auto">
          <img src="../Assets/plates.svg" class="w-full" alt="plates" />
        </div>
      </div>
      <div class="w-[45%] lg:w-[40%]">
        <p class="text-[1rem] lg:text-[1.1rem] text-white">
          Hungry? Too tired to cook? Have friends over, or do you simply need to
          chop life? Download Chowdeck, and let’s deliver happiness to your
          doorstep in minutes.
        </p>
      </div>
    </section>

    <!-- Scrolling Section -->
    <section class="scroll-container mt-16">
      <div class="scroll-content">
        <div
          v-for="quick in clonedQuickData"
          :key="quick.id"
          class="flex gap-2 items-center rounded-[8px] bg-[#ffffff2c] py-3 px-6"
        >
          <div class=" ">
            <img :src="quick.img" class="w-full" alt="image" />
          </div>
          <p class="text-white text-base font-semibold text-[0.9rem]">
            {{ quick.text }}
          </p>
        </div>
      </div>
    </section>

    <section class="flex px-[1%] justify-between mt-16">
      <section class="scroll-container ">
        <div class="scroll-content">
          <div
            v-for="explore in clonedExploreData"
            :key="explore.id"
            :class="`w-[23%] ${explore.style}`"
          >
            <img :src="explore.img" alt="image" class="w-full" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s ease;
}

.scroll-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.scroll-content {
  display: flex;
  gap: 1rem;
  animation: scroll 15s linear infinite;
}

.scroll-content > div {
  flex: 0 0 auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
