// Variables global Scope
var TimeE1 = document.querySelector(".time")
var StartButton = document.querySelector(".start-button")
    //var QuestionsE1 = document.querySelector("#question").hidden = true;
var AnswersBox = document.querySelector(".choice-container");
var boxContainer = document.querySelector(".box-container");
var StartContainer = document.querySelector(".start-container")
var QuestionText = document.querySelector("#question");
var buttonQuestion = document.querySelector(".button");
var Choice1 = document.querySelector('#Choice1')
var Choice2 = document.querySelector('#Choice2')
var Choice3 = document.querySelector('#Choice3')
var Choice4 = document.querySelector('#Choice4')
    //var buttonQuestion = document.querySelector(".button")
    //console.log(buttonQuestion)
var questions = [{
        question: "Cuanto es 2 + 2",
        choice1: "6",
        choice2: "9",
        choice3: "4",
        choice4: "7",
        answer: "3",
    },

    {
        question: "Cual es la difrencia entre el millo y los demas.",
        choice1: "Grande",
        choice2: "La cancha",
        choice3: "La Hinchada",
        choice4: "El Futbol",
        answer: "1",
    },

    {
        question: "Boca es...",
        choice1: "Capo",
        choice2: "Cagon",
        choice3: "algo",
        choice4: "El mejor",
        answer: "2",
    },
    {
        question: "Quien Es el Tecnico de River",
        choice1: "Gallardo",
        choice2: "Coudet",
        choice3: "Becaccece",
        choice4: "Pizzi",
        answer: "1",
    },
    {
        question: "Quien tiene la 10 en river",
        choice1: "Maidana",
        choice2: "Enzo Perez",
        choice3: "Borre",
        choice4: "Carrascal",
        answer: "5",
    },

]

var secondsLeft = 60;
var score = 0;

AnswersBox.style.display = 'none'

var LastquestionIndex = questions.length;
//console.log(LastquestionIndex)
var RunningQuestion = 0;
//console.log(RunningQuestion)

//console.log(q.answer)


// for (let index = 0; index < questions.length; index++) {
//     //if (question.answer) 
//     currentQuestion.push(questions[index])
// }

//buttonQuestion.textContent = currentQuestion[1].question

//Start Game Function
function StartQuiz() {
    StartContainer.style.display = 'none'
    AnswersBox.style.display = 'block'
    setTime()
    test()
    RenderQuestion()

}






function RenderQuestion() {
    q = questions[RunningQuestion]
        //RunningQuestion++
    console.log(RunningQuestion)
    QuestionText.textContent = q.question
    Choice1.textContent = q.choice1;
    Choice2.textContent = q.choice2;
    Choice3.textContent = q.choice3;
    Choice4.textContent = q.choice4;
    //Choice1.textContent = q.choice1;
    // Choice1 = q.choice1


    // Choice2 = q.choice2
    //     //Choice2.textContent = q.choice2;

    // Choice3 = q.choice3
    //     //Choice3.textContent = q.choice3;

    // Choice4 = q.choice4
    //     //Choice4.textContent = q.choice4

}

function test() {
    // Test de funcion. 
    Choice1.addEventListener('click', function Check() {
        RunningQuestion++
        RenderQuestion(RunningQuestion)

        if (q.answer === Choice1.dataset.number) {
            score = score + 20
        } else {
            secondsLeft -= 5;
        }

        console.log(Choice1)
        console.log(score)
    });

    Choice2.addEventListener('click', function Check() {
        RunningQuestion++
        RenderQuestion(RunningQuestion[0])

        if (q.answer === Choice2.dataset.number) {
            score = score + 20
        } else {
            secondsLeft -= 5;
        }

        console.log(Choice2)
        console.log(score)
    });

    Choice3.addEventListener('click', function Check() {
        RunningQuestion++
        RenderQuestion(RunningQuestion[0])


        if (q.answer === Choice3.dataset.number) {
            score = score + 20
        } else {
            secondsLeft -= 5;
        }

        console.log(Choice3)
        console.log(score)
            //console.log(q.answer)
    });

    Choice4.addEventListener('click', function Check() {
        RunningQuestion++
        RenderQuestion(RunningQuestion[0])

        if (q.answer === Choice4.dataset.number) {
            score = score + 20
        } else {
            secondsLeft -= 5;
        }
        console.log(Choice4)
        console.log(score)
    });

};


// function RenderQuestion() {
//     q = questions[RunningQuestion]
//     console.log(RunningQuestion)
//     QuestionText.textContent = q.question
//     Choice1.textContent = q.choice1
//     Choice2.textContent = q.choice2
//     Choice3.textContent = q.choice3
//     Choice3 = q.choice3
//     Choice4.textContent = q.choice4
//     Choice4 = q.choice4
// }


//console.log(RunningQuestion)


// Time function
function setTime() {
    var Timerinterval = setInterval(function() {
        secondsLeft--;
        TimeE1.textContent = secondsLeft;
        // if time ran out
        if (secondsLeft === 0) {
            clearInterval(Timerinterval);
        }
    }, 1000);
    return;
}

// attach element to start te start game function
StartButton.addEventListener("click", StartQuiz)


//console.log(buttonQuestion)