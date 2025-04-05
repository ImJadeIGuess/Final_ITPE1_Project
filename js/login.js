document.addEventListener("DOMContentLoaded", function() {
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  if (storedUser) {
    if(storedUser.fullName) {
      document.getElementById("username").value = storedUser.fullName;
    }
    if(storedUser.profilePic) {
      const pfp = document.getElementById("loginProfilePic");
      pfp.src = storedUser.profilePic;
      pfp.style.display = "block";
    }
  }
});

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  if (storedUser) {
    if(username === storedUser.fullName && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      window.location.href = "main.html"; 
    } else {
      alert("Incorrect username or password!");
    }
  } else {
    alert("No account found. Please sign up.");
  }
});
