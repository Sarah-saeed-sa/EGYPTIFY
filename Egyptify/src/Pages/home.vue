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
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import Input from '../components/input.vue';
</script>
