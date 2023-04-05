var obj = {
    movie: "Hawii 5-0",
    budget: 630000,
    genres:{
        id:18,
        name: "Drama"
    },
    actors:["Jack", "Dano"]
}


var jsonString = JSON.stringify(obj);
console.log(jsonString);