
// see where intervals are being set and every time you call set interval - grab existing timer ID and clear it before you call a new on

$(document).ready(function(){


var timeRemaining = 30
var score = 0
var index = 0;
var answerChoice;
var currentQuestion;
var timer = null;
var questions = [
	{
		question: "Select the word that correctly completes the sentence",
		sentence: ".لم يتحدث ـــــــــ مع الصحافة",
		answers: {
			a: "المترجمين",
			b: "المترجمون",
			c: "المترجمات",
			d: "المترجمان",
		},
		rightAnswer: "المترجمون",
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect. You can try again until time is up.",
		congratulations: "That's correct! Let's head to question two.",
		weakness: "Plural endings",
},

	{
		question: "Choose the correct word to fill in the sentence",
		sentence: ".والدي يذهب ـــــــ مكتبه كل يوم",
		answers: {
			a: "إلى",
			b: "علي",
			c: "بين",
			d: "فوق",
		},
		rightAnswer: 'إلى',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect. You can try again until time is up.",
		congratulations: "That's correct! Let's head to question three.",
		weakness: "Prepositions",

},
	{
		question: "Choose the correct adjective to complete the sentence",
		sentence: ".حضرت المؤتمر مع سبعة محامين ــــــ",
		answers: {
			a: "المصريون",
			b: "مصريون",
			c: "مصري",
			d: "مصريين",
		},
		rightAnswer: 'مصريين',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect. You can try again until time is up.",
		congratulations: "That's correct! Let's head to question four.",
		weakness: "Noun-adjective agreement",

	},
	{

		question: "Choose the correct adjective to complete the sentence",
		sentence: ".دخل اخوان ــــــــ البيت",
		answers: {
			a: "طويلين",
			b: "الطويلان",
			c: "طويلان",
			d: "طويلون",
		},
		rightAnswer: 'طويلان',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect. You can try again until time is up.",
		congratulations: "That's correct! Let's head to question five.",
		weakness: "Dual endings and agreement",

	},
	{
		question: "Choose the correct demonstrative pronoun to complete the sentence",
		sentence: ".ــــــــ البابان مغلقان ",
		answers: {
			a: "هذا",
			b: "هذه",
			c: "هؤلاء",
			d: "هذان",
		},
		rightAnswer: 'هذان',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect. You can try again until time us up, or click 'My Results' to see how you did.",
		congratulations: "Correct! Click 'My Results' to see how you did.",
		weakness: "Demonstrative pronouns and agreement",

	},
]

$("#start").click(startGame);

$('p.answer-border').click(function(){
	answerChoice = $(this).html();
	checkAnswer();

})


//to start the game on submission of player name
function startGame() {
	var userName = $("#enterName").val();
	$("#name").text(userName);
	$("#startScreen").addClass('hide');
	if($("#enterName").val() != "") {
		setQuestion();
	} else  {
		$("#hint").removeClass('initialHide');
		$("#hint").text("Please enter your username!")
	}

};

function timerFunction() {
	$("#timer").text(timeRemaining);
	if(timeRemaining > 0) {
	timeRemaining-=1;
	} else {
		clearInterval(timer)
		index = index + 1;
		setQuestion()
	};
};



//to determine which question is being populated into the game
function setQuestion() {
	currentQuestion = questions[index];
	if (index < 5) {
		showQuestion() }
	else {
		endGame();
	}

	};

function updateScore() {
	console.log('updating score')
	score += currentQuestion.value;
	$("#score").text(score);

}

// function forceProceed() {
// 	index = index + 1;
// 	setQuestion();
// }

//to populate the question
function showQuestion(){
	timeRemaining = 30
	// take this out if this doenst work
	clearInterval(timer)
	timer = setInterval(timerFunction, 1000);
	if (index > 0) {
		$("#previous").removeClass("initialHide");
	}
	if (index == 4) {
		$("#next").text("Get my Results");
	}


	$("#timer").text(timeRemaining);
		$("#hint").text("");
		$("#question,#answers,#next").removeClass('initialHide');
		$("#question-text").text(currentQuestion.question);
		$("#question-sentence").text(currentQuestion.sentence);
		$("#answer-one").text(currentQuestion.answers.a);
		$("#answer-two").text(currentQuestion.answers.b);
		$("#answer-three").text(currentQuestion.answers.c);
		$("#answer-four").text(currentQuestion.answers.d);



};
//to check player answers
function checkAnswer() {
		if (answerChoice == currentQuestion.rightAnswer) {
			//score = score + currentQuestion.value;
			//$("#score").text(score);
			$("#hint").text(currentQuestion.congratulations);
			currentQuestion.correct = true;
			updateScore();
		} else {
			console.log('incorrect');
			$("#hint").text(currentQuestion.sorry);
		};

	};

		$("#next").click(function(){
			clearInterval(timer)
			index = index + 1;
			setQuestion();
		});


		$("#previous").click(function(){
			index = index - 1;
			setQuestion();
			// clearInterval(timer);
		});
	

function endGame() {
		clearInterval(timer);
		$("#time-text").text("Game Over");
		console.log(score);
		console.log(questions[0].correct)
		console.log(questions[1].correct)
		console.log(questions[2].correct)
		console.log(questions[3].correct)
		console.log(questions[4].correct)

		$("#next").addClass('initialHide')
		$("#previous").addClass('initialHide')
		$("#question-text").text("Great job, you completed the quiz! You scored " + score + " points.");
		$("#answers").css("display", "none");
		if (score < 300 ) {
			$("#question-sentence").text("Here are some grammar skills you need to work on:");
			$("#hint").text("");
			} else {
			$("#question-sentence").css("display", "none");
			$("#hint").css("display", "none");
				};

			if(questions[0].correct === false) {
					$("#hint").append("<p>" + questions[0].weakness + "</p>");
			};

			if(questions[1].correct === false) {
					$("#hint").append("<p>" + questions[1].weakness + "</p>");
			};

			if(questions[2].correct === false) {
					$("#hint").append("<p>" + questions[2].weakness + "</p>");
			};

			if(questions[3].correct === false) {
					$("#hint").append("<p>" + questions[3].weakness + "</p>");
			};

			if(questions[4].correct === false) {
					$("#hint").append("<p>" + questions[4].weakness + "</p>");
			}
		};







});
