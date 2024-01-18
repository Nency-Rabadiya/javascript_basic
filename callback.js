//pass function as as argument(callback)
function someInfo(x, y, callback) {
  console.log(`sum of ${x} and ${y} is ${x + y}.`);
  callback();
}
function anotherInfo() {
  console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

someInfo(5, 50, anotherInfo);

//example2
/*
function getInfo(callback) {
  let name = prompt("Enter your name").toUpperCase();
  let surname = prompt("Enter your surname").toUpperCase();
  callback(name, surname)
}

function userInfo(name, surname) {
  alert(`your full name is ${name} ${surname}.`)
}

getInfo(userInfo);
*/

//try,catch,promises,async await example
function fetchUserInfo(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userSdata = {
        id: userId,
        name: "Nency",
        surname: 'Rabadiya'
      };

      const isSuccess = Math.random() < 0.8;

      if (isSuccess) {
        resolve(userSdata);
      }
      else {
        reject("Failed to fetch user data");
      }
    }, 1000);
  })

}

async function getUserInfo(userId) {
  try {
    console.log("User data is fetching......");
    const userData = await fetchUserInfo(userId);

    console.log("User data successfully fetched:", userData);


    const username = userData.name;

    console.log("Displaying user profile for:", username);

  }
  catch (error) {
    console.error(error);
  }

}
getUserInfo(1234)