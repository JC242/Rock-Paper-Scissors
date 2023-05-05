const game = (playerAction,computerAction) =>{
    
    console.log(playerAction);
    console.log(computerAction);

    let result = "";
    if(playerAction == computerAction){
        result = "Tie";
        annoucer.textContent="Tie";
        desc.textContent="It seem it was a Tie";

    }else if(playerAction == "rock" && computerAction == "scissors"){
        result = "Player";
        annoucer.textContent="Player Wins";
        desc.textContent="Rock beats Scissors";

    }else if(playerAction == "paper" && computerAction == "rock"){
        result = "Player";
        annoucer.textContent="Player Wins";
        desc.textContent="Paper beats Rock";
    }
    else if(playerAction == "scissors" && computerAction == "paper"){
        result = "Player";
        annoucer.textContent="Player Wins";
        desc.textContent="Scissors beats Paper";
    }else{
        result = "Computer";
        computerAction = computerAction.charAt(0).toUpperCase() + computerAction.slice(1);
        playerAction = playerAction.charAt(0).toUpperCase() + playerAction.slice(1);
        annoucer.textContent="Computer Wins";
        desc.textContent=`${computerAction} beats ${playerAction}`;
    }
    updateScore(result);
    return result;
}

const playRound = () =>{
    scorePlayer = 0;
    scoreComputer = 0;
    start.classList.add('hidden');
    winner.classList.replace("visible","hidden");
    annoucer.classList.replace('hidden','visible');
    annoucer.textContent ="Choice your action"
    desc.classList.replace('hidden','visible');
    desc.textContent = "Choice carefully";
    actions.classList.replace('hidden','visible');
    score.classList.replace('hidden','visible'); 
    score.textContent = `Player ${scorePlayer} -- Computer ${scoreComputer}`;

}
const getComputerChoice = () =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[getRandomNumber(0,3)];
    return computerAction;
}
const endGame = (result) =>{
    actions.classList.replace('visible','hidden');
    score.classList.replace('visible','hidden'); 
    desc.classList.replace('visible','hidden');
    annoucer.classList.replace('visible','hidden');
    winner.textContent = `${result.charAt(0).toUpperCase() + result.slice(1)} Wins`;
    winner.classList.replace("hidden","visible");
    start.textContent = "Play Again?"
    start.classList.remove("hidden");

}
const updateScore = (result) =>{
    
    if(result == "Computer"){scoreComputer++}
    if(result == "Player"){scorePlayer++}
    
    score.textContent = `Player ${scorePlayer} -- Computer ${scoreComputer}`

    if(scoreComputer >= 5 || scorePlayer >= 5){
        endGame(result);
    }
}
const getRandomNumber  = (min,max)=>{
    number = Math.floor(Math.random() * (max - min) + min);
    return number;
} 

const start = document.querySelector('.playButton');
const actions = document.querySelector('.actions');
const score = document.querySelector('.score');
const imgs = document.querySelectorAll('img');
const annoucer = document.querySelector(".annoucer");
const desc = document.querySelector(".desc");
const winner = document.querySelector(".winner");

imgs.forEach(img => {
    img.addEventListener('click',function(event){
        let choice = img.alt;
        console.log(game(choice,getComputerChoice()));
    })
});

start.addEventListener('click', function(event){
    playRound()
});


 