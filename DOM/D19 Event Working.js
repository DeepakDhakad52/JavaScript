// How events work when the perform 

console.log("script start.....");
const allButtons = document.querySelectorAll('button');

allButtons.forEach((button)=>{
    button.addEventListener('click', function(e){
        for(let i=0; i<100000000; i){
            i++;
        }
        console.log(e.currentTarget.textContent);
    })
})

for(let i=0; i<100000000; i){
    i++;
}

console.log("script end......");
// [output] : 
// script start.....
// script end......
// Button 1
// Button 2
// Button 3


// browser ----> js engine + webApi
// Jab bhi js file execute hoti h tab javascript js engine ka use karti h code execution ke liye jo ki browser ke pass hota h
// Event jab bhi trigger hoga to webApi usko identify karegi or unke callback functions ko QUEUE ke store karegi, QUEUE ko event loop handle karti h
// Event loop dekhti h ki call stack empty h ya nahi, Jab tak call stack empty nahi hota jab tak event loop sare events ke callback functions ko QUEUE me rakhta h unko execute nahi hone deta.
// Jab call stack empty ho jata h mtlb GEC ka execution complete ho jata h to event loop QUEUE ke andar rakhe events ko execute karne ke call stack me bejhta h or fir event execute / perform hota h.

// Note : Sare Events global execution context finish hone ke baad hi trigger hote h