// getter and setter
// get 
// set

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName(){ // After using "get" we can use fullName as a property
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Deepak", "Dhakad", 21);
// console.log(person1);
// // console.log(person1.fullName()); // fullName is accessed like a function and i want to access fullName as property
// console.log(person1.fullName); 
// person1.fullName = ("Mohit Nagar"); // fullName property will change the firstName and lastName from the original object
// console.log(person1);
// console.log(person1.fullName); 









// static method and property
// static keyword

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static method
    static classInfo(){
        return "This is person class";
    }

    get fullName(){ // After using "get" we can use fullName as a property
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }
}

const person1 = new Person("Deepak", "Dhakad", 21);
console.log(person1);
console.log(person1.eat());
console.log(person1.classInfo); // undefined
console.log(Person.classInfo()); // static methods are only accessable with className name and we don't need to crate any object to access them.
