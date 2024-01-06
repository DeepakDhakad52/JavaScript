// In case of "var", the value of variable are set as "undefined" during the global execution context

// var = undefined
// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// // fumction declaration
// function myFunction(){
//     console.log("This is my function");
// }

// var firstName = "Deepak";
// var lastName  = "Dhakad";
// var fullName  = firstName + " " + lastName;
// console.log(fullName);


// In case of function expression : the value of function is set as undefine in case of var keyword
// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// // fumction expression
// var myFunction = function(){
//     console.log("This is my function");
// }

// var firstName = "Deepak";
// var lastName  = "Dhakad";
// var fullName  = firstName + " " + lastName;
// console.log(fullName);
// Note : Before running this code comment out the above code







// In case of "let" keyword : the value of variable is set as uninitialized

// let = uninitialized

// Uncaught ReferenceError:
// Cannot access 'firstName' before initialization
console.log(firstName);
let firstName = "Deepak";
console.log(firstName);

// Note : let and const ki hoisting hoti h, but vo useless hote before initializing



// Note : Every thing in javascript during the creation phase / compilation phase are store in the form of object {key: value}, or usko global environment record bolte hai.

// TDZ ->  Temporal dead zone : The time in which a variable is not initialized, is known as TDZ(Temporal Dead Zone)