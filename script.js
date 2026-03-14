function submitForm() {
  var fullname = document.getElementById("fullname").value.trim();
  var email    = document.getElementById("email").value.trim();
  var country  = document.getElementById("country").value.trim();
  var comments = document.getElementById("comments").value.trim();

  if (fullname === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  alert("Thank you, " + fullname + "! Your message has been submitted successfully.");

  document.getElementById("fullname").value  = "";
  document.getElementById("email").value     = "";
  document.getElementById("country").value   = "";
  document.getElementById("comments").value  = "";
}
