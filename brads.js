var username; // Putting this up here as a var makes it global scope which we need to do for function declarations first

const selection = ["Eagle", "Lion", "Bear"];

username = prompt( "Hello Player, what's your name?" );
alert( "Hello " + username );
alert( "Let's play a classic: Rock Paper Scissors.\n\nExcept this variation is called Eagle Lion Bear" );
alert( "Eagle < Lion < Bear < Eagle" );
alert( "Best out of 5 wins!" );

console.log( "Hello " + username );

let play = true;
while ( play ) { 
	play = playGame();
}

/*
* POSSIBLE RETURNS
* true = play again
* false = don't play again
*/

function playGame() {
 	let userWins = 0;
	let computerWins = 0;

  while( ( userWins < 3 ) && ( computerWins < 3 ) ) {   

		const playerSelection = prompt("You choose:\n\nEagle Lion or Bear?");
    console.log(playerSelection);
    
    // If you're prompting user input you ABSOLUTELY have to validate the user put in a value you would expect
    // I'm not adding code here for that since you're changing to buttons, but you should do this going forward whenever you take
    // input from a user. Never assume a user is always going to give you an expected value

    const computerSelection = computerPlay(selection);

    alert( "Computer chooses " + computerSelection );
    console.log(computerSelection);

    const outcome = calculateWinner( playerSelection, computerSelection );
    
    if( outcome < 0 ) {
    	alert( "Computer wins!" );
    	computerWins++;
    }
    else if( outcome > 0 ) {
    	alert( username + " wins!" );
    	userWins++;
    }
    else {
    	alert( "It's a tie!" );
    }
    
    alert( username + " " + userWins + " vs Computer " + computerWins ); 
    console.log( username + " " + userWins + " vs Computer " + computerWins );
  }

  if( userWins === 3 ) {
    alert( username + " wins best of five!" );
  }
  else { 
    alert( "The Computer wins best of five!" );
  }

	// This is a ternary operator. If the condition before the ? is true, it executes the first expression (return false), otherwise it
  // executes the second expression (return true)
  return ( prompt("Play again? (Yes/No)").toLowerCase() === "no" ) ? false : true;
}

function computerPlay( selection ) {
	// Math.random() isn't TRULY random, it's actually a pretty poor RNG, but it'll work for this program
  // If you ever want better or more complex number generation you'll want a RNG library that can be seeded
	return selection[ Math.floor( Math.random() * selection.length ) ];
}

/*
* POSSIBLE RETURN VALUES:
* -1 = pc win
* 0 = tie
* 1 = player win
*/
function calculateWinner( playerSelection, computerSelection ) {
	playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  // We can do a tie check for all situations like this
  if( playerSelection == computerSelection ) {
  	return 0;
  }
  
  // It's more readable to always newline the start of a new conditional (if / else if / etc)
  if( playerSelection === "eagle" ) {
    if( computerSelection === "bear" ) {
      return 1;
    }
    else {
    	// Because we already checked a tie above, and because the computer options are set, the only feasible thing
      // this can be is a computer win. So we can save another conditional check by just making this correct assumption. We don't
      // need to actually check the computer selection at this point
      return -1;
    }
  }
  else if( playerSelection === "lion" ) {
    if( computerSelection === "eagle" ) {
      return 1;
    }
    else {
    	// Same as above
      return -1;
    }
  }
  else if( playerSelection === "bear" ) {
    if( computerSelection === "lion" ) {
     	return 1;
    }
    else {
    	// Same as above
      return -1;
    }
  }
}

alert("Thanks for playing.");