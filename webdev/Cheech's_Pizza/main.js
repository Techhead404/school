window.addEventListener('load', function () {
  document.getElementById('myForm').addEventListener('submit', validate);
})

function validate(e) {
 
  let isValid = true;
  theForm = e.target;


  //drilling down the form utlizes the name property

  //check to see if there is anything entered at all
  if (theForm.first.value == "") {
    console.log("invalid");

      //set background to red to indicate error
    theForm.first.focus();
    theForm.first.style.backgroundColor = "red";
      //display the hidden error message field
    document.getElementById('errName').style.display = "inline";
      //provide an appropriate message
    document.getElementById('errName').innerHTML = "Name Can't be Blank";
      //set valid flag to false so we don't submit the form 
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

  var validZip = /^\d{5}(-\d{4})?$/;
  var validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (!validZip.test(theForm.zip.value)){
    theForm.zip.style.backgroundColor = "red";
    isValid = false;
  }

  if(!validPhone.test(theForm.phone.value)){
    theForm.phone.style.backgroundColor = "red";
    isValid = false;
  }

  if (isValid){
    theForm.submit();
  }
  else{
    e.preventDefault();
  }
  
}
const pizzatype = document.getElementById("pizzadrop");
  pizzatype.addEventListener("select", function(){
    console.log(pizzatype.value);
  })
