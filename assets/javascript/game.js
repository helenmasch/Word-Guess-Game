
// Variables to guess which word 
var words = ["Tiesto", "Avicii", "Eric Prydz", "Armin Van Buuren", "Above and Beyond", "Carl Cox"];



var guessesRemaining = document.getElementById("guesses-remaining");

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

// Pick a random word
 var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
 var answerArray = [];

// 
 for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
 }
 var remainingLetters = word.length;
}