// Introduction to Events
// click
// button press
// mouse hover
// Explore more events from MDN refrence

// We have three way to add event
// 1) inline javascript (add event to the element in the html file)
// 2) 
// const button = document.querySelector('.btn')
// console.dir(button);
// button.onclick = function(){
//     console.log("You clicked me!!")
// }

// 3) method ---> addEventListener
const btn = document.querySelector('.btn')
// function clickMe(){
//     console.log("you clicked me....");
// }

btn.addEventListener('click', function clickMe(){
    console.log("you clicked me....");
});
