<!-- 
Dillon Greek
Date: 05/14/23
Class: CIS-131
Assignment: Final
-->
<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                movies:[],
                movieInfo: [],
            }
        },
        methods:{
            getMovie(){
                axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c80cb4717866a886ac3d71742a126d4c&language=en-US&page=1")
                .then(res => {
                    var newArray = res.data.results.map((obj)=>{
                    let tmpObj = {
                            title: obj.title,
                            img: "https://image.tmdb.org/t/p/w500/" + obj.poster_path,
                            overview: obj.overview
                        }
                    return tmpObj
                    })
                   this.movies = newArray
                   return this.movies;
                })
            },
            addToCart(movieName, ticketType){
                if(ticketType =="kid"){
                    this.movieInfo.push({'title':movieName, 'Type':"kid"})
                    
                    console.log("Kid Added")
                    
                }
                else{
                    this.movieInfo.push({'title':movieName, 'Type':"adult"})
                    
                    console.log("Adult Added")
                }
            },        
        },
        mounted(){
            this.getMovie()
        }
    }

</script>

<template>      

<div class="container">
    <div class="row">  
        <div v-for="movie in movies.slice(0,3)" class="col-lg-4">       
            <div class="card" style="width: 18rem;">
                <img v-bind:src="movie.img" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{movie.title}}</h5>
                    <p class="card-text">{{movie.overview}}</p>
                </div>
                <div class="input-group d-flex justify-content-between">
                    <button @click="addToCart(movie.title,'kid')" class="btn btn-outline-secondary w-50" type="button" >Child</button>
                    <button @click="addToCart(movie.title,'adult')" class="btn btn-outline-secondary w-50" type="button">Adult</button>
                </div>
            </div>        
        </div>
    </div>
</div>
</template>

  