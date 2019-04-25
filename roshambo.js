//ROSHAMBO JAVASCRIPT HOMEWORK

//rock beats scissors
//scissors beats paper
//paper beats rock

/* 
Step 1. User is prompted for a decision
		set up prompt as user input variable
Step 2. User enters choice
		choice is saved as variable
Step 3. computer randomly selects roshambo
		assign each choice a number range, 1-3; 4-6; 7-9. 
		(eliminate 0 by adding 1 to math function)
			rock = 1,2,3
			paper = 4,5,6
			scissors = 7,8,9 
		computers random number generation is assigned a choiceName
		computer choice is saved to a variable
Step 4. computer calculates whose choice wins
		combination of variables are compared using a switch statement or else/if statement
Step 5. computer displays winner/loser message
		print-screen
Step 6. tally the win loss for bonus
		???

create switch statement of all possible outcomes for user/computer selections
	1. user-rock vs computer-rock = tie
	2. user-rock vs computer-paper = user lose
	3. user-rock vs computer-scissors = user win

	4. user-paper vs computer-rock = user win
	5. user-paper vs computer-paper = tie
	6. user-paper vs computer-scissors - user lose

	7. user-scissors vs computer-rock = user lose
	8. user-scissors vs computer-paper = user win
	9. user-scissors vs computer-scissors = tie
	
*/

//Step 1
	var userChoice = prompt("Let's Roshambo chose one: rock, paper, or scissors:");
	var compyChoice = Math.floor(Math.random()*3);
	//var choiceName = choiceAssg ();
	var battleOutcome;// = comparison();
//Step 3
	function choiceAssg(){
		if (compyChoice === 0) {
			var choiceName = "rock";
		}
		else if (compyChoice === 1) {
			var choiceName = "paper";
		}
		else if (compyChoice === 2) {
			var choiceName = "scissors";
		}
		console.log(choiceName);
	}


//Step 4
	function comparison() {
		 battleOutcome = userChoice.toString() + "+" + compyChoice.toString();
		console.log(battleOutcome);
	}
	comparison();//

		console.log(battleOutcome);

//abandoing switch statement for an esle/if statement

 if (battleOutcome === "rock+0") {
  		alert("We tied.");
		}
	 	else if(battleOutcome === "rock+1") {
		alert("You lose Gandolf");
	 	}
	 	else if (battleOutcome === "rock+2") {
	 		alert("You Win buddy");
	 	}
	 	else if (battleOutcome === "paper+0") {
	 		alert("You lose Kelly Clarkson!");
	 	}
	 	else if (battleOutcome === "paper+1"){
	 		alert("We tied hoser.")
	 	}
	 	else if (battleOutcome === "paper+2") {
	 		alert("You lose Bart Simpson!")
	 	}
	 	else if (battleOutcome === "scissors+0") {
	 		alert("You lose Pat Sayjack!");
	 	}
	 	else if (battleOutcome === "scissors+1") {
	 		alert("You win Flynn!");
	 	}
	 	else if (battleOutcome === "scissors+2") {
	 		alert("We tied Shmied");
	 	}
	 	else {
	 		alert("start over");
	 	}
	

//Step 4
/*switch (battleOutcome){
		case 1: 
			battleOutcome = "rock+0";
			alert("We Tied.");
			break;
		case 2:
			battleOutcome = "rock + paper";
			break;
		case 3:
			battleOutcome = "rock + scissors";
			break;
		case 4:
			battleOutcome =
			break;
		case 5:
			battleOutcome =
			break;
		case 6:
			battleOutcome =
			break;
		case 7:
			battleOutcome =
			break;
		case 8:
			battleOutcome =
			break;
		case 9:
			battleOutcome =
			break;

	}
*/
// BELOW -sample from slides
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);

// ABOVE -sample code from slides2 js functions

// 1. Define a hands array with the values 'rock', 'paper', and 'scissors';
// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
// Define two objects for two players. Each player has name and getHand() properties.
// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

//1
var hands = ["rock", "paper", "scissors"];

function getHand() {
	var myHand = hands [parseInt((Math.random()*10)%3)];
	// check code console.log(myHand);
	return myHand;
}
// Define two objects for two players. Each player has name and getHand() properties.
var dude1 = {
	name: "Kyle"
	score: {
		wins: 0,
		ties: 0,
		losses: 0,
	} 
}

var dude2 = {
	name: "Nikko"
	score: {
		wins: 0,
		ties: 0,
		losses: 0,
	} 
}

function playRound(p1, p2) {
	p1.hand = getHand();
	p2.hand = getHand();
	if (p1.hand === p2.hand) {
		p1.score.ties ++
		p2.scores.ties ++
		console.log("It's a tie");
	}
	if (p1.hand === p2.hand){
		if(p2.hand === "paper"){
			console.log(p2.name + " won")
			p2.score.wins ++
			p1.score.losses ++
		}
		esle if (p2.hand === "scissors"){
			console.log(p1.name + " won");
			p1.score.wins ++
			p2.score.losses ++
		}
		if (p1.hand === p2.hand){
	if(p2.hand === "paper"){
			console.log(p2.name + " won")
			p2.score.wins ++
			p1.score.losses ++
		}
	}

}

function playGame() {
	for(var i = 0; 5 > i; i++) {
		playround (dude1, dude2)
	}
	console.log(dude1.score, dude2.score);
	playUntil(dude1, dude2);
}

function playUntil(arg1, arg2) {
	var winner= null;
	if (arg.score.win > arg2.score.wins) {
		console.log(arg1.name + " is the overall winner!");
		winner = arg1;
	if (arg2.score.win > arg1.score.wins) {
		console.log(arg2.name + " is the overall winner!");
		winner = arg2;
	}
	if (arg1.score.win === arg2.score.wins) {
		console.log(arg2.name + "Play again! There was no winner It was a tie");
		winner = null;
	}
	return winner;
	
}

playGame();









// var players = {
// 		player1: [
// 			{
// 				name: ,
// 				totWon: ,
// 				totLost: ,
// 				tournyWon; ,
// 				tournyLost; ,
// 				tourny; [
// 					game1: {
// 						choice: userChoice,
// 						outcome: ,//won--lost
// 					},
// 					game2: {
// 						choice: userChoice,
// 						outcome: ,
// 					},
// 					game3: {
// 						choice: userChoice,
// 						outcome: ,
// 					},
// 					game4: {
// 						choice: userChoice,
// 						outcome: ,
// 					},
// 					game5: {
// 						choice: userChoice,
// 						outcome: ,
// 					},
// 			},
// 		],
// 		player2: 
// 	}
// //2 
// function getHand() {
// 	parseInt((Math.random()*10)%3);
// 	if (getHand() < 3) {

// 	}

// }

















