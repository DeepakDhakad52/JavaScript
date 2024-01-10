// compilation
// code execution

// why compilation
//  -> compilation phase : 1) Tokenizing / Lexing
//                         2) Parsing
//                         3) Code Generation


// -> Compilatiom phase : 1) Early error checking 
//                        2) Determining Appropriate scope for variables

// -> Code Execution phase : IN JAVASRIPT CODE EXECUTES INSIDE EXECUTION CONTEXT
//      1) Global execution context
//      2) Local execution context 


// How javascript code executes

// What is global execution context ? 
// What is local execution comtext ? 
// closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Deepak";
console.log(firstName); 


// Note : JavaScript is a synchromous programming means it will execute one line at a time.
// Single Thread : JavaScript will execute the next line until the execution of previous line is done.