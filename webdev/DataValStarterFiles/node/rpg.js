// RPG Player

class player{
    constructor(name, health, strength){
    this.name = name;
    this.health = health;
    this.strength = strength;
    //console.log(`${this.name} has ${this.health} health and a strength of ${this.strength}`);
    }
}

const char1 = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
     describe: function(){
         return (`${this.name} has ${this.health} health and a strength of ${this.strength} and ${this.xp} XP points`);
     }
}

const char2 = {
    name: "Jeff",
    health: 100,
    strength: 50,
    xp: 0
}

const char3 = new player("Sue", 75, 300);
const char4 = new player("Bob", 1, 10);

function printCharProperties(){
    console.log(`${char1.name} has ${char1.health} health and a strength of ${char1.strength}`);
    console.log(`${char2.name} has ${char2.health} health and a strength of ${char2.strength}`);
    console.log(`${char3.name} has ${char3.health} health and a strength of ${char3.strength}`);
}

//console.log(char4.name);

//printCharProperties();
//char1.describe();

char1.health -= 10;
char1.strength += 10;
char1.xp += 15;


console.log(char1.describe());

const dog = {
    name: "Fang",
    species: "Boarhound",
    size: 75,
    bark: function() {
        return("BARK");
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`$ Look, a cat! ${dog.name} barks ${dog.bark()}`);


const account = {
    name: "None",
    balance: 0,
    credit: 0,
    describe: function(value){
        if (value != null){
            this.balance += value;
        }
        return(`Owner: ${this.name}, Balance: ${this.balance}`)
    }
}



console.log(account.describe());

account.name = "Alex";


console.log(account.describe(100));