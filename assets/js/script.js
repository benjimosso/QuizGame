// Variables global Scope
var secondsLeft = 60;
var TimeE1 = document.querySelector(".time")
var StartButton = document.querySelector(".start-button")
    //var QuestionsE1 = document.querySelector("#question").hidden = true;
var AnswersBox = document.querySelector(".choice-container");
var boxContainer = document.querySelector(".box-container").hidden;
var buttonQuestion = document.querySelector(".button")

var questions = [{
        question: "question 1",
        choice1: "Choice1",
        choice2: "Choice2",
        choice3: "Choice3",
        answer: "answer",
    },

    {
        question: "Cual es la difrencia entre el millo y los demas.",
        choice1: "Choice1",
        choice2: "Choice2",
        choice3: "Choice3",
        answer: "Answer2",
    },

    {
        question: "Question 3",
        choice1: "Choice1",
        choice2: "Choice2",
        choice3: "Choice3",
        answer: "Answer2",
    },
    {
        question: "Question 4",
        choice1: "Choice1",
        choice2: "Choice2",
        choice3: "Choice3",
        answer: "Answer2",
    },
    {
        question: "Question 5",
        choice1: "Choice1",
        choice2: "Choice2",
        choice3: "Choice3",
        answer: "Answer2",
    },

]

var LastquestionIndex = questions.length;
console.log(LastquestionIndex)
var RunningQuestion = 1;

function RenderQuestion() {
    var q = questions[RunningQuestion]
    console.log(q)
}
RenderQuestion()
    // for (let index = 0; index < questions.length; index++) {
    //     //if (question.answer) 
    //     currentQuestion.push(questions[index])
    // }

//buttonQuestion.textContent = currentQuestion[1].question

//Start Game Function
function StartGame() {
    boxContainer.hidden = false;
    setTime()
}

// Time function
function setTime() {
    var Timerinterval = setInterval(function() {
        secondsLeft--;
        TimeE1.textContent = secondsLeft
            // if time ran out
        if (secondsLeft === 0) {
            clearInterval(Timerinterval);
            return;
        }
    }, 1000);
}


// attach element to start te start game function
StartButton.addEventListener("click", StartGame)