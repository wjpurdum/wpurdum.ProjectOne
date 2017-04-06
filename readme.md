Game Choice: Trivia/Quiz

As a user, I should be able to: 
1. Click through 5-10 trivia questions on basic Arabic grammar concepts. 
2. Have each question tell me if I selected the correct or incorrect answer
3. See my score in the top left corner of the screen as I progress through the quiz
5. See how much time I have left to answer each question - counting down from 30 seconds for each questions
6. See my final score and answers submitted

Bronze: 5 unique questions will populate and quiz will flow based on user input. Final score will be tracked on each page in the upper lefthand corner. 

Silver: Each question will have a 30 second time limit. After time limit hits zero, the question will disappear if it hasn't been answered. 

Gold: Each question will have a 30 second time limit. ALl transitions between questions and screens will have a fade it/fade out function, instead of an abrupt switch. The timer will be fully functional. 

Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

Technologies Used:

1. HTML
2. CSS
3. JavaScript
	- JQuery
	- Timer

Approach taken:

1. Created 5 unique questions as objects in an array, stored as a global variable
2. Created a function that would store user name 
3. Created a timer functiont that would give the user 30 seconds to answer each question. After this time elapses, the game automatically advances to the next question. 
4. Created 3 seperate functions to:
	a. Set the question (using the index of the questions array set as a global variable)
	b. Register the user answer selection and compare it to the correct answer in the question's object. 
	c. Update the user's score based on correct/incorrect answers/
	d. Provide user their final score as well as specific grammar concepts to focus on based on their incorrect answers. 

Unsolved problems
- The score gets updated by multiples of what index the question loop is on. I can't seem to figure this out. As such, the score is inaccurate. 
- The timer function does not work correctly when the user goes back to a previous questions. 