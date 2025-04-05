const toggleSwitch = document.querySelector('#theme-toggle-checkbox');


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}


const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);


if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
}


toggleSwitch.addEventListener('change', switchTheme);

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentIndex) {
      indicator.classList.add('active');
    }
  });
}
function toggleNotifications() {
  const dropdown = document.getElementById("notification-dropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
  const container = document.querySelector(".notification-icon-container");
  if (!container.contains(event.target)) {
    document.getElementById("notification-dropdown").style.display = "none";
  }
});


function goToPrev() {
  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
}

function goToNext() {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}

prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();




const searchBar = document.getElementById("search-bar");
const genreFilter = document.getElementById("genre-filter");
const productList = document.getElementById("product-list");
const products = Array.from(productList.getElementsByClassName("product"));

function filterProducts() {
  const searchText = searchBar.value.toLowerCase();
  const genreValue = genreFilter.value;

  products.forEach(product => {
    const title = product.getAttribute("data-title").toLowerCase();
    const genre = product.getAttribute("data-genre");

    if (title.includes(searchText) && (genreValue === "" || genre === genreValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

searchBar.addEventListener("input", filterProducts);
genreFilter.addEventListener("change", filterProducts);


function applyPromo() {
  const promoInput = document.getElementById("promo-code").value;
  const promoMessage = document.getElementById("promo-message");


  if (promoInput.trim() !== "") {
    promoMessage.innerText = "Promo applied! Enjoy your discount.";
  } else {
    promoMessage.innerText = "Please enter a valid promo code.";
  }
}
const musicTracks = [
  "music1.mp3",
  "music2.mp3",
  "music3.mp3",
  "music4.mp3",
  "music5.mp3",
  "music6.mp3",
  "music7.mp3",
  "music8.mp3",
  "music9.mp3",
  "music10.mp3",
  "music11.mp3",
  "music12.mp3",
  "music13.mp3",
  "music14.mp3",
  "music15.mp3",
  "music16.mp3",
  "music17.mp3",
  "music18.mp3",
  "music19.mp3",
  "music20.mp3",

];


let currentTrackIndex = 0;
const audioPlayer = new Audio(musicTracks[currentTrackIndex]);
audioPlayer.volume = 0.5;

const musicSelect = document.getElementById("music-select");
const musicPlayButton = document.getElementById("music-play");
const musicPrevButton = document.getElementById("music-prev");
const musicNextButton = document.getElementById("music-next");
const musicPlayerDiv = document.querySelector('.music-player');

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
    musicPlayerDiv.classList.add('playing');
}

function pauseMusic() {
    audioPlayer.pause();
    isPlaying = false;
    musicPlayButton.innerHTML = "▶️";
    musicPlayerDiv.classList.remove('playing');
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
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item h3");

  faqItems.forEach((item) => {
      item.addEventListener("click", function () {
          const parent = this.parentElement;
          parent.classList.toggle("active");
      });
  });
});
function updateBatteryUI(level) {
  const batteryInfo = document.getElementById("battery-info");
  const batteryBar = document.getElementById("battery-bar");


  batteryInfo.textContent = `Battery: ${level}%`;
  
  
  batteryBar.style.width = `${level}%`;


  if (level >= 80) {
    batteryBar.style.backgroundColor = "green"; 
  } else if (level >= 20) {
    batteryBar.style.backgroundColor = "orange"; 
  } else {
    batteryBar.style.backgroundColor = "red";    
  }
}

if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    function updateBatteryInfo() {
      const level = Math.floor(battery.level * 100);
      updateBatteryUI(level);
    }

    updateBatteryInfo();
    battery.addEventListener('levelchange', updateBatteryInfo);
    battery.addEventListener('chargingchange', updateBatteryInfo);
  });
} else {
  updateBatteryUI(100);
}
document.addEventListener("DOMContentLoaded", function() {
  const authButton = document.getElementById("auth-button");
  const signupLink = document.getElementById("signup-link");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    authButton.textContent = "Logout";
    authButton.href = "#";
    authButton.addEventListener("click", function() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username")
      window.location.href = "login.html"; 
    });
    signupLink.style.display = "none";
  }
});
window.onload = function() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.profilePic) {
    document.getElementById("userProfilePic").src = userData.profilePic;
    document.getElementById("userProfilePic").style.display = "block";
  }
};
ddocument.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();

          
          const enteredUsername = document.getElementById("username").value.trim();
          const enteredPassword = document.getElementById("password").value.trim();

          
          const storedUserData = JSON.parse(localStorage.getItem("userData"));

          if (!storedUserData) {
              alert("No user found. Please sign up first.");
              return;
          }

         
          const storedUsername = storedUserData.fullName.trim();
          const storedEmail = storedUserData.gmail.trim().toLowerCase(); 
          const storedPassword = storedUserData.password.trim();

          
          console.log("Entered Username:", enteredUsername);
          console.log("Stored Username:", storedUsername);
          console.log("Entered Password:", enteredPassword);
          console.log("Stored Password:", storedPassword);

         
          if ((enteredUsername === storedUsername || enteredUsername.toLowerCase() === storedEmail) 
              && enteredPassword === storedPassword) {
              alert("Login successful!");
              localStorage.setItem("isLoggedIn", "true");
              window.location.href = "main.html"; 
          } else {
              alert("Incorrect username or password!");
          }
      });
  }
});
function filterProducts() {
  const searchText = searchBar.value.toLowerCase();
  const genreValue = genreFilter.value;
  const mostBought = ["starlight knight", "family", "raiders of the hollow"]; 

  products.forEach(product => {
    const title = product.getAttribute("data-title").toLowerCase();
    const genre = product.getAttribute("data-genre");


    if (genreValue === "most_bought") {
      if (mostBought.includes(title)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    } else {
  
      if (title.includes(searchText) && (genreValue === "" || genre === genreValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}


function redirectToPayment() {
  window.location.href = "payment.html"; 
}
const promoCodes = {
  "JUSTIN": 0.30, 
  "JADE": 0.05, 
  "CEDRIC": 0.20  
};

function applyPromo() {
  const promoInput = document.getElementById("promo-code").value.toUpperCase();
  const promoMessage = document.getElementById("promo-message");
  const productPriceElements = document.querySelectorAll(".product-price");

  if (promoCodes[promoInput]) {
    const discount = promoCodes[promoInput];


    localStorage.setItem("promoDiscount", discount);

    productPriceElements.forEach(el => {
      if (!el.hasAttribute("data-original-price")) {
        el.setAttribute("data-original-price", el.textContent.replace("$", ""));
      }
      let originalPrice = parseFloat(el.getAttribute("data-original-price"));
      let discountedPrice = originalPrice - (originalPrice * discount);
      el.textContent = `$${discountedPrice.toFixed(2)}`;
    });

    promoMessage.textContent = `Promo Applied! You got ${(discount * 100)}% off on all products!`;
    promoMessage.style.color = "green";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.map(item => {

      if (!item.originalPrice) {
        item.originalPrice = item.price;
      }
 
      item.price = item.originalPrice - (item.originalPrice * discount);
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    promoMessage.textContent = "Invalid Promo Code!";
    promoMessage.style.color = "red";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".product-price").forEach(priceElement => {
      priceElement.setAttribute("data-original-price", priceElement.textContent.replace("$", ""));
  });
});
console.log(priceElement.getAttribute("data-original-price"));

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
     
      item.classList.toggle("active");
    });
  });
});
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "payment.html";
}







