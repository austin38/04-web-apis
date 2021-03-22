//array of questions
var questions = [{
    title: "Whos is the current Head Coach of the Washington Football Team?",
    choices: ["John Elway( )", "Robert Griffin III( )", "Ron Rivera( )", "Jay Gruden( )"],
    answer: "Ron Rivera( )"
},
{
    title: "Who is not a player on the WFT?",
    choices: ["Landon Collins( )", "Ryan Fitzpatrick( )", "Dwayne Haskins( )", "Chase Young( )"],
    answer: "Dwayne Haskins( )"
},
{
    title: "What team will win the NFC East in 2021?",
    choices: ["WFT( )", "NY Giants( )", "Philidelphia Eagles( )", "Dallas Cowboys( )"],
    answer: "WFT( )"
},
{
    title: "Who won the Super Bowl in 2020?",
    choices: ["Kansas City Chiefs( )", "New England Patriots( )", "Tampa Bay Buccaneers( )", "WFT( )"],
    answer: "Tampa Bay Buccaneers( )"
},
{
    title: "What team had the worst record in 2020?",
    choices: ["NY Jets( )", "Jacksonville Jaguars( )", " Cleveland Browns( )", "WFT( )"],
    answer: "Jacksonville Jaguars( )"
}
]


var score = 0;
var currentQuestion = 0;
var timeLeft = 0;
var timer = 0;


function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); 
    }
}, 1000);

next();
}

function next() {
    currentQuestion++;
    
    if (currentQuestion > questions.length) {
        endGame();
        return;
    }
    
    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>";
    
    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode;
    }
    }
 
function endGame() {
clearInterval(timer);

var quizContent = document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}


function getScore() {
var quizContent = getScore

localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");

resetGame();
}


function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent =
    document.getElementById("quizBody").innerHTML = quizContent;
}


function incorrect() {
timeLeft -= 15; 
next();
}


function correct() {
score += 20;
next();
}