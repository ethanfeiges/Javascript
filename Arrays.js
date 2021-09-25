// Arrays:
var ourArray = ["John", 23];
// Elements can be any data type

// Multidimensional Arrays:
var myArray = [["yes", 1, true], ["no", -1, false], "x"];

// Searching for indexes:
ourArray[1]; // 23
myArray[0][2]; // true

// Changing arrays:
ourArray[0] = "Bill";
console.log(ourArray);
["Bill", 23];

// You can change a constant array
const s = [1, 2, 3, 4];
s[0] = 5;
console.log(s[0]); // 5

// You can append data using the push function
myArray.push[["Yippe", [1, 2.0, 3], false]];
console.log(JSON.stringify(myArray));
// [["yes", 1, true], ['no', -1, false], 'x', ["Yippe", [1, 2.0, 3], false]]

// You can take the last element off an array using the 'pop' function
var exArr = [1, 2, 3];
exArr.pop();
// exArr: [1, 2]

// The shift function removes the first element of an array
exArr.shift();
// exArr: [2]

// The unshift adds an element to the beginning of an array
exArr.unshift(4.5);
// exArr: [4.5, 2]

notWon = true;
var i = 1;
while (notWon) {
  var responses = [];
  for (var i = 1; i <= 2; i++) {
    responses.push(window.prompt("User " + i + ", pick Rock/Paper/Scissors: "));
    var choice = window.prompt(
      "And would you like to show a fake response? y/n "
    );
    console.log(
      "User " + i + " might have selected: " + interpretResult(choice)
    );
  }
  var result = compareResults(responses[0], responses[1]);
  switch (result) {
    case -1:
      console.log("Player 2 wins!");
      notWon = false;
    case 1:
      console.log("Player 1 wins!");
      notWon = false;
    case 0:
      console.log("It is a tie!");
  }
}
