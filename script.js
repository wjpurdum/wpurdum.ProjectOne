
$(document).ready(function(){


var timeRemaining = 30
var score = 0
var index = 0;
var answerChoice;
var currentQuestion;
var questions = [
	{
		question: "Select the word that correctly completes the sentence",
		sentence: "لم يتحدث ـــــــــ مع الصحافة",
		answers: {
			a: "المترجمين",
			b: "المترجمون",
			c: "المترجمات",
			d: "المترجمان",
		},
		rightAnswer: "المترجمون",
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect.",
		congratulations: "Great job, let's head to question 2",
		weakness: "Plural endings",
},

	{
		question: "Choose the correct word to fill in the sentence",
		sentence: "والدي يذهب ـــــــ مكتبه كل يوم.",
		answers: {
			a: "إلى",
			b: "علي",
			c: "بين",
			d: "فوق",
		},
		rightAnswer: 'إلى',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect",
		congratulations: "Correct! Advance to question 3",
		weakness: "Prepositions",

}, 
	{
		question: "Choose the correct adjective to complete the sentence",
		sentence: "حضرت المؤتمر مع سبعة رجال ــــــ.",
		answers: {
			a: "المصريون",
			b: "مصريون",
			c: "مصري",
			d: "مصريين",
		},
		rightAnswer: 'مصريين',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect",
		congratulations: "Correct! Advance to question 4",
		weakness: "Noun-adjective agreement",

	},
	{

		question: "Choose the correct adjective to complete the sentence",
		sentence: "دخل اخوان ــــــــ البيت.",
		answers: {
			a: "طويلين",
			b: "الطويلان",
			c: "طويلان",
			d: "طويلون",
		},
		rightAnswer: 'طويلان',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect",
		congratulations: "Correct! Advance to question 5",
		weakness: "Dual endings and agreement",

	},
	{
		question: "Choose the correct pronoun to complete the sentence",
		sentence: ".البابان مغلقان _______",
		answers: {
			a: "هذا",
			b: "هذه",
			c: "هؤلاء",
			d: "هذان",
		},
		rightAnswer: 'هذان',
		value: 20,
		correct: false,
		sorry: "Sorry, that's incorrect.",
		congratulations: "Correct!",
		weakness: "Dual endings and agreement",

	},
]

$("#start").click(startGame);



//to start the game on submission of player name
function startGame() {
	console.log('button has been clicked');
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
	console.log(timeRemaining)
	} else {
		clearInterval(timer)
		index = index + 1;
		setQuestion()
	};
};



//to determine which question is being populated into the game
function setQuestion() {
	console.log("function setQuestion Running");
	currentQuestion = questions[index];
	if (index <= 5) {
		showQuestion() }
	else {
		endGame();
	}

	};

function updateScore() {
	score += currentQuestion.value;
	$("#score").text(score);

}

function forceProceed() {
	index = index + 1;
	setQuestion();
}

//to populate the question
function showQuestion(){
	console.log(index);
	if (index > 0) {
		$("#previous").removeClass("initialHide");
	}
	timeRemaining = 30
	timer = setInterval(timerFunction, 1000);

	$("#timer").text(timeRemaining);
		$("#hint").text("");
		$("#question,#answers,#next").removeClass('initialHide');
		$("#question-text").text(currentQuestion.question);
		$("#question-sentence").text(currentQuestion.sentence);
		$("#answer-one").text(currentQuestion.answers.a);
		$("#answer-two").text(currentQuestion.answers.b);
		$("#answer-three").text(currentQuestion.answers.c);
		$("#answer-four").text(currentQuestion.answers.d);
		
		$('p').click(function(){
			answerChoice = $(this).html();
			checkAnswer();

		})

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
			index = index + 1;
			console.log(index + " next")
			setQuestion();
		});
		

		$("#previous").click(function(){
			index = index - 1;
			setQuestion();
		});

function endGame() {
		
		$("#next").addClass('initialHide')
		$("#previous").addClass('initialHide')
		$("#question-text").text("Great job, you completed the quiz! You scored " + score + "/100.");
		$("#question-sentence").text("Here are some grammar skills you need to work on:");
		$("#answers").css("display", "none");
			if(questions[0].correct === false) {
					$("#hint").text(questions[0].weakness);
			};

			if(questions[1].correct === false) {
					$("#hint").text(questions[1].weakness);
			};

			if(questions[2].correct === false) {
					$("#hint").text(questions[2].weakness);
			};


			if(questions[3].correct === false) {
					$("#hint").text(questions[3].weakness);
			};

			if(questions[4].correct === false) {
					$("#hint").text(questions[4].weakness);
			};
		};		

	


});




//to advance question 
//interval until function happens?











































