// Dillon Greek
// Date: 04/05/23
// Class: CIS-131
// Assignment: Classy Address Book 
window.addEventListener('load', function() {
    document.getElementById('submit_btn').addEventListener('click', addPlayer);
    //Set up list with click for items already in the list on load
    players.forEach(element  => updateList(element));
  })

const players = [];

class player{
    constructor(aChampion, aFirstName, aLastName, aEmail){
    this.champion = aChampion;
    this.first_name = aFirstName;
    this.last_name = aLastName;
    this.email = aEmail;
    //Add player to array
    players.push(this);
    }
    //each player has img swap method added when initialization
    imgSwap(text){
         let mainImg = document.getElementById("contactImg");
         mainImg.src = `img/${text}.png`;
         mainImg.alt = `${text} Image`;
    }
}

//Placeholder data in array
const char1 = new player("barbarian", "bashful", 75, 300);
const char2 = new player("monk", "sneezy", 75, 300);
const char3 = new player("wizard", "doc", 75, 300);

//Adds input to array the creates list element for person
function addPlayer(){
    //get the form
    theForm = document.getElementById("myform"); 
    //send form data into player class then into updateList function
    updateList(new player(theForm.fChampion.value, theForm.fFirstName.value, theForm.fLastName.value , theForm.fEmail.value));
}

//Add player to list and give li item a click event to swap img and text 
function updateList(player){
    //Create list item called newPlayer
    var newPlayer = document.createElement("li");
    //Set li text to the player attribute champion
    newPlayer.innerHTML = player.champion;
    //Create click for li item
    newPlayer.addEventListener("click", function(e){
        //set img text to this list items text
        document.getElementById("playerName").innerHTML = e.target.innerHTML;
        //Css makes text capital so I don't have to worry about passing strings!!!
        document.getElementById("playerName").style.textTransform = "capitalize";
        //Pass this text to imgSwap to swap the img 

        player.imgSwap(e.target.innerHTML);
        //Remove default placeholder img
        document.getElementById("contactDiv").style.backgroundImage = "none";
        //Append this to the list item
        document.append();
        });
        //Append list item to list
        document.getElementById("contactList").appendChild(newPlayer);
}