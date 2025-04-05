function goBack() {
    window.history.back();
}
function toggleMusic() {
    const music = document.getElementById('background-music');
    const btn = document.getElementById('music-btn');

    if (music.paused) {
        music.play();
        btn.textContent = 'Pause Music';
    } else {
        music.pause();
        btn.textContent = 'Play Music';
    }
}
