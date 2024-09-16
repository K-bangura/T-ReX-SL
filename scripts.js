// Open Product Details Modal
function openProductDetails(productName) {
    document.getElementById('product-title').textContent = productName;
    document.getElementById('product-details-modal').style.display = 'block';
}

// Close Product Details Modal
function closeProductDetails() {
    document.getElementById('product-details-modal').style.display = 'none';
}

// Change Product Image in Modal
function changeProductImage(src) {
    document.getElementById('main-product-image').src = src;
}

// Open Payment Options Modal
function openPaymentOptions() {
    document.getElementById('payment-modal').style.display = 'block';
}

// Close Payment Options Modal
function closePaymentOptions() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Handle Payment Option Click
function paymentUnderDevelopment(paymentMethod) {
    alert(paymentMethod + ' payment is currently under development.');
}




// Open Hotel Details Modal
function openHotelDetails(hotelName) {
    document.getElementById('hotel-title').textContent = hotelName;
    document.getElementById('hotel-details-modal').style.display = 'block';
}

// Close Hotel Details Modal
function closeHotelDetails() {
    document.getElementById('hotel-details-modal').style.display = 'none';
}

// Change Hotel Image in Modal
function changeHotelImage(src) {
    document.getElementById('main-hotel-image').src = src;
}

// Open Booking Options Modal
function openBookingOptions() {
    document.getElementById('booking-modal').style.display = 'block';
}

// Close Booking Options Modal
function closeBookingOptions() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Handle Payment Option Click
function paymentUnderDevelopment(paymentMethod) {
    alert(`${paymentMethod} is under development.`);
    closeBookingOptions();
}



// Open Tour Details Modal
function openTourDetails(tourName) {
    document.getElementById('tour-title').textContent = tourName;
    document.getElementById('tour-details-modal').style.display = 'block';
}

// Close Tour Details Modal
function closeTourDetails() {
    document.getElementById('tour-details-modal').style.display = 'none';
}

// Change Tour Image in Modal
function changeTourImage(src) {
    document.getElementById('main-tour-image').src = src;
}

// Open Booking Options Modal
function openBookingOptions() {
    document.getElementById('booking-modal').style.display = 'block';
}

// Close Booking Options Modal
function closeBookingOptions() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Handle Payment Option Click
function paymentUnderDevelopment(paymentMethod) {
    alert(`${paymentMethod} is under development.`);
    closeBookingOptions();
}





// Open Painting Details Modal
function openPaintingDetails(paintingTitle) {
    document.getElementById('painting-title').textContent = paintingTitle;
    document.getElementById('painting-details-modal').style.display = 'block';
}

// Close Painting Details Modal
function closePaintingDetails() {
    document.getElementById('painting-details-modal').style.display = 'none';
}

// Change Painting Image in Modal
function changePaintingImage(src) {
    document.getElementById('main-painting-image').src = src;
}

// Open Payment Options Modal
function openPaymentOptions() {
    document.getElementById('payment-modal').style.display = 'block';
}

// Close Payment Options Modal
function closePaymentOptions() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Handle Payment Option Click
function paymentUnderDevelopment(paymentMethod) {
    alert(`${paymentMethod} is under development.`);
    closePaymentOptions();
}
// Open Connect with Artist Modal
function openConnectArtist() {
    document.getElementById('connect-artist-modal').style.display = 'block';
}

// Close Connect with Artist Modal
function closeConnectArtist() {
    document.getElementById('connect-artist-modal').style.display = 'none';
}

// Handle Connect with Artist Form Submission
document.getElementById('connect-artist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    
    // Process the form data (e.g., send it to a server)
    alert(`Request sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Close the modal after submission
    closeConnectArtist();
});






// scripts.js

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form submission logic here (e.g., send data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});

