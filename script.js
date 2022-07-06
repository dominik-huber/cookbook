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


// validate email after outlick
document.addEventListener('click', function(event) {
  var isClickInside = email.contains(event.target);

  if (!isClickInside) {
    //the click was outside the email, do something
    if (regexEmail.test(email.value)) {
      return;
    } else {
      alert ("invalid email");
      return;
    }

  }
});
