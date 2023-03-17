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
            var player1 = document.createElement("img");
            player1.id = "player1";
            player1.src = "#";

            var player2 = document.createElement("img");
            player2.id = "player2";
            player2.src = "#";
            
            console.log(rand());
            player1.style.left = rand();
            player2.style.left = rand();
            
            
    }

    function rand(){
        var num = Math.floor(Math.random() * 50);
        return num;
    }

})