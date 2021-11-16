/* Set items "Eagle" "Lion" "Bear" */

const selection = ["Eagle", "Lion", "Bear"];

/* A prompt asking for username
    W/ return value "Hello <username>" 
    Explain the game */

const username = prompt("Hello Player, what's your name?");
alert("Hello " + username);
alert("Let's play a classic: Rock Paper Scissors.\n\nExcept this variation is called Eagle Lion Bear");
alert("Eagle < Lion < Bear < Eagle");
alert("Best out of 5 wins!");

console.log("Hello " + username);

/* Restarted games begin here */

/* Player is prompted for option
    "You choose:"
    "Eagle Lion or Bear?"
    Answer is recorded */

const playerSelection = prompt("You choose:\n\nEagle Lion or Bear?");
console.log(playerSelection);

/* It's the computer's turn */

function computerPlay(selection) {
    return selection[Math.floor(Math.random() * selection.length)];
}

const computerSelection = computerPlay(selection);

alert("Computer chooses " + computerSelection);
console.log(computerSelection);

/* Compare selections and choose winner */

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "eagle") && (computerSelection === "Bear")) {
        return result = username + " wins!";
    } else if ((playerSelection == "eagle") && (computerSelection === "Eagle")) {
        return result = "It's a tie!";
    } else if ((playerSelection == "eagle") && (computerSelection === "Lion")) {
        return result = "Computer wins!";
    } else if ((playerSelection == "lion") && (computerSelection === "Eagle")) {
        return result = username + " wins!";
    } else if ((playerSelection == "lion") && (computerSelection === "Lion")) {
        return result = "It's a tie!";
    } else if ((playerSelection == "lion") && (computerSelection === "Bear")) {
        return result = "Computer wins!";
    } else if ((playerSelection == "bear") && (computerSelection === "Lion")) {
        return result = username + " wins!";
    } else if ((playerSelection == "bear") && (computerSelection === "Bear")) {
        return result = "It's a tie!";
    } else if ((playerSelection == "bear") && (computerSelection === "Eagle")) {
        return result = "Computer wins!";
    }
}
   

const outcome = playRound(playerSelection, computerSelection);
alert(outcome);
console.log(outcome);

/* Begin next game of 5 */

/* Declare Winner of 5 */

/* Ask, "play again?"
    If yes, start over
    If no, clear page, "thanks for playing" */

    alert("Thanks for playing.");