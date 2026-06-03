/* Registration validation */

document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value.trim();   
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phonenumber").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPassword = document.getElementById("confirmpassword").value.trim();
  var country = document.getElementById("country").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');  

  var errors = [];    
  if (username === "") {    
    errors.push("Username is required");  
  }
  else if (username.length < 5) {    
    errors.push("Username must be at least 5 characters.");
  }
  else if (!/^[a-zA-Z0-9_]+$/.test(username)) {         
      errors.push("Username can only contain letters, numbers, and underscores.");
  }
  if (email === "") {    
    errors.push("Email is required");  
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {           
      errors.push("Invalid Email.");
  }
  if (phone === "") {   
    errors.push("Phone Number is required"); 
  }
  else if (phone.length < 8 || phone.length > 15) {  
    errors.push("Phone Number must be at least 8 - 15 units.");
  }
  else if (!/^\d+$/.test(phone)) {            
      errors.push("Phone Number Invalid.");
  }
  if (password === "") {
    errors.push("Password is Required.");
  }
  else if (password.length < 10) {
    errors.push("Password mush be atleast 10 characters.");
  }
  else if (!/[A-Z]/.test(password)) {      
    errors.push("Password must contain atleast one uppercase letter");
  }
  else if (!/[a-z]/.test(password)) {      
    errors.push("Password must contain atleast one lowercase letter");
  }
  else if (!/[0-9]/.test(password)) {   
    errors.push("Password must contain atleast one number");
  }
  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain atleast one special character");
  }
  if (confirmPassword === "") {
    errors.push("Please confirm your password");
  }
  else if (confirmPassword !== password) {  
    errors.push("Passwords do not match");
  }
  if (country === "") {
    errors.push("Country/Region is required");
  }
  if (gender === null) {
    errors.push("please select a gender.");
  }
  if (errors.length > 0) {   
    var errorBox = document.getElementById("error-box");    
    errorBox.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";  
    errorBox.style.display = "block";   
  }
  else {
    document.getElementById("register-form").submit();   
  }
});

/* Reservation validation */
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var fullname = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phonenumber").value.trim();
  var restaurant = document.getElementById("restaurant").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var people = document.getElementById("people").value;
  var paymentMethod = document.getElementById("deposit-method").value;
  var voucherCode = document.getElementById("voucher-code").value.trim();
  var cardNumber = document.getElementById("card-number").value.trim();
   
  var errors = [];   
  if (fullname === "") {    
    errors.push("Fullname is required");  
  }
  if (email === "") {    
    errors.push("Email is required");  
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {            
    errors.push("Invalid Email.");
  }
  if (phone === "") {   
    errors.push("Phone Number is required"); 
  }
  else if (phone.length < 10 || phone.length > 15) {  
    errors.push("Phone Number must be at least 8 - 15 units.");
  }
  else if (!/^\d+$/.test(phone)) {            
      errors.push("Phone Number Invalid.");
  }
  if (restaurant === "") {
  errors.push("Please select a restaurant.");
  }
  if (date === "") {
    errors.push("Please select a date.");
  } else {
    var today = new Date();  
    today.setHours(0, 0, 0, 0);  
    var selectedDate = new Date(date);  
    if (selectedDate < today) {
      errors.push("Reservation date cannot be in the past.");
    }
  }
  if (time === "") {
    errors.push("Please select a time.");
  }
  if (people === "" || parseInt(people) < 1) { 
    errors.push("Number of people must be at least 1.");
  }
  if (paymentMethod === "") {
    errors.push("Please select a payment method.");
  }
  if (paymentMethod === "voucher") {
  if (voucherCode === "") {
    errors.push("Please enter your voucher code.");
  }
}
if (paymentMethod === "online") {
  if (cardNumber === "") {
    errors.push("Please enter your credit card number.");
  } else if (!/^\d+$/.test(cardNumber)) {
    errors.push("Credit card number must contain digits only.");
  } else if (cardNumber.length !== 16 && cardNumber.length !== 15) { 
    errors.push("Credit card must be 15 digits (Amex) or 16 digits (Visa/Mastercard).");
  }
}
if (errors.length > 0) {
  var errorBox = document.getElementById("reservation-error-box");
  errorBox.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
  errorBox.style.display = "block";
} else {
  document.getElementById("reservation-form").submit();
}
});

/* Dynamic deposit update */
document.getElementById("restaurant").addEventListener("change", function() {  
  var deposits = {   
    "landro": 20,
    "3kingdoms": 30,
    "hosiak": 100,
    "kuishinbō": 80,
    "quesoycarne": 20,
    "tondoo": 20
  };
  var selected = this.value; 
  var amount = deposits[selected] || "";   
  document.getElementById("deposit").value = amount ? "$" + amount : ""; 
});
  
/* Show/hide voucher or card field based on payment method */
document.getElementById("deposit-method").addEventListener("change", function() {
  var method = this.value;
  document.getElementById("voucher-section").style.display = method === "voucher" ? "block" : "none";
  document.getElementById("card-section").style.display = method === "online" ? "block" : "none";  
});


/* Same as email checkbox */
document.getElementById("same-email").addEventListener("change", function() {   
  if (this.checked) {  
    document.getElementById("billing-email").value = document.getElementById("email").value;
  } else {
    document.getElementById("billing-email").value = "";
  }
});

/* Recommendation logic */
document.getElementById("recommend-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var dietary = document.getElementById("dietary-preference").value;
  var budget = document.getElementById("budget-range").value;
  var purpose = document.getElementById("dining-purpose").value;

  var recommendation = "";

  if (dietary === "Halal" && budget === "high") {
    recommendation = "Ho Siak";
  } 
  else if (dietary === "Halal") {
    recommendation = "Tond-oo";
  } 
  else if (dietary === "Vegan") {
    recommendation = "Tond-oo";
  }
  else if (dietary === "Vegetarian") {
    recommendation = "Tond-oo";
  } 
  else if (budget === "high" && (purpose === "date" || purpose === "business")) {
    recommendation = "Kuishinbō";
  } 
  else if (budget === "high") {
    recommendation = "Ho Siak";
  } 
  else if (purpose === "date") {
    recommendation = "Kuishinbō";
  } 
  else if (budget === "low" && purpose === "family") {
    recommendation = "Queso y Carne";
  } 
  else if (purpose === "family" && budget === "medium") {
    recommendation = "3 Kingdoms";
  } 
  else {
    recommendation = "Landro";
  }

  document.getElementById("recommendation-results").innerHTML = 
    "<h2>We recommend: " + recommendation + "!</h2>" +
    "<p><a href='reservation.html?restaurant=" + recommendation.toLowerCase() + "'>Book a table at " + recommendation + "</a></p>";
});

/* Pre-fill restaurant from URL parameter */
window.addEventListener("load", function() { 
  var params = new URLSearchParams(window.location.search);
  var restaurant = params.get("restaurant");  
  if (restaurant) {
    document.getElementById("restaurant").value = restaurant;
    document.getElementById("restaurant").dispatchEvent(new Event("change"));  
  }
});
