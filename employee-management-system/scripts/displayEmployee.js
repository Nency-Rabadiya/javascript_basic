export function redirectLogIn() {
  window.location.href = "../logIn.html";
}

export function addEmployee() {
  var userInputWindow = window.open("", "_blank", "width=500 , height=300");
  userInputWindow.document.write(`
        <link rel="stylesheet" href="./styles/addEmployee.css">
        <div id="main-container">
         <p>Enter details</p>
         <form id="add-employee">
            <input type="text" id="name"  placeholder="Enter username">
            <input type="text" id="email"  placeholder="Enter email">
            <button type="submit">Submit</button>
          </form>
        </div>
      `);
  userInputWindow.document.getElementById("add-employee").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = userInputWindow.document.getElementById("name").value;
    const email = userInputWindow.document.getElementById("email").value;

    const userdataTable = document.getElementById("displaydata");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td><button onclick="deleteRow(this)">Delete</button><button onclick="editRow(this)">Edit</button></td>
        `;

    const formData = {
      username: userInputWindow.document.getElementById("name").value,
      email: userInputWindow.document.getElementById("email").value
    };

    fetch("http://localhost:8000/addemployee", {
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
        alert(data.message);
        userdataTable.appendChild(row);
        console.log("success");
        console.log(data);
      })
      .catch((error) => {
        // Handle errors during the fetch request
        console.error("Fetch error:", error);
      });
    userInputWindow.close();
  });
}

export function deleteRow(button) {

  const row = button.parentNode.parentNode;
  const username = row.cells[0].textContent;
  console.log(username);
  const email = row.cells[1].textContent;
  console.log(email);
  const formData = { username, email };

  fetch("http://localhost:8000/delete", {
    method: "DELETE",
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
      row.parentNode.removeChild(row);
      console.log("success");
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

export function editRow(button) {
  const row = button.closest("tr");
  const username = row.cells[0].textContent;
  const email = row.cells[1].textContent;

  var editInputWindow = window.open("", "_blank", "width=500 , height=300");
  editInputWindow.document.write(`
          <link rel="stylesheet" href="./styles/addEmployee.css">
          <div id="main-container">
            <p>Edit details</p>
            <form id="edit-employee">
              <input type="text" id="edit-name" value="${username}">
              <input type="text" id="edit-email" value="${email}">
              <button type="submit">Submit</button>
            </form>
          </div>
`);
  editInputWindow.document.getElementById("edit-employee").addEventListener("submit", function (event) {
    event.preventDefault();
    const editedName = editInputWindow.document.getElementById("edit-name").value;
    const editedEmail = editInputWindow.document.getElementById("edit-email").value;

    const formData = {
      username: editedName,
      email: editedEmail
    };

    fetch("http://localhost:8000/edit", {
      method: "PUT",
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
        alert(data.message);
        row.cells[0].textContent = editedName;
        row.cells[1].textContent = editedEmail;
        console.log("success");
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    editInputWindow.close();
  });
}