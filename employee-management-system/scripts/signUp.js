function signUp() {
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const rePassword = document.getElementById("re-password").value;
  const username = document.getElementById("username").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z0-9]+$/;

  if (!email) {
    alert("Please enter email");
    return;
  }
  if (!username) {
    alert("Please enter username");
    return;
  }
  if (!password) {
    alert("Please enter your password");
    return;
  }
  if (!rePassword) {
    alert("Please re-enter your password");
    return;
  }
  if (password !== rePassword) {
    alert("Password does not match");
    return;
  }
  if (password.length < 8) {
    alert("Password must contain 8 character.");
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return;
  }

  if (!nameRegex.test(username)) {
    alert("Invalid username. Please use only letters and numbers.");
    return;
  }

  const formData = {
    username: username,
    email: email,
    password: password,
  };

  fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the successful response
      alert(data.message);
      window.location.href = "../displayEmployee.html";
      console.log("success");
      console.log(data);

    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

