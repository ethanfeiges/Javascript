// This program displays examples created to demonstrate the factory, proxy, observer, and mediator design patterns implemented in Javascript 


/* Factory pattern: Returns an object using a predefined template
Predefined template: The force function will return the same object template no matter how many times it is called. 
Force function will provide functions to calculate work and acceleration given a force as an input. 
*/


// mass in kg, angle in degrees, distance in meters
function force(mass, angle, mu, distance) {
  return {
    mass: mass,
    angle: angle,
    mu: mu,
    distance: distance,
    getWork(force) {
      if (!Number.isInteger(force)) {
        console.log("Force is not an integer");
        return;
      }
      console.log("Work: " + force * distance + "N");
    },
    getAcceleration(force) {
      if (!Number.isInteger(force)) {
        console.log("Force is not an integer");
        return;
      }
      console.log(
        "Friction force " +
          Math.round(mass * 9.8 * mu * Math.cos(angle) * 1000) / 1000 +
          "N"
      );
      console.log(
        "Gravitational force " +
          Math.round(9.8 * mass * Math.sin(angle) * 1000) / 1000 +
          "N"
      );
      console.log(
        "Acceleration: " +
          Math.round(
            ((9.8 * mass * Math.sin(angle) +
              force -
              mass * 9.8 * mu * Math.cos(angle)) /
              mass) *
              1000
          ) /
            1000 +
          "N"
      );
    },
  };
}
const push = force(5, 20, 0.001, 5);
push.getAcceleration(20);
push.angle = 5; // change attribute
push.getWork(20);

console.log();
// Proxy pattern: Protects access to an object by acting as a placeholder that intercepts and redefines operations.
const target = {
  a: 2,
  b: 3,
};
// Handler protects access to the target object 
const handler = {
  get: function (target, prop) {
    // get trap: modifies property access to field value
    return prop === "a" ? 42 : target[prop];
  },
};
const p = new Proxy(target, handler);
// PROPERTIES:
console.log("Getting object attributes from proxy: ");
console.log(p.a); // 42 (Proxy intercept)
console.log(p.b); // 3

console.log();
/* Observer pattern: Determines how objects communicate 
Each person object determines each other's relationship status: 
Ex. Person A dates/breaks up with person B, thus changing person B's relationship 
status. */
class Person {
  constructor(name) {
    // person object
    this.partner = null;
    this.name = name;
  }
  addPartner(newpartner) {
    // Both the new partner and partner assumably break up in their existing relationships
    newpartner.removePartner();
    this.removePartner();

    // Assigning new partners
    this.partner = newpartner;
    // newpartner has their partner attribute changed: (Also in relationship)
    newpartner.partner = this;
  }

  getPartner() {
    if (this.partner == null) {
      return "No partner";
    }
    return this.partner.name;
  }
  removePartner() {
    if (this.partner == null) {
      return;
    }
    this.partner.partner = null;
    this.partner = null;
  }
}
const Jeff = new Person("Jeff");
const Sarah = new Person("Sarah");
console.log(Jeff.getPartner()); // "No partner"
Jeff.addPartner(Sarah);
console.log(Sarah.getPartner()); // "Jeff"

const Amy = new Person("Amy");
Amy.addPartner(Jeff); // For Amy to date Jeff, Jeff would need to breakup with Sarah. 
console.log(Jeff.getPartner()); // Amy
console.log(Amy.getPartner()); // Jeff
console.log(Sarah.getPartner()); // "No Partner"

Jeff.removePartner(); // Jeff breaks up with Amy
console.log(Amy.getPartner()); // "No partner"
console.log(Jeff.getPartner()); // "No partner"

console.log();
/* Mediator pattern: Acts as a center of communication between classes or components
Two classes: Tutors and students.
Once a student is added to the queue of students, a tutor will be assigned to that student once they are available through a mediator class.
*/

class Tutor {
  /* Fields:
  subject: the subject(s) which the tutor can instruct
  (KEY-VALUE OBJECT of subjects and knowledge in them)
  1: Least knowledgeable, 10: Most knowledgeable

  name: the tutor's name
  availability: the tutor's current availability 
  
  */
  constructor(name, subjects) {
    this.name = name;
    this.subject = subjects;
    this.availability = true;
  }
}

class Student {
  /*Fields:
  name: Student's name
  subject: (Singular) topic requested as string
  tutor: The allocated tutor to the student once assigned one through the tutorAssistance class
  */
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.tutor = null;
  }

  // invokes the assignTutor method from the tutorAssistance mediator class
  requestTutor(tutorAssistance) {
    // calls the mediator class's assignTutor function
    tutorAssistance.assignTutor(this);
  }

  // Observer pattern: Tutor object's attributes depend on the Student object
  // Clears student's current tutor after clearing their availability. 
  completeSession(){
    this.tutor.availability = true;
    this.tutor = null;
  }
}

class tutorAssistance {
  constructor(){
    // arrays keeps track of tutors
    this.tutors = [];
  }

  // add tutor from the Tutor class
  addTutor(tutor) {
    this.tutors.push(tutor);
  }

  assignTutor(student) {
    let maxKnowledge = 0;
    let tutorAssigned = null;
    
    // Automatically ends previous tutoring session (if in one)
    if(student.tutor != null){
      student.completeSession();
    }


    // If no tutors have been registerred in the app
    if (this.tutors.length === 0) {
      console.log("No tutors registerred");
      return;
    }
    this.tutors.forEach((tutor) => {
      if (tutor.availability == false) {
        return; // go to next loop iteration
      }
      // if tutor does not instruct what the student is requesting.
      if (!tutor.subject.hasOwnProperty(student.subject)) {
        return;
      }
      // Request available tutor with the most amount of knowledge. 
      if (tutor.subject[student.subject] > maxKnowledge) {
        tutorAssigned = tutor;
        maxKnowledge = tutor.subject[student.subject];
      }
    });
    // If found a tutor
    if (tutorAssigned != null) {
      tutorAssigned.availability = false;
      console.log(
        "You, " + student.name + ", have been assigned to " + tutorAssigned.name + " for help on " + student.subject
      );
      student.tutor = tutorAssigned;
    }
    // If no tutor is available that can instruct the requested subject. 
    else{
      console.log("No tutor could be found for your subject at this time");
    }
  }
}
const Ethan = new Student("Ethan", "Math");
const Jamie = new Student("Jamie", "English");
const Amelia = new Student("Amelia", "Physics")
const Timmy = new Tutor("Timmy", { Math: 7, English: 10, Physics: 7 });
const Bill = new Tutor("Bill", {Math: 5, English: 6, Chemistry: 8});
const tutorApp = new tutorAssistance();
tutorApp.addTutor(Timmy);
tutorApp.addTutor(Bill);
Ethan.requestTutor(tutorApp); // Ethan is assigned to Timmy
Jamie.requestTutor(tutorApp); // Jamie is assigned to Bill
Ethan.completeSession() // Timmy is now available
Amelia.requestTutor(tutorApp);  // Timmy




