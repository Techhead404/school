<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                movies:[]
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
            addToCart(){

            }
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
                        <button class="btn btn-outline-secondary w-50" type="button" >Child</button>
                        <button class="btn btn-outline-secondary w-50" type="button">Adult</button>
                        </div>
                    </div>  
                
        </div>
    </div>
</div>
</template>