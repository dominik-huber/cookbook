const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

// validate email during focus
email.addEventListener("input", function () {
  regexEmail.test(email.value) && submitBtn.classList.add("moveMe");
});

// validate email after submit
submitBtn.addEventListener('click', event => {
  if (!regexEmail.test(email.value) || !email.value) {
    alert("invalid email");
  } else alert("thank you for submitting!");
});
