<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2">
        <li class="nav-item px-1">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-item px-1">
          <RouterLink to="/order">Order</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
      <RouterView />

  
</template>


