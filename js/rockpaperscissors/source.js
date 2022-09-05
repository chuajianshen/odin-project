let choice = ["rock","paper","scissors"];

let randomNumber = (min = 0 , max = 2 ) => {
    return (Math.floor(Math.random() * (max + 1)));
}
let getComputerChoice = () => {
    return (choice[randomNumber()]);
}

let getPlayerSelection = () =>{
    instrument = prompt("Rock, Paper, or Scissors?")
    return (instrument.toLowerCase());
}

let playRound = (player = getPlayerSelection(),computer = getComputerChoice()) => {
    if (player === computer){
        return (`You tied with the computer: ${player} and ${computer}`);
    }
    else if (player === "rock" && computer === "paper"){
        return (`You Lost! Computer's ${computer} beat your ${player}`);
    }
    else if (player === "rock" && computer === "scissors"){
        return (`You Won! Computer's ${computer} lost to your ${player}`);
    }
    else if(player === "paper" && computer === "rock"){
        return (`You Won! Computer's ${computer} lost to your ${player}`);
    }
    else if(player === "paper" && computer === "scissors"){
        return (`You Lost! Computer's ${computer} beat your ${player}`);
    }
    else if(player === "scissors" && computer === "rock"){
        return (`You Lost! Computer's ${computer} beat your ${player}`);
    }
    else if(player === "scissors" && computer === "paper"){
        return (`You Won! Computer's ${computer} beat your ${player}`);
    }
    else if(player !== "scissors" || player !== "rock" || player !== "paper" || player === ""){
        return ("Wrong, enter correct choice");
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    winner = 5;
    while (winner){
        if (winner == playerScore || winner == computerScore){
            break;
        }
        else {
            result = playRound();
            console.log(result);
        }
        if (result.includes("You Won!")){
            playerScore++;
        }
        else if (result.includes("You Lost!")){
            computerScore++;
        }
        else if (result.includes("Wrong")){
            continue;
        }
        console.log(`Score is ${playerScore} for player and ${computerScore} for computer!`);
    }
    if (playerScore >=5){
        console.log("Congrats you won!");
    }
    else {
        console.log("Too bad you lost");
    }
}
game();


