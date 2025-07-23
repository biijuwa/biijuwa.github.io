// ===== Win streak variables =====
let diceCurrentWinStreak = 0;
let diceTempWinStreak = 0;
let diceHistoricalWinStreak = 0;

let randomCurrentWinStreak = 0;
let randomTempWinStreak = 0;
let randomHistoricalWinStreak = 0;

let rpsCurrentWinStreak = 0;
let rpsTempWinStreak = 0;
let rpsHistoricalWinStreak = 0;

let snakeCurrentWinStreak = 0;
let snakeTempWinStreak = 0;
let snakeHistoricalWinStreak = 0;

// ===== DOM elements for win streak displays =====
const diceWinStreakCounter = document.getElementById('diceWinStreak');
const randomWinStreakCounter = document.getElementById('randomWinStreak');
const rpsWinStreakCounter = document.getElementById('rpsWinStreak');
const snakeWinStreakCounter = document.getElementById('snakeWinStreak');

// RPS Overlay Win Streak Displays (inside overlay)
const rpsCurrentWinStreakSelection = document.getElementById('rpsCurrentWinStreakSelection');
const rpsCurrentWinStreakResult = document.getElementById('rpsCurrentWinStreakResult');

// ===== Buttons =====
const playDiceButton = document.getElementById('playDiceButton');
const playRandomButton = document.getElementById('playRandomButton');
const playRPSButton = document.getElementById('playRPSButton');
const playSnakeButton = document.getElementById('playSnakeButton');

// ===== Rock Paper Scissors Elements =====
const rpsOverlay = document.getElementById('rpsOverlay');
const closeRPSOverlay = document.getElementById('closeRPSOverlay');
const startRPSButton = document.getElementById('startRPSButton');
const rpsStartScreen = document.getElementById('rpsStartScreen');
const rpsChoicesScreen = document.getElementById('rpsChoicesScreen');
const rpsResultScreen = document.getElementById('rpsResultScreen');

const rockChoice = document.getElementById('rockChoice');
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');

const countdownText = document.getElementById('countdownText');
const cpuChoiceImage = document.getElementById('cpuChoiceImage');
const userChoiceImage = document.getElementById('userChoiceImage');
const winnerText = document.getElementById('winnerText');
const playAgainButton = document.getElementById('playAgainButton');

const moves = ['rock', 'paper', 'scissors'];
const moveImages = {
  rock: 'img/rock.png',
  paper: 'img/paper.png',
  scissors: 'img/scissors.png'
};

// ===================================================================================
// LOCAL STORAGE FUNCTIONS FOR PERSISTENCE
// ===================================================================================

/**
 * Loads historical win streaks from localStorage.
 */
function loadHistoricalWinStreaks() {
  diceHistoricalWinStreak = parseInt(localStorage.getItem('diceHistoricalWinStreak') || '0');
  randomHistoricalWinStreak = parseInt(localStorage.getItem('randomHistoricalWinStreak') || '0');
  rpsHistoricalWinStreak = parseInt(localStorage.getItem('rpsHistoricalWinStreak') || '0');
  snakeHistoricalWinStreak = parseInt(localStorage.getItem('snakeHistoricalWinStreak') || '0');

  // Update UI immediately after loading
  updateAllWinStreakDisplays();
}

/**
 * Saves a specific historical win streak to localStorage.
 * @param {string} gameName - The name of the game (e.g., 'dice', 'random', 'rps', 'snake').
 * @param {number} streakValue - The historical win streak value to save.
 */
function saveHistoricalWinStreak(gameName, streakValue) {
  localStorage.setItem(`${gameName}HistoricalWinStreak`, streakValue.toString());
}

/**
 * Updates all win streak displays in the UI.
 */
function updateAllWinStreakDisplays() {
  if (diceWinStreakCounter) {
    diceWinStreakCounter.textContent = `Historical Win Streak: ${diceHistoricalWinStreak}`;
  }
  if (randomWinStreakCounter) {
    randomWinStreakCounter.textContent = `Historical Win Streak: ${randomHistoricalWinStreak}`;
  }
  if (rpsWinStreakCounter) {
    rpsWinStreakCounter.textContent = `Historical Win Streak: ${rpsHistoricalWinStreak}`;
  }
  if (snakeWinStreakCounter) {
    snakeWinStreakCounter.textContent = `Historical Win Streak: ${snakeHistoricalWinStreak}`;
  }
}

// Load historical win streaks when the script starts
loadHistoricalWinStreaks();

// ===== Helper function to update historical win streak =====
// This function is now simplified as saving to localStorage is handled separately.
function updateHistoricalWinStreak(currentStreak, tempStreakRef, historicalStreakRef, gameName) {
  if (currentStreak > tempStreakRef.value) {
    tempStreakRef.value = currentStreak;
  }
  if (tempStreakRef.value > historicalStreakRef.value) {
    historicalStreakRef.value = tempStreakRef.value;
    saveHistoricalWinStreak(gameName, historicalStreakRef.value); // Save to localStorage
  }
  return 0; // Reset current streak after session end
}

// ===== Function to update all RPS streak displays in the UI =====
function updateRPSWinStreakDisplays() {
  if (rpsWinStreakCounter) {
    rpsWinStreakCounter.textContent = `Historical Win Streak: ${rpsHistoricalWinStreak}`;
  }
  if (rpsCurrentWinStreakSelection) {
    rpsCurrentWinStreakSelection.textContent = `Current Win Streak: ${rpsCurrentWinStreak}`;
  }
  if (rpsCurrentWinStreakResult) {
    rpsCurrentWinStreakResult.textContent = `Current Win Streak: ${rpsCurrentWinStreak}`;
  }
}

// ===== Dice Game Logic =====
playDiceButton.addEventListener('click', () => {
  const userWon = Math.random() < 0.5;
  if (userWon) {
    diceCurrentWinStreak++;
  } else {
    // If current streak is greater than temporary, update temporary
    if (diceCurrentWinStreak > diceTempWinStreak) {
      diceTempWinStreak = diceCurrentWinStreak;
    }
    // If temporary streak is greater than historical, update historical and save
    if (diceTempWinStreak > diceHistoricalWinStreak) {
      diceHistoricalWinStreak = diceTempWinStreak;
      saveHistoricalWinStreak('dice', diceHistoricalWinStreak);
    }
    diceCurrentWinStreak = 0; // Reset current streak
  }
  // Update UI for historical streak after each play
  if (diceWinStreakCounter) {
    diceWinStreakCounter.textContent = `Historical Win Streak: ${diceHistoricalWinStreak}`;
  }
});

// ===== Random Game Logic =====
playRandomButton.addEventListener('click', () => {
  const userWon = Math.random() < 0.5;
  if (userWon) {
    randomCurrentWinStreak++;
  } else {
    if (randomCurrentWinStreak > randomTempWinStreak) {
      randomTempWinStreak = randomCurrentWinStreak;
    }
    if (randomTempWinStreak > randomHistoricalWinStreak) {
      randomHistoricalWinStreak = randomTempWinStreak;
      saveHistoricalWinStreak('random', randomHistoricalWinStreak);
    }
    randomCurrentWinStreak = 0;
  }
  if (randomWinStreakCounter) {
    randomWinStreakCounter.textContent = `Historical Win Streak: ${randomHistoricalWinStreak}`;
  }
});

// ===== Snake Game Logic =====
playSnakeButton.addEventListener('click', () => {
  const userWon = Math.random() < 0.5;
  if (userWon) {
    snakeCurrentWinStreak++;
  } else {
    if (snakeCurrentWinStreak > snakeTempWinStreak) {
      snakeTempWinStreak = snakeCurrentWinStreak;
    }
    if (snakeTempWinStreak > snakeHistoricalWinStreak) {
      snakeHistoricalWinStreak = snakeTempWinStreak;
      saveHistoricalWinStreak('snake', snakeHistoricalWinStreak);
    }
    snakeCurrentWinStreak = 0;
  }
  if (snakeWinStreakCounter) {
    snakeWinStreakCounter.textContent = `Historical Win Streak: ${snakeHistoricalWinStreak}`;
  }
});

// ===== Rock Paper Scissors Logic =====
function showRPSOverlay() {
  rpsOverlay.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
  rpsOverlay.classList.add('opacity-100', 'scale-100');
  rpsStartScreen.classList.remove('hidden');
  rpsChoicesScreen.classList.add('hidden');
  rpsResultScreen.classList.add('hidden');

  // Reset current and temporary streaks for the new session
  rpsCurrentWinStreak = 0;
  rpsTempWinStreak = 0;

  updateRPSWinStreakDisplays();
}

function hideRPSOverlay() {
  // When closing the overlay, finalize the temporary streak for RPS
  if (rpsCurrentWinStreak > rpsTempWinStreak) {
    rpsTempWinStreak = rpsCurrentWinStreak;
  }
  if (rpsTempWinStreak > rpsHistoricalWinStreak) {
    rpsHistoricalWinStreak = rpsTempWinStreak;
    saveHistoricalWinStreak('rps', rpsHistoricalWinStreak); // Save to localStorage
  }
  rpsCurrentWinStreak = 0;
  rpsTempWinStreak = 0;

  updateRPSWinStreakDisplays(); // Update displays before hiding

  rpsOverlay.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
  rpsOverlay.classList.remove('opacity-100', 'scale-100');
}

startRPSButton.addEventListener('click', () => {
  rpsStartScreen.classList.add('hidden');
  rpsChoicesScreen.classList.remove('hidden');
});

function playRound(userMove) {
  const cpuMove = moves[Math.floor(Math.random() * moves.length)];

  rpsChoicesScreen.classList.add('hidden');
  rpsResultScreen.classList.remove('hidden');
  playAgainButton.classList.add('hidden');

  userChoiceImage.src = moveImages[userMove];
  cpuChoiceImage.src = 'img/question.png';

  let count = 3;
  winnerText.textContent = '';
  countdownText.textContent = count;

  const countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownText.textContent = count;
    } else {
      clearInterval(countdownInterval);
      countdownText.textContent = '';
      cpuChoiceImage.src = moveImages[cpuMove];

      const resultText = determineWinner(userMove, cpuMove);
      winnerText.textContent = resultText;

      // Update RPS streak displays after result
      updateRPSWinStreakDisplays();

      playAgainButton.classList.remove('hidden');
    }
  }, 1000);
}

function determineWinner(user, cpu) {
  if (user === cpu) {
    // Draw resets current streak but temp streak holds max
    if (rpsCurrentWinStreak > rpsTempWinStreak) {
      rpsTempWinStreak = rpsCurrentWinStreak;
    }
    rpsCurrentWinStreak = 0;
    return "It's a Draw!";
  }
  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    // User wins, increase current streak
    rpsCurrentWinStreak++;
    return "You Win!";
  } else {
    // CPU wins, update temp if needed and reset current streak
    if (rpsCurrentWinStreak > rpsTempWinStreak) {
      rpsTempWinStreak = rpsCurrentWinStreak;
    }
    rpsCurrentWinStreak = 0;
    return "CPU Wins!";
  }
}

function playAgain() {
  rpsResultScreen.classList.add('hidden');
  rpsChoicesScreen.classList.remove('hidden');
  updateRPSWinStreakDisplays();
}

// Event listeners for RPS
playRPSButton.addEventListener('click', showRPSOverlay);
closeRPSOverlay.addEventListener('click', hideRPSOverlay);
rockChoice.addEventListener('click', () => playRound('rock'));
paperChoice.addEventListener('click', () => playRound('paper'));
scissorsChoice.addEventListener('click', () => playRound('scissors'));
playAgainButton.addEventListener('click', playAgain);
