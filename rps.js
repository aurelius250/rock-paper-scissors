console.log("Bananas");
let continueProgram = true;


function getComputerChoice() { 
    let computeRPS = Math.floor(Math.random() * 3); 
    let computedRPS;
    console.log(computeRPS) 
    switch(computeRPS) { 
        case 0:
        computedRPS = "rock";
        break; 

        case 1:
        computedRPS = "paper"; 
        break;
        
        case 2: 
        computedRPS = "scissors";
        break;
    }
    return computedRPS;
}


function getUserChoice() { 
    let computeUserRPS = prompt("Enter rock paper or scissors."); 
    console.log(computeUserRPS);
}

function startGameRPS() { 
    let computerChoice = getComputerChoice(); 
    let userChoice = getUserChoice(); 
    console.log(rpsMatchups); 
    
    
}

function rpsMatchups(computerChoice, userChoice) { 
    if(computerChoice == "rock"){ 
        switch(userChoice){ 
            case "rock": return "draw";
            break; 
            case "paper": return "you win!"; 
            break; 
            case "scissors": return "you lose!";
            break; 
        }
    }
}