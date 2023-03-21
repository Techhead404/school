
    // Name: Dillon Greek
    // Class: CIS-131
    // Date: 03/14/23
    // Assignment: The Great Race
 
window.addEventListener('load', function(){

    //Create start button and set it Red
    var start = this.document.getElementById("start_btn");
    start.style.backgroundColor = "red";
    
    //get both players
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");

    var timer;
    var num = 10;

    //create the text for winner
    var banner = this.document.createElement('h1');
    banner.id = "main"
    banner.style.textAlign = "center";
    banner.style.color = "white";
    //I named it bod thinking body would be to confusing. 
    var bod = this.document.getElementById("body")
    bod.appendChild(banner);


    //Add click event to check what color it is and switch it to the other color.
    //If light turns green the start_race funtion will be called.
    start.addEventListener('click', function(){
        if(start.style.backgroundColor == "red"){
            start.style.backgroundColor = "green";
            start_race();          
        }else{
            start.style.backgroundColor = "red";
            clearInterval(timer)
        }
    })

    //Start the race and clear the text.
    function start_race(){
        timer = setInterval(move_player, 100);
        banner.innerHTML = " ";        
    }
    //gets a random number and adds it to num
    function rand(){   
        num += Math.floor(Math.random() * 40);      
        return num;
    }
    //clear and reposition everything also removes the winner img from the dom
    function restart() {
        clearInterval(timer);
        player1.style.left = "10px";
        player2.style.left = "10px";
        player1.style.display = "inline";
        player2.style.display = "inline";
        num = 0;
        start.style.backgroundColor = "red";
        document.getElementById("winner_img").remove();
        banner.innerHTML = " ";
    }
    //check if player has made it to the right.
    function move_player(){
        if(rand() >= window.innerWidth - 80){
            clearInterval(timer);
            //check each players left position to find winner
            if(player1.style.left > player2.style.left){               
                banner.innerHTML = "Player 1 is the Winner!";
                //pass the winner name so the show_winner can grab the right img
                show_winner("player1");
                bod.appendChild(banner);
            }
            else{
                banner.innerText = "Player 2 is the Winner!";
                show_winner("player2");
                bod.appendChild(banner);
            }            
        }
        //moves player if position is still less than innerWidth - 80
        else{
            player1.style.left = rand() + "px";
            player2.style.left = rand() + "px";       
        }
    }
    //Create winner img with all the styles. It also take a string for the player and adds that into the src string
    // to get the correct img. the it adds an event listener that calls the restart function.
    function show_winner(winner){
        //Hide the to players and only shows the winner img
        player1.style.display = "none";
        player2.style.display = "none";
        //create the winner img and add some style
        var winner_img = document.createElement("img");
        winner_img.src = "img/" + winner + "winner.png";
        winner_img.id = "winner_img";
        winner_img.width = 250;
        winner_img.height  = 250;
        winner_img.style.display = "block";
        winner_img.style.marginLeft = "auto";
        winner_img.style.marginRight =  "auto";       
        bod.appendChild(winner_img);
        winner_img.addEventListener("click", restart);
    }
})