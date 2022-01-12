const submit = document.querySelector(".btn");

const formEmail = document.querySelector(".form-email");
const formZip = document.querySelector(".form-zip");
const formCountry = document.querySelector(".form-country");
const formPass = document.querySelector(".form-password");
const formCon = document.querySelector(".form-confirm");

const email = document.querySelector("#email");
const zip = document.querySelector("#zip-code");
const country = document.querySelector("#country");
const pass = document.querySelector("#password");
const conPass = document.querySelector("#confirm-pass");

let validPassword = "";

submit.addEventListener("click", (e) => {
  e.preventDefault();

  emailCheck();
  zipCheck();
  countryCheck();
  passwordCheck();
  conPassCheck();
});

function emailCheck() {
  if (email.value === "") {
    addError(formEmail, "Please enter your email");
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    addError(formEmail, "Please enter a valid email");
  } else {
    success(email);
  }
}

function zipCheck() {
  if (zip.value === "") {
    addError(formZip, "Please enter your ZipCode");
  } else {
    success(zip);
  }
}

function countryCheck() {
  if (country.value === "") {
    addError(formCountry, "Please enter your Country");
  } else {
    success(country);
  }
}

function passwordCheck() {
  if (pass.value === "") {
    addError(formPass, "Please enter a password");
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass.value)) {
    addError(
      formPass,
      "Minimum eight characters, at least one letter and one number"
    );
  } else {
    success(pass);
    validPassword = pass.value;
  }
}

function conPassCheck() {
  if (conPass.value === "") {
    addError(formCon, "Please confirm password");
  } else if (conPass.value !== validPassword) {
    addError(formCon, "Does not match above password");
  } else {
    success(conPass);
  }
}

function addError(element, msg) {
  const errorMsg = element.querySelector("p");
  errorMsg.textContent = msg;
}

function success(element) {
  const parent = element.parentElement;
  const errorMsg = parent.querySelector("p");
  errorMsg.textContent = "";

  element.style.borderColor = "#35aa2b";
  element.style.borderWidth = "3px";
}
