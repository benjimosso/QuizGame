// Variables global Scope
var TimeE1 = document.querySelector(".time")
var StartButton = document.querySelector(".start-button")
    //var QuestionsE1 = document.querySelector("#question").hidden = true;
var AnswersBox = document.querySelector(".choice-container");
var boxContainer = document.querySelector(".box-container");
var StartContainer = document.querySelector(".start-container")
var QuestionText = document.querySelector("#question");
var Choice1 = document.getElementById('Choice1')
var Choice2 = document.getElementById('Choice2')
var Choice3 = document.getElementById('Choice3')
var Choice4 = document.getElementById('Choice4')
var ScoreContainer = document.getElementById('Score-container')
var SubmmitButton = document.getElementById('submmitbutton')
var PlayButton = document.getElementById('playbutton')
    //var buttonQuestion = document.querySelector(".button")
    //console.log(buttonQuestion)
var questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripted>",
        choice2: "<javascript>",
        choice3: "<script>",
        choice4: "<js>",
        correct: "C",
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function:myFunction()",
        choice3: "function = myFunction()",
        choice4: "None of the above ",
        correct: "A",
    },

    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        choice1: "append()",
        choice2: "concat()",
        choice3: "attach()",
        choice4: "None of the above",
        correct: "B",
    },
    {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        choice1: "substring()",
        choice2: "split()",
        choice3: "slice()",
        choice4: "substr()",
        correct: "A",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5",
        choice2: "if i = 5 then",
        choice3: "if (i == 5)",
        choice4: "if i == 5 then",
        correct: "C",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5",
        choice2: "if i = 5 then",
        choice3: "if (i == 5)",
        choice4: "if i == 5 then",
        correct: "C",
    },

]

var secondsLeft = 60;
var score = 0;

AnswersBox.style.display = 'none'
TimeE1.style.display = 'none'
ScoreContainer.style.display = 'none'
var LastquestionIndex = questions.length;
let RunningQuestion = 0
Timerinterval = null

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
    ScoreContainer.style.display = 'none'
    RunningQuestion = 0;
    RenderQuestion()
    clearInterval(Timerinterval);


}



// Game Over Function
function GameOver() {
    if (RunningQuestion > 4) {
        AnswersBox.style.display = 'none'
        clearInterval(setTime)
        TimeE1.style.display = 'none'
        submmitSection()
    }
    if (secondsLeft <= 0) {
        TimeE1.style.display = 'none'
        AnswersBox.style.display = 'none'
        submmitSection()

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
            return;
        }
    }, 1000);
}

// Function for submmit. 
function submmitSection() {
    ScoreContainer.style.display = 'block'
    var ScoreText = document.getElementById('ScoreText')
    ScoreText.innerText = "Your Score is " + score;
}


function RestartGame() {
    ScoreContainer.style.display = 'none'
    StartContainer.style.display = 'block'
    clearInterval(Timerinterval);
    secondsLeft = 60
    score = 0
}

// attach element to start te start game function
StartButton.addEventListener("click", StartQuiz)
StartButton.addEventListener("click", setTime)

// reset game button (play again)

PlayButton.addEventListener('click', RestartGame)
PlayButton.addEventListener('click', setTime)