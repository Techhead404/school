
class Player{
    constructor(aName, aHealth, aStrength, aImg) 
    {
        this.name = aName;
        this.health = aHealth;
        this.strength = aStrength;
        this.img = aImg;
        console.log("Player was born");
        players.push(this);
    }
    describe(){
        return (`${this.name} has ${this.health} health and a strength of ${this.strength} and ${this.xp} XP points`);
    }
    updateContact(){
        var contactDiv = document.getElementById('contactDiv');
        contactDiv.innerHTML = `<h1>${this.name} </h1>`;
        document.getElementById('contactImg').src = `images/${this.img}`;
    }
}
const players = [];

let char1 = new Player("Aurora", 100, 25, 
"grumpy.png");
let char2 = new Player("Jeff", 100, 50, "dopey.png");

console.log('\n', char1.describe(), "\n", char2.describe(), "\n");




console.log("Array length: ", players.length);
console.log(players[1]);
console.log("Health: ", players[1].health,'\n');



players.forEach((player, index) => {
    var liItem = document.createElement('li');
    liItem.innerHTML = `${player.name}`;
    document.getElementById('contactList').appendChild(liItem);
    liItem.addEventListener('click', (e) =>{
        console.log(e.target);
    })
    //player.updateContact();
    //console.log(player.describe(), index);
})