const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const countryInput = document.getElementById("country-input");
const countryError = document.getElementById("country-error");

const postalCodeInput = document.getElementById("postal-code-input");
const postalCodeError = document.getElementById("postal-code-error");

const passwordInput = document.getElementById("password-input");
const passwordConfirmationInput = document.getElementById(
  "password-confirmation-input"
);
const passwordConfirmationError = document.getElementById(
  "password-confirmation-error"
);

const isValidEmail = () => {
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const validity =
    emailInput.value.length !== 0 && emailRegExp.test(emailInput.value);

  emailInput.className = validity ? "valid" : "invalid";

  if (validity) {
    emailError.textContent = "";
    emailError.classList.remove("active");
  } else {
    emailError.textContent = "Invalid email.";
    emailError.classList.add("active");
  }

  return validity;
};

// function to validate country
const isValidCountry = () => {
  const countryRegExp = new RegExp("[a-zA-Z]{2,}");
  const validity =
    countryInput.value.length !== 0 && countryRegExp.test(countryInput.value);

  countryInput.className = validity ? "valid" : "invalid";

  if (validity) {
    countryError.textContent = "";
    countryError.classList.remove("active");
  } else {
    countryError.textContent = "Invalid Country.";
    countryError.classList.add("active");
  }

  return validity;
};

// function to validate postal code
const isValidPostalCode = () => {
  const postalCodeRegExp =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  const validity =
    postalCodeInput.value.length !== 0 &&
    postalCodeRegExp.test(postalCodeInput.value);

  postalCodeInput.className = validity ? "valid" : "invalid";

  if (validity) {
    postalCodeError.textContent = "";
    postalCodeError.classList.remove("active");
  } else {
    postalCodeError.textContent = "Invalid Postal Code.";
    postalCodeError.classList.add("active");
  }

  return validity;
};

// function to validate password
const isValidPassword = () => {
  const validity =
    passwordInput.value.length !== 0 &&
    passwordConfirmationInput.value.length !== 0 &&
    passwordConfirmationInput.value !== 0 &&
    passwordInput.value === passwordConfirmationInput.value;
  passwordConfirmationInput.className = validity ? "valid" : "invalid";

  if (validity) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.classList.remove("active");
  } else {
    passwordConfirmationError.textContent = "Passwords don't match.";
    passwordConfirmationError.classList.add("active");
  }

  return validity;
};

window.addEventListener("load", () => {
  isValidEmail();
  isValidCountry();
  isValidPostalCode();
  isValidPassword();
});
// This defines what happens when the user types in the field
emailInput.addEventListener("input", () => {
  isValidEmail();
  isValidPostalCode();
});

countryInput.addEventListener("input", () => {
  isValidCountry();
});

postalCodeInput.addEventListener("input", () => {
  isValidPostalCode();
});

passwordInput.addEventListener("input", () => {
  isValidPassword();
});

passwordConfirmationInput.addEventListener("input", () => {
  isValidPassword();
});

form.addEventListener("submit", () => {
  event.preventDefault();
  if (isValidEmail() && isValidCountry() && isValidPostalCode() && isValidPassword()) { 
    alert("high five");
  } else { 
    alert("Error: Invalid fields");
  }
});
