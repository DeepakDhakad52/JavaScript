// fetch API : It will call GET method by default...
const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL,{                                    // It is a function which returns a promise
//     method:"POST",
//      body: JSON.stringify(
//         {   title:'foo',
//             body:'bar',
//             userId: 1
//     }),
//     header:                                   // header must be include to create data
//     {
//         'Content-type':'application/json; charset=UTF-8',
//     },
// })

fetch(URL)                                       // Normal fetch function
    .then(response =>{              
        if(response.ok)
        {
            return response.json();     // It is a method which parse json file to js object
        }
        else{
            throw new Error("Something went wrong!!");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => { 
        console.log("inside catch");
        console.log(error);
    })


    // Note : In fetch Api method catch block only run when the network error occured, If you want to run it for other error then you need to throw error which we have done in then method.