// new keyword
// function createUser (firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser("Deepak", 21);
// user1.about();

// // new keyword : 1) It will create an empty object "this" = {}
// // 2) return "this"
// // 3) Object.create(createUser.prototype)

// console.log(user1);


// construction function
function CreateUser(firstname, lastname, age, email, address){
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
}
// Note : If the function is only run using new keyword then it is highly recommended to use First letter of the function name is in Uppercase(ex : CreateUser).

// console.log(createUser.prototype);

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18 ;
};

const u1 = new CreateUser('Deepak','Dhakad',21,'example@xyz.com','Indore');
const u2 = new CreateUser('Deepak2','Dhakad',22,'example@xyz.com','Indore');
const u3 = new CreateUser('Deepak3','Dhakad',23,'example@xyz.com','Indore');
// console.log(u1.about());
// console.log(u3.about());

// Print key of user(u1)
for (const key in u1) {
        // console.log(key); // It will give all keys of object as well as keys of its __proto__
        if (u1.hasOwnProperty(key)) { //hasOwnProperty gives only the key available in object(u1).
            console.log(key);
        }
}