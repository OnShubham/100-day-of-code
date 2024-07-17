// block scope in let

{
  let num = 10;

  //   console.log(num);
}

//  Global Scope

// function hello() {
//     let hey = 122;
//     console.log(hey);

// }

let num = 12; // gloobal scope

console.log(num); // print

fun();

function fun() {
  let call = 13;
  console.log(call);

  console.log(num); // call global acces
}

// Calling the function

// Function Scope

function fun1() {
  let num1 = 1111;
  console.log(num1);
}

fun1(); //  Calling the function

// console.log(num1); //ReferenceError: num1 is not defined

// Redeclaring Variables in different blocks

let x = 77; // global scope

{
  let x = 23; // bloack scope
  console.log(x);
}

console.log(x);

//
let y = "rohit"; // global

{
  let z = "shubham";
  console.log(y);
}

console.log(this.z);

// Redeclaring Variables in the same blocks

let a = 11;

console.log(a);
{
  let b = 12;
}
