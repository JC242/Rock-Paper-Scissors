const rockpaper = playerAction =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[Math.floor(Math.random() *(3 - 0) + 0)]
    let result = ""
    if(playerAction == computerAction){
        result = "Tie";
        
    }else if(playerAction == "rock" && computerAction == "scissors"){
        result = "Player Wins";
        
    }else if(playerAction == "paper" && computerAction == "rock"){
        result = "Player Wins";
    }
    else if(playerAction == "scissors" && computerAction == "paper"){
        result = "Player Wins";
    }else{
        result = "Computer Wins";
    }
    return result;
}

playerAction = prompt("Enter rock, paper o scissors", "rock");
console.log(rockpaper("scissors"));


