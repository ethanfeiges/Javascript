// This is how you print in JS
console.log("Hello world");

/* Multi
line
comment
end */

/* Data types (alongside java primitive types):
Symbol: Immutable primitive value that is unqiue 
Object: Can store a lot of key value pairs 
*/

// Declaring and assigning variables:
var myName = "Ethan";
/* var can be used through whole program
you can assign a var variable to any value: */
var myName = 2;
myName = 2.0;
// You can create two variables with the same name

/* Let can only be used in the scope which the variable is declared in
Let does not let you declare a variable twice in same scope */
let ourName = "Feiges";

function scopeCheck() {
  let i = "function scope";
  if (true) {
    let i = "block scope"; // this i can only be accessed inside block
    console.log("Block scope is " + i);
  }
  console.log("Function scope i is: ", i);
}

/* like a var, ourName can be changed to any value.
you can check the value of variables at given points using console.log */
ourName = 3.009;
ourName = true;
console.log(ourName); // true
ourName = myName;
console.log(ourName); // 2

const PI = 3.14; /* class constant
const can never be changed (READ ONLY) */

// String concatination (mirrors Java)
var Str = "Hi";
Str += " World";
console.log(Str); // "Hi World"

// String length: string.length
Str_length = Str.length; // 8

// Find certain character of a String using bracket notation:
Str[0]; // 'H'
Str[Str.length - 1]; // 'd'

// Template literal:
const person = {
  name: "Ethan",
  age: 16,
};
const greeting = `Hello, my name is ${person.name}! 
and I am ${person.age} years old `;
/* Template literals allow you to make multi-line Strings
without escape characters */
console.log(greeting);

// Operations: +-*/% (Same as java)
var number = 2;
number += 5;
number++;
number--;
console.log(number); // 7
var product = 2.0 * 2.5; // 5.0
product %= 2; // 1

// Escape characters (mirrors Java)
/*
\n newline
\t tab
\r carriage return
\f form feed
*/
var myStr = 'hello, " Ethan "';
myStr = 'hello, "Ethan"';
