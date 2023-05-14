<!-- 
Dillon Greek
Date: 05/14/23
Class: CIS-131
Assignment: Final
-->
<script>
import movieInfo from './Moviebd.vue'
export default{
    props:{
        movieInfo,
    }


}


</script>

<template>
    <div :movieInfo="this.movieInfo"/>
  <main class="mx-auto">
    <div class="container w-100">
        <table class="table w-50">
            <thead>
                <tr>
                    <th class="w-50" scope="col">Movie</th>
                    <th class="w-25" scope="col">Child Ticket</th>
                    <th class="w-25" scope="col">Adult Ticket</th>
                </tr>
            </thead>
            <tr v-for="movie in movieInfo" :key="movie.title">
                <th class="w-50" scope="col">{{ movie.title }}</th>         
                <th class="w-50" scope="col"></th>     
                <th class="w-25" scope="col"></th>
            </tr>
           
        </table>     
    </div>
  </main>
</template>
