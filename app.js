function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionsIndex().text;

        //show choices
        var choices = quiz.getQuestionsIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }

};

function guess(id, guess) {
var button = document.getElementById(id);
button.onclick = function() {
    quiz.guess(guess);
    populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = " Question " + currentQuestionNumber + " of " + quiz.questions.length;
};



function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};




var questions = [
    new Question("How many badges does it take to get into the Pokemon league?", ["5", "8", "9", "10"], "8"),
    new Question("Whom amongst these has NOT traveled with Ash for some time", ["Misty", "Max", "Gary", "Terry"], "Gary"),
    new Question("In generation 1 of the main series games which main city is the move psychic found?", ["Saffron", "Cerulean", "Vermillion", "Celadon"], "Saffron"),
    new Question("Which of these Pokemon does not use a moonstone to evolve?", ["Clefairy", "Nidorino", "Lunatone", "Skitty",], "Lunatone"),
    new Question("Which of these is known as the sharp claw pokemon?", ["Scizor", "Sneazel", "Zangoose", "Sandslash"], "Sneazel"),

];

var quiz = new Quiz(questions);

populate();
