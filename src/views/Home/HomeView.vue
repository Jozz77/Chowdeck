<script setup>
import Hero from './Components/Hero.vue'
import Join from './Components/JoinNetwork.vue'
import Try from './Components/TryApp.vue'
import Explore from './Components/Explore.vue'
// import Map from './Components/Map.vue'
import StreetCred from './Components/StreetCred.vue'
import Stories from './Components/Stories.vue'
import FAQs from './Components/FAQs.vue'
import FaqMobile from './Components/FaqMobile.vue'
import PlaceOrder from './Components/PlaceOrder.vue'
import Footer from '../../components/Footer/Footer.vue'
import FooterMobile from '../../components/Footer/FooterMobile.vue'

</script>

<template>
  <main class=" overflow-hidden">
    <Hero />
    <Try />
    <Join />
    <Explore />
    <!-- <Map /> -->
    <StreetCred />
    <Stories />

    <div class=" bg-black mt-16 md:mt-24 lg:mt-40 pt-[5%] " >
      <div class="hidden md:block">
        <FAQs />
      </div>
      <div class="block md:hidden">
        <FaqMobile />
      </div>
      <PlaceOrder />
      <div class="hidden md:block">
        <Footer />
      </div>
      <div class="block md:hidden">
        <FooterMobile />
      </div>
    </div>
  </main>
</template>