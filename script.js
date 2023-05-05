const game = (playerAction,computerAction) =>{
    
    let result = "";
    if(playerAction == computerAction){
        result = "Tie";
    }else if(playerAction == "rock" && computerAction == "scissors"){
        result = "Player";
    }else if(playerAction == "paper" && computerAction == "rock"){
        result = "Player";
    }
    else if(playerAction == "scissors" && computerAction == "paper"){
        result = "Player";
    }else{
        result = "Computer";
    }
    return result;
}

const playRound = times =>{
    scorePlayer = 0;
    scoreComputer = 0;
    finish = false;
   start.classList.add('hidden');
   actions.classList.replace('hidden','visible');
   score.classList.replace('hidden','visible'); 

    // while(finish == false){
    //     let result = game(getPlayerChoice(), getComputerChoice());
    //     if(result == "Player"){
    //         scorePlayer++;
    //     }else if(result == "Computer"){
    //         scoreComputer++;
    //     }
    //     if(scorePlayer == times || scoreComputer == times){
    //         finish = true;
    //     } 
    //     console.log("Player score: " + scorePlayer + " Computer score: " +scoreComputer)
    // }
    // if(scorePlayer > scoreComputer){
    //     console.log("Player wins with: " + scorePlayer);
    // }else if(scorePlayer < scoreComputer){
    //     console.log("Computer wins with: " + scoreComputer);
    // }else{
    //     console.log("Tie, Player score: " + scorePlayer + " Computer score: " +scoreComputer)
    // }
}
const getComputerChoice = () =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[getRandomNumber(0,3)];
    return computerAction;
}
const getPlayerChoice = () =>{
    playerAction = prompt("Enter rock, paper or scissors", "rock");
    playerAction = playerAction.toLowerCase();
    return playerAction;
}
const getRandomNumber  = (min,max)=>{
    number = Math.floor(Math.random() * (max - min) + min);
    return number;
} 
//playRound(5);

let start = document.querySelector('.playButton');
let actions = document.querySelector('.actions');
let score = document.querySelector('.score');

start.addEventListener('click', function(event){
    playRound(5)
});


 