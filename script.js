
$(document).ready(function(){


var questionOne = {
	question: "What is the feminine plural form of 'translators' (مترجم)?",
	answers: {
		a: "شنسيتبشسيب",
		b: "متشيسبيش",
		c: "شنسيتبشسيب",
		d: "يشبيسب",
	},
	value: 20,
	correct: false,
	sorry: "Sorry, that's incorrect.",
	congratulations: "Great job, let's head to question 2",
}



var questionTwo = {
	question: "Question 2 (مترجم)?",
	answers: {
		a: "شنسيتبشسيب",
		b: "متشيسبيش",
		c: "شنسيتبشسيب",
		d: "يشبيسب",
	},
	value: 20,
	correct: false,
	sorry: "Sorry, that's incorrect Question 2.",
	congratulations: "Great job, let's head to question 3",

}




$("#start").click(startGame);



function startGame() {
	console.log('button has been clicked');
	var userName = $("#enterName").val();
	$("#name").text(userName);
	$("#startScreen").addClass('hide');
	showQuestionOne();
};

function clearText() {
	console.log("clearText working");
	$("#question").text("");
	$("#answers").text("");
	$("#question-text").text("");
	$("#answer-one").text("");
	$("#answer-two").text("");
	$("#answer-three").text("");
	$("#answer-four").text("");

}

function showQuestionOne() {
	console.log('this function is registering');
	$("#question,#answers,#next").removeClass('initialHide');
	$("#question-text").text(questionOne.question);
	$("#answer-one").text(questionOne.answers.a);
	$("#answer-two").text(questionOne.answers.b);
	$("#answer-three").text(questionOne.answers.c);
	$("#answer-four").text(questionOne.answers.d);
	$("#answerOneButton").click(function() {
		console.log("correct!");
		questionOne.correct = true;
		var userScore = 20;
		$("#score").text(userScore);
		$("#answerOneButton").addClass('correct');
		$("#hint").text(questionOne.congratulations)
	});
	$("#answerTwoButton").click(function() {
		console.log("incorrect!");
		questionOne.correct = false;
		$("#answerTwoButton").addClass('incorrect');
		$("#hint").text(questionOne.sorry)
	});

	$("#answerThreeButton").click(function() {
		console.log("incorrect!");
		questionOne.correct = false;
		$("#answerThreeButton").addClass('incorrect');
		$("#hint").text(questionOne.sorry)
	});

	$("#answerFourButton").click(function() {
		console.log("incorrect!");
		questionOne.correct = false;
		$("#answerFourButton").addClass('incorrect');
		$("#hint").text(questionOne.sorry)
	});

	$("#next").click(showQuestionTwo);

};

	function showQuestionTwo() {
		console.log('question two loading');
		$("#previous").removeClass("initialHide");
		$("#question-text").text(questionTwo.question);
		$("#answer-one").text(questionTwo.answers.a);
		$("#answer-two").text(questionTwo.answers.b);
		$("#answer-three").text(questionTwo.answers.c);
		$("#answer-four").text(questionTwo.answers.d);
		$("#answerOneButton").click(function() {
			console.log("correct!");
			questionTwo.correct = true;
			var userScore = 20;
			$("#score").text(userScore);
			$("#answerOneButton").addClass('correct');
			$("#hint").text(questionTwo.congratulations)
			});
		$("#answerTwoButton").click(function() {
		console.log("incorrect!");
		questionTwo.correct = false;
		$("#answerTwoButton").addClass('incorrect');
		$("#hint").text(questionTwo.sorry)
	});

		$("#answerThreeButton").click(function() {
		console.log("incorrect!");
		questionTwo.correct = false;
		$("#answerThreeButton").addClass('incorrect');
		$("#hint").text(questionTwo.sorry)
	});

		$("#answerFourButton").click(function() {
		console.log("incorrect!");
		questionTwo.correct = false;
		$("#answerFourButton").addClass('incorrect');
		$("#hint").text(questionTwo.sorry)
	});

	$("#next").click(showQuestionThree());

	}









//end closing
});


























