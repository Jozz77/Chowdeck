<script setup>
import { ref } from "vue";
import explore1 from "../Assets/explore1.png";
import explore2 from "../Assets/explore2.png";
import explore3 from "../Assets/explore3.png";
import explore4 from "../Assets/explore4.png";
import quick1 from "../Assets/quick1.svg";
import quick2 from "../Assets/quick2.svg";
import quick3 from "../Assets/quick3.svg";
import quick4 from "../Assets/quick4.svg";
import quick5 from "../Assets/quick5.svg";

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
</script>

<template >
  <div class="bg-Primary mt-40 pt-[5%] pb-32">
    <section
      class="mt-[-15%]  bg-Secondary mx-[5%] rounded-[16px] py-6 px-[5%]"
    >
      <h2 class="text-[3.2rem] font-black text-center">Explore categories</h2>

      <div class="w-[15%] mt-8 mx-auto">
        <img src="../Assets/bottle.svg" class="w-full" alt="bottle" />
      </div>
    </section>

    <section class="flex mt-10 justify-between px-[5%] items-center">
      <div class="w-[40%] relative">
        <h3 class="text-[2.7rem] leading-[130%] text-white font-black">
          Chowdeck has <br />
          you covered
        </h3>
        <div class="w-[30%] absolute bottom-[-10%] right-[10%] mt-8 mx-auto">
          <img src="../Assets/plates.svg" class="w-full" alt="plates" />
        </div>
      </div>
      <div class="w-[40%]">
        <p class="text-[1.1rem] text-white">
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
            <img :src="quick.img" class=" w-full" alt="image" />
          </div>
          <p class="text-white text-base font-semibold text-[0.9rem]">
            {{ quick.text }}
          </p>
        </div>
      </div>
    </section>

    <section class="flex px-[1%] justify-between mt-16">
      <div
        v-for="explore in exploreImages"
        :key="explore.id"
        :class="`w-[23%] ${explore.style}`"
      >
        <img :src="explore.img" alt="image" class="w-full" />
      </div>
    </section>

    


  </div>
  
</template>

<style scoped>
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