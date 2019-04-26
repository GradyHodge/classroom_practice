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
	/*function choiceAssg(){
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
	*/

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





