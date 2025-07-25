<!-- BaseInput.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  icon: String, 
  iconPosition: {
    type: String,
    default: 'left', 
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col space-y-1 w-full">
    <label v-if="label" class="text-sm font-medium text-gray-700">{{ label }}</label>

    <div class="relative">
      <!-- Icon -->
      <span
        class="absolute inset-y-0 flex items-center px-3 text-gray-400"
        :class="iconPosition === 'left' ? 'left-0' : 'right-0'"
      >
<i class="fa-solid fa-download "></i>      </span>

      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="e => emit('update:modelValue', e.target.value)"
        :class="[
          'w-full border border-gray-300 rounded-lg px-4 py-2  focus:outline-none focus:ring-2 focus:ring-yellow-400',
          iconPosition === 'left' ? 'pl-10' : 'pr-10'
        ]"
      />
    </div>
  </div>
</template>
<style>
input{
    border: 1px solid #FFC340;
}
i{
    color: #ffc039;
}
</style>