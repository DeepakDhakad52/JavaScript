// iterables
// On which we can apply for of loop, they are iterables
// string, array are iterable
// Note : objects are not iterable

// string
const firstName = "Deepak";
for (const char of firstName) {
    console.log(char);
}

// array
const items = ['item1','item2','item3'];
for (const item of items) {
    console.log(item);
}

// objects
// const users = {'key1':'value1', 'key2':'value2'};
// for (const user of users) {
//     console.log(user); // Error : Uncaught TypeError: users is not iterable
// }




// array like objects
// which have length property
// and which are are accessable by their index
// example : string

const name = "Deepak";
console.log(name.length);
console.log(name[2]);