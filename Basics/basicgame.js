// create a gmae where u start with any random game number. Ask the user to keep guessing the game number untill the user enters the correct value.

let gameNum = 25;
let userNum = prompt("Guess the game number");


while(userNum != gameNum){

  userNum =  prompt("you entered wrong number guess again:");

}

console.log("congrulations you entered the tight number")