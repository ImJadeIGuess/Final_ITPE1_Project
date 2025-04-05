let musicPlaying = false;
const audio = new Audio('music9.mp3'); 
audio.loop = true;
audio.volume = 0.5;

function toggleMusic() {
  const musicBtn = document.getElementById("music-btn");
  if (!musicPlaying) {
    audio.play();
    musicPlaying = true;
    musicBtn.innerHTML = "&#10074;&#10074; Pause Music";
  } else {
    audio.pause();
    musicPlaying = false;
    musicBtn.innerHTML = "&#9658; Play Music";
  }
}

function goBack() {
 
  window.location.href = "help.html";
}
