//variable score
let randomNumber = 0;
let scoreActive = 0;
let playerActive = 1;
let score = [0, 0];  
let current1 = document.getElementById("current1");
let current2 = document.getElementById("current2");

//variable joueur
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

//nouveau jeu
const newgame = document.getElementById("newgame");

//action sur le dé
let dice = document.getElementById("dice");
let roll = document.getElementById("rollDice");

//action sur le score
const hold = document.getElementById("hold");

//lancer de dés
const rolldice = function(){
    //Math.floor pour avoir un entier et Math.random pour avoir un nombre au hasard en 1 et 6
    let randomNumber = Math.floor(Math.random() * 6)+1;
    //photo de face qui change en fonction du nombre du dé
    dice.innerHTML=`<img class="imgdice" src="./dé/face${randomNumber}.png" alt="face${randomNumber}">`;  
    if(randomNumber !== 1){
        scoreActive += randomNumber;
        //score courant accumulé du joueur actif 
        document.getElementById(`current${playerActive}`).textContent = scoreActive;
    }else{    
        nextPlayer();
    }
};

//fonction nextPlayer
const nextPlayer = function(){
    //score qui se réinitialise à 0 
    scoreActive = 0;
    //score courant qui passe sur le joueur 2 qui devient le joueur actif
    document.getElementById(`current${playerActive}`).textContent = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    player1.classList.toggle("player-active");
    player2.classList.toggle("player-active");
    
};

//cumuler les points avec le bouton hold
const cumul = function(){
    score[playerActive] += scoreActive;
    document.getElementById(`score${playerActive}`).textContent = score[playerActive];
    //vitoire à 100points
    if(score[playerActive] >= 100){
        document.getElementById(`player${playerActive}`).innerHTML= "<p>YOU WIN!</p>";
    }else{
        nextPlayer();
    }
};

//fonction new game qui actualisera la page
const refresh = function(){
    document.location.reload();
};

//ecoute des boutons
roll.addEventListener("click", rolldice);
hold.addEventListener("click",cumul);
newgame.addEventListener("click",refresh);
