const messageForm = document.querySelector("#messageForm");
const submitBtn = document.querySelector(".submitBtn");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phoneNum = document.querySelector("#phoneNum");
const phoneNumError = document.querySelector("#phoneNumError");
const refer = document.querySelector("#refer");
const referError = document.querySelector("#referError");
const events = document.querySelector("#events");
const eventError = document.querySelector("#eventError");
const guest = document.querySelector("#guest");
const guestError = document.querySelector("#guestError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");

const validateFirstname = () => {
  const fNameValue = firstName.value;
  firstNameError.innerText = "";

  if (!fNameValue) {
    firstNameError.innerText = "*First name must be filled out";
  }
};

const validateLastname = () => {
  const lNameValue = lastName.value;
  lastNameError.innerText = "";

  if (!lNameValue) {
    lastNameError.innerText = "*Last name must be filled out";
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();
  emailError.innerText = "";

  if (!emailValue) {
    emailError.innerText = "*Email must be filled out";
  } else {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(emailValue)) {
      emailError.innerText = "*Please enter a valid email";
    } else {
      regEx.test(emailValue);
      emailError.innerText = "";
    }
  }
};

const validatePhoneNumber = () => {
  const phoneValue = phoneNum.value;
  phoneNumError.innerText = "";

  if (!phoneValue) {
    phoneNumError.innerText = "*Phone number must be filled out";
  } else {
    const regEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!regEx.test(phoneValue)) {
      phoneNumError.innerText = "*Please enter a valid phone number";
    } else {
      regEx.test(phoneValue);
      phoneNumError.innerText = "";
    }
  }
};

const validateRefer = () => {
  const referValue = refer.value;
  referError.innerText = "";
  if (referValue == "Please select") {
    referError.innerText = "*Please select how did you found out about us";
  }
};

const validateEvent = () => {
  const eventValue = events.value;
  eventError.innerText = "";
  if (eventValue == "Please select") {
    eventError.innerText = "*Please select type of event";
  }
};

const validateGuest = () => {
  const guestValue = guest.value;
  guestError.innerText = "";
  if (guestValue == "Please select") {
    guestError.innerText = "*Please select an estimation of guest number";
  }
};

const validateDate = () => {
  const dateValue = date.value;
  let ToDate = new Date();
  dateError.innerText = "";

  if (new Date(dateValue).getTime() <= ToDate.getTime()) {
    dateError.innerText = "*Please select a valid date";
  }
  if (date.value===""){
    dateError.innerText = "*Please select a date";
  }
};

messageForm.addEventListener("input", (e) => {
  const targetField = e.target.id;

  switch (targetField) {
    case "firstName":
      validateFirstname();
      break;
    case "lastName":
      validateLastname();
      break;
    case "email":
      validateEmail();
      break;
    case "phoneNum":
      validatePhoneNumber();
      break;
    case "refer":
      validateRefer();
      break;
    case "events":
      validateEvent();
      break;
    case "guest":
      validateGuest();
      break;
    case "date":
      validateDate();
      break;
  }
});

submitBtn.addEventListener("click", () => {
  if (firstName.value === "") {
    validateFirstname();
  }
  if (lastName.value === "") {
    validateLastname();
  }
  if (email.value === "") {
    validateEmail();
  }
  if (phoneNum.value === "") {
    validatePhoneNumber();
  }
  if (refer.value === "Please select") {
    validateRefer();
  }
  if (events.value === "Please select") {
    validateEvent();
  }
  if (guest.value === "Please select") {
    validateGuest();
  }
  if (date.value == "") {
    validateDate();
  }
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
