let num = 19;
let userGuess = Number(prompt("Guess a number :"));
// let userGuess = +prompt("Guess a number :");

// Note : prompt() is used for user Input

if(userGuess === num){
    console.log("You win");
}
else{
    if(userGuess< num)
    {
        console.log("Too Low");
    }
    else{
        console.log("Too high");
    }
}