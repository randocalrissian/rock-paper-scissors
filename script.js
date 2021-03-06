function computerPlay() {
	var possibleMoves = ['paper', 'rock', 'scissors'];
	return possibleMoves[Math.floor(Math.random()*3)];
}
var playerScore = 0;
var computerScore = 0;
var gameLog;
var playerWinToggle = document.getElementById("playerwins");
var computerWinToggle = document.getElementById("computerwins");
const displayGameLog = document.querySelector('#gamelog');
const displayPlayerScore = document.querySelector('#playerscore');
const displayComputerScore = document.querySelector('#computerscore');

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  var playerSelection = 'rock';
  console.log(playRound(playerSelection, computerPlay()));
  scoreCheck();
});
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  var playerSelection = 'paper';
  console.log(playRound(playerSelection, computerPlay()));
  scoreCheck();
});
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  var playerSelection = 'scissors';
  console.log(playRound(playerSelection, computerPlay()));
  scoreCheck();
});
const playAgainButton = document.querySelector('#playagain');
playAgainButton.addEventListener('click', () => {
	onClick = playAgain();
})
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		gameLog = "You both played " + playerSelection + ". Draw!";
	} else if (computerSelection == 'rock') {
		switch(playerSelection) {
			case 'scissors':
			computerScore++;
			gameLog = "Computer's rock beats your scissors.";
			break;
			case 'paper':
			playerScore++;
			gameLog = "Your paper beats computer's rock.";
			break;
		}
	} else if (computerSelection == 'paper') {
		switch(playerSelection) {
			case 'rock':
			computerScore++;
			gameLog = "Computer's paper beats your rock.";
			break;
			case 'scissors':
			playerScore++;
			gameLog = "Your scissors beats computer's paper.";
			break;
		}
	} else if (computerSelection == 'scissors') {
		switch(playerSelection) {
			case 'paper':
			computerScore++;
			gameLog = "Computer's scissors beats your paper.";
			break;
			case 'rock':
			playerScore++;
			gameLog = "Your rock beats computer's scissors.";
			break;
		}
	}
}
function scoreCheck() {
	displayComputerScore.textContent = 'Computer score: ' + computerScore;
	displayPlayerScore.textContent = 'Your score: ' + playerScore;
	if (computerScore || playerScore >= 5) {
		if (computerScore >= 5) {
			gameLog = gameLog + ' Computer WINS!';
			toggleButtons();
			computerWinsGif();
		} else if (playerScore >= 5) {
			gameLog = gameLog + ' You WIN!';
			toggleButtons();
			playerWinsGif();
		}
	}
	displayGameLog.textContent = gameLog;
}
function toggleButtons() {
	var playAgainToggle = document.getElementById("restart");
	var controlsToggle = document.getElementById("controls");
	if (playAgainToggle.style.display === "none") {
		playAgainToggle.style.display = "inline";
		controlsToggle.style.display = "none";
	} else {
		playAgainToggle.style.display = "none";
		controlsToggle.style.display = "inline";
	}
}
function playerWinsGif() {
	var playerWinToggle = document.getElementById("playerwins");
	playerWinToggle.style.display = "block";
}
function computerWinsGif() {
	var computerWinToggle = document.getElementById("computerwins");
	computerWinToggle.style.display = "block";
}
function playAgain() {
	playerScore = 0;
	computerScore = 0;
	toggleButtons();
	scoreCheck();
	displayGameLog.textContent = "Best of 5 wins. Choose your weapon...";
	playerWinToggle.style.display = "none";
	computerWinToggle.style.display = "none";
}