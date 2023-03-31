const game = (playerAction,computerAction) =>{
    
    let result = "";
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
    scorePlayer = 0;
    scoreComputer = 0;
    finish = false;
    while(finish == false){
        let result = game(getPlayerChoice(), getComputerChoice());
        if(result.includes("Player") == true){
            scorePlayer++;
        }else if(result.includes("Computer") == true){
            scoreComputer++;
        }
        if(scorePlayer == times || scoreComputer == times){
            finish = true;
        } 
        console.log("Player score: " + scorePlayer + " Computer score: " +scoreComputer)
    }
    if(scorePlayer > scoreComputer){
        console.log("Player wins with: " + scorePlayer);
    }else if(scorePlayer < scoreComputer){
        console.log("Computer wins with: " + scoreComputer);
    }else{
        console.log("Tie, Player score: " + scorePlayer + " Computer score: " +scoreComputer)
    }
}
const getComputerChoice = () =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[getRandomNumber(0,3)];
    return computerAction;
}
const getPlayerChoice = () =>{
    //playerAction = prompt("Enter rock, paper o scissors", "rock");
    playerAction ="rock";
    playerAction = playerAction.toLowerCase();
    return playerAction;
}
const getRandomNumber  = (min,max)=>{
    number = Math.floor(Math.random() * (max - min) + min);
    return number;
} 
playRound(5);


