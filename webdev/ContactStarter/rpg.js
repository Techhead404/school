window.addEventListener('load', function() {
    document.getElementById('submit_btn').addEventListener('click', addPlayer);
  })

const players = [];
var player_img = document.getElementById("contactImg");
var listofnames = [];

class player{
    constructor(aname, ahealth, astrength){
    this.name = aname;
    this.health = ahealth;
    this.strength = astrength;
    players.push(this);
    }
    imgSwap(text){
        let mainImg = document.getElementById("contactImg");
        mainImg.src = `img/${text}.png`;
        mainImg.alt = `${text} Image`;
    }
}

const char1 = new player("bashful", 75, 300);
const char2 = new player("sneezy", 75, 300);
const char3 = new player("doc", 75, 300);

var player_list = document.getElementById("contactList");



players.forEach(element  => {
    var newPlayer = document.createElement("li");
    newPlayer.innerHTML = element.name;
    newPlayer.addEventListener("click", function(e){
        document.getElementById("playerName").innerHTML = e.target.innerHTML;
        element.imgSwap(e.target.innerHTML);
        console.log(e.target.innerHTML);
        document.append();
        });
    player_list.appendChild(newPlayer);
});



function addPlayer(e){

    theForm = document.getElementById("myform"); 
    const newPep = new player(theForm.fname.value, theForm.fst.value , theForm.fhp.value);
    let listofnames = [];
    players.forEach(element => {
        listofnames.push(element.name.value);
    })

    var newPlayer = document.createElement("li");
    newPlayer.innerHTML = newPep.name;
    newPlayer.addEventListener("click", function(e){
        document.getElementById("playerName").innerHTML = e.target.innerHTML;
        newPep.imgSwap(e.target.innerHTML);
        console.log(e.target.innerHTML);
        document.append();
    });
    player_list.appendChild(newPlayer);
}

