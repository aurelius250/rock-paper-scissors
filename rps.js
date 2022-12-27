let userWins = 0; 
let computerWins = 0;

function getComputerChoice() { 
    let computeRPS = Math.floor(Math.random() * 3); 
    let computedRPS;
    
    switch(computeRPS) { 
        case 0:
        computedRPS = "rock"
        break; 

        case 1:
        computedRPS = "paper"
        break;
        
        case 2: 
        computedRPS = "scissors"
        break;
    }

    return computedRPS;
}

function getUserChoice() { 
    let computeUserRPS = prompt("Enter rock paper or scissors."); 
    computeUserRPS = computeUserRPS.toLowerCase(); 
    
    if(computeUserRPS === "rock" || computeUserRPS === "scissors" || computeUserRPS === "paper") { 
       return computeUserRPS;
    } else { 
    console.log("Please enter a valid input: 'rock', 'paper', or 'scissors'"); 
    getUserChoice();
    }
}

function startGameRPS() { 
    let computerChoice = getComputerChoice(); 
    let userChoice = getUserChoice(); 

    console.log(rpsMatchups(computerChoice, userChoice)); 
}

function rpsMatchups(computerChoice, userChoice) { 
    if(computerChoice === "rock"){ 
        switch(userChoice){ 
            case "rock": 
                return ("Draw! " + computerChoice + " draws with " + userChoice);
            break; 

            case "scissors": 
                computerWins++;
                return ("You lose! " + computerChoice + " beats " + userChoice);
            break; 
            
            case "paper":
                userWins++;
                return ("You win! " + userChoice + " beats " + computerChoice);
            break;
            default: 
            console.log("Incorrect input!");
        }
    }

    if(computerChoice === "paper"){ 
        switch(userChoice){ 
            case "rock": 
            userWins++;
            return ("You win! " + userChoice + " beats " + computerChoice);
            break; 

            case "paper": 
            return ("Draw! " + computerChoice + " draws with " + userChoice);
            break; 
            
            case "scissors":
                computerWins++;
                return ("You lose! " + computerChoice + " beats " + userChoice);
            break;
            default: 
            console.log("Incorrect input!");
        }
    }

    if(computerChoice === "scissors"){ 
        switch(userChoice){ 
            case "rock": 
            userWins++;
            return ("You win! " + userChoice + " beats " + computerChoice); 
            break; 

            case "paper":
                computerWins++;
                return ("You lose! " + computerChoice + " beats " + userChoice);
            
            case "scissors": return ("Draw! " + computerChoice + " draws with " + userChoice);

            break;
            default: 
            console.log("Incorrect input!");
        }
    }
}

function game(){ 
    let gameCount = 0; 
  
    while(gameCount < 5){ 
        startGameRPS(); 
        gameCount++; 
    }

    console.log(`Final score: You: ${userWins} Computer: ${computerWins}`)
    
    if(userWins > computerWins) { 
        console.log("You won the set!"); 
    } else { 
        console.log("You lost to a computer!");
    }
}

game();