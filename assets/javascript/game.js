var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allGuesses = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();
    isUsed = false;

    for (var i = 0; i < allGuesses.length; i++){
        if (allGuesses[i] === userGuess){
        alert("Already guessed that letter. Try Again");
        isUsed = true;
        }
    }
    if (isUsed === false){

        if (userGuess === computerGuess){
        wins++
        guessesLeft = 10;
        allGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        }

        else {

        allGuesses.push(userGuess);
        guessesLeft--;
    
        }
    
    } 

    if (guessesLeft === 0){   
        losses++
        guessesLeft = 10;
        allGuesses =[];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessleft").textContent = guessesLeft;
    document.getElementById("guesssofar").textContent = allGuesses;


    // console.log(allGuesses);
    // console.log(computerGuess);
    // console.log(wins);
    // console.log(guessesLeft);
}

