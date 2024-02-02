/*
function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}
const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);
const consumer = () => {
  promise.then(
    (result) => {
      console.log({ result }); // Log the result of 50 Pokemons
    },
    (error) => {
      // As the URL is a valid one, this will not be called.
      console.log('We have encountered an Error!'); // Log an error
    });
}
consumer();
*/


/*
let promise = new Promise(function (resolve, reject) {
  // resolve("I am surely going to get resolved!");

  reject(new Error('Will this be ignored?')); // ignored
  resolve("Ignored?"); // ignored
  console.log(promise)
});
const consumer = () => {
  promise.then(
    (result) => {
      console.log(".....", result);
    },
    (error) => {
      console.log(error);
    }
  );
}
consumer();
*/


/*
function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';


let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.any([promise_1, promise_2, promise_3]).then(result => {
  console.log(JSON.parse(result));
}).catch(error => {
  console.log('An Error Occured');
});

//any , any , allSettled , race , resolve , reject.
*/


/*
async function runProcess() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

runProcess();
*/