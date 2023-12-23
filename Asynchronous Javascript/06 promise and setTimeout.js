// Promise and setTimeout

function myPromise()
{
    return new Promise((resolve, reject)=>
    {
        let value = true;
        setTimeout(() => {
            if(value){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
}

myPromise()
    .then(()=>{console.log("Resolve");})
    .catch(()=>{console.log("Rejected");});