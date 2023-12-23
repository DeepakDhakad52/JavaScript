const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () =>
{
    if(xhr.status >= 200 && xhr.status < 300)
    {
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
    else
    {
        console.error("Something went wrong");
    }
}

// If you want to handle network error then you can use 'onerror' with xhr
xhr.error = () =>       // It will run only when the network error occur
{
    console.log("Network Error");
}

xhr.send();