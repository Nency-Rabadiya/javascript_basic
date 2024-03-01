// //-------------------------------------------

try {
  console.log("This line will execute.");
  console.log(a); //error line
  console.log("This line will not execute.")
}
catch (error) {
  console.log("Error is :", error); //handles error line
}
finally {
  console.log("Finally block will always execute.");
}

// //---------------------------------------------

try {
  setTimeout(() => {
    console.log(error); //it will not handle by catch because of asynchronous task 
  }, 1000)
}
catch (error) {
  console.loh("Error:", error);
}

//To handle asyncronous task using try catch

try {
  setTimeout(() => {
    try {
      console.log(error);
    } catch (error) {
      console.log("Error is here:", error);
    }
  }, 1000)
}
catch (error) {
  console.log("Error:", error);
}

//why finally block used

function checkk() {
  let x = 5;
  let y = 5;
  try {
    console.log("sum is :", x + y);
    return true;
  }
  catch (error) {
    console.log("Error is :", error);
    return false;
  }
  console.log("This block still execute in function.") //will not exectute this because of function return.
}
const sum = checkk();
console.log(sum);
/* output
sum is : 10
true
*/

function check() {
  let x = 5;
  let y = 5;
  try {
    console.log("Mul is :", x * y);
    return true;
  }
  catch (error) {
    console.log("Error is :", error);
    return false;
  }
  finally {
    console.log("This block still execute in function.") //execute this line because of finally block used.
  }
}
const mul = check();
console.log(mul);

/* output
Mul is : 25
This block still execute in function.
true
*/
