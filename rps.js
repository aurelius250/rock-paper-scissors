function getComputerChoice() { 
    let computeRPS = Math.floor(Math.random() * 3); 
    let computedRPS;
    console.log(computeRPS) 
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
    console.log(computedRPS);
    return computedRPS;
}


function getUserChoice() { 
    let computeUserRPS = prompt("Enter rock paper or scissors."); 
    console.log(computeUserRPS);
    return computeUserRPS;
}

function startGameRPS() { 
    let computerChoice = getComputerChoice(); 
    let userChoice = getUserChoice(); 
    console.log(rpsMatchups(computerChoice, userChoice)); 
}

function rpsMatchups(computerChoice, userChoice) { 

    if(computerChoice === "rock"){ 
        switch(userChoice){ 
            case "rock": return ("Draw! " + computerChoice + " draws with " + userChoice);
            break; 

            case "scissors": return ("You win! " + userChoice + " beats " + computerChoice);
            break; 
            
            case "paper": return ("You lose! " + computerChoice + " beats " + userChoice);
            break;
            default: 
            console.log("Incorrect input!");
        }
    }

    if(computerChoice === "paper"){ 
        switch(userChoice){ 
            case "rock": return ("You win! " + userChoice + " beats " + computerChoice);
            break; 

            case "paper": return ("Draw! " + computerChoice + " draws with " + userChoice);
            break; 
            
            case "scissors": return ("You lose! " + computerChoice + " beats " + userChoice);
            break;
            default: 
            console.log("Incorrect input!");
        }
    }

    if(computerChoice === "scissors"){ 
        switch(userChoice){ 
            case "rock": return ("You win! " + userChoice + " beats " + computerChoice);
            break; 

            case "paper": return ("You lose! " + computerChoice + " beats " + userChoice);
            
            case "scissors": return ("Draw! " + computerChoice + " draws with " + userChoice);

            break;
            default: 
            console.log("Incorrect input!");
        }
    }
    
}

// function gameEnd(computerChoice, userChoice, result){
//     if((result === "draw"){
//         console.log("Draw! " + computerChoice + " ties with " + userChoice);
//     } else if(result === "win")
//     }
//         console.log(`$result! `) 

// }

startGameRPS(); 