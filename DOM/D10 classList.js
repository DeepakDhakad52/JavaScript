const header = document.querySelector('.main-head')
console.log(header.classList); // It will show how many class added to this element

// Adding class to the html element using javascript
header.classList.add('class-name'); // without '.'
console.log(header.classList);

// remove class using javascript
header.classList.remove('class-name')
console.log(header.classList);

// To check a perticular class is exist in the html element or nor
console.log(header.classList.contains("header")); // It will return boolean value

// toggle a class in javascript 
header.classList.toggle('header'); // It will add this class if the class is not exist in the html element otherwise it will remove the class from the html element if the class is exist
