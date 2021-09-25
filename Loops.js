// While loops work very similarly to how they work in Java
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i % 4);
  i++;
}
console.log(myArray); // [0, 1, 2, 3, 0]

// for loop: (Work just like in java)
otherArr = [];
for (var i = 0; i < 5; i++) {
  otherArr.push(i);
}
console.log(otherArr); // [0, 1, 2, 3, 4]

// do while loop
var nums = [];
var j = 0;
do {
  j++;
  nums.push(j);
} while (j < 5);
console.log(nums); // [1, 2, 3, 4, 5]



