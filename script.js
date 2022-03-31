let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor((Math.random() * 10));
}

const compareGuesses = (user, computer, target) => {
    const humanDifference = Math.abs(target - user);
    const computerDifference = Math.abs(target - computer); 
    return humanDifference <= computerDifference; 
};

const updateScore = winner => {
    if (winner === "human") {
        return humanScore++;
    } else if (winner === "computer") {   
        return computerScore++;
    }
};

const advanceRound = () => {
    return currentRoundNumber++; 
}



