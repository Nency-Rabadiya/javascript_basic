function validation() {
  const nameRegex = /^[a-zA-Z0-9]+$/;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!nameRegex.test(username)) {
    console.log("Invalid username. Please use only letters and numbers.");
    return;
  }

  if (!password) {
    console.log("Password is required.");
    return;
  }

  if (password.length < 8) {
    console.log("Password must contain 8 character.")
  }
  window.location.href = "successPage.html";
}

