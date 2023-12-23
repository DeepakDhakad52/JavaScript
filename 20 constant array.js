// use const for creating array 
// heap memory

const array1 = ["item1","item2","item3"];
array1.push('item4'); // We can add or remove element form array but we can't create another
console.log(array1);

array1 = ["item5","item6"]; // It will give error because we are trying to create a new array (Trying to allocate in new heap memory)

// Note : If a constant array is already exist then we can perform array method on it but we are not allowed to change it.