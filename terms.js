document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
      const header = section.querySelector("h2");
      header.style.cursor = "pointer";
      header.addEventListener("click", () => {
        const paragraphs = section.querySelectorAll("p");
        paragraphs.forEach(p => {
          if (p.style.display === "none" || window.getComputedStyle(p).display === "none") {
            p.style.display = "block";
            p.style.opacity = 0;
            setTimeout(() => p.style.opacity = 1, 10);
          } else {
            p.style.opacity = 0;
            setTimeout(() => p.style.display = "none", 300);
          }
        });
      });
    });
  

    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.getElementById("progressBar");
  

    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
      } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
      }
    });
  

    audio.addEventListener("timeupdate", () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progressPercent + "%";
    });

    audio.addEventListener("ended", () => {
      playPauseBtn.textContent = "Play";
      progressBar.style.width = "0%";
    });
  });
  