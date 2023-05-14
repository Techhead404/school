<!-- 
Dillon Greek
Date: 05/14/23
Class: CIS-131
Assignment: Final
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2">
        <li class="nav-item px-1">
          <RouterLink to="/">Order</RouterLink>
        </li>
        <li class="nav-item px-1">
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView/>
  
  <!-- <button @props="Title" class="btn btn-outline-secondary w-50" type="button">Emit</button> -->


</template>


