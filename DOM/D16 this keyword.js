// this keyword

const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    console.log("you clicked me....");
    console.log("The value of this : ");
    console.log(this); // the value of 'this' will be btn itself in case of normal function, but the value of 'this' will be the window object in the case arrow function
});