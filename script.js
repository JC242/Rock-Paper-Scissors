const game = (playerAction,computerAction) =>{
    
    console.log(playerAction);
    console.log(computerAction);
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
    updateScore(result);
    return result;
}

const playRound = () =>{
    scorePlayer = 0;
    scoreComputer = 0;
    finish = false;
    start.classList.add('hidden');
    actions.classList.replace('hidden','visible');
    score.classList.replace('hidden','visible'); 
    score.textContent = `Score = Player ${scorePlayer} - Computer ${scoreComputer}`;

    cards.forEach(card => {
        card.addEventListener('click',function(event){
            let choice = card.textContent.toLocaleLowerCase();
            console.log(game(choice,getComputerChoice()));
        })
    });
}
const getComputerChoice = () =>{
    const actions = ["rock","paper","scissors"];
    let computerAction = actions[getRandomNumber(0,3)];
    return computerAction;
}
const endGame = () =>{
    actions.classList.replace('visible','hidden');
    score.classList.replace('visible','hidden'); 

    start.textContent = "Again?"
    start.classList.remove("hidden");

}
const updateScore = (result) =>{
    
    if(result == "Computer"){scoreComputer++}
    if(result == "Player"){scorePlayer++}
    
    score.textContent = `Score = Player ${scorePlayer} - Computer ${scoreComputer}`

    if(scoreComputer >= 5 || scorePlayer >= 5){
        endGame();
    }
}
const getRandomNumber  = (min,max)=>{
    number = Math.floor(Math.random() * (max - min) + min);
    return number;
} 

const start = document.querySelector('.playButton');
const actions = document.querySelector('.actions');
const score = document.querySelector('.score');
const cards = document.querySelectorAll('.card');


start.addEventListener('click', function(event){
    playRound()
});


 