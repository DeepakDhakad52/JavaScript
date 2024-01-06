// There are two types of cloning available in javascript
// 1) Shallow Cloning
// 2) Deep Cloning


// clone using Object.assign
const obj1 = {
    key1: "value1",
    key2: "value2"
};

// const obj2 = obj1; // It is a refrence 
// const obj2 = {...obj1}; // It is crating new object and spreading obj1 in it
const obj2 = Object.assign({}, obj1);

obj1.key3 = "value3";
console.log(obj1);
console.log(obj2);


// Cloning using JSON Object
const obj3 = JSON.parse(JSON.stringify(obj1))
console.log(obj3);