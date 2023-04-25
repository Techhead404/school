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

            ]
        }
    } ,
    methods:{
        useAPI(){
            axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=70ef7c62eee1244489c96681175a2a0f&language=en-US&page=1")
            .then( (response) => {
                //console.log(response.data.results)
                newArray = response.data.results.map((obj)=>{
                    let tmpObj = {
                        title: obj.title,
                        img: "https://image.tmdb.org/t/p/w500/" + obj.poster_path,
                        overview: obj.overview
                    }
                    return tmpObj
                })
                console.log(newArray)
                this.movies = newArray;
            })
        }
    }
    
    
}).mount("#app")