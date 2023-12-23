// keypress event 
// mouseover event 
// mouseleave event

const body = document.body;

body.addEventListener('keypress', function(e){
    console.log(e.key);
})

const mainButton = document.querySelector('.btn')

mainButton.addEventListener('mouseover', () => {
    console.log("Mouse Over");
})

mainButton.addEventListener('mouseleave', () => {
    console.log("Mouse Leave");
})