<script setup>
import Hero from './Components/Hero.vue'
import Join from './Components/JoinNetwork.vue'
import Try from './Components/TryApp.vue'
import Explore from './Components/Explore.vue'
import Map from './Components/Map.vue'
import StreetCred from './Components/StreetCred.vue'
import Stories from './Components/Stories.vue'
import FAQs from './Components/FAQs.vue'
import PlaceOrder from './Components/PlaceOrder.vue'

</script>

<template>
  <main>
    <Hero />
    <Try />
    <Join />
    <Explore />
    <Map />
    <StreetCred />
    <Stories />

    <div class=" bg-black mt-32 pt-[5%] " >
      <FAQs />
      <PlaceOrder />
    </div>
  </main>
</template>