// Objects are defined using curly braces at beginning and end
var city = {
  name: "Seattle", // property: name. Value: "Seattle"
  population: 20,
  sports: "bad",
  food: false,
  problems: ["plenty!"], // property: problems. Value: ["plenty!"] (array)
  12: "Seahawks!", // property: 12. Value: "Seahawks"
};

var otherCity = {
  name: "Milwaukee",
  population: null,
  sports: true,
  food: "fattening",
  problems: ["plenty!"],
  "date of visit": "10/20",
};

// Dot notation to access the value of an object's property
var milwaukeeProblems = otherCity.problems;
var seattlePop = city.population;

// Accesing object properties with Bracket Notation (required if a property has a spacce)
var visitMilwaukee = otherCity["date of visit"]; // "10/20"
var sportsNum = city[12]; // 12 can be stored in a variable

// Updating properties using object notation:
otherCity.name = "Pittsburgh";
console.log(otherCity.name); // "Pittsburgh"

// Add new properties to object:
city["economy"] = "tech";
otherCity["economy"] = "industry";
// Properties need to be a type

// Delete property from an object:
delete city.population;

// Conditionals using objects:
function foodType(val) {
  checker = {
    // global object
    1: "Pizza",
    2: "Burgers",
    3: "Burritos",
    4: "Sushi",
  };
  result = checker[val];
  return result;
}
console.log(foodType(5)); // undefined
console.log(foodType(4)); // "Sushi"

// Check if object has property:
function checkObj(checkProp) {
  if (checker.hasOwnProperty(checkProp)) {
    return checker[checkProp];
  } else {
    return "not found";
  }
}
/* Alternate strategy:
        return checker[checkProp] || "not found"
        (Will return "not found" is checker[checkProp] doesn't exist)
*/
console.log(checkObj(3)); // "Burritos"
console.log(checkObj(5)); // "Not found"

// creating an array of objects:
var mySongs = [
  {
    genre: "classical",
    mood: "upbeat",
    title: "String quartet in B minor",
    composer: "Beethoven",
  },
  {
    genre: "classical",
    mood: "melancholic",
    title: "Piano concerto in A Major",
    composer: "Mozart",
    "year released": 1735,
  },
];
// access "nested" arrays:
var mySong = mySongs[1].mood; // "melancholic"

// acccess "nested" objects
var myObjects = {
  cool: {
    jazz: {
      author: "Miles Davis",
    },
    cars: {
      company: "Ford",
    },
    ice: {
      location: "Antartica",
    },
  },
};
var myCoolIce = myObjects.cool.ice.location;
console.log(myCoolIce); // "Antartica"

// Object.freeze(object): PREVENTS an object from changing

// DESTRUCTING: Assigning each property of an object to a variable
var parametric = { t: 2, x: 3, y: 5 };
const { t: a, x: b, y: c } = parametric; // assigns values of properties from parametric object. (Get each field value and copy in the value)

/* you can pass in a destructor as a parameter
Example: If you are only using two properties in an object, you can simply
pass {property1, property2} which will act as direct values */

var createCity = (name, age, food) => {
  return {
    name: name,
    age: age,
    food: food,
  };
};

// Creates an object with properties assigned to passed in variable names.
console.log(createCity("New York", 300, "pizza")); // Prints out assigned property values

// same as
var createCity = (name, age, food) => ({ name, age, food });
// JS knows to return an object with three keyvalue pairs

// An object can contain a function:
const student = {
  stress: "plenty",
  classes: null,
  "work ethic": true,
  getSchedule(schedule) {
    this.classes = schedule;
  },
};
student.getSchedule("AP World");
console.log(student.classes); // AP World

// Instantiating object & setters/getters
function makeClass() {
  class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet; // creating a property
      // this: private variable
    }
    get target() {
      return this.targetPlanet;
    }
    // set and get must be the same name
    set target(updatedPlanet) {
      this.targetPlanet = updatedPlanet;
    }
  }
  return SpaceShuttle; // return the class
}
const SpaceShuttle = makeClass(); // assigns class to const
const zeus = new SpaceShuttle("Jupiter"); // creating object
console.log(zeus.targetPlanet); //  "Jupiter"
let temp = zeus.target; /// get/set act like properties
zeus.target = "Mars";
temp = zeus.target;
console.log(temp);  // "Mars"


/* IMPORTING: import { anythingInFile } from "file_name"
EXPORTING: export { function } 
export {variable = x} */

/* Import everything:
import * as (object) from "file_name";
*/

/* EXPORT DEFAULT: Fallback export often used if you only want to export one thing from a file: 
export default function(...) {...}; */

/* Import default export: 
import function from "file_name"
*/
