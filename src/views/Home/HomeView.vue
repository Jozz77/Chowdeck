<script setup>
import Hero from './Components/Hero.vue'
import Join from './Components/JoinNetwork.vue'
import Try from './Components/TryApp.vue'
import Explore from './Components/Explore.vue'
// import Map from './Components/Map.vue'
import StreetCred from './Components/StreetCred.vue'
import Stories from './Components/Stories.vue'
import FAQs from './Components/FAQs.vue'
import PlaceOrder from './Components/PlaceOrder.vue'
import Footer from '../../components/Footer/Footer.vue'

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

    <div class=" bg-black mt-24 lg:mt-40 pt-[5%] " >
      <FAQs />
      <PlaceOrder />
      <Footer />
    </div>
  </main>
</template>