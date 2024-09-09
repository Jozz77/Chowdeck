<script setup>
import { ref } from "vue";

// List of FAQs
const faqs = ref([
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return items within 30 days of purchase. The items must be in their original condition.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes between 5-7 business days depending on your location. You will receive a tracking number once your order has shipped.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Shipping costs and times may vary depending on your location.",
  },
  {
    id: 4,
    question: "Can I cancel my order?",
    answer:
      "You can cancel your order within 24 hours of placing it. Please contact our support team to request a cancellation.",
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
  <div class="faq-container bg-white mt-[-10%] border-2 rounded-[24px] mx-[5%] py-8 border-black flex">
    <!-- Left side: List of questions (50%) -->
    <div class="faq-questions w-[50%] px-8">
        <h2 class=" font-black text-Green text-[3.5rem] ">FAQs.</h2>
      <ul class="mt-6 space-y-4">
        <li
          v-for="(faq, index) in faqs"
          :key="faq.id"
          :class="{' bg-black rounded-[8px] text-white': index === selectedQuestion}"
          @click="selectQuestion(index)"
          class="cursor-pointer p-4 border-[1px] rounded-[8px] bg-[#0c513f09] border-gray-300 hover:bg-[#0c513f24] transition-colors duration-300 ease-in-out"
        >
          {{ faq.question }}
        </li>
      </ul>
    </div>

    <!-- Right side: Answer display (50%) -->
    <div class="faq-answer w-[50%] px-8 relative">
         <h2 class=" font-black text-Green text-[3.5rem] ">Ans.</h2>
      <transition name="fade" mode="out-in">
        <div class=" bg-[#FFC501] rounded-[16px] mt-4 px-[5%] py-8" key="answer-{{ selectedQuestion }}">
          <!-- <h2 class="font-bold text-[1.5rem] mb-4">
            {{ faqs[selectedQuestion].question }}
          </h2> -->
          <div>
            <img src="../Assets/circle.svg" alt="">
          </div>
          <p class="text-[1.1rem] mt-6 ">
            {{ faqs[selectedQuestion].answer }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>



<style scoped>
/* Smooth fade animation for the answer section */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Style for active question */
.active-question {
  font-weight: bold;
  color: #1DA1F2;
  border-left: 4px solid #1DA1F2;
  background-color: #f0f8ff;
}
</style>
