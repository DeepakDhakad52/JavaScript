// Function Execution context : It is same as the global execution context but there is two things which we need to remember

// 1) It will create an array like object(arguments) and store all the arguments passed during the function call and it will assign the them to the variable declared in the function defination

// 2) If the variable is not exist in the local memory(Function memory) then it will search it in the parent memory until it reached the global memory

const lastName = "Dhakad";

const personName = function(){
    const firstName = "Deepak";
    console.log(firstName);
    console.log(lastName);
}

personName();

// In the above code lastName is present in the global memory but we are trying to access it in the function ecexution phase. It will find lastName in the Lexical environment.