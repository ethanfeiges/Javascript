function likesPizza(isItTrue) {
  if (isItTrue) {
    return "You like pizza";
  }
  return "You are weird";
}
console.log(likesPizza("no")); // "You like pizza"
console.log(likesPizza(false)); // "You are weird"

// Using the equality operator:
function likesSoda(response) {
  if (response == "yes") {
    return "Your teeth will rot!";
  }
  return "Stick to water!";
}
console.log(likesSoda("yes")); // "Your teeth will rot!"
console.log(likesSoda("no")); // "Stick to water!"

/* Using the strict equality operator:
while the equality operator tries to convert
both values to a common type, the strict
equality operator does not */
/*
3 == '3' -> true
3 === '3' -> false
9 != '9' -> false
9 !== '9' -> true
*/

// Other comparison operators (> < >= <=) work just like in Java

//Nested if statement:
function numValueCheck(num) {
  if (num >= 50) {
    if (num < 75) {
      return "Your number is from 50-74";
    }
    return "Your number is >= 75";
  }
  return "Your number is < 50";
}

// Use && and ||
function betterNumCheck(val) {
  if (num >= 50 && num <= 75) {
    return "Your number is in between 50-75";
  } else if (num < 50 || num > 25) {
    return "Your number is either greater than 25 or less than 50";
  } else {
    return "Your number doesn't meet previous conditions";
  }
}

// We can use the switch and case keywords in conditions
function caseInSwitch(val) {
  switch (val) {
    case 1: // if val === 1
      return "alpha";
    case 2: // if val === 2
      return "beta";
    case 3: // if val === 3
      return "charlie";
    case "high": // if val === 'high'
      return "roads";
    default:
      return "lame";
  }
}
console.log(caseInSwitch(1)); // 'alpha'
console.log(caseInSwitch("a")); // 'lame'
console.log(caseInSwitch("high")); // 'roads'

// Terniary operator
function checkEquality(x, y) {
  return x > y ? "x is > y" : "y is >= x";
  // if condition, return (...)  Else return (...)
}

function nestedCondition(a, b) {
    return a === b ? true: a > 0 ? "positive" : "negative";
    // Functions exactly like a nested condition
}
