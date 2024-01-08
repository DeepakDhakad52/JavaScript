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
let length=0;
for (const i of uniqueElements) {
    length++;
}
console.log(length);


const set = new Set([1,2,3,4,6]);

// add : It will add element in the set
set.add(5);


// has : It will return boolean value if element present or absent in the set
set.has(9);

// delete : It will delete element from the set
set.delete(6);

// entiers : Returns an iterable of [v,v] pairs for every value v in the set.
console.log(set.entries()); // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}

let a = set.keys()
console.log(a);

console.log(set.values());

// clear : It will clear all the elements of the set (It will empty the set)
set.clear();

console.log(set);