// Function returning a promise


function ricePromise()
{
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt'))
        {
            resolve("Fried Rice");
        }
        else {
            reject(new Error("Could Not complete"));
        }
    })
}

ricePromise().then((myFriedRice) => {
    console.log(myFriedRice);
}).catch((error)=>{console.log(error);})
