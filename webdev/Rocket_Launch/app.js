// https://ll.thespacedevs.com/2.2.0/swagger/#/launch/launch_list


var httpRequest;

document.getElementById("getRocket").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://lldev.thespacedevs.com/2.2.0/launch/")
    httpRequest.send();
    httpRequest.onreadystatechange = rocketFunction;
    
})

document.getElementById("getRocket").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://lldev.thespacedevs.com/2.2.0/launch/")
    httpRequest.send();
    httpRequest.onreadystatechange = astroFunction;
    
})
function rocketFuntion(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var astro = httpRequest.responseText;

        const astroobj = JSON.parse(astro);
        //console.log(rocketobj.results[0]);

        for(var i = 1; i < 5; i++){
            console.log(astroObj);
            // let rocketimg = document.getElementById("rocket"+[i])
            // let rocketspn = document.getElementById("rocket"+[i]+"spn");
            // rocketimg.src = rocketobj.results[i].image;
            // rocketspn.innerHTML = rocketobj.results[i].name;
        }
    }
}
function astroFuntion(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var rocket = httpRequest.responseText;

        const rocketobj = JSON.parse(rocket);
        //console.log(rocketobj.results[0]);

        for(var i = 1; i < 5; i++){
            console.log("rocket"+[i]);
            let rocketimg = document.getElementById("rocket"+[i])
            let rocketspn = document.getElementById("rocket"+[i]+"spn");
            rocketimg.src = rocketobj.results[i].image;
            rocketspn.innerHTML = rocketobj.results[i].name;
        }
    }
}


//var is function scope
//let and const are block scope
//any declare in root will be global
