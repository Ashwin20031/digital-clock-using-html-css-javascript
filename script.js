const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    dateDisplay.textContent = `${day} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
