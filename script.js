function updateTimer() {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        const now = new Date();
        timerElement.textContent = now.toLocaleString();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimer();
    setInterval(updateTimer, 1000);
});
