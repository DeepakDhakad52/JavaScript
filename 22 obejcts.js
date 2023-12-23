// objects : objects are also reference type same as array


// how to create objects : To create an object we use {} brackets
// const person = {name:"Deepak", age : 23};
const person = {
    name : "Deepak",
    age : 23,
    hobbies : ["traveling","cycling"]
};

console.log(person);
console.log(typeof person); //object

//how to access data from object
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// How to add key value pair to object
person.gender = "male";
person["salary"] = 25000;
console.log(person);

// Another way to access data from object
console.log(person["name"]); //name key is a string






// Difference between dot and bracket notaion
const person1 = {
    name : "Deepak",
    age : 22,
    "person Hobbies" : ["cycling","driving"]
};

console.log(person1["person Hobbies"]);
// Note : If key is consist of two word then we have to use [] notation

// Add a new key in the object using variable
let key = "Email";
person1[key] = "example@xyz.com";
console.log(person1);





// How to iterate object
const person2 = {
    name : "Deepak",
    age : 22,
    "person Hobbies" : ["cycling","driving"]
};

// for in loop
console.log("\n");
for (let key in person2){
    console.log(person2[key]);
    console.log(`${key} : ${person2[key]}`);
}

// object.key
console.log(Object.keys(person2)); //It will give all keys (It will give an array of keys in output)
console.log(typeof person2); //object

for(let key of Object.keys(person2)){
    console.log(key); // Output : Name of key in the object
    console.log(person2[key]);
}