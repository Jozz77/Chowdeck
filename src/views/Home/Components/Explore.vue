<script setup>
import { ref } from "vue";
import quickImg from "../Assets/circle.svg";
import explore1 from "../Assets/explore1.png";

const quickData = ref([
  {
    id: 1,
    img: quickImg,
    text: "Quick and easy onboarding",
  },
  {
    id: 2,
    img: quickImg,
    text: "Quick and easy onboarding",
  },
  {
    id: 3,
    img: quickImg,
    text: "Quick and easy onboarding",
  },
  {
    id: 4,
    img: quickImg,
    text: "Quick and easy onboarding",
  },
  {
    id: 5,
    img: quickImg,
    text: "Quick and easy onboarding",
  },
  {
    id: 6,
    img: quickImg,
    text: "Quick and easy onboarding",
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
    img: explore1,
    style: "mt-8",
  },
  {
    id: 3,
    img: explore1,
    style: "mt-0",
  },
  {
    id: 4,
    img: explore1,
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
      <h2 class="text-[3.5rem] font-black text-center">Explore categories</h2>

      <div class="w-[15%] mt-8 mx-auto">
        <img src="../Assets/bottle.svg" class="w-full" alt="bottle" />
      </div>
    </section>

    <section class="flex mt-10 justify-between px-[5%] items-center">
      <div class="w-[40%] relative">
        <h3 class="text-[3rem] leading-[130%] text-white font-black">
          Chowdeck has <br />
          you covered
        </h3>
        <div class="w-[30%] absolute bottom-0 right-0 mt-8 mx-auto">
          <img src="../Assets/plates.svg" class="w-full" alt="plates" />
        </div>
      </div>
      <div class="w-[40%]">
        <p class="text-[1.2rem] text-white">
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
          class="flex gap-2 items-center rounded-[8px] bg-[#ffffff2c] py-2 px-6"
        >
          <div>
            <img :src="quick.img" alt="image" />
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