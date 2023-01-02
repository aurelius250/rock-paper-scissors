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

function gameStart() { 
    const userRpsChoice = document.querySelectorAll(".btn"); 
    userRpsChoice.forEach(button => button.addEventListener("click", (e) => { 
        let userChoice = e.target.id; -
        console.log(userChoice);
        addResult(outcomeDecider(getComputerChoice(),userChoice));
        finalResults();

    }))
}

function finalResults(){ 
    const finalResultsP = document.querySelector(".results"); 
    finalResultsP.style.whiteSpace = "pre"; 

    if(userWins == 5){ 
        finalResultsP.textContent = `Winner! Humanity wins! World peace achieved!`;
        userWins = 0; 
        computerWins = 0; 
        return;
    }
    else if(computerWins == 5){ 
        userWins = 0; 
        computerWins = 0; 
        finalResultsP.textContent = `You Lose! AI wins! You have officially let your entire species down singlehandedly!`; 
        return;
    } 
}

function addResult(gamePlayed){ 
    const p = document.querySelector(".results"); 
    const scoreBoardHumans = document.querySelector(".humanity-score")
    const scoreBoardAI = document.querySelector(".ai-score"); 
    scoreBoardHumans.textContent = userWins; 
    scoreBoardAI.textContent = computerWins;
    p.style.whiteSpace = "pre";
    p.textContent = `${gamePlayed}` 
}

function outcomeDecider(computerChoice, userChoice) { 
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
            computerWins++;
                return ("You lose! " + computerChoice + " beats " + userChoice);

            case "paper": 
                return ("Draw! " + computerChoice + " draws with " + userChoice);
            
            case "scissors":
                userWins++;
                return ("You win! " + userChoice + " beats " + computerChoice);
            default: 
                console.log("Incorrect input!");
        }
    }

    if(computerChoice === "scissors"){ 
        switch(userChoice){ 
            case "rock": 
                userWins++;
                return ("You win! " + userChoice + " beats " + computerChoice); 
            case "paper":
                computerWins++;
                return ("You lose! " + computerChoice + " beats " + userChoice);
            case "scissors": 
                return ("Draw! " + computerChoice + " draws with " + userChoice);
            default: 
                console.log("Incorrect input!");
        }
    }
}

gameStart();  

