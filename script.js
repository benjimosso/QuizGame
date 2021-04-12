// Variables global Scope
var secondsLeft = 60;
var TimeE1 = document.querySelector(".time")
var StartButton = document.querySelector(".start-button")

//Start Game Function
function StartGame() {

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
        }
    }, 1000);
}


// attach element to start te start game function
StartButton.addEventListener("click", StartGame)