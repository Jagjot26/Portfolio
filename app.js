// function checkRefresh() {
//   if (document.refreshForm.visited.value == "") {
//     // This is a fresh page load
//     document.refreshForm.visited.value = "1";

//     // You may want to add code here special for
//     // fresh page loads
//   } else {
//     // This is a page refresh

//     // Insert code here representing what to do on
//     // a refresh
//     window.location = window.location.pathname;
//   }
// }

// checkRefresh();

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode; //this gets the input-container div
  parent.classList.add("focus"); //this adds 'focus' class to that div when the input gains focus
} //called when input element gains focus

function blurFunc() {
  let parent = this.parentNode;

  //this.value checks if the input value is "". If it's not "" it remains in focus EVEN when we click outside
  if (this.value === "") {
    parent.classList.remove("focus");
  }
} //called when input element loses focus

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//nav bar click event listener

const links = document.querySelectorAll(".navigation__link");

function clickFunc() {
  document.getElementById("navi-toggle").checked = false;
}

links.forEach((link) => {
  link.addEventListener("click", clickFunc);
});

//form validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  keepInputInFocus();
});

function keepInputInFocus() {
  const inputs = document.getElementsByClassName("input");
  for (var i = 0; i < inputs.length; i++) {
    // console.log(inputs[i].parentNode.classList);
    if (inputs[i].value !== "") {
      inputs[i].parentNode.classList.add("focus");
    }
  }
}

function checkInputs() {
  //trim to remove whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();
  let err = 0;

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
    err--;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    err--;
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Mobile number cannot be blank");
  } else {
    setSuccessFor(phone);
    err--;
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccessFor(message);
    err--;
  }

  //   if (err === -4) {
  //     window.open("mailto:jaysing989@gmail.com?subject=subject&body=messageValue");
  //   }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");
  inputContainer.className = "input-container error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
