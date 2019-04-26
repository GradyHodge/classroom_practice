// -----------------------New rock paper scissor game---------------------
// alert("Welcome to Rock, Paper, Scissors.")
var hands = ['rock','paper','scissors']
var computerChoice = gethand();
var playerChoiceRock = hands[0];
var playerChoicePaper = hands[1];
var playerChoiceScissors = hands[2];
var cchoice = gethand(computerChoice);
//------ Functions --------------------
	//Function gethand chooses a random number between 0 and 2 and correspons that number with hands[i].
	function gethand(x)
			{
				var x = parseInt((Math.random()*3))
				if (x == 0 )
					{
						x = hands[0];

					}
				else if(x == 1)
					{
						x = hands[1];
					}
				else
					{
						x = hands[2];
					}
				return x;
				
			};

	//Function player forces the playerchoice variables to be one of 3 strings which are rock, paper, scissors.
	function player(playerChoice){
		if (playerChoice == "rock" )
		{
			// playerChoiceRock = "rock";
			playerChoiceRock = hands[0];	
		}
		else if(playerChoice == "paper")
		{
			playerChoicePaper = hands[1];
		}
		else if (playerChoice == "scissors")
		{
			playerChoiceScissors = hands[2];
		}
		else
		{
			playerChoice = null;
		}

		console.log("Player's choice: " + playerChoice);
	};

	//The compare function compares the player's choice and the randomly generated computer choice and prints out the outcome.
	function compare(a,b)
	{
	if (a == b)
	 {
	 	console.log("its a tie");
	 }
	 else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
	 {
	 	console.log("player wins");
	 }
	 else if((b == "rock" && a == "scissors") || (b == "paper" && a == "rock") || (b == "scissors" && a =="paper"))
	 {
	 	console.log("computer wins");
	 }
	};




//------------- Javascript to HTML -------------

document.getElementById("rock").onclick = function(){
	player(playerChoiceRock);
	console.log("Computer's Choice: "+ cchoice);
	compare(playerChoiceRock, cchoice);
};

document.getElementById("paper").onclick = function(){
	player(playerChoicePaper);
	console.log("Computer's Choice: "+ gethand(computerChoice));
	compare(playerChoicePaper, cchoice);
};
document.getElementById("scissors").onclick = function(){
	player(playerChoiceScissors);
	console.log("Computer's Choice: "+ gethand(computerChoice));
	compare(playerChoiceScissors, cchoice);
};

