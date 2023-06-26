// Non_primitive 
//arrays

var num = [1, 2, 3];
num[0] = 3;
console.log(num);

var x = [5,7,9];
var y = [5,4,2];

console.log(x[0] == y[0]); // non_primitive cannot be compared but can be compared with index of array 

// compared with objects using .

var userOne = {
  name: 'roopin',
  age: 12,
  gender: 'Male',
}

var userTwo = {
  name: 'pritish',
  age: 12,
  gender: 'male',
}
console.log(userOne.age == userTwo.age);

//-----------

const cars = ["audi", "bmw", "mercides"];
const car = cars[0];
console.log(car);

//---------

var persons = {
  firstName: "roopin",
  lastName: "vipparthi",
  age: 18, gender: "male",
}

var x = persons;
console.log(x.age = 14);

// functions

// multiplication

var x = myFunction(4, 3);

function myFunction(a, b) {

  return a * b;
}

console.log(x);


// division 

var y = myFunction(8, 4);
function myFunction(x, z) {
  
  return x / z;
}
console.log(y);

// sum

var num = myFunction(5, 3);
function myFunction(x, w) {
   return x + w;
}

console.log(num);

// percentage


function percentage(num, per) {
  return (num/100)*per;
}
console.log(percentage(1000, 47.21));

// substraction
var x = myFunction(4, 3);

function myFunction(a, b) {

  return a - b;
}
console.log(x);

// functions expression

let colors = function() {
  console.log("green, red, blue");
};

colors();

// function declaration

function callAdd(x, y) {
	let z = x + y;
	return z;
}
console.log(callAdd(7, 4));

// example 
function add(a, b) {
  console.log(a + b);
}

add(4, 5);
add(6, 7);

// function expression 

let calSub = function (x, y) {
	let z = x - y;
	return z;
}

console.log("Subtraction : " + calSub(7, 4));

// example

// find the square of a number
// function is declared inside the variable
var x = function(num) { 
  return num * num 
};
console.log(x(4));

// can be used as variable value for other variables
var y = x(3);
console.log(y);

