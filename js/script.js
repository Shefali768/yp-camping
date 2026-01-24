// Simple welcome message (can be removed later)
console.log("Welcome to YP Camping Website");
function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const bookingType = document.getElementById("bookingType").value;
  const message = document.getElementById("message").value;

  const businessNumber = "918928112823"; // ← REPLACE with your WhatsApp number

  const text =
    `Hello YP Camping,%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Booking Type: ${bookingType}%0A` +
    `Message: ${message}`;

  const whatsappURL = `https://wa.me/${businessNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
}


// Future use: form validation, payments, animations
