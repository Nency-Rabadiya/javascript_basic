import class1 from './class.js';

let text = "Visit W3Schools Visit";
let pattern = /w3schools/i;
//1
let result = text.match(pattern);
console.log(result);
//2
let result2 = /Visit/.exec(text);
console.log(result2);
//3
let pattern3 =/[o]/g;
let result3 = text.match(pattern3);
console.log(result3);