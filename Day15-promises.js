
let myPizza = new Promise(function(resolve,reject)
{
    let success =false;
    if(success){
        resolve("Pizza is Made");
    }else{
        reject("Pizza is not Made");
    }
});

myPizza
.then(function(res){
    console.log(res)
    return "Pizza is Delivered"
})
.catch((err) => {
    console.log(err)
});

// Promises, async, await in JS

async function prom()
{
    let myPromise = new Promise(function(resolve,reject){
        resolve("Hello World");
    });
    const result = await myPromise;
    return result;
}
prom();
