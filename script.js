var questions = [
    {
       q: " What is the apartment number for the loft Jess, Nick, Schmidt, and Winston live in?",
       ch: ["204", "4D", "7B", "3"], 
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
var timer = document.getElementById("timer");




for (var i=0; i < questions.length; i++ ) {
    var answer= print(questions[i].q);

}











// On the homepage, there will be a greeting describing the quiz. When the Start button is clicked it will begin the quiz
// Upon clicking the Start button, it will change to the first question displayed with 4 answer choices. 
// If they choose the right answer, it moves on to the next question and displays Correct! underneath. 
// If they choose the wrong answer, it moves on to the next question, but deducts 10 seconds from the timer. 
// After all questions are answered, the timer stops and whatever number it stops on is the user's score.
// If timer hits 0, the page will display Game Over. 
// The page will display the user's score and an input field to write Initials down. 
// the user's initials and score will be recorded to the highscore list. 
