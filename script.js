function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let move = choices[Math.floor(Math.random() * 3)];
    console.log("computer chooses " + move + ".");
    return move;
}

function playRound (playerSelection, computerSelection) {

    let outcomes = ["tie game", "player wins", "computer wins"];
    var winner;

    if (playerSelection == computerSelection)
        winner = outcomes[0];
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper"))
        winner = outcomes[1];
    else
        winner = outcomes[2];

    return winner;
}

function game () {
    var move;
    var result;
    var playerScore = 0;
    var computerScore = 0;

    for (i = 0; i < 3; ++i) {
        move = prompt("Round " + (i + 1) + ": choose rock, paper, or scissors");
        console.log("you chose " + move + ".");
        result = playRound(move, computerPlay());
        if (result == "player wins")
            ++playerScore;
        if (result == "computer wins")
            ++computerScore;

        console.log(result + " round " + (i + 1) + ".");
    }
    if (playerScore == computerScore)
        console.log("the game is a draw!");
    else if (playerScore > computerScore)
        console.log("player wins the game!");
    else
        console.log("computer wins the game!");
}