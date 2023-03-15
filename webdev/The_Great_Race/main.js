window.addEventListener('load', function(){

    //Create start button and set it Red
    var start = this.document.getElementById("start_btn");
    start.style.backgroundColor = "red";

    //Add click event to check what color it is and switch it to the other color.
    //If light turns green the start_race funtion will be called.
    start.addEventListener('click', function(){
        if(start.style.backgroundColor == "red"){
            start.style.backgroundColor = "green";
            start_race();
        }else{
            start.style.backgroundColor = "red";
        }
    })

    //Start the race.
    function start_race(){

    }
})