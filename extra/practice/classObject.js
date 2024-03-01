class Person {
  constructor() {
    this.name = "xyz";
    this.surname = "abc";
  }

  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }
}

class Student extends Person {
  study() {
    console.log("Study");
  }
}

class Engineer extends Person {
  constructor(branch) {
    super();
    this.branch = branch;
  }
  work() {
    console.log("Solving Problems")
  }
}

let personn = new Person();
let nency = new Student();
let engineerStu = new Engineer("Comp Engineering");

personn.eat();  //Eat
nency.sleep();  //Sleep
console.log(engineerStu); //Engineer { name: 'xyz', surname: 'abc', branch: 'Comp Engineering' }