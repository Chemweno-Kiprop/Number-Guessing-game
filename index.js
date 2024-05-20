 // Minimum and Maximum numbers for the guessing range
const minNum=20;
const maxNum=75;

// Generate a random number between minNum and maxNum (inclusive)
let answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;


// Run the game loop while the variable running is true
while(running){
     // Prompt the user 
    guess=window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);
    
     // Check if the user's input is not a number
     if(isNaN(guess)){
        window.alert("Please enter a valid number");
     }

      // Check if the user's input is outside the valid range
     else if(guess<minNum || guess > maxNum){
        window.alert("Please enter a valid number");
     }

     //user's input is a valid number within the range
     else{
        attempts++;
        if(guess<answer){
            window.alert("Too low. try again");
        }
        else if(guess>answer){
            window.alert("Too high. try again");
        }
        else{
            window.alert(`The answer was ${answer}. You got it after ${attempts} attempts`)
            running=false;
        }
     }
 
};