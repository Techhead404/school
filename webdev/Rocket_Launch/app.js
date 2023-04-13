// https://ll.thespacedevs.com/2.2.0/swagger/#/launch/launch_list


var httpRequest;

document.getElementById("getRocket").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://lldev.thespacedevs.com/2.2.0/launch/")
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
    
})


function aFunction(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var rocket = httpRequest.responseText;

        const rocketobj = JSON.parse(rocket);
        //console.log(rocketobj.results[0]);

        for(var i = 1; i < 5; i++){
            console.log("rocket"+[i]);
            var rocketimg = rocketobj.results[i].image;
            document.getElementById("rocket"+[i]).src = rocketimg;
        }
    }
}


//var is function scope
//let and const are block scope
//any declare in root will be global
