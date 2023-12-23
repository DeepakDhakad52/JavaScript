// sets (it is iterable)
// store data
// sets alse have its own methods
// no index-based access
// Order is not guaranteed
// unique items only (duplicate values are not allowed)

// Syntax to create a set
const numbers = new Set([1,2,3]);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(8);

// to check, is value present in the set or not?
if(numbers.has(1)){
    console.log("1 is present");
} 
else{
    console.log("1 is not present");
}

// to check set is iterable or not, we are applying for of loop on it
// for (const number of numbers) {
//     console.log(number);
// }

console.log(numbers);
console.log(numbers[1]); // undefined



// Extract unique element from an array
const myArray = [1,2,2,1,5,3,4,5,8];
const uniqueElements = new Set(myArray); // passing array to the set
console.log(uniqueElements);

// Calculate the length of set
let lenght=0;
for (const i of uniqueElements) {
    length++;
}
console.log(length);