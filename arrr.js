/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = 'lemon';

fruits.push("kiwi")
console.log(fruits);
const update= fruits.toString().slice(7,13);

console.log(update);
*/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(3,1);

console.log(fruits);
*/

/*
const myArr = [[1,2],[3,4],[5,6],[7,8],[9,10]];
const newArr = myArr.flat();

console.log(newArr);
*/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
*/


/*
const numbers = [6,7,3,9,53,19,87];

const newNumber = numbers.find(function (ele){
 return ele > 53;
});

console.log(newNumber);
*/


//---------------SORTING-ascending


/*
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
  return a-b
});
console.log(points);
*/


//-----------------SORTING-decending------------------//

/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
  return b-a
});
console.log(points);
*/

//------------------ MIN-MAX value


/*
let point = [40, 100, 1, 5, 25, 10];
let minValue = Math.min(...point);
let maxValue = Math.max(...point);
console.log(minValue);
console.log(maxValue);
*/

//------------------OBJECT sorting---------------------//

/*
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

let newUpdate = cars.sort(function (a, b) {
  return a.year - b.year
});

console.log(newUpdate);
*/