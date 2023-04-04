<<<<<<< HEAD
// Dillon Greek
// Date: 03/29/23
// Class: CIS-131
// Assignment: Validating - Cheech's Pizza Online Ordering

//Create array to store values
const data = [];

function printQuery(){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      //push each value to the array without the key  
      data.push(pair[1]);
    }
}

window.addEventListener('load', printQuery());

const order = document.getElementById("order_box");

const name_field = document.createElement("span");
//get first object in array and add to string
//remove the + if first and last name are entered
let name_str = data[0].replace(/\W/g, " ")
name_field.innerHTML = "Name: " + name_str;
order.appendChild(name_field);

const phone_field = document.createElement("span");
//take the phone number and add - after 3 nums with $1- and $2- giving a nicer format 
let phone_str = data[1].replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
phone_field.innerHTML = "Phone Number: " + phone_str;
order.appendChild(phone_field);

const pizza_field = document.createElement("span");
pizza_field.innerHTML ="Toppings: "+ data[3]
order.appendChild(pizza_field);

const amount_field = document.createElement("span");
amount_field.innerHTML = "Quantity: " + data[4];
order.appendChild(amount_field);

const price = 9.49;
const tax = 7.6;
//Figure pre tax total
const total_field = document.createElement("span");
total_field.innerHTML = "Total: $" + (data[4] * price);
order.appendChild(total_field);

//figure out tax the set decimal place
const tax_field = document.createElement("span");
tax_field.innerHTML = "After Tax: $" + ((data[4] * price) + ((data[4] * price)* tax / 100)).toFixed(2);
=======
// Dillon Greek
// Date: 03/29/23
// Class: CIS-131
// Assignment: Validating - Cheech's Pizza Online Ordering

//Create array to store values
const data = [];

function printQuery(){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      //push each value to the array without the key  
      data.push(pair[1]);
    }
}

window.addEventListener('load', printQuery());

const order = document.getElementById("order_box");

const name_field = document.createElement("span");
//get first object in array and add to string
//remove the + if first and last name are entered
let name_str = data[0].replace(/\W/g, " ")
name_field.innerHTML = "Name: " + name_str;
order.appendChild(name_field);

const phone_field = document.createElement("span");
//take the phone number and add - after 3 nums with $1- and $2- giving a nicer format 
let phone_str = data[1].replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
phone_field.innerHTML = "Phone Number: " + phone_str;
order.appendChild(phone_field);

const pizza_field = document.createElement("span");
pizza_field.innerHTML ="Toppings: "+ data[3]
order.appendChild(pizza_field);

const amount_field = document.createElement("span");
amount_field.innerHTML = "Quantity: " + data[4];
order.appendChild(amount_field);

const price = 9.49;
const tax = 7.6;
//Figure pre tax total
const total_field = document.createElement("span");
total_field.innerHTML = "Total: $" + (data[4] * price);
order.appendChild(total_field);

//figure out tax the set decimal place
const tax_field = document.createElement("span");
tax_field.innerHTML = "After Tax: $" + ((data[4] * price) + ((data[4] * price)* tax / 100)).toFixed(2);
>>>>>>> f115227b503222aff5cae294e1f7567cdcc8d78b
order.appendChild(tax_field);