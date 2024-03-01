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
    console.log("Password must contain 8 character.");
    return;
  }
  const formData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch("http://localhost:8000/login", {
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
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

