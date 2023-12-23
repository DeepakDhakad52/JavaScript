// introduction to array in javaScript

// reference type

// How to create array in javaScript
let numbers =[1,2,3,4];
console.log(numbers);

let mixed = [1,2,3,"string",null, undefined];
console.log(mixed);

let friuts = ["apple","Mango","grapes"];
console.log(friuts[0]);
console.log(friuts[1]);
console.log(friuts[2]);

console.log(friuts);  // Before Changing value
friuts[1] = "Banana"; // Changing the value in array
console.log(friuts);  // After changing value

console.log(typeof friuts); //object
// Note : In javaScript array are store in form of object

console.log(Array.isArray(friuts)); //true


// Methods of array (for insert and delete | push & pop)

// array push and pop Methods

let myfruits = ["apple","Mango","grapes"];
//push 
myfruits.push("Orange"); // Add element at the last index
console.log(myfruits);

//pop
myfruits.pop(); // It will remove element from the last index
console.log("Popped friut is ", myfruits.pop());
console.log(myfruits);

//array shift and unshift Method

//unshift 
myfruits.unshift("Banana"); // Add element at the start index
console.log(myfruits);

//shift
myfruits.shift(); // Remove element from the start index
console.log(myfruits);

