// Name: Dillon Greek
// Class: CIS-131
// Date: 04/27/2023

import Card from "./Card.js"


const app =  Vue.createApp({
    
    data() {
        return {
            message: "Upcoming Movies",
            movies: [{
                title: "Top Gun",
                img: "topGun.jpg",
                overview: "The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. "
            },
            {
                title: "Top Gun 2",
                img: "topGun2.jpg",
                overview: "Pete Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice."
            },
            ],
            components:{
                card:Card
            }
            
        }
    } ,
    methods:{
        useAPI(){
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c80cb4717866a886ac3d71742a126d4c&language=en-US&page=1")
            .then( (response) => {
                
               var newArray = response.data.results.map((obj)=>{
                    let tmpObj = {
                        title: obj.title,
                        img: "https://image.tmdb.org/t/p/w500/" + obj.poster_path,
                        overview: obj.overview
                    }
                    return tmpObj
                })
                
                this.movies = newArray;
                
                
            })
        }
    },


}).mount("#app")

