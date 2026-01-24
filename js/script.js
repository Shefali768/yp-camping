// Simple welcome message (can be removed later)
console.log("Welcome to YP Camping Website");
function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var bookingType = document.getElementById("bookingType").value;
  var message = document.getElementById("message").value;

  var businessNumber = "918928112823"; // ← PUT YOUR NUMBER HERE (NO +)

  var text =
    "Hello YP Camping,%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Booking Type: " + bookingType + "%0A" +
    "Message: " + message;

  var url = "https://wa.me/" + businessNumber + "?text=" + text;

  window.open(url, "_blank");
}


// Future use: form validation, payments, animations
