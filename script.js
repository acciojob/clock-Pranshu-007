//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    timerElement.textContent = now.toLocaleString(); // Formats the date & time
}

// Update every second
setInterval(updateTimer, 1000);

// Initialize immediately
updateTimer();
