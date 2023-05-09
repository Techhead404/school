// Name: Dillon Greek
// Class: CIS-131
// Date: 04/26/2023 

//add listener on load to run validate funtion on click
window.addEventListener('load', function () {
    document.getElementById('button').addEventListener('click', validate);
  })

var zip;
var unit;


function validate(e){
    theForm = document.getElementById("myform");
    //regex for 5 digit number
    var validZip = /^\d{5}(-\d{4})?$/;
    //if zip is good  
    if (validZip.test(theForm.zip.value)){
        zip = theForm.zip.value;
        unit = theForm.unit.value;
        //hide error message if its been show
        document.getElementById('error').style.display="none";
        //get input values and add them into the api
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=${unit}&zip=${zip},us&appid=772e7ef90c9a265bee8184b9e6ca062e`)
        //wait for api response
        .then((response)=>{
        //set response to apiObj
        apiObj = response.data;
        //using api doc get correct data from apiObj and set the innerHTML for each field
        document.getElementById("temp").innerHTML = apiObj.main.temp;
        document.getElementById("city").innerHTML = apiObj.name;
        document.getElementById("description").innerHTML = apiObj.weather[0].description;
        //Image doesn't work I know its something easy but I have been up 19 hours and I am tired.
        document.getElementById("icon").src = apiObj.weather[0].icon;
        //This will show the current temp,city,condition,img
        document.getElementById("infodisplay").style.display="block";
        })
      }
      //If zip is not valid this will change text box to red and display the error message. 
    else{
        theForm.zip.style.backgroundColor = "red";
        document.getElementById('error').style.display="block";
      }
}
