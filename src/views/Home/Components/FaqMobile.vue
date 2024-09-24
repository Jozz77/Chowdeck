<script setup>
import { ref } from "vue";

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
      "We currently pick up and also deliver food to places in Lagos, Abuja, Ibadan, Port-Harcourt, Ilorin, Benin City, Abeokuta and Asaba. This means you can find your favourite restaurants and food vendors who are in these locations and order your meals from them. There are ongoing plans to expand to other areas of Nigeria soon.",
  },
  {
    id: 3,
    question: "What is Chowdeck wallet?",
    answer:
      "Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders.",
  },
  {
    id: 4,
    question: "What is Chowscore?",
    answer:
      "Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.",
  },
  {
    id: 5,
    question: "What is Service fee?",
    answer:
      "The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform.",
  },
  {
    id: 6,
    question: "Why do we charge Service fee?",
    answer:
      "Having food delivered to you anytime, anywhere is so convenient, but it can be extremely costly to operate a delivery service. We need to cover technology costs, transaction processing fees and support to do this effectively. The various fees on our checkout ensure we stay ahead of these costs and continue serving you, our deserving customer. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa.",
  },
  {
    id: 7,
    question: "What is Surge fee?",
    answer:
      "A surge fee is a dynamic flat fee applicable when order demand exceeds available driver supply and is added to your subtotal during checkout on the Chowdeck app. The surge fee is calculated by considering how many people want to order on Chowdeck and how many delivery drivers are on the road in a particular area to fulfil orders.",
  },
]);

// The currently selected question
const selectedQuestion = ref(null);

// Function to handle question selection
const toggleQuestion = (index) => {
  selectedQuestion.value = selectedQuestion.value === index ? null : index;
};
</script>

<template>
  <div class="faq-container  mx-[5%] mt-[-15%] bg-[#FFC501]  rounded-[16px] px-4 py-6 border-black border-2 shadow-md">
    <h2 class="text-[2rem] text-Primary font-bold mb-4">FAQs</h2>

    <ul>
      <!-- FAQ Items -->
      <li
        v-for="(faq, index) in faqs"
        :key="faq.id"
        class="border-b border-gray-300 py-3"
      >
        <!-- Question Section -->
        <div
          @click="toggleQuestion(index)"
          class="flex justify-between items-center cursor-pointer"
        >
          <p class="text-lg font-semibold">{{ faq.question }}</p>
          <span>
            <i
              :class="selectedQuestion === index ? 'fa-chevron-up' : 'fa-chevron-down'"
              class="fa-solid"
            ></i>
          </span>
        </div>

        <!-- Answer Section (Dropdown) -->
        <transition name="fade">
          <div v-if="selectedQuestion === index" class="mt-3 bg-black rounded-[16px] text-white py-5 px-[5%]">
            {{ faq.answer }}
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Smooth fade animation for the answer dropdown */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
