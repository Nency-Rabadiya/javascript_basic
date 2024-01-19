//-------------------JSON parsing(string to object)-----------------------//
let user = '{"name" : "Nency" , "surname" : "Rabadiya" , "age" : 20,"education" : "forth year engineering"}';

let parsing = JSON.parse(user); 
console.log(parsing);

//--------------------JSON stringify(object to string)-------------------//
let user2 = {name : "Nency" , surname : "Rabadiya" , age : 20, education : "forth year engineering"};

let string = JSON.stringify(user2); 
console.log(string);
