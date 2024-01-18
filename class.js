class myAge{
  constructor(name , year){
    this.name = name;
    this.year = year;
  }
  age(){
    let date = new Date();
    return date.getFullYear()-this.year;
  }
}
let myAGE = new myAge("nency",2003);
console.log(`This person's age is ${myAGE.age()}`);

export default class1;