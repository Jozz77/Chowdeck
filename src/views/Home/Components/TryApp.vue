<script setup>
import { ref, defineComponent } from "vue";
import Phone from "../Assets/phone.png";

// Define tab content components
const TabContent1 = defineComponent({
  template: `<div><h2>Customer Tab Content</h2><p>This is the content for the Customer tab.</p></div>`,
});

const TabContent2 = defineComponent({
  template: `<div><h2>Vendors Tab Content</h2><p>This is the content for the Vendors tab.</p></div>`,
});

const TabContent3 = defineComponent({
  template: `<div><h2>Riders Tab Content</h2><p>This is the content for the Riders tab.</p></div>`,
});

const tabs = ref([
  { name: "Customer" },
  { name: "Vendors" },
  { name: "Riders" },
]);

// Track the active tab
const activeTab = ref(tabs.value[0]);

// Function to switch tabs
function selectTab(tab) {
  activeTab.value = tab;
}
</script>

<template>
  <div>
    <section class="flex justify-center py-3">
      <div class="bg-[#FFF3CC] text-base font-medium rounded-full">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'bg-[#FFC501]': activeTab.name === tab.name }"
          @click="selectTab(tab)"
          class="rounded-full px-8 py-2"
        >
          {{ tab.name }}
        </button>
      </div>
    </section>

    <!-- Display Tab Content -->
    <section class="mt-20 px-[5%]">
      <transition name="fade">
        <div key="tab-content">
          <div class="text-center" v-if="activeTab.name === 'Customer'">
            <section>
              <h2 class="text-[3.5rem] font-black">Try the App</h2>
              <p class="px-[25%] tracking-wider text-[1.1rem]">
                Have meals delivered to you within minutes from a wide variety
                of restaurants ranging from African to Continental cuisines to
                satisfy your cravings.
              </p>
            </section>

            <section class="relative mx-auto w-[30%] mt-20 ">
              <img :src="Phone" class="w-full" alt="phone" />

              <div class="rotate-animation absolute w-[30%] top-[-5%] left-[75%]">
                <img src="../Assets/roll.svg" class="w-full " alt="roll">
              </div>
            </section>
          </div>

          <div v-if="activeTab.name === 'Vendors'">
            <section>
              <h2 class="text-2xl font-bold">Vendors Content</h2>
              <p>
                This is the content for the Vendors tab. Add any custom styles
                here.
              </p>
            </section>
          </div>
          <div v-if="activeTab.name === 'Riders'">
            <h2 class="text-2xl font-bold">Riders Content</h2>
            <p>
              This is the content for the Riders tab. Style it to fit your
              needs.
            </p>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<style scoped>
/* Define the 360-degree rotation keyframes */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the element */
.rotate-animation {
  animation: rotate 2s linear infinite; /* Adjust timing as needed */
}
</style>
