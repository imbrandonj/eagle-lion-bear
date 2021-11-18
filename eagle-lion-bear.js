/* Set items "Eagle" "Lion" "Bear" */

const selection = ["Eagle", "Lion", "Bear"];

/* A prompt asking for username
    W/ return value "Hello <username>" 
    Explain the game */

let username = prompt("Hello Player, what's your name?");
alert("Hello " + username);
alert("Let's play a classic: Rock Paper Scissors.\n\nExcept this variation is called Eagle Lion Bear");
alert("Eagle < Lion < Bear < Eagle");
alert("Best out of 5 wins!");

console.log("Hello " + username);

/* Restarted games begin here 

function game() { } */ 


let userWins = 0;
let computerWins = 0;

// Figure out looping all of the below together.

while ((userWins < 3) && (computerWins < 3)) {   

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

        /* Compare selections and choose winner 
            This is the calculateWinner function*/

        function calculateWinner(playerSelection, computerSelection) {
            if (playerSelection === "Eagle") {
                if (computerSelection === "Bear") {
                    userWins++;
                    return username + " wins!";
                } else if (computerSelection === "Lion") {
                    computerWins++;
                    return "Computer wins!";
                } else {
                    return "It's a tie!";
                }
            } if (playerSelection === "Lion") {
                if (computerSelection === "Eagle") {
                    userWins++;
                    return username + " wins!";
                } else if (computerSelection === "Bear") {
                    computerWins++;
                    return "Computer wins!";
                } else {
                    return "It's a tie!";
                    }
            } if (playerSelection === "Bear") {
                if (computerSelection === "Lion") {
                    userWins++;
                    return username + " wins!";
                } else if (computerSelection === "Eagle") {
                    computerWins++;
                    return "Computer wins!";
                } else {
                    return "It's a tie!";
                }
            } 
        } // end calculateWinner function

    const outcome = calculateWinner(playerSelection, computerSelection);
    alert(outcome);
    console.log(outcome);
    alert(username + " " + userWins + " vs Computer " + computerWins); 
    console.log(username + " " + userWins + " vs Computer " + computerWins);

    // Begin next game of 5 
}

    // OR
    // Declare Winner of 5 

  if (userWins === 3) {
        alert(username + " wins best of five!");
    } else { 
        alert("The Computer wins best of five!");
    }
    

/* Ask, "play again?"
    If yes, start over
    Loop */


    // If no, End Loop, "thanks for playing" */

    alert("Thanks for playing.");