// Understand callbacks in synchronous Programming and In Asynchronous programming

// callbacks in synchronous Programming

// function myfun1(callback){
//     console.log("function is doing task 1");
//     callback();
// }


// function myfun2(){
//     console.log("function is doing task 2");
// }

// myfun1(myfun2);

// myfun1(function(){
//     console.log("function is doing task 2");
// });


// function getTwoNumberAndADD(x,y,onSuccess, OnFailure){
//     if(typeof x === "number" && typeof y=== "number")
//         onSuccess(x,y)
//     else
//         OnFailure();
// }

// function addTwoNumber(x,y){
//     console.log(x+y);
// }

// function onFail(){
//     console.log("Wrong Data Type");
//     console.log("Please enter numbers only");
// }

// getTwoNumberAndADD(4,5,addTwoNumber,onFail);






// callbacks in asynchronous Programming
// callback, callback hell, pyramid of doom

// *****************callback hell*************
// setTimeout(()=>{
//     const heading1 = document.querySelector('.heading1')
//     heading1.textContent = "Heading 1";
//     setTimeout(()=>{
//         const heading2 = document.querySelector('.heading2')
//         heading2.textContent = "Heading 2"
//         setTimeout(()=>{
//             const heading3 = document.querySelector('.heading3')
//             heading3.textContent = "Heading 3"
//             setTimeout(()=>{
//                 const heading4 = document.querySelector('.heading4')
//                 heading4.textContent = "Heading 4"
//                 setTimeout(()=>{
//                     const heading5 = document.querySelector('.heading5')
//                     heading5.textContent = "Heading 5"
//                     setTimeout(()=>{
//                         const heading6 = document.querySelector('.heading6')
//                         heading6.textContent = "Heading 6"
//                         setTimeout(()=>{
//                             const heading7 = document.querySelector('.heading7')
//                             heading7.textContent = "Heading 7"
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// **********************callback hell************************
// setTimeout(()=>
// {
//     const heading1 = document.querySelector('.heading1')
//     heading1.textContent = "One";
//     heading1.style.color = "violet"
//     setTimeout(()=>
//     {
//         const heading2 = document.querySelector('.heading2')
//         heading2.textContent = "Two";
//         heading2.style.color = "purple"
//         setTimeout(()=>
//         {
//             const heading3 = document.querySelector('.heading3')
//             heading3.style.color = "red"
//             heading3.textContent = "Three"
//             setTimeout(()=>
//             {
//                 const heading4 = document.querySelector('.heading4')
//                 heading4.textContent = "Four"
//                 heading4.style.color = "pink"
//                 setTimeout(()=>
//                 {
//                     const heading5 = document.querySelector('.heading5')
//                     heading5.style.color = "green"
//                     heading5.textContent = "Five"
//                     setTimeout(()=>
//                     {
//                         const heading6 = document.querySelector('.heading6')
//                         heading6.style.color = "blue"
//                         heading6.textContent = "Six"
//                         setTimeout(()=>
//                         {
//                             const heading7 = document.querySelector('.heading7')
//                             heading7.textContent = "Seven"
//                             heading7.style.color = "brown"
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)
            
            
            
            
            
 
            
const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById('heading2');
const heading3 = document.getElementById('heading3');
const heading4 = document.getElementById('heading4');
const heading5 = document.getElementById('heading5');
const heading6 = document.getElementById('heading6');
const heading7 = document.getElementById('heading7');
console.log(heading1);

function changeText(element, text, color, time, onSuccess, onFail){
    setTimeout(()=>{
        if(element){
            element.style.color = color;
            element.textContent = text;
            if(onSuccess){
                onSuccess();
            }
        }
        else{
            if(onFail){
                onFail();
            }
        }
    },time)
}


// pyramid of doom
changeText(heading1, "One", "violet", 1000, ()=>{
    changeText(heading2, "Two", "purple", 2000, ()=>{ 
        changeText(heading3, "Three", "red", 2000, ()=>{ 
            changeText(heading4, "Four", "green", 1000, ()=>{
                changeText(heading5, "Five", "blue", 2000, ()=>{      
                    changeText(heading6, "Six", "brown", 3000, ()=>{
                        changeText(heading7, "Seven", "cyan", 1000, ()=>{

                        },()=>{console.log("Element is null");});
                    },()=>{console.log("Element is null");});
                },()=>{console.log("Element is null");});
            },()=>{console.log("Element is null");});
        },()=>{console.log("Element is null");});
    },()=>{console.log("Element is null");});
},()=>{console.log("Element is null");});

