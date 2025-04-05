const agreeBtn = document.getElementById('agree-btn');
agreeBtn.addEventListener('click', function() {
    window.location.href = "index.html";  
});


document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');

    music.volume = 0.3;

    music.play();

    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "Pause Music"; 
        } else {
            music.pause();
            musicBtn.textContent = "Play Music"; 
        }
    });
});
