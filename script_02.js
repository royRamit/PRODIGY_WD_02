let startTime, updatedTime, difference, tInterval, running = false, lapCount = 0;
let minutes = 0, seconds = 0, milliseconds = 0;
const lapList = document.getElementById('lapList');
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}
function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    milliseconds = Math.floor((difference % 1000) / 10);
    seconds = Math.floor((difference / 1000) % 60);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    document.getElementById('milliseconds').textContent = (milliseconds < 10 ? '0' : '') + milliseconds;
    document.getElementById('seconds').textContent = (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('minutes').textContent = (minutes < 10 ? '0' : '') + minutes;
}
function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}
function resetTimer() {
    clearInterval(tInterval);
    running = false;
    minutes = seconds = milliseconds = 0;
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    lapList.innerHTML = '';
    lapCount = 0;
}
let recordLap = () => {
    if (running) {
        lapCount++;
        const lapTime = `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}:${(milliseconds < 10 ? '0' : '') + milliseconds}`;
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapElement);
    }
}
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);