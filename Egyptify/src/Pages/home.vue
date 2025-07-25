<template>
  <div class="w-full">
    <Navbar /> 
    <section class="p-8">
         <Input
      v-model="username"
      label="Username"
      placeholder="Enter your name"
    />
    <TripCard
  image="/images/giza.jpg"
  title="Cairo & Giza Adventure"
  description="Explore the magic of ancient Egypt with a spectacular light show."
  location="Cairo, Egypt"
  date="2025-05-15 - 2025-05-20"
  duration="5 days"
  price="200"
  rating="4.5"
>
 <template #action>
    <BaseButton text=" Book now!" />
  </template>
</TripCard>
    </section>
    <Footer />
  </div>
</template>

<script setup>

import Navbar from '../components/navbar.vue';
import Input from '../components/input.vue';
import Footer from "../components/footer.vue"
import TripCard from '../components/card.vue';
import BaseButton from '../components/BaseButton.vue';
</script>
