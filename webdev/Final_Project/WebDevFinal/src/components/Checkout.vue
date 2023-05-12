<script>
    import { getTransitionRawChildren } from 'vue';
    import movieInfo from './Moviebd.vue';

export default{
    data(){
        return{

        }
    },
    methods:{
        ticketTotal(){
            var movieTitle = movieInfor.movieName;
            var kidPrice = movieInfo.kidTicket * kidCost;
            var adultPrice = movieInfo.adultTicket * adultCost;
        }
    }
}
</script>

<template>
  <main class="mx-auto">
    <h1>Checkout</h1>
    <div class="container w-100">
        <table class="table w-50">
            <thead>
                <tr>
                    <th class="w-50" scope="col">Movie</th>
                    <th class="w-25" scope="col">Child Ticket</th>
                    <th class="w-25" scope="col">Adult Ticket</th>
                </tr>
            </thead>
            <div v-for="movie in movieInfo">
            <tr>
                <th class="w-50" scope="col">{{movie.movieName}}name</th>
            
                <div v-if="isKid">
                <th class="w-50" scope="col">{{kidPrice}}kids</th>
                </div>
                <th class="w-25" scope="col">{{adultPrice}}adults</th>
            </tr>
            </div>
        </table>
    </div>
  </main>
</template>