<template>
  <div class="w-full">
    <Navbar /> <!-- هنستخدم الكمبوننت هنا -->

    <!-- باقي محتوى الصفحة -->
    <section class="p-8">
         <Input
      v-model="username"
      label="Username"
      placeholder="Enter your name"
    />
      <!-- Content... -->
    </section>
    <Footer />
  </div>
</template>

<script setup>

import Navbar from '../components/navbar.vue';
import Input from '../components/input.vue';
import Navbar from '../components/navbar.vue'
import Footer from "../components/footer.vue"

</script>
