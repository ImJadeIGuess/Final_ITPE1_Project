document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const promoDiscount = parseFloat(localStorage.getItem("promoDiscount") || "0");
  const cartList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  let totalPrice = 0;
  cartList.innerHTML = "";


  cartItems = cartItems.map(item => {

      let originalPrice = item.originalPrice || item.price;
      if (promoDiscount > 0) {
          item.price = originalPrice - (originalPrice * promoDiscount);
      }
      return item;
  });


  cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartList.appendChild(li);
      totalPrice += item.price;
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
});


function processPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    
    if (selectedPayment === "card") {
        
        window.location.href = "information.html";
    } else if (selectedPayment === "gcash") {
      
        window.location.href = "https://www.gcash.com"; 
    } else if (selectedPayment === "paypal") {
       
        window.location.href = "https://www.paypal.com";
    } else if (selectedPayment === "paymaya") {
        
        window.location.href = "https://www.paymaya.com";
    }
    
    localStorage.removeItem("cart");
}
function processPayment() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
  if (selectedPayment === "card") {
    window.location.href = "credit.html";
  } else if (selectedPayment === "gcash") {
    window.location.href = "https://www.gcash.com";
  } else if (selectedPayment === "paypal") {
    window.location.href = "https://www.paypal.com";
  } else if (selectedPayment === "paymaya") {
    window.location.href = "https://www.paymaya.com";
  }
  localStorage.removeItem("cart");
}

  

function cancelPayment() {
    localStorage.removeItem("cart"); 
    window.location.href = "main.html"; 
}
document.getElementById("back-to-products").addEventListener("click", function () {
  window.location.href = "main.html"; 
});

  