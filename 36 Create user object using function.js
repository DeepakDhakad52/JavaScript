// Create user Object using function
// __proto__ or [[prototype]]
// prototype


// const user = {
//     firstName : 'Deepak',
//     lastName : 'Dhakad',
//     email : 'deepak@gmail.com',
//     age : 21,
//     address : 'Indore',
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18 ;
//     }
// }
// // function (that function create object)
// // add key value pair
// // it will return the object

// function createUser(firstname, lastname, age, email, address){
//     const user ={}
//     user.firstName = firstname;
//     user.lastName = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`
//     };
//     user.is18 = function(){
//         return this.age >= 18 ;
//     };
//     return user;
// }
// // There are some problems in this function
// // In this function we have created "about" and "is18" method(function) so whenever we create a new user(object) these methods are also create with them in the memory again and again. 

// const u = createUser('Deepak','Dhakad',21,'example@xyz.com','Indore');
// console.log(u);






// To solve the problem of above function we implement this code
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18 ;
//     }
// }

// function createUser(firstname, lastname, age, email, address){
//     const user ={}
//     user.firstName = firstname;
//     user.lastName = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }


// const u1 = createUser('Deepak','Dhakad',21,'example@xyz.com','Indore');
// const u2 = createUser('Deepak2','Dhakad',22,'example@xyz.com','Indore');
// const u3 = createUser('Deepak3','Dhakad',23,'example@xyz.com','Indore');
// console.log(u1.about());
// console.log(u3.about());

// There is again a new problem of defining the refrence of methods in the function
// Note : If you want to create more method in the userMethod object and you want to give access of that method to the createUser function, then you need to give reference of each and every method to the createUser function





// To solve the above problem : Giving the refrence of every method
// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18 ;
//     }
// }

// function createUser(firstname, lastname, age, email, address){
//     const user = Object.create(userMethods);
//     user.firstName = firstname;
//     user.lastName = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }


// const u1 = createUser('Deepak','Dhakad',21,'example@xyz.com','Indore');
// const u2 = createUser('Deepak2','Dhakad',22,'example@xyz.com','Indore');
// const u3 = createUser('Deepak3','Dhakad',23,'example@xyz.com','Indore');
// console.log(u1.about());
// console.log(u3.about());






// proto

const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

// const obj2 = {
//     key3: 'value3'
// }

// const obj2 = {};
// There is one more way to create empty object 
const obj2 = Object.create(obj1);
console.log(obj2);
obj2.key3 = 'value3'

// __proto__  <-- same --> [[Prototype]]

// prototype <-- Different --> [[Prototype]]

console.log(obj2.key3);
console.log(obj2.key1);
// Note : If the key is not available in the object then it will go in the __proto__ and check the key, if found then it will return
console.log(obj2.__proto__);








// Revision
function hello() {
    console.log("Hello");
}

// javasrcipt function ===> function + object 

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// Function gives us free space, that free space is object and it is known as prototype

// console.log(hello.prototype); // {}

// only function provides prototype property

// if(hello.prototype){
//     console.log("Prototype is present");
// }
// else{
//     console.log("Prototype is not present");    
// }

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return ("lalala");
// }

// console.log(hello.prototype.sing());



// prototype

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18 ;
//     }
// }

function createUser(firstname, lastname, age, email, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

console.log(createUser.prototype);

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};

const u1 = createUser('Deepak', 'Dhakad', 21, 'example@xyz.com', 'Indore');
const u2 = createUser('Deepak2', 'Dhakad', 22, 'example@xyz.com', 'Indore');
const u3 = createUser('Deepak3', 'Dhakad', 23, 'example@xyz.com', 'Indore');
console.log(u1.about());
console.log(u3.about());