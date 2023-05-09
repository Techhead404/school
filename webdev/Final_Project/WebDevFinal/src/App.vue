<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container mx-auto w-100">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/order">Order</RouterLink>
  
      <RouterView />
  </div>
</template>



