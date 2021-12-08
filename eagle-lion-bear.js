/* Set items "Eagle" "Lion" "Bear" */

const selection = ["Eagle", "Lion", "Bear"];

/* A prompt asking for username
    W/ return value "Hello <username>" 
*/
var username;
username = prompt("Hello Player, what's your name?");
alert("Hello " + username);

// Restarted games begin here 
let playGame = true;
let userWins = 0;
let computerWins = 0;

// Clicking Eagle:
const eagle = document.querySelector('#eagle');
eagle.addEventListener('click', () => {
    alert(username + ' selected Eagle');

    function computerPlay(selection) {
        return selection[Math.floor(Math.random() * selection.length)];
    }

    const computerSelection = computerPlay(selection);
    alert('Computer chooses ' + computerSelection);

    if (computerSelection === 'Bear') {
        userWins++;
        alert(username + ' wins!');
    } else if (computerSelection === 'Lion') {
        computerWins++;
        alert('Computer wins!');
    } else {
        alert('It\'s a tie!');
    }

    alert(username + " " + userWins + " vs Computer " + computerWins); 

    if (computerWins >= 3) {
        alert('Computer wins best of 5!');
        alert('Tough luck. Try another best of 5.');
        computerWins = 0;
        userWins = 0;
    }

    if (userWins >= 3) {
        alert(username + ' wins best of 5!');
        alert('Congratulations!');
        computerWins = 0;
        userWins = 0;
    }
});

// Clicking Lion:
const lion = document.querySelector('#lion');
lion.addEventListener('click', () => {
    alert(username + ' selected Lion');

    function computerPlay(selection) {
        return selection[Math.floor(Math.random() * selection.length)];
    }

    const computerSelection = computerPlay(selection);
    alert('Computer chooses ' + computerSelection);

    if (computerSelection === 'Eagle') {
        userWins++;
        alert(username + ' wins!');
    } else if (computerSelection === 'Bear') {
        computerWins++;
        alert('Computer wins!');
    } else {
        alert('It\'s a tie!');
    }

    alert(username + " " + userWins + " vs Computer " + computerWins); 

    if (computerWins >= 3) {
        alert('Computer wins best of 5!');
        alert('Tough luck. Try another best of 5.');
        computerWins = 0;
        userWins = 0;
    }

    if (userWins >= 3) {
        alert(username + ' wins best of 5!');
        alert('Congratulations!');
        computerWins = 0;
        userWins = 0;
    }
});

// Clicking Bear:
const bear = document.querySelector('#bear');
bear.addEventListener('click', () => {
    alert(username + ' selected Bear');

    function computerPlay(selection) {
        return selection[Math.floor(Math.random() * selection.length)];
    }

    const computerSelection = computerPlay(selection);
    alert('Computer chooses ' + computerSelection);

    if (computerSelection === 'Lion') {
        userWins++;
        alert(username + ' wins!');
    } else if (computerSelection === 'Eagle') {
        computerWins++;
        alert('Computer wins!');
    } else {
        alert('It\'s a tie!');
    }

    alert(username + " " + userWins + " vs Computer " + computerWins);

    if (computerWins >= 3) {
        alert('Computer wins best of 5!');
        alert('Tough luck. Try another best of 5.');
        computerWins = 0;
        userWins = 0;
    }

    if (userWins >= 3) {
        alert(username + ' wins best of 5!');
        alert('Congratulations!');
        computerWins = 0;
        userWins = 0;
    }
});