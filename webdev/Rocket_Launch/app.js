// https://ll.thespacedevs.com/2.2.0/swagger/#/launch/launch_list

// Dillon Greek
// Date: 04/12/23
// Class: CIS-131
// Rocket Launch

// for making 2 request
var httpRequest;
var httpRequest2;

window.onload =() => {
    //make new intance of XMLHttpRequest
    httpRequest = new XMLHttpRequest();
    //get the json from api
    httpRequest.open("GET", "https://lldev.thespacedevs.com/2.2.0/launch/")
    httpRequest.send();
    //check in state has changed
    httpRequest.onreadystatechange = rocketFuntion;

    httpRequest2 = new XMLHttpRequest();
    httpRequest2.open("GET", "https://lldev.thespacedevs.com/2.2.0/astronaut/")
    httpRequest2.send();
    httpRequest2.onreadystatechange = astroFuntion;  
};

//Get rocket info and img url
function rocketFuntion(){
    //Chech state code and status
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var rocket = httpRequest.responseText;
        //parse json into array
        const rocketobj = JSON.parse(rocket);
        //loop 4 times grabbing objects based on index i
        for(var i = 1; i < 5; i++){
            let rocketimg = document.getElementById("rocket"+[i])
            rocketimg.src = rocketobj.results[i].image;
        }
    }
}

//Get Astronout info and img
function astroFuntion(){
    if (httpRequest2.readyState == 4 && httpRequest2.status == 200){
        var astro = httpRequest2.responseText;
        const astroobj = JSON.parse(astro);

        for(var i = 1; i < 5; i++){
            let astroimg = document.getElementById("astro"+[i])
            astroimg.src = astroobj.results[i].profile_image;
        }
    }
}


//var is function scope
//let and const are block scope
//any declare in root will be global
