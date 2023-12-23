// typeof operator : It will return data type of variable

// data type (Primitive data types)\
// String 
// Number 
// Boolean 
// undefined 
// null
// BigInt
// Symbol

let age = 20; 
let name = "Deepak";
console.log(typeof age); // number
console.log(typeof (name)); // string

// Convert number to string
age = age + ""; // Add an empty string to the number, it will be converted to the string (It's a trick!)
// 20 --> "20"
console.log(age);
console.log(typeof age); 

// Convert String to number
let value = "15";
console.log(typeof value);

value = +"15"; // Add a + sign at the starting of the string, it will convert string to number.
console.log(typeof value);

let myAge = 22;
myAge = String(myAge); // Type casting using method/function
console.log(typeof myAge);

myAge = Number(myAge); // Type casting using method/function
console.log(typeof myAge);

