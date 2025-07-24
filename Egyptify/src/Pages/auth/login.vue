<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <input v-model="email" placeholder="Email" class="border p-2 w-full mb-2" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
    <!-- <button @click="handleLogin" class="text-white px-4 py-2 rounded">Login</button> -->
     <BaseButton>Click Me</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../../components/BaseButton.vue'


const email = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  if (email.value === 'test@example.com' && password.value === '123456') {
    userStore.login({
      name: 'Test User',
      email: email.value,
      avatar: `https://ui-avatars.com/api/?name=Test+User`,
    })
    router.push('/')
  } else {
    alert('Wrong email or password!')
  }
}
</script>
