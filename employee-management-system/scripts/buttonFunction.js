import { redirectLogIn , addEmployee, deleteRow , editRow } from './scripts/displayEmployee.js';

const addButton = document.getElementById("add-employee");
addButton.addEventListener('click', addEmployee);
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener('click', redirectLogIn);
