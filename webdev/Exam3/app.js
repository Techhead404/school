// Name: Dillon Greek
// Class: CIS-131
// Date: 04/24/2023 

const app =  Vue.createApp({
    
    data() {
        return {
            
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
                this.movies = newArray;
            })
        }
    }
    
    
}).mount("#app")