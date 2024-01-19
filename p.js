/*const student = {
  name:'Nency',
  surname:'Rabadiya'
};

student.name = "nancy";

console.log(student);
*/

function toCelsius(f) {
  return (5/9) * (f-32);
}
let x = toCelsius(77);
let text = console.log(`The temperature is ${x} Celsius`);


let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT))}`;
console.log(total);


