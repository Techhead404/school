<script>
    import axios from "axios"

    export default{
        data(){
            return{
                message:"Howzit",
                img: String
            }
        },
        methods:{
            getPic(){
                axios.get("https://dog.ceo/api/breeds/image/random")
                .then( res =>{
                    console.log(res.data)
                    this.img = res.data.message
                    this.getBreed(res.data.message)
                }
                
                )
            },
            getBreed(thePath){
                let aryDogs= thePath.split("/")
                this.dogBreed = aryDogs[4].toUpperCase();
            }
        },
        mounted(){
            this.getPic()
        }
    }
</script>

<template>
    <div class="card" style="width: 18rem;">
  <img :src=img class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{dogBreed}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a @click="getPic" href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</template>