// script.js

// Generate confetti
document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector('.confetti');
    const confettiCount = 300;
    const colors = ['#ff6f9c', '#ff99c8', '#ffb6d5'];
    const confettiTemplate = document.createDocumentFragment();

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confettiTemplate.appendChild(confetti);
    }

    confettiContainer.appendChild(confettiTemplate);
});

// script.js

// Countdown Timer
const countdownElement = document.getElementById("countdown");
const birthdayDate = new Date("2024-09-24T00:00:00"); // Ganti dengan tanggal ulang tahun
const countdownDays = document.getElementById("days");
const countdownHours = document.getElementById("hours");
const countdownMinutes = document.getElementById("minutes");
const countdownSeconds = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date();
    const timeDiff = birthdayDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours;
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;

    // Jika sudah mencapai tanggal, hentikan hitungan mundur
    if (timeDiff < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<h2>Happy Birthday!</h2>";
    }
}

// Update setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Generate confetti
document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector('.confetti');
    const confettiCount = 300;
    const colors = ['#ff6f9c', '#ff99c8', '#ffb6d5'];
    const confettiTemplate = document.createDocumentFragment();

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confettiTemplate.appendChild(confetti);
    }

    confettiContainer.appendChild(confettiTemplate);
});
