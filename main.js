let timerInterval;
let timeLeft = 1500; // 25 minutes in seconds

const timerDisplay = document.querySelector('.timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

const progressFill = document.getElementById('progress-fill');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateProgressBar() {
    const progressPercentage = ((1500 - timeLeft) / 1500) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timeLeft--;

            timerDisplay.textContent = formatTime(timeLeft);
            updateProgressBar();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                timeLeft = 1500;
                timerDisplay.textContent = formatTime(timeLeft);
                progressFill.style.width = '0%';
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 1500;
    timerDisplay.textContent = formatTime(timeLeft);
    progressFill.style.width = '0%';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

timerDisplay.textContent = formatTime(timeLeft);
