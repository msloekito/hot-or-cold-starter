
$(document).ready(function(){
	/*---random number generator--*/
	var answerNumber = Math.floor(Math.random()*100) + 1;
	console.log("Actual answer is " + answerNumber);	

	/*---listening to user number input--*/
	$("#guessButton").click(function(){
	var userGuess = $("#userGuess").val();
	var guessAnswer = Math.abs(userGuess - answerNumber);
	console.log("The user guessed " + userGuess);
	console.log("difference between guess and actual answer is " + guessAnswer);
		/*--feedback to user--*/

	

	if	(guessAnswer > 40) {
		$("#feedback").text("don't bother trying")
	}
	else if (guessAnswer > 30) {
		$("#feedback").text("try another zipcode")
	}
	else if (guessAnswer > 20) {
		$("#feedback").text("you're way off")
	}
	else if (guessAnswer > 10) {
		$("#feedback").text("getting there-ish")
	}
	else if (guessAnswer > 3) {
		$("#feedback").text("pretty close")
	}
	else if (guessAnswer > 2) {
		$("#feedback").text("pretty DARN close")
	}
	else if (guessAnswer >= 1) {
		$("#feedback").text("MGHHHHGHGHG")
	}
	else if (guessAnswer == 0) {$("#feedback").text("BINGO")
	alert("You gots it!!")}

	else {}
	})

	/*---refresh/new game functionality--*/
	$(".new").click(function(){
		location.reload();
	});

	/*-- guessed numbers list--*/
	$("#guessButton").click(function(){
		var userGuess = $("#userGuess").val()
		if (userGuess < 1 || userGuess > 100) {
			alert("That's not a valid answer, must be between 1 and 100")
		}
		else {$("#guessList").append("<li>"+ userGuess +"</li>")
		console.log("add to guessed list")}
	});

	/*-- counter functionality --*/
	var guessCounter = 1
	$("#guessButton").click(function(){
		$("#count").text(guessCounter);
		guessCounter = guessCounter + 1;
	});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


