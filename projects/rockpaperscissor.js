function startgame() {
    let choices = ["rock", "paper", "scissor"];
    let choice;

    function playerchoice() {
        choice = document.getElementById('playerinput').value.toLowerCase();
        if (!choices.includes(choice)) {
            document.getElementById('resultmessage').innerText = "Invalid choice!!! Please enter rock, paper, or scissor";
            return null;
        }
        return choice;
    }

    let playerChoice = playerchoice();
    if (!playerChoice) {
        return; 
    }

    function randomgeneratefromcomp() {
        let random = Math.floor(Math.random() * choices.length);
        return choices[random];
    }

    let computerChoice = randomgeneratefromcomp();

    function result(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "tie up....try again!!";
        }
        if ((playerChoice === "rock" && computerChoice === "scissor") || 
            (playerChoice === "scissor" && computerChoice === "paper") || 
            (playerChoice === "paper" && computerChoice === "rock")) {
            return "you are the winner";
        } else {
            return "you lost.....please try again!! ";
        }
    }

    let output = result(playerChoice, computerChoice);
    console.log(output);
    document.getElementById('resultmessage').innerHTML = `<b>Player choice: ${playerChoice} <br> Computer choice: ${computerChoice} <br> ${output}</b>`;
}

document.querySelector('.buttonbox').addEventListener('click', startgame);

function resetgame() {
    document.getElementById('playerinput').value = "";
    document.getElementById('resultmessage').innerText = "Enter Rock, Paper, or Scissor";
}

document.querySelector('.resetbutton').addEventListener('click', resetgame);
