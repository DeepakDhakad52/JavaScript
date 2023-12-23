// Event Bubbling
const body = document.body
const grand = document.querySelector('.grand')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// body.addEventListener('click', function(){
//     console.log("You clicked on body");
// })

// grand.addEventListener('click', function(){
//     console.log("You clicked on grand");
// })

// parent.addEventListener('click', function(){
//     console.log("You clicked on parent");
// })

// child.addEventListener('click', function(){
//     console.log("You clicked on child");
// })

// Note : Browser check the parent of the element on which event is added, If the same event is applied on the parent then the browser will call the parent event at the same time when event of child is trigger, This is known as event bubbling.





// Event Capturing

// body.addEventListener('click', function(){
//     console.log("Capture!!! body");
// }, true)

// grand.addEventListener('click', function(){
//     console.log("Capture!!! grand");
// }, true)

// parent.addEventListener('click', function(){
//     console.log("Capture!!! parent");
// }, true)

// child.addEventListener('click', function(){
//     console.log("Capture!!! child");
// }, true)


// body.addEventListener('click', function(){
//     console.log("bubbling..... body");
// })

// grand.addEventListener('click', function(){
//     console.log("bubbling..... grand");
// })

// parent.addEventListener('click', function(){
//     console.log("bubbling..... parent");
// })

// child.addEventListener('click', function(){
//     console.log("bubbling..... child");
// })

// Note : Browser will check the outermost parent of the html element on which we are adding event, IF the same event(click) is added on the parent which is capaturing then the event of outermost parent will be trigger first, after that the inner parent will called and at last the child(element ) is called.





// Event Delegation
grand.addEventListener('click',()=> {
    console.log("You clicked something");
})

grand.addEventListener('click',(e)=> {
    console.log(e);
})

grand.addEventListener('click',(e)=> {
    console.log(e.target);
})

// Note : We have applied event on the grand and we are clicking on the child but the event is trigger. (Its working is quit similar to event bubbling)
