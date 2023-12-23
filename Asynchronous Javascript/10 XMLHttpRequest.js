// XHM : XMLHTTPRequest
// 1) Create an object of XMLHttpRequest
// 2) Using this object we need to send HTTP Request to the server
// 3) If you are a frontend developer then backend developer will provide you API, and you can use these API to send HTTPRequest (eg : jsontypicode)
// 4) Use open() method 
// 5) onreadystatechange() = This method will run when the readyState of browser change 

// readyState : 0 ---> open() method ko call karne se pehle readyState ki value 0 hoti h
//              1 ---> readyState ki value 1 h, iska mtlb h ki open method call ho chuki h
//              2 ---> send() method called, means server ko http request mil gayi h
//              3 ---> loading (Downloading : reponseText holds partial data)
//              4 ---> done
// Note : Jab tak readyState ki value 4 nahi hoti tab tak hume server se response nahi milega


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step 1

// console.log(xhr.readyState);             // 0
xhr.open("GET", URL);                       // It will done asynchronously(done by browser)
// console.log(xhr.readyState);             // 1

xhr.onreadystatechange = function(){        // onreadystatechange will run when the readyState will change
    // console.log(xhr.readyState);         // Must visit MDN refrence to understand readyState
    if(xhr.readyState == 4)
    {
        // console.log(xhr.response);
        console.log(typeof xhr.response);   // "string"
        const response  = xhr.response;     // I want to parse this response into javascript object
        const data = JSON.parse(response);  // It will converte the json into javascript object and store in 'data'
        console.log(data);
        console.log(typeof data);           // obejct
    }
}

xhr.onload = function()                     // onload will run when readyState becomes 4
{
    const response  = xhr.response;         // I want to parse this response into javascript object
    const data = JSON.parse(response);      // It will converte the json into javascript object and store in 'data'
    console.log(data);
}

xhr.send();

// Note : status code are very useful for us, they help us to identify the problem which may occur.
// 1xx ----> information response : the request was received, continuing process
// 2xx ----> successful           : the request was successfully receiced, understood, and accepted
// 3xx ----> redirection          : furthure action needs to be taken in order to complete the request
// 4xx ----> client error         : the request contain bad syntax or cannot be fulfilled
// 5xx ----> server error         : the server failed to fulfill an apparently valid request
// You can learn more about HTTP status code from wikipedia

