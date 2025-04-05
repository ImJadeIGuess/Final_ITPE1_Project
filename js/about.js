

document.addEventListener('DOMContentLoaded', () => {

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
      member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.05)';
      });
      member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
      });
    });

    const musicTracks = [
      "music1.mp3",
      "music2.mp3",
      "music3.mp3"

    ];
    
    let currentTrackIndex = 0;
    const audioPlayer = new Audio(musicTracks[currentTrackIndex]);
    audioPlayer.volume = 0.5;
    
    const musicSelect = document.getElementById("music-select-about");
    const musicPlayButton = document.getElementById("music-play-about");
    const musicPrevButton = document.getElementById("music-prev-about");
    const musicNextButton = document.getElementById("music-next-about");
    
   
    musicTracks.forEach((track, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.text = `Track ${index + 1}`;
      musicSelect.appendChild(option);
    });
    musicSelect.value = currentTrackIndex;
    
    let isPlaying = false;
    
    function playMusic() {
      audioPlayer.play();
      isPlaying = true;
      musicPlayButton.innerHTML = "⏸️";
    }
    
    function pauseMusic() {
      audioPlayer.pause();
      isPlaying = false;
      musicPlayButton.innerHTML = "▶️";
    }
    
    musicPlayButton.addEventListener("click", () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    });
    
    musicPrevButton.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex === 0) ? musicTracks.length - 1 : currentTrackIndex - 1;
      updateTrack();
    });
    
    musicNextButton.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex === musicTracks.length - 1) ? 0 : currentTrackIndex + 1;
      updateTrack();
    });
    
    musicSelect.addEventListener("change", () => {
      currentTrackIndex = parseInt(musicSelect.value, 10);
      updateTrack();
    });
    
    function updateTrack() {
      audioPlayer.src = musicTracks[currentTrackIndex];
      musicSelect.value = currentTrackIndex;
      if (isPlaying) {
        playMusic();
      }
    }
    
    audioPlayer.addEventListener("ended", () => {
      currentTrackIndex = (currentTrackIndex === musicTracks.length - 1) ? 0 : currentTrackIndex + 1;
      updateTrack();
      playMusic();
    });
  });
  