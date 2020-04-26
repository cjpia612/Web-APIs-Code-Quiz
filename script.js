var questions = [
    {
       q: " What is the apartment number for the loft Jess, Nick, Schmidt, and Winston live in?",
       ch: ["204", "4D", "7B", "30"], 
       a: "4D"
    },
    {
        q: " Where was Winston when he found out he's color blind?",
        ch: ["In the loft", "Chicago", "Police Station", "Mexican Resort"],
        a: "Mexican Resort"
    },
    {
        q: " Which celebrity guest-starred on the show because they were such a huge fan?",
        ch: ["Megan Fox", "Taylor Swift", "Prince", "Josh Gad"],
        a: "Prince"
    },
    {
        q: " What style of shoe does Schmidt use when he drives?",
        ch: ["Loafers", "Jordans", "Moccasins", "Boots"],
        a: "Moccasins"
    },
    {
        q: "Who said: I don't want some janky, freshwater, bitch fish!",
        ch: ["Nick", "Coach", "Schmidt", "Winston"],
        a: "Schmidt"
    },
    {
        q:"What is the name of Nick's main character in his novels?",
        ch: ["Julius Pepperwood", "Yolanda Winston", "Paul Genzlinger", "Walt Russell"],
        a: "Julius Pepperwood"
    }

];
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var seconds = 61;
var questionHead = document.getElementById("question-head");
var homepage = document.getElementById("homepage");
var quiz = document.getElementById ("quiz");
var button1 = document.getElementById ("button1");
var button2 = document.getElementById ("button2");
var button3 = document.getElementById ("button3");
var button4 = document.getElementById ("button4");
var i= 0;
var score= 0;

startBtn.addEventListener("click", function (){
  homepage.className = "d-none";
  quiz.className = "container-fluid mt-4"
    function startTimer() {
        var countdownTimer = setInterval(function (){
            seconds--;
            timer.textContent = "Timer:" + seconds;
            if( seconds === 0) {
                clearInterval(countdownTimer);
            }
        }, 1000);
    }
    startTimer();
    startQuestions();
})

function startQuestions() {
    questionHead.textContent = questions[i].q;
    button1.textContent = questions[i].ch[0];
    button2.textContent = questions[i].ch[1];
    button3.textContent = questions[i].ch[2];
    button4.textContent = questions[i].ch[3];
};

button1.addEventListener("click", function(event) {
    event.stopPropagation();
    var correctAnswer = questions[i].a;
    console.log (event.target.textContent);
    console.log(score);

    if (i < questions.length -1) {
        i++;
    }
    if (event.target.textContent === correctAnswer) {
        startQuestions();
        score++;
    } else {
        startQuestions();
        
    }
});

button2.addEventListener("click", function(event) {
    event.stopPropagation();
    var correctAnswer = questions[i].a;
    console.log (event.target.textContent);
    console.log(score)

    if (i < questions.length -1) {
        i++;
    }
    if (event.target.textContent === correctAnswer) {
        startQuestions();
        score++;
    } else {
        startQuestions();
        
    }
});

button3.addEventListener("click", function(event) {
    event.stopPropagation();
    var correctAnswer = questions[i].a;
    console.log (event.target.textContent);
    console.log(score)

    if (i < questions.length -1) {
        i++;
    }
    if (event.target.textContent === correctAnswer) {
        startQuestions();
        score++;
    } else {
        startQuestions();
        
    }
});

button4.addEventListener("click", function(event) {
    event.stopPropagation();
    var correctAnswer = questions[i].a;
    console.log (event.target.textContent);
    console.log(score)

    if (i < questions.length -1) {
        i++;
    }
    if (event.target.textContent === correctAnswer) {
        startQuestions();
        score++;
    } else {
        startQuestions();
        
    }
});
// After all questions are answered, the timer stops and whatever number it stops on is the user's score.
// If timer hits 0, the page will display Game Over. 
// The page will display the user's score and an input field to write Initials down. 
// the user's initials and score will be recorded to the highscore list. 
