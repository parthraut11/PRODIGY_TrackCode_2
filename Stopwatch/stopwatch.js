// script.js
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapTimesList = document.getElementById('lap-times');

function updateDisplay() {
  displayMinutes.textContent = minutes.toString().padStart(2, '0');
  displaySeconds.textContent = seconds.toString().padStart(2, '0');
  displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  isRunning = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapTimesList.innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = `${displayMinutes.textContent}:${displaySeconds.textContent}:${displayMilliseconds.textContent}`;
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapTimesList.appendChild(li);
  }
}

// Event Listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
