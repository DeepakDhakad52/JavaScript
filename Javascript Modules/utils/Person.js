export default class Person{
    constructor(firstname, lastname, age)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}

// export default class Person2{                            // It will throw error
//     constructor(firstname, lastname, age)
//     {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     info(){
//         console.log(this.firstname, this.lastname, this.age);
//     }
// }


export class Person2{                                       // It will work properly
    constructor(firstname, lastname, age)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}


// Note : we can use only one export default in file, If you create two or more export default then it will give error

