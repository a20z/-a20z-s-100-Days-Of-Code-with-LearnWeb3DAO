// This is CodeCademy's JavaScript project focusing on functions

console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Error: You must choose either Rock, Paper, or Scissors!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was a tie!';
  }

if (userChoice === 'rock'){
  if (computerChoice === 'paper'){
    return 'Sorry, computer won!';
  } else {
    return 'Congratulations, you won!'
  }
}

if (userChoice === 'paper'){
  if (computerChoice === 'rock'){
    return 'Paper covers rock, you won!';
  } else {
    return 'Sorry, computer won.';
  }
} 

if (userChoice === 'scissors'){
  if (computerChoice === 'rock'){
    return 'Rock beats scissors!'
  } else {
    return 'Congrats! You won!'
  }
}

if (userChoice === 'bomb'){
  return "Congratulations, you won, but at what cost? Earth's population has been annihilated. "
}

}
 

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log(`The Computer threw ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
