let isMusicPlaying = false;
let audio = document.getElementById("background-audio");

function toggleMusic() {
    if (isMusicPlaying) {
        audio.pause();
        document.getElementById("music-btn").textContent = "Play Music";
    } else {
        audio.play();
        document.getElementById("music-btn").textContent = "Pause Music";
    }
    isMusicPlaying = !isMusicPlaying;
}

function goBack() {
    window.location.href = 'main.html'; // Redirects to the main page
}
