let musicPlaying = false;
let audio = new Audio('music8.mp3');  
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


function redirectToMain() {
  window.location.href = "main.html";
}


document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Message has been sent!");

  this.reset();
});
