// import {firstname} from "./utils/fname.js";
// import {age} from "./utils/age.js";

import {firstname as fname} from "./utils/fname.js";
import {age} from "./utils/age.js";
import Person from "./utils/Person.js";         // If we use export default then there is no need of {} brakets or you can replace Person another name (for ex: import p from "./utils/Person.js")

// import Person, {Person2} from "./utils/Person.js";

console.log(fname, age);

const person = new Person("Deepak","Dhakad", 22);
person.info();
console.log(person);
const person2 = new Person2("John","Doe", 23);
person2.info();
console.log(person2);




// There are two types of import export:
//   1) Named import export
//   2) default import export