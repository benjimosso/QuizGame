// Variables global Scope
var TimeE1 = document.querySelector(".time")
var StartButton = document.querySelector(".start-button")
    //var QuestionsE1 = document.querySelector("#question").hidden = true;
var AnswersBox = document.querySelector(".choice-container");
var boxContainer = document.querySelector(".box-container");
var StartContainer = document.querySelector(".start-container")
var QuestionText = document.querySelector("#question");
var buttonQuestion = document.querySelector(".button");
var Choice1 = document.getElementById('Choice1')
var Choice2 = document.getElementById('Choice2')
var Choice3 = document.getElementById('Choice3')
var Choice4 = document.getElementById('Choice4')
    //var buttonQuestion = document.querySelector(".button")
    //console.log(buttonQuestion)
var questions = [{
        question: "Cuanto es 2 + 2",
        choice1: "6",
        choice2: "9",
        choice3: "4",
        choice4: "7",
        correct: "C",
    },
    {
        question: "Cual es la difrencia entre el millo y los demas.",
        choice1: "Grande",
        choice2: "La cancha",
        choice3: "La Hinchada",
        choice4: "El Futbol",
        correct: "A",
    },

    {
        question: "Boca es...",
        choice1: "Capo",
        choice2: "Cagon",
        choice3: "algo",
        choice4: "El mejor",
        correct: "B",
    },
    {
        question: "Quien Es el Tecnico de River",
        choice1: "Gallardo",
        choice2: "Coudet",
        choice3: "Becaccece",
        choice4: "Pizzi",
        correct: "A",
    },
    {
        question: "Quien tiene la 10 en river",
        choice1: "Maidana",
        choice2: "Enzo Perez",
        choice3: "Borre",
        choice4: "Carrascal",
        correct: "C",
    },
    {
        question: "Quien tiene la 10 en river",
        choice1: "Maidana",
        choice2: "Enzo Perez",
        choice3: "Borre",
        choice4: "Carrascal",
        correct: "C",
    },

]

var secondsLeft = 60;
var score = 0;

AnswersBox.style.display = 'none'
TimeE1.style.display = 'none'
var LastquestionIndex = questions.length;
let RunningQuestion = 0


// Render Questions
function RenderQuestion() {
    console.log("RenderQuestion", RunningQuestion)
    console.log(Choice1)
    q = questions[RunningQuestion];
    QuestionText.innerText = q.question;
    Choice1.textContent = q.choice1;
    Choice2.textContent = q.choice2;
    Choice3.textContent = q.choice3;
    Choice4.textContent = q.choice4;
    GameOver()
}

//Start Game Function
function StartQuiz() {
    StartContainer.style.display = 'none'
    AnswersBox.style.display = 'block'
    TimeE1.style.display = 'block'
    setTime()
    RenderQuestion()
}



// Game Over Function
function GameOver() {
    if (RunningQuestion > 4) {
        AnswersBox.style.display = 'none'
        clearInterval(setTime)
        TimeE1.style.display = 'none'
    }
}


// check if answers are correct and increment score. 
function RightWrong(answer) {
    // Chice 1
    if (answer == questions[RunningQuestion].correct) {
        score = score + 20

    } else {
        secondsLeft -= 5;

    }

    if (RunningQuestion < LastquestionIndex) {
        RunningQuestion++
        RenderQuestion()
    }


    console.log(score)

}

// Time function
function setTime() {
    var Timerinterval = setInterval(function() {
        secondsLeft--;
        TimeE1.textContent = secondsLeft;
        // if time ran out
        if (secondsLeft <= 0) {
            clearInterval(Timerinterval);
            GameOver()
            TimeE1.style.display = 'none'
            AnswersBox.style.display = 'none'

        }
    }, 1000);
    return;
}

// attach element to start te start game function
StartButton.addEventListener("click", StartQuiz)