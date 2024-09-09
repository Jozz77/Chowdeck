<script setup>
import { ref } from "vue";

const tweetData = ref([
  {
    id: 1,
    name: "Temz👑",
    username: "@TheRealTemz",
    text: `I wan go baff but I can’t. Because chowdeck riders move like
              thieves in the night. Before you cough, rider don reach your gate.
              The efficiency and speed is crazy`,
  },
  {
    id: 2,
    name: "Temz👑",
    username: "@TheRealTemz",
    text: `I wan go baff but I can’t. Because chowdeck riders move like
              thieves in the night.`,
  },
  {
    id: 3,
    name: "Temz👑",
    username: "@TheRealTemz",
    text: `I wan go baff but I can’t. Because chowdeck riders move like
              thieves in the night.`,
  },
  {
    id: 4,
    name: "Temz👑",
    username: "@TheRealTemz",
    text: `I wan go baff but I can’t. Because chowdeck riders move like
              thieves in the night. Before you cough, rider don reach your gate.`,
  },
]);

// Clone the data to ensure it loops seamlessly
const clonedTweetData = ref([...tweetData.value, ...tweetData.value]);
</script>

<template>
  <div class="py-8">
    <section class="flex flex-col items-center gap-6">
      <div
        class="flex justify-center border-2 border-black rounded-[8px] bg-[#FFF3CC] py-1 px-6 items-center gap-3"
      >
        <div>
          <img src="../Assets/dot.svg" class="w-auto" alt="" />
        </div>
        <h2 class="font-black text-[1.4rem]">Street Cred</h2>
      </div>
      <button class="rounded-[8px] bg-[#1DA1F2] py-2 px-6">
        <span class="text-base text-white font-medium">Join our community</span>
      </button>
    </section>

    <section class="mt-16 flex flex-col gap-6">
      <!-- first Section -->
      <div class="scroll-container">
        <section class="scroll-content">
          <section
            v-for="tweet in clonedTweetData"
            :key="tweet.id"
            class="tweet-card"
          >
            <section
              class="flex flex-col gap-4 bg-[#F9FAFB] rounded-[24px] px-[5%] py-6 border-[#E5E7EB] border-[1px]"
            >
              <div class="flex justify-between items-center">
                <div class="gap-3 flex">
                  <div>
                    <img
                      src="../Assets/tweet1.png"
                      class="w-full"
                      alt="tweet"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="text-[0.9rem] font-black">{{ tweet.name }}</h4>
                    <p class="text-[#9CA3AF] text-[0.9rem]">
                      {{ tweet.username }}
                    </p>
                  </div>
                </div>
                <div>
                  <img src="../Assets/twitter.svg" class="" alt="tweet" />
                </div>
              </div>

              <div>
                <p class="text-[0.9rem]">
                  {{ tweet.text }}
                </p>
              </div>
            </section>
          </section>
        </section>
      </div>

      <!-- second Section -->
      <div class="scroll-container">
        <section class="scroll-content2">
          <section
            v-for="tweet in clonedTweetData"
            :key="tweet.id"
            class="tweet-card"
          >
            <section
              class="flex flex-col gap-4 bg-[#F9FAFB] rounded-[24px] px-[5%] py-6 border-[#E5E7EB] border-[1px]"
            >
              <div class="flex justify-between items-center">
                <div class="gap-3 flex">
                  <div>
                    <img
                      src="../Assets/tweet1.png"
                      class="w-full"
                      alt="tweet"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="text-[0.9rem] font-black">{{ tweet.name }}</h4>
                    <p class="text-[#9CA3AF] text-[0.9rem]">
                      {{ tweet.username }}
                    </p>
                  </div>
                </div>
                <div>
                  <img src="../Assets/twitter.svg" class="" alt="tweet" />
                </div>
              </div>

              <div>
                <p class="text-[0.9rem]">
                  {{ tweet.text }}
                </p>
              </div>
            </section>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scroll-container {
  overflow: hidden;
  width: 100%;
}

.scroll-content {
  display: flex;
  gap: 1rem;
  animation: scroll 10s linear infinite;
}
.scroll-content2 {
  display: flex;
  gap: 1rem;
  animation: scroll2 10s linear infinite;
}

.tweet-card {
  flex: 0 0 24%;
  white-space: normal; /* Ensure text wraps */
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes scroll2 {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
