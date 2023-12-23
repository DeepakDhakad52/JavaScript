// How to clone array
// How to concatenate two array

let array1 = ["item2","item2"];
let array2 = array1;
console.log(array1===array2); // true

//clone an array using slice method
array2 = array1.slice(0); // It is faster than other

// clone an array using concat method
let array3 = [].concat(array1);
console.log(array1);
console.log(array2);
console.log(array3);

console.log(array1 === array2 && array2 === array3);

// New way to clone an array using spread operator
let array4 = [...array1];
array4.push("item3");
console.log(array4);

// These are the methods to clone an array
// array2 = array1.slice(0);   // slice method
// array3 = [].concat(array1); // concat method
// array4 = [...array1];       // spread operator

const originalArray = [1,2,3,4];
// const newArray = originalArray.map(item => item); // Using higher order function (map)
// const newArray = Array.from(originalArray); // Using Array.from() method

const newArray = JSON.parse(JSON.stringify(originalArray)); // Note: This method has limitations and may not work as expected with arrays containing non-primitive data types.
console.log(newArray, originalArray);
console.log(newArray === originalArray);