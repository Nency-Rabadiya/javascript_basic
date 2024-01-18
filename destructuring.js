//array destructuring---------------------


//example1
const array =['nency','lipsa','vidhi','isha'];

[first,second]=array;
console.log(second);
console.log(first);


//example2
const array2 =['yellow','pink',11,7,'greeen','black','red'];

[fName,sName,,foName,...rest]=array2;

console.log(foName);
console.log(...rest);

//object destructuring---------------------

//example1

const obj={
  name : "Nency",
  surname : 'Rabadiya'
}

//example2

const {name : value1 , surname : value2} = obj;
console.log(value1);

const obj2={
  name : "Nency",
  person2 : {
    name : "lipsa",
    person3 : {
      name : "isha"
    }
  }
}

let {name : name1,person2 : {name : name2,person3 : {name : name3}}}=obj2;

console.log(name1);
console.log(name2);
console.log(name3);