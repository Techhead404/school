//JS objects

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
}

stringPart();
pen.color = "red";
stringPart();

//Add a property dynamically

pen.price = 2.50;


function stringPart(){
    var theString = `My ${pen.type} is a ${pen.color} ${pen.brand} pen`;
    console.log(theString);
}

