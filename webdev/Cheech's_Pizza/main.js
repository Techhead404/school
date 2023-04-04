<<<<<<< HEAD
// 
//     Dillon Greek
//     Date: 03/29/23
//     Class: CIS-131
//     Assignment: Validating - Cheech's Pizza Online Ordering
//
window.addEventListener('load', function() {
  document.getElementById('myForm').addEventListener('submit', validate);
})

function validate(e) {
 
  let isValid = true;
  theForm = e.target;

  if (theForm.first.value == "") {
    console.log("invalid");
    theForm.first.focus();
    theForm.first.style.backgroundColor = "red";
    document.getElementById('errName').style.display = "inline";
    document.getElementById('errName').innerHTML = "Name Can't be Blank";
    isValid = false;
  } 

  if (theForm.first.value.length < 6 && theForm.first.value.length > 0) {
    console.log("invalid");
    theForm.first.focus();
    theForm.first.style.backgroundColor = "red";
    document.getElementById('errName').style.display = "inline";
    document.getElementById('errName').innerHTML = "Name Must Be more then 6 letters";
    isValid = false;
  }
//define regex
  var validPhone = /^\d{10}/;
//test if phone value is NOT validPhone regex. 
  if(!validPhone.test(theForm.phone.value)){
    //focus on error field
    theForm.phone.focus();
    //change color to red
    theForm.phone.style.backgroundColor = "red";
    //show err message
    document.getElementById('errPhone').style.display = "inline";
    document.getElementById('errPhone').innerHTML = "Phone number must be 10 digits";
    isValid = false;
  }

 

  if (isValid == true){
    theForm.submit();
  }
  else{
    e.preventDefault();
  }
}


// Make pizza type drop down 
const pizza_type = ["Meat", "Combo", "Pepperoni", "Canadian Bacon", "Hawaiian"];

var topping_drop = document.getElementById("drop_toppings");
//count objects in array and make option element for each
for(var i = 0; i < pizza_type.length; i++){
  var elm = document.createElement("option");
  elm.value = pizza_type[i];
  elm.innerHTML = pizza_type[i];
  topping_drop.appendChild(elm);
}

// Make order amount
var order_amount = document.getElementById("drop_amount");
//set var i = 1 so keep from getting a nan or 0 order 
for(var i = 1; i <= 10; i++){
  var elm = document.createElement("option");
  elm.value = i;
  elm.innerHTML = i;
  order_amount.appendChild(elm);
=======
// 
//     Dillon Greek
//     Date: 03/29/23
//     Class: CIS-131
//     Assignment: Validating - Cheech's Pizza Online Ordering
//
window.addEventListener('load', function() {
  document.getElementById('myForm').addEventListener('submit', validate);
})

function validate(e) {
 
  let isValid = true;
  theForm = e.target;

  if (theForm.first.value == "") {
    console.log("invalid");
    theForm.first.focus();
    theForm.first.style.backgroundColor = "red";
    document.getElementById('errName').style.display = "inline";
    document.getElementById('errName').innerHTML = "Name Can't be Blank";
    isValid = false;
  } 

  if (theForm.first.value.length < 6 && theForm.first.value.length > 0) {
    console.log("invalid");
    theForm.first.focus();
    theForm.first.style.backgroundColor = "red";
    document.getElementById('errName').style.display = "inline";
    document.getElementById('errName').innerHTML = "Name Must Be more then 6 letters";
    isValid = false;
  }
//define regex
  var validPhone = /^\d{10}/;
//test if phone value is NOT validPhone regex. 
  if(!validPhone.test(theForm.phone.value)){
    //focus on error field
    theForm.phone.focus();
    //change color to red
    theForm.phone.style.backgroundColor = "red";
    //show err message
    document.getElementById('errPhone').style.display = "inline";
    document.getElementById('errPhone').innerHTML = "Phone number must be 10 digits";
    isValid = false;
  }

 

  if (isValid == true){
    theForm.submit();
  }
  else{
    e.preventDefault();
  }
}


// Make pizza type drop down 
const pizza_type = ["Meat", "Combo", "Pepperoni", "Canadian Bacon", "Hawaiian"];

var topping_drop = document.getElementById("drop_toppings");
//count objects in array and make option element for each
for(var i = 0; i < pizza_type.length; i++){
  var elm = document.createElement("option");
  elm.value = pizza_type[i];
  elm.innerHTML = pizza_type[i];
  topping_drop.appendChild(elm);
}

// Make order amount
var order_amount = document.getElementById("drop_amount");
//set var i = 1 so keep from getting a nan or 0 order 
for(var i = 1; i <= 10; i++){
  var elm = document.createElement("option");
  elm.value = i;
  elm.innerHTML = i;
  order_amount.appendChild(elm);
>>>>>>> f115227b503222aff5cae294e1f7567cdcc8d78b
}