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
      duration: 1,
      ease: "power3.out",
      stagger: 0.3, // Stagger the animation by 0.3 seconds
      scrollTrigger: {
        trigger: ".explore-item", // Element that triggers the animation
        start: "top 80%", // When the top of the section is 20% from the top of the viewport
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
