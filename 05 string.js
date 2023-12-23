let firstName = "Deepak";

// D e e p a k
// 0 1 2 3 4 5 (Index)

console.log(firstName); // Deepak

// lenght of string 
let len = firstName.length; 
console.log(len);

// last character of string
console.log(firstName[firstName.length - 1]);


// String Methods
// pre-defined methods for string in javaScript.

// trim()
// toUpperCase()
// toLowerCase()
// slice()

// trim(); :- This method will remove all space from starting and from the end of the string.

// toUpperCase(); :- This method will convert all charcters of string in Uppercase.

// toLowerCase(); :- This method will convert all charcter  of string in LowerCase.

// slice(); :- This method is used to get a part or some charcters from the string.
// slice(startIndex): It will go from startIndex to last index
// slice(startIndex, EndIndex) : It will go form startIndex to EndIndex-1 (EndIndex is exclusive)

let name = "   Deepak    ";
console.log(name.length);
console.log(name.trim()); // Deepak

name = "Deepak";
console.log(name.toUpperCase()); // DEEPAK

console.log(name.toLowerCase()); // deepak

console.log(name.slice(0, 4)); // Deep
console.log(name.slice(2, 6)); // epak
console.log(name.slice(2, 5)); // epa
console.log(name.slice(3)); // pak


console.log();
// String Methods

let a = "Deepak";
let b = "Dhakad";

// .charAt(int);
console.log(a.charAt(0)); // D

//concat()
console.log(a.concat(b)); // DeepakDhakad

//indexOf(char )
//indexOf(String )
console.log(a.indexOf('e')); //1

// lastIndexOf()
console.log(b.lastIndexOf('a')); // 4
console.log(b.lastIndexOf('i')); // -1

// replace()
console.log(b.replace('Dhakad','Nagar'));

console.log(a.concat(b.replace('Dhakad','Nagar')));

// search()
console.log(b.search('Dhakad')); // 0
console.log(b.search('Mohit')); // -1

// slice(start , end)
console.log(a.slice(3,5)); // pa
console.log(a.slice(3,));  // pak

// substr(start, length)  ---> *deprecated
var str = "Hello My name is Deepak Dhakad";
console.log(str.substr(6,7)); // My name

// substring(start, end)
console.log(str.substring(0, 8)); // Hello My

// toUpperCase()
console.log(a.toUpperCase()); //DEEPAK

// valueOf()
const s = new String("Hello");
console.log(typeof s); // object
console.log(s.valueOf()); // Hello
console.log(typeof s.valueOf()); // string

// trim()
var str = "     Hello My    Name is Deepak Dhakad    "
console.log(str.trim()); // Hello My    Name is Deepak Dhakad

// toString()
let x = 23;
console.log(x.toString());


// includes()
console.log(str.includes('Name')); // true

// charCodeAt(index)
console.log(a.charCodeAt(0)); // 68 (ASCII value)

// match()
var str = "lowersum uppersum middlesum "
console.log(str.match(/sum/g)); // [ 'sum', 'sum', 'sum' ]

// split()
var str = "1,2,3,4,5"
console.log(str.split(',')); // [ '1', '2', '3', '4', '5' ]

// toLowerCase()
console.log(a.toLowerCase()); // deepak 

// repeat()
console.log("Hello".repeat(3));

//padEnd(length, string)
console.log('Deepak'.padStart(13,'Dhakad '));

// padStart(length, string)
console.log('Deepak'.padEnd(13,' Dhakad'));
