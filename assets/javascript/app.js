//creating the variable
var answers = [ "South Dakota", "San Diego", "Amerigo Vespucci", "10", "Chicago, IL"];
var widget = $(".input");
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 10;

//click event for start button
$('#start').on('click', function(){
	
	$('#start').css('display', 'none');
	$('.widget').css('display', 'block');

	// timer countdown
	var timeCounter = setInterval(function(){
		time--;

		if(time > 9){
			$('#timeRemaining').html(time);
		}

		else if(time <= 9){
			$('#timeRemaining').html(time);
		}


		// when time = 0 game stops 
		if(time <= 0){
			clearInterval(timeCounter);
			start();

		}
	}, 1000);

	//click event for done button
	$('#done').on('click', function(){
		clearInterval(timeCounter);
		start();
	});
});

//function that will check the correct or incorrect answers and show the result
function start() {

	//hide the questions from user
	$(".widget").css('display', 'none');

	for (var i = 0 ; i < widget.length; i++) {
		if (widget[i].checked){
			if (answers.indexOf(widget[i].value) !== -1){
				correct++;
			}
			else {
				incorrect++;
			}
		}
	}

	var total = correct + incorrect;

	if (total !== 5){
		unanswered = 5 -total;
	}
	//display the result in DOM using jQuery
	$("#correct").text("Correct Answers: " + correct);
	$("#incorrect").text("Incorrect Answers: " + incorrect);
	$("#unanswered").text("Unanswered Questions: " + unanswered);
}