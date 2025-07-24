<script setup lang="ts">

</script>

<template>
  <div>
    <RouterView/>
  </div>
</template>
<template>
  <div id="app">
    <!-- باقي الصفحة -->
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue'
</script>
