// Name: Dillon Greek
// Class: CIS-131
// Date: 04/24/2023 
//Api key: 772e7ef90c9a265bee8184b9e6ca062e
newArray = [];
axios.get("https://api.openweathermap.org/data/2.5/weather?zip=65648,us&appid=772e7ef90c9a265bee8184b9e6ca062e")
.then((response)=>{
    newArray = response.data;
       
    console.log(newArray);
})
