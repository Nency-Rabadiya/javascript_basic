//Arrow function
let x = () => {
  console.log(3);
}
x();

let y = z => {
  console.log(z);
}
y(4);

let mul = (x, y) => {
  console.log(x * y);
}
mul(4, 5);

function person() {
  this.name = 'Nency';
  this.surname = 'Rabadiya';
  this.myName = function () {
    console.log(this.surname); //Rabadiya
    let fullname = () => {
      console.log(this.surname); //Rabadiya
    }
    fullname();
  }

}
const value = new person();
value.myName();

//Default value as parameter

function sum(x = 6, y = x) {
  console.log(x + y);
}
sum(1, 2); //3
sum(3); //6
sum(); //12

//Template Literals

const msg = `this is my message
which can be written in 
multiLine.`
console.log(msg);

const name1 = 'nency';
console.log(`Here name is ${name1}`);

//Spread operator 

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];

arr1.push(6);
console.log(arr1); // [ 1, 2, 3, 4, 6 ]
console.log(arr2); // [ 1, 2, 3, 4 ]

//Rest Parameter

let func = function (...args) {
  console.log(args);
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Map , Set , Get

const map1 = new Map();
map1.set('info', { name: 'nency', surname: 'Rabadiya', age: 20 })
console.log(map1);
console.log(map1.get('info'));
console.log(map1);

//weakMap 

const weak = new WeakMap();
obj = {};
weak.set(obj, 'nency');
console.log(weak.get(obj));  //nency

//Destructuring

const arr3 = [1, 2, 3, 4, 5];
[one, two, three, ...rest] = arr3;
console.log(one); //1
console.log(two); //2
console.log(rest); //[4,5]

const info = {
  name: 'nency',
  age: 20,
  fullName: {
    getName: 'Nency Rabadiya'
  }
}
const { name: name2, age: age1, fullName: { getName: name3 } } = info;
console.log(name2);  //nency
console.log(name3);  //Nency Rabadiya

var obj = { a: 1 }
var list = [1]
var { a, b = 2 } = obj
var [n, o = 2] = list
console.log(a, n, b, o);  //1 1 2 2

// Proxyyyy

const user = {
  firstName: 'Nency',
  lastName: 'Rabadiya',
  age: 20
}

const handler = {
  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number') {
        console.log('Age must be a number.');
      }
      if (value < 18) {
        console.log('The user must be 18 or older.')
      }
    }
    target[property] = value;
  }
};

const proxyUser = new Proxy(user, handler);
proxyUser.age = 16; //The user must be 18 or older.
proxyUser.age = '16'; //Age must be a number,The user must be 18 or older.

//Set 
let s = new Set()
s.add("hello")
s.add("goodbye");
s.add("hello");
console.log(s);
for (let key of s.values()) {
  console.log(key);   // insertion order
}
