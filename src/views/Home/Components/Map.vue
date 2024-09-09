<script setup>
import { ref } from "vue";

const mapData = ref([
  {
    id: 1,
    text: "Sweet Sensation",
  },
  {
    id: 2,
    text: "Sweet Sensation",
  },
  {
    id: 3,
    text: "Sweet Sensation",
  },
  {
    id: 4,
    text: "Sweet Sensation",
  },
  {
    id: 5,
    text: "Sweet Sensation",
  },
  {
    id: 6,
    text: "Sweet Sensation",
  },
  {
    id: 7,
    text: "Sweet Sensation",
  },
  {
    id: 8,
    text: "Sweet Sensation",
  },
]);
</script>

<template>
  <div class="relative whiteBg mt-[-5%] pt-32 pb-8">
    <!-- <section class="mt-[-5%] top-0 left-0 right-0 bottom-0 z-[1] absolute">
      <img src="../Assets/white.svg" class="w-full" alt="" />
    </section> -->

    <section
      class="relative z-10 flex mx-[5%] overflow-hidden border-2 border-black rounded-[24px]"
    >
      <div class="w-[70%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d556443.6324863968!2d2.8863684074641927!3d6.590302371883807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1725811538937!5m2!1sen!2sng"
          width="100"
          height="100"
          style="border: 0"
          class="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        class="w-[35%] bg-transparent ml-[-5%] border-l-2 border-black"
      >
        <section class="bg-[#99C8FF] flex gap-3 items-center border-b-2 border-black px-[5%] py-3">
            <div class=" ">
                <img src="../Assets/dot.svg" class=" w-auto" alt="">
            </div>
          <h3 class="text-[1.3rem] font-semibold">Restaurants</h3>
        </section>
        <section class="flex flex-col  gap-4 bg-white ml-[3%] py-4">
          <div
            v-for="map in mapData"
            :key="map.id"
            class="border-[#E5E7EB] flex items-center justify-between py-2 px-[3%] mr-4 border-[1px] rounded-[6px]"
          >
            <p class="text-[0.9rem]">{{map.text}}</p>
            <img src="../Assets/cart.svg" class=" w-auto" alt="">
          </div>
        </section>
      </div>
    </section>
  </div>
</template>