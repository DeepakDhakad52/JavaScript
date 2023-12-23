/*
The code starts with the declaration of a function named getLocation using arrow function syntax (const getLocation = () => {...}).


The if statement checks if the 'geolocation' property exists in the navigator object. The navigator object provides access to various properties and methods, including the Geolocation API. If the 'geolocation' property exists, it means that the browser supports geolocation functionality.

If the browser supports geolocation, the navigator.geolocation.getCurrentPosition(success, error) method is called. This method retrieves the current position of the user asynchronously. It takes two parameters: a success callback function and an error callback function.
*/

const getLocation = () => {
    if('geolocation' in navigator)
    {
        navigator.geolocation.getCurrentPosition(sucess,error)
    }
}

const success = (position) => console.log(position); 
const eroor = () => console.error("Sorry");
getLocation();