
let firstCard = 7;
let secondCard = 2; 
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true 

if (sum <= 20){
    console.log("Do you want a new card? 🙂")
} else if(sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
} 
