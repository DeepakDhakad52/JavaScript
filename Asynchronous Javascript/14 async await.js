// async await

// fetch(URL)`
//     .then(response =>response.json())
//     .then(data => {
//         console.log(data);
//     })

const URL = "https://jsonplaceholder.typicode.com/postss";

async function getPost(){
    const response = await fetch(URL);      // Agar aapne await use kiya h to iska mtlb h ki ye line jab resolve ya reject nahi hogi jab tak dusri line nahi chalegi.
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;                            // Keep in mind : async function always return promise, agar aapne alag se return lagaya h tab bhi promise hi return karega.
}

const myData = getPost();                   // getPost function promise return kar raha h isliye myData me promise store hua h
console.log(myData);                        // Output : Promise

getPost()
    .then(myData => {
        console.log(myData);
    })
    .catch(error=>{                         // catch block only run when network error arrive
        console.log(error);
    })