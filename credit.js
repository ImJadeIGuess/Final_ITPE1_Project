document.addEventListener("DOMContentLoaded", function() {
    const creditForm = document.getElementById("credit-form");
    const calendar = document.getElementById("calendar");
    const yearLabel = document.getElementById("year-label");
    const expiryDateInput = document.getElementById("expiry-date");
    
    // Initialize with current year
    let selectedYear = new Date().getFullYear();
  
    // Display calendar when clicking on expiry input
    window.toggleCalendar = function() {
      calendar.style.display = calendar.style.display === "block" ? "none" : "block";
      updateCalendar();
    };
  
    function updateCalendar() {
      yearLabel.textContent = selectedYear;
    }
  
    window.prevYear = function() {
      selectedYear--;
      updateCalendar();
    };
  
    window.nextYear = function() {
      selectedYear++;
      updateCalendar();
    };
  
    window.selectMonth = function(month) {
      const formattedMonth = month < 10 ? "0" + month : month;
      expiryDateInput.value = `${formattedMonth}/${String(selectedYear).slice(-2)}`;
      calendar.style.display = "none";
    };
  
    creditForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const cardNumber = document.getElementById("card-number").value.trim();
      const expiryDate = document.getElementById("expiry-date").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
  
      // Validation patterns
      const cardNumberPattern = /^[0-9]{16}$/;
      const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const cvvPattern = /^[0-9]{3}$/;
  
      if (!cardNumberPattern.test(cardNumber)) {
        alert("Card number must be 16 digits.");
        return;
      }
  
      if (!expiryDatePattern.test(expiryDate)) {
        alert("Expiry date must be in MM/YY format.");
        return;
      }
  
      if (!cvvPattern.test(cvv)) {
        alert("CVV must be 3 digits.");
        return;
      }
  
      alert("Your payment has been proceed!");
      window.location.href = "main.html";
    });
  });
  
  function goBack() {
    window.location.href = "payment.html";
  }
  