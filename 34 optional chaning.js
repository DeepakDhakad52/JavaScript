// optional chaining

const user = {
    firstName : "deepak",
    // address : {houseNumber : 1234}
};

// console.log(user.firstName);
// console.log(user.address.houseNumber); 

console.log(user?.firstName);
console.log(user?.address?.houseNumber); 
// Note : If the object is not initialize but it is declared in the program and we are using "." operator to access data from the object it will give you error. If you want, your program generate output as undifined then you should use "?." operator over the "." opeartor

// This method is known as optional chaining in javasript
// This method is used when some value are not present in the program but it will be coming in the future then it is recommended to use optional chaning