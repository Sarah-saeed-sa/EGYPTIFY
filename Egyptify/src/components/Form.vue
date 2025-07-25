<template>
  <div class="input-container" :class="{ 'has-error': error }">
    <label v-if="label" class="input-label">{{ label }}<span v-if="required">*</span></label>
    <div class="input-wrapper">
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="custom-input"
        :required="required"
        :disabled="disabled"
      />
      <slot name="icon"></slot>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
    <span v-if="hint" class="hint-message">{{ hint }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-container {
  width: 100%;
  max-width: 828px;
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
}

.input-label span {
  color: #FF0000;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.custom-input {
  width: 100%;
  height: 70px;
  padding: 0 24px;
  border: 1px solid #E0E0E0;
  border-radius: 48px;
  font-size: 1rem;
  color: #333;
  background-color: #FFF;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.custom-input:focus {
  outline: none;
  border-color: #FFC340;
  box-shadow: 0 0 0 2px rgba(255, 195, 64, 0.2);
}

.custom-input::placeholder {
  color: #999;
  opacity: 1;
}

.custom-input:disabled {
  background-color: #F5F5F5;
  cursor: not-allowed;
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #FF0000;
}

.hint-message {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}

.has-error .custom-input {
  border-color: #FF0000;
}
</style>