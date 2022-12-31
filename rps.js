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



function startGameRPS(computerChoice, userChoice) { 
    console.log(rpsMatchups(computerChoice, userChoice)); 
    }

function initialRpsState() { 
    let computerChoice = getComputerChoice(); 
    let userChoice; 
    const userRpsChoice = document.querySelectorAll(".btn"); 

    console.log(`Computer choice is ${computerChoice}`);
    userRpsChoice.forEach(button => button.addEventListener("click", (e) => { 
        userChoice = e.target.id; -
        console.log(userChoice);
        startGameRPS(computerChoice, userChoice);

    }))
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
            
            case "scissors": 
            return ("Draw! " + computerChoice + " draws with " + userChoice);
            break;
            default: 
            console.log("Incorrect input!");
        }
    }
}

function game(){ 
    initialRpsState();
}
game();