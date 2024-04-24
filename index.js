const gameBox = document.getElementById('app');
let guess = parseInt(window.prompt('Pick a Number from 1 to 10'));
//const guessinput =document.getElementById("Input")
//console.log(guessinput);
console.log(guess);

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber)

let attempts = 0;

function guessinggame(maxAttempts){
    while(true){
        if(attempts < maxAttempts){
            let guess = parseInt(window.prompt(output+'Pick a number from 1 to 10'));
            attempts ++ ;

        }
    }
}

// setTimeout(() => {
//     console.log("this is the third message");
//   }, );
window.alert("Guess a number between 1 and 10! Three guesses to get it right!")
do{
    let guess = parseInt(window.prompt(output+'Pick a number from 1 to 10'));
    if(randomNum === guess){
        output = 'You win! '
    } else {
        output = 'Not Quite! '
        tr.lastElementChild.remove();
    }
    console.log(output);
    console.log(guess);
}while(randomNum != guess);


