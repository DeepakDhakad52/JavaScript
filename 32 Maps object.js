// Maps 
// map is an iterable

// store data in ordered fashion 

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps yoy can use anything as key
// like array, numbers, string

// object literals
// key -> string
// key -> symbol
const person = {
    firstName : "Deepak",
    age : 21
};
console.log(person.firstName);
console.log(person["firstName"]);



// Maps are also store key vlaue pair like object
// In maps we can set any type of key
const personMap = new Map();
personMap.set('firstName', 'Deepak');
personMap.set('age', 21);
personMap.set(1,'one'); // Here 1 is a number
console.log(personMap);

// Access value of key from the map
console.log(personMap.get('firstName')); // Use get() method 
console.log(personMap.get('age'));
console.log(personMap.get(1));

// To print all keys of map
console.log(personMap.keys());
// for (const key of personMap.keys()) {
//     console.log(key, typeof key);
// }

for(let key of personMap){
    console.log(key); // It will return key value pair in array
}

for (const [key, value] of personMap) {
    console.log(key, value);
}

// Create a map and initialize some values
const MaoPerson = new Map([['firstName','Deepak'],['age',21]]);


// Adding more keys in existing object using map
const person1 =  {
    id: 1,
    name: "Deepak"
};

const person2 =  {
    id: 2,
    name: "Doremi"
};

const extraInfo = new Map();

extraInfo.set(person1, {age:21, gender: "male"});
extraInfo.set(person2, {age:20, gender: "female"});

// console.log(extraInfo);
console.log(person1.id);
console.log(person2.id);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person2));