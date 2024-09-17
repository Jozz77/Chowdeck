<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.fromTo(
      ".faq-container", // Target the section you want to animate
      { opacity: 0, x: 200 }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-container", // Element that triggers the animation
          start: "top 20%", // When the top of the section is 20% from the top of the viewport
          end: "bottom top", // End when the bottom of the section hits the top of the viewport
          // toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

  gsap.fromTo(
    ".explore-item", // Target each item in the section
    { opacity: 0, y: 200 }, // Initial state
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3, // Stagger the animation by 0.3 seconds
      scrollTrigger: {
        trigger: ".explore-item", // Element that triggers the animation
        start: "top 20%", // When the top of the section is 20% from the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // toggleActions: "play none none reverse",
        once: true,
      },
    }
  );
})

// List of FAQs
const faqs = ref([
  {
    id: 1,
    question: "What is Chowdeck?",
    answer:
      "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
  },
  {
    id: 2,
    question: "What locations do we currently deliver to?",
    answer:
      "Chowdeck currently delivers to major cities across the country. Our delivery network is rapidly expanding to reach more areas, and we strive to offer timely delivery services to all our customers within these locations.",
  },
  {
    id: 3,
    question: "What is Chowdeck wallet?",
    answer:
      "Chowdeck Wallet is a digital wallet that allows users to store funds for easier transactions. With the Chowdeck Wallet, users can top up their balance and use it to make faster and more convenient payments when ordering meals through the platform.",
  },
  {
    id: 4,
    question: "What is Chowscore?",
    answer:
      "Chowscore is a rating system that allows customers to review their experience with restaurants and delivery services on the Chowdeck platform. It helps to ensure that vendors maintain high standards, and allows customers to make informed decisions when choosing where to order from.",
  },
  {
    id: 5,
    question: "What is Service fee?",
    answer:
      "The service fee is a small charge applied to each order to cover operational costs like payment processing, customer support, and platform maintenance. It ensures that Chowdeck can continue to provide a seamless ordering and delivery experience.",
  },
  {
    id: 6,
    question: "Why do we charge Service fee?",
    answer:
      "The service fee is necessary to maintain the quality of our services. It helps cover the costs of running the platform, including technology infrastructure, customer service, and ensuring the smooth operation of logistics for both vendors and customers.",
  },
  {
    id: 7,
    question: "What is Surge fee?",
    answer:
      "The surge fee is an additional charge applied during times of high demand. It helps ensure that there are enough delivery drivers available to meet the increased demand, ensuring quicker deliveries even during peak times.",
  },
]);


// The currently selected question
const selectedQuestion = ref(0);

// Function to handle question selection
const selectQuestion = (index) => {
  selectedQuestion.value = index;
};
</script>

<template>
  <div
    class="faq-container overflow-hidden bg-white mt-[-13%] border-2 rounded-[24px] mx-[5%] py-8 px-[3%] border-black "
  >
  <div class=" flex justify-between gap-[3%]">
    <h2 class="font-black w-[50%] text-Green text-[2.7rem]">FAQs.</h2>
    <h2 class="font-black w-[50%] text-Green text-[2.7rem]">Ans.</h2>
  </div>
    <section class="flex gap-[3%]">
      <!-- Left side: List of questions (50%) -->
    <div class="faq-questions w-[50%] ">
      
      <ul class="mt-6 space-y-3">
        <li
          v-for="(faq, index) in faqs"
          :key="faq.id"
          :class="{
            ' bg-black rounded-[8px]  text-white': index === selectedQuestion,
            'text-Primary': index !== selectedQuestion,
          }"
          @click="selectQuestion(index)"
          class="cursor-pointer explore-item px-[5%] py-4 flex items-center justify-between border-[1px] rounded-[8px]  border-gray-300  transition-colors duration-300 ease-in-out"
        >
         <p :class="{
            '  text-white': index === selectedQuestion,
            'text-Primary': index !== selectedQuestion,
          }" class=" font-black text-[0.9rem] "> {{ faq.question }}</p>
          <div class=" w-[5%]" v-if="index === selectedQuestion">
            <img src="../Assets/yel-oct.svg" class=" w-full" alt="icon" />
          </div>
        </li>
      </ul>
    </div>

    <!-- Right side: Answer display (50%) -->
      <transition name="fade" mode="out-in" class="faq-answer w-[50%] relative">
        <div
          class="bg-[#FFC501]  rounded-[16px] mt-4 px-[3%] py-8"
          key="answer-{{ selectedQuestion }}"
        >
          <div class=" w-[5%]">
            <img src="../Assets/black-oct.svg" class=" w-full" alt="icon" />
          </div>
          <p class="text-[1.1rem] font-medium mt-4">
            {{ faqs[selectedQuestion].answer }}
          </p>
        </div>
      </transition>
    </section>

  </div>
</template>



<style scoped>
/* Smooth fade animation for the answer section */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Style for active question */
.active-question {
  font-weight: bold;
  color: #1da1f2;
  border-left: 4px solid #1da1f2;
  background-color: #f0f8ff;
}
.explore-item {
  opacity: 0;
}
</style>
