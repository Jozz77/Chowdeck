<script setup>
import { ref } from "vue";
import tweet1 from '../Assets/tweet1.png'
import tweet2 from '../Assets/tweet2.png'
import tweet3 from '../Assets/tweet3.png'
import tweet4 from '../Assets/tweet4.png'
import tweet5 from '../Assets/tweet5.png'
import tweet6 from '../Assets/tweet6.png'
import tweet7 from '../Assets/tweet7.png'
import tweet8 from '../Assets/tweet8.png'

const tweetData = ref([
  {
    id: 1,
    name: "Fá",
    img: tweet1,
    username: "@victorfatanmi",
    text: `Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me.`,
  },
  {
    id: 2,
    name: "Teffy Billion Dollars",
    img: tweet2,
    username: "@Jegc_tola",
    text: `My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week! https://t.co/DBm6E2u2hQ`,
  },
  {
    id: 3,
    name: "先生",
    img: tweet3,
    username: "@TheFisola",
    text: `Chowdeck delivered in 20 minutes. Rider said “pardon my lateness” 💀.`,
  },
  {
    id: 4,
    name: "Folasade Daini",
    img: tweet4,
    username: "@folasade_daini",
    text: `Have you seen the new list of vendors on Chowdeck?? Omo. It is giving 🔥🔥`,
  },
]);

const tweetData2 = ref([
  {
    id: 1,
    name: "THEE AWAZI",
    img: tweet5,
    username: "@THEAWAZI",
    text: `Food!!! 🤤💚 So excited that I can now order through @chowdeck on the island. Go team Chowdeck!!!🚀 https://t.co/0Sr3bUid46`,
  },
  {
    id: 2,
    name: "Temz👑",
    img: tweet6,
    username: "@TheRealTemz",
    text: `I wan go baff but I can’t. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy`,
  },
  {
    id: 3,
    name: "Wine",
    img: tweet7,
    username: "@RedWhinee",
    text: `I genuinely love @chowdeck A top app with with service`,
  },
  {
    id: 4,
    name: "Scheherazade",
    img: tweet8,
    username: "@_chiisom",
    text: `You’ll order Chowdeck and say yeah I have about 20 minutes to get home. In 5 minutes, delivery man will tell you he’s outside 😭`,
  },
]);

// Clone the data to ensure it loops seamlessly
const clonedTweetData = ref([...tweetData.value, ...tweetData.value]);
const clonedTweetData2 = ref([...tweetData2.value, ...tweetData2.value]);
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
                  <div class="">
                    <img
                      :src="tweet.img"
                      class="w-full rounded-full"
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
            v-for="tweet in clonedTweetData2"
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
                      :src="tweet.img"
                      class="w-full rounded-full"
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
