function uploadProfilePic() {
  document.getElementById('profilePic').click();
}

document.getElementById('profilePic').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById('previewImg');
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const gmail = document.getElementById("gmail").value;
  const password = document.getElementById("signupPassword").value;
  
  const profilePicInput = document.getElementById("profilePic");
  if (profilePicInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const profilePicURL = event.target.result;
      const userData = { fullName, gmail, password, profilePic: profilePicURL };
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "main.html"; 
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  } else {
    const userData = { fullName, gmail, password, profilePic: "" };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "main.html"; 
  }
});
