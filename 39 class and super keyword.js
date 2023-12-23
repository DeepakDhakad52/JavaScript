// 2015 / ES6
// class keyword
// class are fake

class CreateUser{
    constructor(firstname, lastname, age, email, address){
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18 ;
    }
}

// NOte : We cannot create an object without using new keyword 
// We are not able to invoke constructor without using new keyword

const u1 = new CreateUser('Deepak','Dhakad',21,'example@xyz.com','Indore');

console.log(u1);
console.log(u1.firstName); // Deepak
console.log(u1.about()); // Deepak is 21 years old
console.log( Object.getPrototypeOf(u1));



class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }
}

const dog = new Animal("Dog", 8);
console.log(dog);
console.log(dog.eat());

// Inheritance in JavaScript

class Cat extends Animal{
    // If we are not creating any constructor in Child class then it will use constructor of Parent class
    constructor(name,age,speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}`
    }
}

const tom = new Cat("Tom", 4, 45);
console.log(tom);
console.log(tom.run());


