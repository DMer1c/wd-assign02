document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value.trim();   /*BREAKDOWN: document.getElementById("") finds the input element, while .value reads what the users types in the field, and .trim removes any excess spaces. All these are stores in <var>*/
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phonenumber").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPassword = document.getElementById("confirmpassword").value.trim();
  var country = document.getElementById("country").value.trim();

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
  if (email === "") {    /*using === to make sure the field is completely empty, (=== means "exactly equal to")*/
    errors.push("Email is required");  /*errors.push adds each message as a seperate item in an array instead of ErrMsg which builds one large string by concentrating messages together*/
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {            /*small line to make sure that special characters arn't used in usernames*/
      errors.push("Invalid Email.");
}
  

});
