function changeText(answer, id) { 

  var num = Math.ceil(Math.random(1) * 10);

	if (Number(id.innerHTML) ==  num){
		  answer.innerHTML = "You guessed it! You ARE psychic!";
		} else {
		      answer.innerHTML = "Sorry, the number I'm thinking is " + num + "!"
		}
}