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
