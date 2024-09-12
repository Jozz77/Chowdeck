<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";
import Phone from "../Assets/phone.png";

// Define tab content components
const tabs = ref([
  { name: "Customer" },
  { name: "Vendors" },
  { name: "Riders" },
]);

// Track the active tab
const activeTab = ref(tabs.value[0]);

// Function to switch tabs
function selectTab(tab) {
  activeTab.value = tab;
}

// GSAP animations
function animateContent() {
  const tl = gsap.timeline();
  tl.from(".tab-buttons button", { opacity: 0, y: 50, stagger: 0.2, duration: 1, ease: "power4.out" })
    .from(".customer-heading", { opacity: 0, y: 50, duration: 1, ease: "power4.out" }, "-=0.8")
    .from(".customer-text", { opacity: 0, y: 30, duration: 1, ease: "power4.out" }, "-=0.5")
    .from(".phone-img", { opacity: 0, x: 100, duration: 1, ease: "power4.out" }, "-=0.5")
    .from(".rotate-animation", { opacity: 0, scale: 0, duration: 1, ease: "power4.out" }, "-=0.5");
}

// Use Intersection Observer to trigger animation when component is in view
onMounted(() => {
  const section = document.querySelector(".tab-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateContent(); // Trigger the GSAP animation
        observer.unobserve(section); // Stop observing once animation has started
      }
    });
  }, { threshold: 0.3 }); // Trigger when 30% of the section is in view

  observer.observe(section);
});

// Watch for activeTab changes and trigger animations
watch(activeTab, (newTab) => {
  const tl = gsap.timeline();
  if (newTab.name === "Customer") {
    tl.from(".customer-heading", { opacity: 0, y: 50, duration: 1, ease: "power4.out" })
      .from(".customer-text", { opacity: 0, y: 30, duration: 1, ease: "power4.out" }, "-=0.5")
      .from(".phone-img", { opacity: 0, x: 100, duration: 1, ease: "power4.out" }, "-=0.5")
      .from(".rotate-animation", { opacity: 0, scale: 0, duration: 1, ease: "power4.out" }, "-=0.5");
  } else if (newTab.name === "Vendors") {
    tl.from(".vendor-heading", { opacity: 0, y: 50, duration: 1, ease: "power4.out" })
      .from(".vendor-text", { opacity: 0, y: 30, duration: 1, ease: "power4.out" }, "-=0.5");
  } else if (newTab.name === "Riders") {
    tl.from(".rider-heading", { opacity: 0, y: 50, duration: 1, ease: "power4.out" })
      .from(".rider-text", { opacity: 0, y: 30, duration: 1, ease: "power4.out" }, "-=0.5");
  }
});
</script>

<template>
  <div class="mt-20 tab-section">
    <section class="flex justify-center py-3 tab-buttons">
      <div class="bg-[#FFF3CC] p-1 text-base font-medium rounded-full">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'bg-[#FFC501]': activeTab.name === tab.name }"
          @click="selectTab(tab)"
          class="rounded-full px-8 py-2"
        >
          {{ tab.name }}
        </button>
      </div>
    </section>

    <!-- Display Tab Content -->
    <section class="mt-8 px-[5%]">
      <transition name="fade">
        <div key="tab-content">
          <div v-if="activeTab.name === 'Customer'" class="text-center">
            <section class=" flex flex-col gap-4">
              <h2 class="text-[3.5rem] font-black customer-heading">Try the App</h2>
              <p class="px-[25%] tracking-wider text-[1.1rem] customer-text">
                Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to
                Continental cuisines to satisfy your cravings.
              </p>
            </section>

            <section class="relative mx-auto w-[30%] mt-20 ">
              <img :src="Phone" class="w-full phone-img" alt="phone" />

              <div class="rotate-animation absolute w-[30%] top-[-5%] left-[75%]">
                <img src="../Assets/roll.svg" class="w-full " alt="roll" />
              </div>
            </section>
          </div>

          <div v-if="activeTab.name === 'Vendors'" class="text-center">
            <section class=" flex flex-col gap-4">
              <h2 class="text-[3.5rem] font-black customer-heading">All in One</h2>
              <p class="px-[25%] tracking-wider text-[1.1rem] customer-text">
                Unlock new levels of growth with seamless menu and orders management, multiple branches and team, easy payouts withdrawal and a lot more.
              </p>
            </section>

            <section class="relative mx-auto w-[30%] mt-20 ">
              <img :src="Phone" class="w-full phone-img" alt="phone" />

              <div class="rotate-animation absolute w-[30%] top-[-5%] left-[75%]">
                <img src="../Assets/roll.svg" class="w-full " alt="roll" />
              </div>
            </section>
          </div>

          <div v-if="activeTab.name === 'Riders'" class="text-center">
            <section class=" flex flex-col gap-4">
              <h2 class="text-[3.5rem] font-black customer-heading">Become a Champ</h2>
              <p class="px-[25%] tracking-wider text-[1.1rem] customer-text">
                Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.
              </p>
            </section>

            <section class="relative mx-auto w-[30%] mt-20 ">
              <img :src="Phone" class="w-full phone-img" alt="phone" />

              <div class="rotate-animation absolute w-[30%] top-[-5%] left-[75%]">
                <img src="../Assets/roll.svg" class="w-full " alt="roll" />
              </div>
            </section>  
        </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<style scoped>
/* Define the 360-degree rotation keyframes */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the rotating element */
.rotate-animation {
  animation: rotate 2s linear infinite;
}

/* GSAP default animation styling */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
