const login = document.getElementById("login_form");

const email = "rutuja.k@sankeysolutions.com";
password = "Today@4321";

const validate = function(e) {
  e.preventDefault();
  const mailId = this.email.value;
  passwordDefault = this.password.value;

  if (mailId == email && passwordDefault == password) {
    document.location.href = "welcome.html"
  }
  else {
    const emailError = document.getElementById("emailError");
    passwordError = document.getElementById("passwordError");

    if (mailId != email && passwordDefault != password) {
      emailError.innerText = "Enter a valid Email";
      passwordError.innerText = "Enter valid password";
    }
    else if (mailId != email) {
      emailError.innerText = "Enter a valid Email";
      passwordError.innerText = " ";
    }
    else if (passwordDefault != password) {
      passwordError.innerText = "Enter valid password";
      emailError.innerText = " ";
    }
  }
  
}

login.addEventListener("submit", validate);