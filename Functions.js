// Global variable:
var expression = "!";

// Creating a function:
// You do not need to typecast parameters
function aFunctionName(userName) {
  console.log("Use me, " + userName + expression);
  expression = "?";
  globalVar = 7;
}
aFunctionName("Ethan"); // "Use me, Ethan!"

function doingCalculation(a, b) {
  console.log(a - b);
  var localVar = 5; // declaring a var in the function gives the variable a scope of just the function
  globalVar = 6; // Global variable automatically
}
doingCalculation("Hi", "Bye"); // NaN
doingCalculation(10, 5); // 5

/* Global and Local variables can have the same name
local variables take precedence over the global variable */
var shoeSize = 2;
function myShoes() {
  var shoeSize = 5;
  return shoeSize; // 5
}
console.log(shoeSize); // 2

// if no return type is specified, a function returns "undefined" by default
function blank() {
  var point = 2;
}
console.log(blank); // [Function: blank]

// Using Math class:
function mathEx(aMin, aMax) {
  console.log(Math.random()); // random decimal from 0 inclusive to 1 exclusive
  console.log(Math.floor(Math.random * 20)); // random integer from 0 to 19 (rounds down)
  console.log(Math.floor(Math.random() * (aMax - aMin + 1) + aMin)); // gets number from min to max inclusive
}

// Using parseInt
function convertToInteger(str) {
  console.log(parseInt(str));
  console.log(parseInt(str, 2)); // 2 indicates a base of two (so the computer knows it's binary)
}

// Anonymous function:
var invisible = function () {
  return 3;
};

// Same as:
var invisible = () => 3;

// Pasing arguments to an "arrow" function
var myAddition = (a, b) => a + b; // returns a + b
// arrow functions can be used when passing in a function into another function

// You can use default parameters to create more flexible functions
const increment = (function () {
  return function increment(number, value = 1) {
    // value is 1 by default
    return number + value;
  };
})();
console.log(increment(5, 4)); // 9
console.log(increment(10)); // 11

// using rest operator
const sum = (function () {
  return function sum(...args) {
    // converts all arguments into one array
    return args.reduce((a, b) => a + b, 0); // takes sum of all arguments
  };
})();
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 2)); // 7

// Using the spread operator (expands existing array into its individual parts)
function createCopy(arr1, arr2){
    arr1 = [...arr2]; // creating a copy of arr2 (eliminating reference semantics)
    arr1[0] = 3;
    return arr1;
}
console.log(createCopy([2], [5, 4, 3])); // 3, 4, 3


function removeFirstTwo(list){
    const[, , ...arr] = list; // do nothing for the first element, do nothing for the second element, then put everything else in the arr variable
    return arr;
}
console.log(removeFirstTwo([1, 2, 3])); // 3
