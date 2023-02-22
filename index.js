//création des variables
let score = 0;
let currentScore = [0 ,0];

//action sur le dé
let dice = document.getElementById("dice");
let roll = document.getElementById("rollDice");
const hold = document.getElementById("hold"); //ajouter le score
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const newgame = document.getElementById("newgame");

//lancer de dés
const rolldice = function(){
    //Math.floor pour avoir un entier et Math.random pour avoir un nombre au hasard en 1 et 6
    let randomNumber = Math.floor(Math.random() * 6)+1;
    //photo de face qui change en fonction du nombre du dé
    dice.innerHTML=`<img class="imgdice" src="./dé/face${randomNumber}.png" alt="face${randomNumber}">`;
   
}

roll.addEventListener("click", rolldice);

