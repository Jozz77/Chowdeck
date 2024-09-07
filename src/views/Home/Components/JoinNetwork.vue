<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PrArrowDown } from "oh-vue-icons/icons";
import { ref } from "vue";

const joinData = ref([
  {
    id: 1,
    icon: "",
    title: `Start selling`,
    text: ` Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.`,
    image: "",
  },
  {
    id: 2,
    icon: "",
    title: `Start selling`,
    text: ` Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.`,
    image: "",
  },
  {
    id: 3,
    icon: "",
    title: `Start selling`,
    text: ` Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.`,
    image: "",
  },
]);

// Add the icon
addIcons(PrArrowDown);
</script>

<template>
  <div class="px-[5%] py-8">
    <section
      class="text-[#D1D5DB] mt-16 flex gap-2 items-center justify-center"
    >
      <h2 class="text-[#D1D5DB] text-[3.5rem]">Join our growing network</h2>
      <div class="text-[#D1D5DB]">
        <OhVueIcon name="pr-arrow-down" class="text-[2rem]" />
      </div>
    </section>

    <section class="flex justify-between mt-8">
      <div
        v-for="join in joinData"
        :key="join.id"
        class="w-[30%] border-2 rounded-[16px] border-black"
      >
        <section class="py-6 flex flex-col gap-3 px-[5%]">
          <div>
            <img src="../Assets/circle.svg" alt="" />
          </div>
          <h3 class="font-black text-[1.4rem]">Start selling</h3>
          <p>
            Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.
          </p>
          <button
            class="hover-[blue] uppercase text-left text-[0.9rem] font-semibold"
          >
            see more
          </button>
        </section>
        <section>
          <img src="../Assets/join1.svg" class="w-full" alt="" />
        </section>
      </div>
    </section>
  </div>
</template>
