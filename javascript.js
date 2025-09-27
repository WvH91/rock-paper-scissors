// console.log("Hello World!")

function getComputerChoice() {
    let ComputerChoice = Math.random()

    if (ComputerChoice <= 1 / 3) {
        // console.log("rock")
        return "rock"
    }
    else if (ComputerChoice > 1 / 3 && ComputerChoice <= 2 / 3) {
        // console.log("paper")
        return "paper"
    }
    else {
        // console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let HumanChoice = prompt("Enter rock, paper or scissors.")
    // console.log(HumanChoice)
    return HumanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1
        return "Player wins round!";
    }
    else if (humanChoice === computerChoice) {
        return "Draw. Play again!"
    }
    else {
        computerScore += 1
        return "Computer wins round!";
    }
}

function playgame() {

    while (computerScore < 3 && humanScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
        console.log(`Score => Player: ${humanScore}, Computer: ${computerScore}`)
    }

    if (humanScore === 3) {
        console.log(humanScore)
        console.log(computerScore)
        console.log("Player wins game!")
    }

    else if (computerScore === 3) {
        console.log(computerScore)
        console.log(humanScore)
        console.log("Computer wins game!")
    }
    else
        console.log("Error...")
}

playgame()