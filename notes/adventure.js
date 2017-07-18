//chose your own adventure game
// Check if the user is ready to play!
// Check if the user is ready to play!
console.log("Hi, Are you ready to play")
confirm(" Click OK to play ")
var age = 0;
var age = prompt("What age are you ?");

if ( age < 13){
console.log("You are not older than 13, I do not take responsibility for the game outcome");
} else {
console.log("Continue with the game");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = 0;
var userAnaswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "Yes"){
console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
var feedback = 0;
var feedback = prompt("Please rate this game from 1 to 10");
if (feedback > 8) {
    console.log("Thank you!")
}
else {
    console.log("I'll keep practicing coding")
}
