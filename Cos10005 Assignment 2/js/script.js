/* Registration validation */

var registerForm = document.getElementById("register-form");  /*finds the HTML element with id="register-form" and stores it*/
if (registerForm) {  /*only continues if registerForm is not null (i.e. the element actually exists on this page)*/
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value.trim(); /*BREAKDOWN: document.getElementById("") finds the input element, while .value reads what the users types in the field, and .trim removes any excess spaces. All these are stores in <var>*/
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phonenumber").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmpassword").value.trim();
    var country = document.getElementById("country").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked'); /* "document.querySelector" similar to getElementById but more flexible, can find elements by any CSS-style selector*/ /*input[name="gender"]:checked — finds a radio button with name="gender" that is currently checked"*/

    var errors = [];  /* creates an empty array, adds error messages to it's "list" when they occure and we can then check this list*/
    if (username === "") {   /*using === to make sure the field is completely empty, (=== means "exactly equal to")*/
      errors.push("Username is required"); /*errors.push adds each message as a seperate item in an array instead of ErrMsg which builds one large string by concentrating messages together*/
    }
    else if (username.length < 5) {   /* .length counts the characters and it then makes sure there are more than 5 */
      errors.push("Username must be at least 5 characters.");
    }
    else if (!/^[a-zA-Z0-9_]+$/.test(username)) {   /*small line to make sure that special characters arn't used in usernames*/
      errors.push("Username can only contain letters, numbers, and underscores.");
    }
    if (email === "") {
      errors.push("Email is required");
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {      /*changed regex to the standard email one i found online*/
      errors.push("Invalid Email.");
    }
    if (phone === "") {
      errors.push("Phone Number is required");
    }
    else if (phone.length < 8 || phone.length > 15) {    /*same as before but only checks for numbers*/
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
    else if (!/[A-Z]/.test(password)) {    /*same as before but only checks for uppercase letters*/
      errors.push("Password must contain atleast one uppercase letter");
    }
    else if (!/[a-z]/.test(password)) {    /*same as before but only checks for lowercase letters*/
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
    else if (confirmPassword !== password) {    /* !== means not equal to*/
      errors.push("Passwords do not match");
    }
    if (country === "") {
      errors.push("Country/Region is required");
    }
    if (gender === null) {
      errors.push("please select a gender.");
    }
    if (errors.length > 0) {     /*checks for errors in the array that we made above*/
      var errorBox = document.getElementById("error-box");    /*finds the <div> we added in the html to display errors*/
      errorBox.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";    /*sets the HTML content inside the error box*/ /*joins all the array items together into one string, putting </li><li> between each one to make a bullet list*/
      errorBox.style.display = "block";    /* makes the error box visible */
    }
    else {
      document.getElementById("register-form").submit();    /* if no errors found -> submits the form */
    }
  });
}
/* Reservation validation */
var reservationForm = document.getElementById("reservation-form");
if (reservationForm) {
  reservationForm.addEventListener("submit", function(event) {
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
      var today = new Date();  /* creates an object representing right now */
      today.setHours(0, 0, 0, 0);  /*resets the time to midnight so we only compare dates not times*/
      var selectedDate = new Date(date);  /*converts the date string from the input into a comparable Date object*/
      if (selectedDate < today) {
        errors.push("Reservation date cannot be in the past.");
      }
    }
    if (time === "") {
      errors.push("Please select a time.");
    }
    if (people === "" || parseInt(people) < 1) { /*converts the string value to a whole number for comparison*/
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
      } else if (cardNumber.length !== 16 && cardNumber.length !== 15) {   /* this uses && (AND) which means both conditions have to be true. only triggers if the card is neither 15 or 16 digits.*/
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
}
/* Dynamic deposit update */
var restaurantSelect = document.getElementById("restaurant");
if (restaurantSelect) {
  restaurantSelect.addEventListener("change", function() {  /*"change" event fires when the dropdown selection changes*/
    var deposits = {   /*deposits is an object, "kinda like a collection of key-value pairs"(still not really sure what it means but we need it). Each restaurant value maps to its deposit amount*/
      "landro": 20,
      "3kingdoms": 30,
      "hosiak": 100,
      "kuishinbō": 80,
      "quesoycarne": 20,
      "tondoo": 20
    };
    var selected = this.value;  /*this.value — refers to the current element's value (the selected restaurant)*/
    var amount = deposits[selected] || "";  /* looks up the deposit for the selected restaurant, also || "" — if nothing is found, default to empty string*/
    document.getElementById("deposit").value = amount ? "$" + amount : "";
  });
}
/* Show/hide voucher or card field based on payment method */
var depositMethod = document.getElementById("deposit-method");
if (depositMethod) {
  depositMethod.addEventListener("change", function() {
    var method = this.value;
    document.getElementById("voucher-section").style.display = method === "voucher" ? "block" : "none";  /*method === "voucher" ? "block" : "none" this is a ternary operator, a shorthand if/else. It means "if method is voucher, use block, otherwise use none"*/
    document.getElementById("card-section").style.display = method === "online" ? "block" : "none";  /*style.display = "none" hides an element, "block" shows it*/
  });
}
/* Same as email checkbox */
var sameEmail = document.getElementById("same-email");
if (sameEmail) {
  sameEmail.addEventListener("change", function() {  /*similar to last time "change" event fires when the checkbox is ticked or unticked*/
    if (this.checked) {  /*this.checked — returns true if the checkbox is currently checked, false if not. It also copies the value from the email field into the billing email field if check and if not it clears the billing email field*/
      document.getElementById("billing-email").value = document.getElementById("email").value;
    } else {
      document.getElementById("billing-email").value = "";
    }
  });
}
/* Recommendation logic */
var recommendForm = document.getElementById("recommend-form");
if (recommendForm) {
  recommendForm.addEventListener("submit", function(event) {
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
}
/* Pre-fill restaurant from URL parameter */
window.addEventListener("load", function() {
  var restaurantDropdown = document.getElementById("restaurant");
  if (restaurantDropdown) {
    var params = new URLSearchParams(window.location.search);
    var restaurant = params.get("restaurant");
    if (restaurant) {
      restaurantDropdown.value = restaurant;
      restaurantDropdown.dispatchEvent(new Event("change"));
    }
  }
});
