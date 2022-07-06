// Validate email
const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

// validate email during focus
email.addEventListener('input', function()
{
  if (regexEmail.test(email.value)) {
    submitBtn.classList.add("moveMe");
    return;
  } else {
    submitBtn.classList.remove("moveMe");
    return;
  }
});

// validate email onblur
email.onblur = function() {
  if (regexEmail.test(email.value)) {
    return;
  } else if (email.value =="") {
    return;
  } else {
    alert ("invalid email");
  }
}
