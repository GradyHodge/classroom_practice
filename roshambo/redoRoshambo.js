
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

var playerRock = document.getElementById("rocky").addEventListener("click", choseRock);
var playerPaper = document.getElementById("papery").addEventListener("click", chosePaper);
var playerScissors = document.getElementById("scissorsy").addEventListener("click", choseScissors);

function choseRock() {
    // var hand = 
    // userChoice = hand;
    // console.log(userAnswer);
    // playGame();
    userChoice = 'rock';
    playGame(userChoice);
    console.log("User chose rock");
}



function chosePaper(){
 	userChoice = 'paper';
    playGame(userChoice);
    console.log("User chose paper");

}

function choseScissors(){
 	userChoice = 'scissors';
    playGame(userChoice);
    console.log("User chose scissors");
}

function playGame(banana){
        
        compyChoice = Math.floor(Math.random() * 3);

    if (banana === compyChoice) {
    	console.log("tied");
    	winner = "You tied";
    	alert("You Tied");
    }
    else if (banana === "rock" && compyChoice === scissors) {
    	console.log("compy chose scissors")
    	winner = "You Win";
    	alert("You Win");
    	console.log("you win");
    }

	else if (banana === "paper" && compyChoice === rock) {
		console.log("compy chose scissors")
		winner = "You Win";
		alert("You Win");
		console.log("You Win");
	}
	else if (banana === "scissors"  && compyChoice === paper) {
		console.log("compy chose scissors")
		winner = "You Win";
		alert("You Win");
		console.log("You Win");
	}
	else {
		console.log("compy chose scissors")
		winner = "You Lose";
		alert("You Lose");
		console.log("You Lose");
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




