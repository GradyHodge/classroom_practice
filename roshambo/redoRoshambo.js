
/*
1. user inputs choice by clicking button
2. computer randomly generates #
3. compare choices
4. 

*/

var userChoice ;//button
var compyChoice ;//random number

var rock = 0;
var paper = 1;
var scissors = 2;

function rock() {
    var hand = document.getElementById("rock").innerHTML;
    userChoice = hand;
    console.log(userAnswer);
    playGame();
}

function paper(){

    var hand = document.getElementById("paper").innerHTML;
    userChoice = hand;
    console.log(userAnswer);
    playGame();

}

function scissors(){

    var hand = document.getElementById("scissors").innerHTML;
    userChoice = hand;
    console.log(userAnswer);
    playGame();
}

function playGame(){
        
        compyChoice = Math.floor(Math.random() * 3);

    if (userChoice === compyChoice) {
    	console.log("tied");
    	winner = "You tied";
    }
    else if (userChoice === "rock" && compyChoice === scissors) {
    	console.log("you win");
    	winner = "You Win";
    }

	else if (userChoice === "paper" && compyChoice === rock) {
		console.log("You Win");
		winner = "You Win";
	}
	else if (userChoice === "scissors"  && compyChoice === paper) {
		console.log("You Win");
		winner = "You Win";
	}
	else {
		console.log("You Lose");
		winner = "You Lose";
	}
}



// if (userAnswer =="Rock" && computerAnswer == Rock) {

    
//     winner = "Tie Game";
     
//     logWinner();
// }

// else if (userAnswer =="Rock" && computerAnswer == Paper) {
    
    
//     winner = "You Lost";
//     logWinner();
// }

// else if (userAnswer =="Rock"   && computerAnswer == Spock) {
    
    
//     winner = "You Won";
//     logWinner();
// }

// else if (userAnswer =="Paper" && computerAnswer == Rock) {

//     winner ="You Won";
//     logWinner();
// }

// else if (userAnswer =="Paper"   && computerAnswer == Paper) {
    
//     winner="You Tied";
//     logWinner();
// }

// else if (userAnswer  =="Paper"  && computerAnswer == Spock) {
    
//     winner="You Lost";
//     logWinner();
// }

// else if (userAnswer == "Spock" && computerAnswer == Rock) {

    
//     winner="You Lost";
//     logWinner();
// }

// else if (userAnswer == "Spock" && computerAnswer == Paper) {
    
//     winner="You Won";
//     logWinner();
// }

// else if (userAnswer == "Spock" && computerAnswer == Spock) {
    
    
//     winner="You Tied";
//     logWinner();
// }

// else{
    
//     alert("Pick Rock, Paper or Spock!")

// }
// };



function playGame() {   
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
	 		alert("Not an option, start over");
	 	}
}



