$(document).ready(function() {

// Variables to guess which word 
var djs = ["Tiesto", "Avicii", "Eric Prydz", "Armin Van Buuren", "Above and Beyond", "Carl Cox"];

// Sets the maximum number of guesses. 
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

// Determines which key was pressed. 
var userGuess = event.key;


// Computer needs to reveal letters


// User's guesses needs to decrease 


// Set up the answer array, add "djs"
 var answerArray = ["djs"];

// 
 for (var i = 0; i < djs.length; i++) {
    answerArray[i] = "_";
 }


 var remainingLetters = word.length;

 // 
}