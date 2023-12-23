// let numbers = [1,2,3];
// numbers.<method> : prototype
// prototype ---> function

// internally javaScript create array using Array Constructor
let numbers = new Array(1,2,3);
console.log(Array.prototype);
console.log(numbers);

console.log(Object.getPrototypeOf(numbers));


function hello() {
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);