/* Registration validation */

document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value.trim();   /*BREAKDOWN: document.getElementById("") finds the input element, while .value reads what the users types in the field, and .trim removes any excess spaces. All these are stores in <var>*/
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phonenumber").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPassword = document.getElementById("confirmpassword").value.trim();
  var country = document.getElementById("country").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');  /* "document.querySelector" similar to getElementById but more flexible, can find elements by any CSS-style selector*/ /*input[name="gender"]:checked — finds a radio button with name="gender" that is currently checked"*/

  var errors = [];    /* creates an empty array, adds error messages to it's "list" when they occure and we can then check this list*/
  if (username === "") {    /*using === to make sure the field is completely empty, (=== means "exactly equal to")*/
    errors.push("Username is required");  /*errors.push adds each message as a seperate item in an array instead of ErrMsg which builds one large string by concentrating messages together*/
  }
  else if (username.length < 5) {    /* .length counts the characters and it then makes sure there are more than 5 */
    errors.push("Username must be at least 5 characters.");
  }
  else if (!/^[a-zA-Z0-9_]+$/.test(username)) {            /*small line to make sure that special characters arn't used in usernames*/
      errors.push("Username can only contain letters, numbers, and underscores.");
  }
  if (email === "") {    
    errors.push("Email is required");  
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {            /*changed regex to the standard email one i found online*/
      errors.push("Invalid Email.");
  }
  if (phone === "") {   
    errors.push("Phone Number is required"); 
  }
  else if (phone.length < 8 || phone.length > 15) {  
    errors.push("Phone Number must be at least 8 - 15 units.");
  }
  else if (!/^\d+$/.test(phone)) {            /*same as before but only checks for numbers*/
      errors.push("Phone Number Invalid.");
  }
  if (password === "") {
    errors.push("Password is Required.");
  }
  else if (password.length < 10) {
    errors.push("Password mush be atleast 10 characters.");
  }
  else if (!/[A-Z]/.test(password)) {       /*same as before but only checks for uppercase letters*/
    errors.push("Password must contain atleast one uppercase letter");
  }
  else if (!/[a-z]/.test(password)) {      /*same as before but only checks for lowercase letters*/
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
  else if (confirmPassword !== password) {  /* !== means not equal to*/
    errors.push("Passwords do not match");
  }
  if (country === "") {
    errors.push("Country/Region is required");
  }
  if (gender === null) {
    errors.push("please select a gender.");
  }
  if (errors.length > 0) {   /*checks for errors in the array that we made above*/
    var errorBox = document.getElementById("error-box");    /*finds the <div> we added in the html to display errors*/
    errorBox.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";  /*sets the HTML content inside the error box*/ /*joins all the array items together into one string, putting </li><li> between each one to make a bullet list*/
    errorBox.style.display = "block";   /* makes the error box visible */
  }
  else {
    document.getElementById("register-form").submit();   /* if no errors found -> submits the form */
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
  } else if (cardNumber.length !== 16 && cardNumber.length !== 15) {  /* this uses && (AND) which means both conditions have to be true. only triggers if the card is neither 15 or 16 digits.*/
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
document.getElementById("restaurant").addEventListener("change", function() {  /*"change" event fires when the dropdown selection changes*/
  var deposits = {   /*deposits is an object, "kinda like a collection of key-value pairs"(still not really sure what it means but we need it). Each restaurant value maps to its deposit amount*/
    "landro": 20,
    "3kingdoms": 30,
    "hosiak": 100,
    "kuishinbō": 80,
    "quesoycarne": 20,
    "tondoo": 20
  };
  var selected = this.value;  /*this.value — refers to the current element's value (the selected restaurant)*/
  var amount = deposits[selected] || "";   /* looks up the deposit for the selected restaurant, also || "" — if nothing is found, default to empty string*/
  document.getElementById("deposit").value = amount ? "$" + amount : ""; 
});
  
/* Show/hide voucher or card field based on payment method */
document.getElementById("deposit-method").addEventListener("change", function() {
  var method = this.value;
  document.getElementById("voucher-section").style.display = method === "voucher" ? "block" : "none";  /*method === "voucher" ? "block" : "none" this is a ternary operator, a shorthand if/else. It means "if method is voucher, use block, otherwise use none"*/
  document.getElementById("card-section").style.display = method === "online" ? "block" : "none";   /*style.display = "none" hides an element, "block" shows it*/
});
