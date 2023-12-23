// methods 
// Function inside object

// const person = {
//     name : "deepak",
//     age: 21,
//     about : function(){
//         // console.log(`Person name is ${name} and Person age is ${age}`); // It will give you error:
//         console.log(`Person name is ${this.name} and Person age is ${this.age}`);
//     }
// };

// console.log(person.name); // It will print name
// console.log(person.about); // It will print function
// person.about(); // Calling of the function

// The value of "this" keyword is decide at runtime




function personInfo(){
    console.log(`Person name is ${this.name} and Person age is ${this.age}`);
}

const person = {
        name : "deepak",
        age: 21,
        about : personInfo
};

const person1 = {
    name : "Yogita",
        age: 20,
        about : personInfo
}
    
person.about(); // Calling of the function
person1.about(); // Calling of the function







// "this" and "window" keywords

console.log(this); // window object (this === window --> true)

function myFunc(){
    console.log("Hello World!");
}
// myFunc();
// window.myFunc();


function myFunc(){
    console.log(this); // window
}
// myFunc();
// window.myFunc();

// some time window object creates problem, So we use "use strict" in the program







function hello (){
    console.log("Hello");
}
hello.call(); // We can call this function using call() method



// call, apply, bind
// call
const user1 = {
    name : "Deepak",
    age: 21,
    about : function(hobby, favMusician){
        console.log(this.name, this.age, hobby, favMusician);
    }
}

const user2 = {
    name : "Yogita",
    age: 20,

}

// user1.about();
user1.about.call(user2,"Cycling","Arijit Singh");


// apply
user1.about.apply(user2, ["Cycling","Arijit Singh"]);
// It is similar to call(), the difference is only in call() and apply() is that we can pass value in array if we are using apply().


// bind
// bind() method will return function as output whenever we use bind()
const func = user1.about.bind(user2, 'guitar','Darshan');
func();





// arrow function

const user3 = {
    fname : "ABC",
    age : 12,
    about: () => {
        console.log(this.fname, this.age);
    }
};

user3.about();
// Note : In case of arrow funtion, the value of "this" is computed from the upper level of it surrounding. And we cannot change the value of "this" in arrow function
