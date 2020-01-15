$(document).ready(function() {

// Variables to guess which word 
var djs = ["tiesto", "avicii", "eric prydz", "armin van buuren", "above and beyond", "carl cox"];

// Sets the maximum number of guesses. (Will never change)
const maxGuess = 10

// Variables that hold a value to a specific ID
var numberWins = document.getElementById("number-wins");
var guessWord = document.getElementById("guess-word");
var button = document.getElementById("button");
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("letters-guessed");

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = [0];
var losses = 0;
var guesses = 10;

// Grabbing Random Word from arrays in variable
var getRandomWord = function(array) {
    return array[Math.floor(Math.random() * djs.length)];
  }  

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
        // Make sure key pressed is an alpha character, if letter is pressed the !pauseGame will NOT pause the game and keep running)
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }

// Determines which key was pressed. 
var userGuess = event.key; {

// Set up the answer array, add "djs". (Returns letters in guess-word )
var answerArray = [];
for (var i = 0; i < djs.length; i++) {
   answerArray[i] = "_";

var remainingLetters = word.length;


// Computer needs to reveal letters


// User's guesses needs to decrease 

 }


 var remainingLetters = word.length;

 // 
}