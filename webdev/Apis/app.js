var httpRequest;

document.getElementById("getDogs").addEventListener('click', () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://dog.ceo/api/breeds/image/random")
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
    
})


function aFunction(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var dog = httpRequest.responseText;
        console.log(dog);
        const dogobj = JSON.parse(dog);
        document.getElementById("dogs").src = dogobj.message;
    }
}

console.log(dogobj);

//var is function scope
//let and const are block scope
//any declare in root will be global
