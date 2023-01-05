const r=document.getElementById("rock");
const p=document.getElementById("paper");
const s=document.getElementById("scissors");

// document.getElementById("computer-score").innerText=computerScore;
// document.getElementById("player-score").innerText=yourScore;

var comp;
var computerScore = document.getElementById("computer-score");
var you;
var yourScore = document.getElementById("player-score");
var choices = ["rock","paper","scissors"];


r.addEventListener('click',selectChoice);
p.addEventListener('click',selectChoice);
s.addEventListener('click',selectChoice);

function selectChoice(){
    // player choice
    you=this.id;
    document.getElementById("player-choice").src ="images/" + you + ".png";

    // random computer choices
    comp = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").src ="images/" +  comp + ".png";


    // winner check
    if (you == comp){
        yourScore.innerText = Number(yourScore.innerText) + 1;
        computerScore.innerText = Number(computerScore.innerText) + 1;
    }
    else{
        if (you=="rock"){
            if (comp=="paper"){
                computerScore.innerText = Number(computerScore.innerText) + 1;
            } else if (comp="scissors"){
                yourScore.innerText = Number(yourScore.innerText) + 1;
            }
        }else if (you=="paper"){
            if (comp=="scissors"){
                computerScore.innerText = Number(computerScore.innerText) + 1;
            } else if (comp="rock"){
                yourScore.innerText = Number(yourScore.innerText) + 1;
            }
        }else if (you=="scissors"){
            if (comp=="rock"){
                computerScore.innerText = Number(computerScore.innerText) + 1;
            } else if (comp="paper"){
                yourScore.innerText = Number(yourScore.innerText) + 1;
            }
        }
    }
}





