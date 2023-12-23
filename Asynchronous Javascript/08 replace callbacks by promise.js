

const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById('heading2');
const heading3 = document.getElementById('heading3');
const heading4 = document.getElementById('heading4');
const heading5 = document.getElementById('heading5');
const heading6 = document.getElementById('heading6');
const heading7 = document.getElementById('heading7');
console.log(heading1);

function changeText(element, text, color, time, ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.style.color = color;
                element.textContent = text;
                resolve();
            }
            else{
                reject("Element not found!");
            }
        },time)    
    })
}

// changeText(heading1, "One", "red", 1000)
//     .then(()=>{
//         return changeText(heading2, "Two", "green", 1000)
//     })
//     .then(()=>{
//         return changeText(heading3, "Three", "blue", 3000)
//     })
//     .then(()=>{
//         return changeText(heading4, "Four", "gray", 2000)
//     })
//     .then(()=>{
//         return changeText(heading5, "Five", "blue", 1000)
//     })
//     .then(()=>{
//         return changeText(heading6, "Six", "green", 2000)
//     })
//     .then(()=>{
//         return changeText(heading7, "Seven", "red", 1000)
//     });


changeText(heading1, "One", "red", 1000)
    .then(()=> changeText(heading2, "Two", "green", 1000))
    .then(()=> changeText(heading3, "Three", "blue",2000))
    .then(()=> changeText(heading4, "Four", "gray", 2000))
    .then(()=> changeText(heading5, "Five", "blue", 1000))
    .then(()=> changeText(heading6, "Six", "green", 2000))
    .then(()=> changeText(heading7, "Seven", "red", 1000))
    .catch((error)=>{alert(error);});