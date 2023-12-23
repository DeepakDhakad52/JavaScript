// Objects inside array
// Very useful in real world applications

const users = [ 
    {UserID : 1, firstName : "Deepak", gender : "male"},
    {UserID : 2, firstName : "Mohit", gender : "male"},
    {UserID : 2, firstName : "Kapil", gender : "male"},
];

for(let user of users){
    console.log(user); // It will give object in output
    console.log(user.firstName);
}


// Nested Destructuring 
// const [user1 , user2 , user3] = users;
// console.log(user1);

const [{firstName : user1firstName} ,  , {gender : user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);
