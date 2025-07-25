<template>
  <div class="flex justify-center items-center h-screen bg-gray-50">
    <form class="bg-white shadow-md rounded-xl p-8 w-[350px]">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Log in</h2>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm mb-2">Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm mb-2">Password</label>
        <input
          type="password"
          placeholder="********"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <BaseButton class="w-full">Login</BaseButton>
    </form>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
</script>

