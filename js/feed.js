document.addEventListener("DOMContentLoaded", function() {

    const musicBtn = document.getElementById("music-btn");
    const audio = new Audio('music20.mp3');
    let isPlaying = false;
  
    musicBtn.addEventListener("click", function() {
      if (!isPlaying) {
        audio.play();
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
      } else {
        audio.pause();
        musicBtn.textContent = "Play Music";
        isPlaying = false;
      }
    });
  
 
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentSection = document.getElementById("comment-section");
  
    commentForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const text = commentInput.value.trim();
      if (text !== "") {
        const div = document.createElement("div");
        div.className = "comment-item";
        div.textContent = text;
        commentSection.appendChild(div);
        commentInput.value = "";
      }
    });
  });
  