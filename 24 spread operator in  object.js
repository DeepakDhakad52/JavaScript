// Spread Operator(...)

// Spread opeartor in array
const array1 = [1,2,34];
const array2 = [2,3,2,60];

// const newArray = [...array1, array2]; // In this statement array2 is allocated in newArray not values of array2
const newArray = [...array1, ...array2]; // Here values of array2 will store
// console.log(newArray);

//Spread Operator in Objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key3 : "value1",
    key4 : "value2",
    key1 : "value11111"
};


// const newObj = {...obj1, ...obj2};

// const newObj = {...obj1, ...obj2, key5 : "value5"}; //Add new key in the object

// const newObj = {..."abc"}; // "abc" is a string. Here index of "abc" becomes key of object and a,b,c will be the value of keys 

// const newObj = {...["item1","item2"]}; //It will also work as string. Key will be index and item1,item2 will be the values.

const newObj = {..." abcdefghijklmnopqrstuvwxyz"};

console.log(newObj);