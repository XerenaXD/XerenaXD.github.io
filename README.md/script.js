let balance = 1000;
let gameArea = document.getElementById("gameArea");

function changeGame() {
    const game = document.getElementById("gameSelect").value;
    gameArea.innerHTML = "";  // Clear current game area

    if (game === "dice") {
        displayDice();
    } else if (game === "coinflip") {
        displayCoinflip();
    } else if (game === "blackjack") {
        displayBlackjack();
    } else if (game === "poker") {
        displayPoker();
    } else if (game === "crash") {
        displayCrash();
    } else if (game === "plinko") {
        displayPlinko();
    }
}

function displayDice() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="rollDice()">Roll the Dice!</button>
        <div id="result"></div>
    `;
}

function rollDice() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let diceRoll = Math.floor(Math.random() * 6) + 1;
    if (diceRoll >= 4) {
        balance += parseInt(betAmount);
        resultText.textContent = `You rolled a ${diceRoll}! You win ${betAmount} coins.`;
    } else {
        balance -= parseInt(betAmount);
        resultText.textContent = `You rolled a ${diceRoll}. You lose ${betAmount} coins.`;
    }

    document.getElementById('balance').textContent = balance;
}

function displayCoinflip() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="flipCoin()">Flip the Coin!</button>
        <div id="result"></div>
    `;
}

function flipCoin() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
    let userChoice = prompt("Choose Heads or Tails:");
    
    if (userChoice.toLowerCase() === coinFlip.toLowerCase()) {
        balance += parseInt(betAmount);
        resultText.textContent = `It's ${coinFlip}! You win ${betAmount} coins.`;
    } else {
        balance -= parseInt(betAmount);
        resultText.textContent = `It's ${coinFlip}. You lose ${betAmount} coins.`;
    }

    document.getElementById('balance').textContent = balance;
}

// Blackjack (simplified version)
function displayBlackjack() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="playBlackjack()">Play Blackjack!</button>
        <div id="result"></div>
    `;
}

function playBlackjack() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let playerScore = Math.floor(Math.random() * 21) + 1;
    let aiScore = Math.floor(Math.random() * 21) + 1;
    
    if (playerScore > aiScore && playerScore <= 21) {
        balance += parseInt(betAmount);
        resultText.textContent = `You win! Your score: ${playerScore}, AI score: ${aiScore}.`;
    } else if (aiScore > playerScore && aiScore <= 21) {
        balance -= parseInt(betAmount);
        resultText.textContent = `You lose. Your score: ${playerScore}, AI score: ${aiScore}.`;
    } else {
        resultText.textContent = "It's a tie!";
    }

    document.getElementById('balance').textContent = balance;
}

// Poker (AI Version) - Basic version
function displayPoker() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="playPoker()">Play Poker!</button>
        <div id="result"></div>
    `;
}

function playPoker() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let playerHand = Math.floor(Math.random() * 10) + 1;
    let aiHand = Math.floor(Math.random() * 10) + 1;
    
    if (playerHand > aiHand) {
        balance += parseInt(betAmount);
        resultText.textContent = `You win! Your hand: ${playerHand}, AI hand: ${aiHand}.`;
    } else if (aiHand > playerHand) {
        balance -= parseInt(betAmount);
        resultText.textContent = `You lose. Your hand: ${playerHand}, AI hand: ${aiHand}.`;
    } else {
        resultText.textContent = "It's a tie!";
    }

    document.getElementById('balance').textContent = balance;
}

// Crash Game (Simplified)
function displayCrash() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="playCrash()">Play Crash!</button>
        <div id="result"></div>
    `;
}

function playCrash() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let crashMultiplier = (Math.random() * 10).toFixed(2);
    
    if (parseFloat(crashMultiplier) > 3) {
        balance += parseInt(betAmount);
        resultText.textContent = `You won! Multiplier: x${crashMultiplier}. You win ${betAmount} coins.`;
    } else {
        balance -= parseInt(betAmount);
        resultText.textContent = `You lost! Multiplier: x${crashMultiplier}. You lose ${betAmount} coins.`;
    }

    document.getElementById('balance').textContent = balance;
}

// Plinko Game (Simplified)
function displayPlinko() {
    gameArea.innerHTML = `
        <label for="bet">Place Your Bet (Coins):</label>
        <input type="number" id="bet" min="1" value="10">
        <button onclick="playPlinko()">Play Plinko!</button>
        <div id="result"></div>
    `;
}

function playPlinko() {
    let betAmount = document.getElementById('bet').value;
    let resultText = document.getElementById('result');

    if (betAmount <= 0 || betAmount > balance) {
        resultText.textContent = "Please place a valid bet.";
        return;
    }

    let plinkoResult = Math.random() < 0.5 ? "Win" : "Lose";
    
    if (plinkoResult === "Win") {
        balance += parseInt(betAmount);
        resultText.textContent = `You win! You get ${betAmount} coins.`;
    } else {
        balance -= parseInt(betAmount);
        resultText.textContent = `You lose! You lose ${betAmount} coins.`;
    }

    document.getElementById('balance').textContent = balance;
}

window.onload = changeGame;
