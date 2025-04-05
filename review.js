document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
  
  
    const reviews = [
      { author: "Alice", text: "An enchanting experience with top-notch service!", rating: 5 },
      { author: "Bob", text: "The movie collection is both diverse and mesmerizing.", rating: 4 },
      { author: "Charlie", text: "I felt like I was transported into another world.", rating: 5 },
      { author: "Diana", text: "A futuristic platform that offers a romantic vibe.", rating: 5 },
      { author: "Evan", text: "Impressive interface but the process could be smoother.", rating: 3 },
      { author: "Fiona", text: "Customer support is delightful and prompt.", rating: 5 },
      { author: "George", text: "The visual effects and music set the perfect mood.", rating: 4 },
      { author: "Hannah", text: "A bit too flashy for my taste, yet still appealing.", rating: 3 },
      { author: "Ian", text: "The thematic elements create a uniquely immersive journey.", rating: 5 },
      { author: "Jasmine", text: "Love the futuristic design and romantic animations!", rating: 5 },
      { author: "Kevin", text: "Good selection, though a few glitches here and there.", rating: 3 },
      { author: "Laura", text: "Absolutely stunning! The vibe is out of this world.", rating: 5 },
      { author: "Mark", text: "Not perfect, but the aesthetic is breathtaking.", rating: 4 },
      { author: "Nina", text: "Every visit feels like a mini escape into the future.", rating: 5 },
      { author: "Oscar", text: "The animations are subtle and quite romantic.", rating: 4 },
      { author: "Pam", text: "A dreamy experience that makes you want to return.", rating: 5 },
      { author: "Quincy", text: "The interplay of colors and animations is genius.", rating: 4 },
      { author: "Rachel", text: "I’m captivated by the futuristic charm of this site.", rating: 5 },
      { author: "Steve", text: "Had some issues, but the overall experience is captivating.", rating: 3 },
      { author: "Tina", text: "Every detail feels carefully curated for a magical vibe.", rating: 5 },
      { author: "Uma", text: "A visionary experience that blends tech with romance.", rating: 5 },
      { author: "Victor", text: "Futuristic and elegant, a truly immersive experience.", rating: 4 },
      { author: "Wendy", text: "The visual design makes every review feel poetic.", rating: 5 },
      { author: "Xavier", text: "The design is innovative, though slightly overdone.", rating: 3 },
      { author: "Yara", text: "The reviews section is as artistic as it is informative.", rating: 4 },
      { author: "Zack", text: "I felt every review echoed a romantic vibe.", rating: 3 },
      { author: "Anna", text: "A magical blend of technology and emotion!", rating: 5 },
      { author: "Brian", text: "Elegant, modern, and genuinely moving.", rating: 4 },
      { author: "Catherine", text: "The atmosphere is enchanting with every scroll.", rating: 5 },
      { author: "David", text: "A future-forward experience that speaks to the heart.", rating: 4 }
    ];
  

    reviews.forEach((review, index) => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card');
   
      reviewCard.style.animationDelay = `${index * 0.1}s`;
  
      const reviewText = document.createElement('p');
      reviewText.classList.add('review-text');
      reviewText.textContent = review.text;
  
      const reviewRating = document.createElement('div');
      reviewRating.classList.add('review-rating');
      let stars = '';
      for (let i = 0; i < review.rating; i++) {
        stars += '★';
      }
      for (let i = review.rating; i < 5; i++) {
        stars += '☆';
      }
      reviewRating.textContent = stars;
  
      const reviewAuthor = document.createElement('p');
      reviewAuthor.classList.add('review-author');
      reviewAuthor.textContent = `- ${review.author}`;
  
      reviewCard.appendChild(reviewText);
      reviewCard.appendChild(reviewRating);
      reviewCard.appendChild(reviewAuthor);
      reviewsContainer.appendChild(reviewCard);
    });
  

    const musicButton = document.getElementById("music-play");
    const audioPlayer = document.getElementById("music-player");
    let isPlaying = false;
    
    musicButton.addEventListener("click", () => {
      if (isPlaying) {
        audioPlayer.pause();
        musicButton.innerHTML = "▶️";
      } else {
        audioPlayer.play();
        musicButton.innerHTML = "⏸️";
      }
      isPlaying = !isPlaying;
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const reviewCards = document.querySelectorAll(".review-card");
    const music = document.getElementById("review-music");

    // Toggle Music
    window.toggleMusic = function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    };

    reviewCards.forEach((card) => {
        card.addEventListener("click", () => {

            card.classList.add("active-review");

    
            let heart = document.createElement("span");
            heart.innerHTML = "💖";
            heart.classList.add("heart");
            heart.style.left = "50%";
            heart.style.top = "50%";
            heart.style.transform = "translate(-50%, -50%)";
            card.appendChild(heart);

            
            setTimeout(() => {
                heart.remove();
            }, 1000);
            let stars = card.querySelector(".review-rating");
            stars.classList.add("star-animation");
            
            setTimeout(() => {
                stars.classList.remove("star-animation");
            }, 1500);
        });
    });
});

