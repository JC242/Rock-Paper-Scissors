const game = (playerAction,computerAction) =>{
   
    let result = ""
    if(playerAction == computerAction){
        result = "Tie";
        
    }else if(playerAction == "rock" && computerAction == "scissors"){
        result = "Player Wins, " + playerAction + " beats " + computerAction;
        
    }else if(playerAction == "paper" && computerAction == "rock"){
        result = "Player Wins, " + playerAction + " beats " + computerAction;
    }
    else if(playerAction == "scissors" && computerAction == "paper"){
        result = "Player Wins, " + playerAction + " beats " + computerAction;
    }else{
        result = "Computer Wins, " + computerAction + " beats " + playerAction;
    }
    return result;
}

const playRound = times =>{
    for (let i = 1; i <= times; i++){
        console.log(game(getPlayerChoice(), getComputerChoice()));
    }
}
const getComputerChoice = () =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[Math.floor(Math.random() *(3 - 0) + 0)]
    return computerAction;
}
const getPlayerChoice = () =>{
    playerAction = prompt("Enter rock, paper o scissors", "rock");
    playerAction = playerAction.toLowerCase();
    return playerAction;
}

playRound(5);


